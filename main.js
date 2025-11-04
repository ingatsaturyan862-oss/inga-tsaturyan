const burger = document.querySelector(".burger")
const header = document.querySelector(".header")

burger.addEventListener("click", () => {
    header.classList.toggle("header_active");
    burger.classList.toggle("burger_active");
})