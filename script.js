function valida(input) {
    const tipoDeInput = input.dataset.tipo

    if(validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }

    if(input.validity.valid) {
        input.getElementsByClassName('form-control').classList.remove('form-control.error')
       
    } else {
        input.getElementsByClassName('form-control').classList.add('form-control.error')

    }
}