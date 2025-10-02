function createHeader() {
    const header = document.createElement('header');
    header.className = 'header';
    header.id = 'main-header'
    header.innerHTML = `
    <a href="/">
        <img class="header__img" src="/images/logo_white.png" alt="Logo empresarial de NeuroTek">
    </a>
    <div style="display: flex; align-items: center; gap: 20px;">
        <a href="/dashboard.html">
            <button class="button button--call-action">
                <span class="button__text">Dashboard</span>
                <span><svg class="button__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                        fill="currentColor" class="size-6">
                        <path
                            d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" />
                    </svg>
                </span>
            </button>
        </a>
        <button class="button button__negative button__signout" id="signoutButton">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                </svg>
            </span>
        </button>
    </div>
    `;
    const signoutHandler = async () => {
        const persistence = new Persistence();

        const checkButton = setInterval(async () => {
            const signoutButton = document.getElementById('signoutButton');
            if (signoutButton != null) {
                try {
                    const session = await persistence.getCurrentUser();
                    if (session != null) {
                        signoutButton.style.display = 'block';
                        signoutButton.addEventListener('click', async () => {
                            await persistence.logOut();
                            window.location.href = '/';
                        });
                    }
                } catch (error) {
                    
                } finally {
                    clearInterval(checkButton);
                }
            }
        }, 500);
    };
    void signoutHandler();
    return header;
}
