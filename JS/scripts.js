
// Script java to show and hide menu-layout & fechar-menu
const menuInterativoBtn = document.querySelector(".menu-layout");
const fecharMenuBtn = document.querySelector(".close-menu");
const nav = document.querySelector("nav");
const menuOverlay = document.querySelector(".menu-overlay");

function showMenu() {
    nav.classList.add("show");
    menuOverlay.classList.add("show");
}

function hideMenu() {
    nav.classList.remove("show");
    menuOverlay.classList.remove("show");
}

menuInterativoBtn.addEventListener("click", () => {
    showMenu();
});

fecharMenuBtn.addEventListener("click", () => {
    hideMenu();
});

//possivelmente fecha o overlay do menu (a barra cinza)
menuOverlay.addEventListener("click", () => {
    hideMenu();
});