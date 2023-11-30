
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

//Contador de visitas
var counterContainer = document.querySelector(".website-counter");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("page_view");

//Checar se a visualização da página está presente
if(visitCount){
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
}
else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;

//Adicionando onClick event listener
resetButton.addEventListener("click", () => {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
  counterContainer.innerHTML = visitCount;
});


//media de tempo em visitas
var meanContainer = document.querySelector(".website-mean");

var tempoInicial = new Date();

//saida do usuário
window.onbeforeunload = function(){
  var tempoFinal = new Date();
  var tempoGasto = tempoFinal - tempoInicial;
  // meanContainer.innerText = tempoGasto;
  console.log("Você gastou " + tempoGasto + " milésimos de segundo no site.");
}

//iniciador do pop-up de termos e serviços
window.addEventListener("load", function(){
  setTimeout(
      function open(event){
          document.querySelector(".popup").style.display = "block";
      },
      1000 
  )
});

document.querySelector("#close").addEventListener("click", function(){
  document.querySelector(".popup").style.display = "none";
});

// Functions to send emails with forms inside page
class FormSubmit {
  constructor(settings) {
    this.settings = settings;
    this.form = document.querySelector(settings.form);
    this.formButton = document.querySelector(settings.button);
    if (this.form) {
      this.url = this.form.getAttribute("action");
    }
    this.sendForm = this.sendForm.bind(this);
  }

  displaySuccess() {
    this.form.innerHTML = this.settings.success;
  }

  displayError() {
    this.form.innerHTML = this.settings.error;
  }

  getFormObject() {
    const formObject = {};
    const fields = this.form.querySelectorAll("[name]");
    fields.forEach((field) => {
      formObject[field.getAttribute("name")] = field.value;
    });
    return formObject;
  }

  onSubmission(event) {
    event.preventDefault();
    event.target.disabled = true;
    event.target.innerText = "Enviando...";
  }

  async sendForm(event) {
    try {
      this.onSubmission(event);
      await fetch(this.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(this.getFormObject()),
      });
      this.formButton.innerText = "Enviado"
    } catch (error) {
      this.formButton.innerText = "Erro"
      throw new Error(error);
    }
  }

  init() {
    if (this.form) this.formButton.addEventListener("click", this.sendForm);
    return this;
  }
}

const formSubmit = new FormSubmit({
  form: "[data-form]",
  button: "[data-button]",
});
formSubmit.init();