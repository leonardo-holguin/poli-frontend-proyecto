function formatPrice(price, discountPrice) {
    let discountedPrice = '';
    let finalPrice = 0;

    if (discountPrice > 0) {
        discountedPrice = currencyFormat(price);
        discountedPrice = `<p class="card__body__discount">${discountedPrice}</p>`;
    }
    finalPrice = currencyFormat(price - discountPrice);
    finalPrice = `<h2 class="card__body__price">${finalPrice}</h2>`;
    
    return discountedPrice+finalPrice;
}

function createHomeServiceCard(service) {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `
    <figure class="card__header">
        <img class="card__header__img" src="${service.imageURL}" alt="${service.name}">
        <a class="card__header__caption"
            href="${service.imageCopyrightURL}"
            target="_blank" rel="noopener noreferrer nofollow sponsored" class="hero__copyright">${service.imageCopyrightText}</a>
    </figure>
    <div class="card__body">
        <h4 class="card__body__title">${service.name}</h4>
        <p class="card__body__description">${service.description}</p>
        ${formatPrice(service.price, service.discountPrice)}
        <a href="/service.html?slug=${service.slug}"><button class="button card__body__button">Ir al servicio</button></a>
    </div>
  `;
    return div;
}