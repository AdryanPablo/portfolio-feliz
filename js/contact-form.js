import isSet from './isSet.js'

const contactForm = document.querySelector('.contact-form')
const submitButton = document.querySelector('.submit-button')
const name = document.querySelector('#name')
const email = document.querySelector('#email')
const message = document.querySelector('#message')

submitButton.addEventListener('click', (event) => {

    event.preventDefault()

    if (isSet(name) && isSet(email) && isSet(message)) { contactForm.submit() }
    else { alert('Por favor, preencha todos os campos!') }

})