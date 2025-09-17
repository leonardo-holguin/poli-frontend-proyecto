const header = document.getElementById("main-header");

if (
    location.pathname != ''
    && location.pathname != '/'
    && location.pathname != '/index.html'
) {
    header.classList.add("header--scrolled");
} else {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("header--scrolled");
        } else {
            header.classList.remove("header--scrolled");
        }
    });
}