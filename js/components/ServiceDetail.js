function formatPrice(price, discountPrice) {
    let discountedPrice = '';
    let finalPrice = 0;

    if (discountPrice > 0) {
        discountedPrice = currencyFormat(price);
        discountedPrice = `<p class="service-detail-price-discount">${discountedPrice}</p>`;
    }
    finalPrice = currencyFormat(price - discountPrice);
    finalPrice = `<p class="service-detail-price">${finalPrice}</p>`;
    
    return discountedPrice+finalPrice;
}

function formatDiscount(price, discountPrice) {
    if (discountPrice <= 0) {
        return ''
    }
    const totalDiscount = Math.round((discountPrice * 100) / price);
    return `<div class="service-detail-discount">
                ${totalDiscount} %
                <br>
                dto.
            </div>`
}


function createServiceDetail(service) {
    const div = document.createElement('div');
    div.className = 'service-detail-container';
    div.innerHTML = `
    <div class="service-detail-img">
        <img class="background__img" src="${service.imageURL}" alt="${service.name}">
    </div>
    <div class="service-detail-info">
        <h2 class="service-detail-name">${service.name}</h2>
        <p>${service.description}</p>
        <div class="service-detail-price-container">
            ${formatDiscount(service.price, service.discountPrice)}
            <div>
                ${formatPrice(service.price, service.discountPrice)}
            </div>
        </div>
        <div style="display: flex; gap: 20px; justify-content: space-between; max-width: 300px">
            <div class="service-detail-amount">
                <button class="service-detail-amount-arrow" id="amountDown">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <div>
                    <p id="amountCount">1</p>
                </div>
                <button class="service-detail-amount-arrow" id="amountUp">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
            <button class="button" id="amountButton">Solicitar servicio</button>
        </div>
        <div id="totalValue" style="margin-top: 20px; display: none">Valor total: </div>
    </div>
  `;
    return div;
}