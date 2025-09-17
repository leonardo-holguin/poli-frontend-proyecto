function createFooter() {
    const footer = document.createElement('footer');
    footer.className = 'footer';
    footer.innerHTML = `
    <p>Este sitio web es un prototipo académico desarrollado como parte de una actividad universitaria. La
        información, servicios y marcas aquí presentados son ficticios y no representan a una empresa real.</p>
    <br />
    <p><strong>Uso de datos personales</strong></p>
    <br />
    <p>Los datos ingresados en este sitio no serán almacenados ni utilizados con fines comerciales. Son únicamente de carácter demostrativo.</p>
    <br />
    <p><strong>© 2025 NeuroTek</strong> – Proyecto académico universitario. Uso exclusivo con fines educativos.</p>
  `;
    return footer;
}