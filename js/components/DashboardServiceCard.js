function dashboardFormatPrice(price, discountPrice) {
    let discountedPrice = '';
    let finalPrice = 0;

    if (discountPrice > 0) {
        discountedPrice = currencyFormat(price);
        discountedPrice = `<p class="dashboard--card--discount">${discountedPrice}</p>`;
    }
    finalPrice = currencyFormat(price - discountPrice);
    finalPrice = `<h2 class="dashboard--card--price">${finalPrice}</h2>`;

    return discountedPrice + finalPrice;
}

function createDashboardServiceCard(service) {
    const div = document.createElement('div');
    div.className = 'dashboard--card';
    div.innerHTML = `
    <div class="dashboard--card--img">
        <img class="background__img" src="${service.imageURL}" alt="${service.name}">
        <a class="card__header__caption"
            href="${service.imageCopyrightURL}"
            target="_blank" rel="noopener noreferrer nofollow sponsored" class="hero__copyright">${service.imageCopyrightText}</a>
    </div>
    <div class="dashboard--card--body">
        <h3 class="dashboard--card--title">${service.name}</h3>
        <p class="dashboard--card--description">${service.description}</p>
        <div class="dashboard--card--footer">
            <div class="dashboard--card--buttons">
                <a href="/service-form.html?mode=edition&id=${service.id}">
                    <button class="button">Editar</button>
                </a>
                <button class="button button__negative" data-id="${service.id}" data-name="${service.name}" data-delete-service="true">Eliminar</button>
            </div>
            <div>
                ${dashboardFormatPrice(service.price, service.discountPrice)}
            </div>
        </div>
    </div>
  `;
    return div;
}