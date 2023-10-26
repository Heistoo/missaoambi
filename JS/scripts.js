
// Script java to show and hide menu-layout & fechar-menu
const menuInterativoBtn = document.querySelector(".menu-layout");
const fecharMenuBtn = document.querySelector(".fechar-menu");
const nav = document.querySelector("nav");
const menuOverlay = document.querySelector(".menu-overlay");
const carrosselItens = document.querySelectorAll('.carrossel-item');
let indiceAtual = 0;

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

//possivelmente fecha o overlay do menu (a barra verde)
menuOverlay.addEventListener("click", () => {
    hideMenu();
});


//funções do carrossel
function mostrarSlide(index) {
  carrosselItens.forEach(item => {
    item.style.display = 'none';
  });

  carrosselItens[index].style.display = 'block';
}

function proximoSlide() {
  indiceAtual = (indiceAtual + 1) % carrosselItens.length;
  mostrarSlide(indiceAtual);
}

function anteriorSlide() {
  indiceAtual = (indiceAtual - 1 + carrosselItens.length) % carrosselItens.length;
  mostrarSlide(indiceAtual);
}

mostrarSlide(indiceAtual);

document.getElementById('proxBtn').addEventListener('click', proximoSlide);
document.getElementById('anterBtn').addEventListener('click', anteriorSlide);