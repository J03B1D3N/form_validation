const form = document.getElementById('form')

const emailInput = document.getElementById('email')
const emailError = document.getElementById('emailError')

const countryInput = document.getElementById('country')
const countryError = document.getElementById('countryError')

const postalInput = document.getElementById('postal')
const postalError = document.getElementById('postalError')

const passInput = document.getElementById('password')
const passError = document.getElementById('passError')

const passRepeatInput = document.getElementById('passworrdRepeat')
const passRepeatError = document.getElementById('passRepeat')

const submitBtn = document.getElementById('submit')

form.addEventListener('submit', (e) => {
    e.preventDefault();
})

emailInput.addEventListener('input', (e) => {
    if(emailInput.validity.valid) {
        emailError.textContent = ""
    } else {
        emailError.textContent = "Please provide a correct email adress!"
    }
})

countryInput.addEventListener('input', (e) => {
    if (countryInput.contains = Number) {
        countryInput.validity.invalid = true;
        countryError.textContent = "Please provide a valid country name!"
    } else {
        countryError.textContent = ""
    }
})