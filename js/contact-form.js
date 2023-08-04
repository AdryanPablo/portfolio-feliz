const submitButton = document.querySelector('.submit-button')
const name = document.querySelector('#name')
const email = document.querySelector('#email')
const message = document.querySelector('#message')

submitButton.addEventListener('click', () => {

    if (isSet(name) && isSet(email) && isSet(message)) alert('Tudo preenchido')
    else alert('Por favor, preencha todos os campos!')
})

function isSet(element) {

    let content = element.value

    if (content != '' && content != null && content != undefined) return true
    else return false

}