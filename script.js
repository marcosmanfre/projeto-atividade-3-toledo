const formulário = document.getElementById('formulário');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const mensagem = document.getElementById('mensagem');

formulário.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});




















document.querySelector("form")
.addEventListener("submit", event => {
    console.log("enviar o formulário")

    event.preventDefault()


})

