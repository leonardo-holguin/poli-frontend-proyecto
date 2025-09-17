function currencyFormat(value) {
    const formatter = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });

    let formatValue = formatter.format(value);
    formatValue = formatValue.replace(/\./g, ' ');
    return formatValue;
}

function generateSlug(text) {
    const prefix = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    const suffix = text
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
    return prefix.toString() + '-' + suffix;
}