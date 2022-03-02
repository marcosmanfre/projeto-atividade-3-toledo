const formulario = document.getElementById('formulario');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const mensagem = document.getElementById('mensagem');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const nomeValue = nome.value.trim();
    const emailValue = email.value.trim();
    const mensagemValue = mensagem.value.trim();

    if(nomeValue === '') {
        setErrorFor(nome, 'Campo nome obrigatório')


    } else {
        setSuccessFor(nome);

    }

}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const span = formControl.querySelector('span');

    span.innerText = message;

    formControl.classNome = 'input.form-control error';
}
















