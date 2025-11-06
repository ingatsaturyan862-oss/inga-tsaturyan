const burger = document.querySelector(".burger");
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const dialog = document.querySelector(".dialog");
const overlay = document.querySelector(".overlay");
const dialogOpenBtn = document.querySelector(".contact__button");
const dialogCloseBtn = document.querySelector(".dialog__close");

dialogOpenBtn.addEventListener("click", () => {
    dialog.open = true;
});
dialogCloseBtn.addEventListener("click", () => {
    dialog.open = false;
});
overlay.addEventListener("click", () => {
    dialog.open = false;
});




nav.addEventListener("clik", (event) => {
    if (event.target.classList.contains("nav__link")) {
        document.body.classList.remove("none-scrol")
        header.classList.remove("header_active");
        burger.classList.remove("burger_active");

    }
});

burger.addEventListener("click", () => {
    document.body.classList.toggle("none-scrol")
    header.classList.toggle("header_active");
    burger.classList.toggle("burger_active");
});