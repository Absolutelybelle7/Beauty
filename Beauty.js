const Beauty_menu = document.querySelector("Beauty-menu");
const container = document. querySelector(".container");

Beauty_menu.addEventListener("click", () => {
    container.classList.toggle("active");
})