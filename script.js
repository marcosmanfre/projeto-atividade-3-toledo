
function validar() {
    var nome = document.getElementById('nome');
    var email = document.getElementById('email');
    var mensagem = document.getElementById('mensagem');

    if (nome.value == '') {
        alert('nome obrigatório');

        nome.focus();
        return;
    }
    if (email.value == '') {
        alert('Email obrigatório');
        email.focus();
        return;
    }
    if (mensagem.value == '') {
        alert('digitar mensagem');
        mensagem.focus();
        return;
    }
}


