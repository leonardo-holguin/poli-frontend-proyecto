class SessionInvalidError extends Error {
  constructor(message = 'The current session is not valid.') {
    super(message);
    this.name = 'SessionInvalidError';
  }
}


class Persistence {
    constructor(
        usersDataURL = '/data/users.json',
        servicesDataURL = '/data/services.json'
    ) {
        this.__users = [];
        this.__services = [];

        this.__usersDataURL = usersDataURL;
        this.__servicesDataURL = servicesDataURL;
    }

    async __hashPassword(password) {
        const encoder = new TextEncoder();
        const data = encoder.encode(password);

        const hashBuffer = await crypto.subtle.digest('SHA-512', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray
            .map(b => b.toString(16).padStart(2, '0'))
            .join('');

        return hashHex;
    }

    async __fetchUsersData() {
        const usersResponse = await fetch(this.__usersDataURL);
        this.__users = await usersResponse.json();
    }

    async __fetchServicesData() {
        const servicesResponse = await fetch(this.__servicesDataURL);
        this.__services = await servicesResponse.json();
    }

    async __setSession(user) {
        localStorage.setItem('user', JSON.stringify(user));
    }

    async __getSession() {
        const userData = localStorage.getItem('user');
        return userData ? JSON.parse(userData) : null;
    }

    async __checkSession() {
        const currentSession = await this.__getSession();
        if (!currentSession) {
            throw new SessionInvalidError();
        }
        return currentSession;
    }

    async login(username, password) {
        await this.__fetchUsersData();
        const hashedPassword = await this.__hashPassword(password);
        for (let user of this.__users) {
            if (user.username === username && user.password === hashedPassword) {
                await this.__setSession(user);
                return user;
            }
        }
        return null;
    }

    async getCurrentUser() {
        return await this.__checkSession();
    }

    async logOut() {
        localStorage.removeItem('user');
    }

    async getUsers() {
        await this.__checkSession();
        await this.__fetchUsersData();
        return this.__users;
    }

    async getServices() {
        const localStorageServices = localStorage.getItem('services');
        if (localStorageServices) {
            this.__services = JSON.parse(localStorageServices);
            return this.__services;
        }
        await this.__fetchServicesData();
        localStorage.setItem('services', JSON.stringify(this.__services));
        return this.__services;
    }

    async createService(
        name,
        description,
        price,
        discountPrice,
        amount,
        imageURL,
        imageCopyrightURL,
        imageCopyrightText
    ) {
        await this.__checkSession();
        const services = await this.getServices();
        const serviceId = services.length + 1;
        const newService = {
            id: serviceId,
            name,
            description,
            price,
            discountPrice,
            amount,
            imageURL,
            imageCopyrightURL,
            imageCopyrightText
        };
        services.push(newService);
        localStorage.setItem('services', JSON.stringify(services));
        return newService;
    }

    async updateService(
        id,
        name,
        description,
        price,
        discountPrice,
        amount,
        imageURL,
        imageCopyrightURL,
        imageCopyrightText
    ) {
        await this.__checkSession();
        const services = await this.getServices();
        const serviceIndex = services.findIndex(service => service.id === id);
        if (serviceIndex === -1) {
            throw new Error('Service not found');
        }
        const updatedService = {
            id,
            name,
            description,
            price,
            discountPrice,
            amount,
            imageURL,
            imageCopyrightURL,
            imageCopyrightText
        };
        services[serviceIndex] = updatedService;
        localStorage.setItem('services', JSON.stringify(services));
        return updatedService;
    }

    async deleteService(id) {
        await this.__checkSession();
        const services = await this.getServices();
        const serviceIndex = services.findIndex(service => service.id === id);
        if (serviceIndex === -1) {
            throw new Error('Service not found');
        }
        services.splice(serviceIndex, 1);
        localStorage.setItem('services', JSON.stringify(services));
        return true;
    }
}