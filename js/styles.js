const header = document.getElementById("main-header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("header--scrolled");
    } else {
        header.classList.remove("header--scrolled");
    }
});