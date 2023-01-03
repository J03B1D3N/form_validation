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

const regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const countries =
[
    "Afghanistan", 
    "Albania", 
    "Algeria", 
    "Andorra", 
    "Angola", 
    "Antigua and Barbuda", 
    "Argentina", 
    "Armenia", 
    "Australia"
, 
    "Austria"
, 
    "Azerbaijan"
, 
    "Bahamas"
, 
    "Bahrain"
, 
    "Bangladesh"
, 
    "Barbados"
, 
    "Belarus"
, 
    "Belgium"
, 
    "Belize"
, 
    "Benin"
, 
    "Bhutan"
, 
    "Bolivia"
, 
    "Bosnia and Herzegovina"
, 
    "Botswana"
, 
    "Brazil"
, 
    "Brunei "
, 
    "Bulgaria"
, 
    "Burkina Faso"
, 
    "Burundi"
, 
    "Côte d'Ivoire"
, 
    "Cabo Verde"
, 
    "Cambodia"
, 
    "Cameroon"
, 
    "Canada"
, 
    "Central African Republic"
, 
    "Chad"
, 
    "Chile"
, 
    "China"
, 
    "Colombia"
, 
    "Comoros"
, 
    "Congo"
, 
    "Costa Rica"
, 
    "Croatia"
, 
    "Cuba"
, 
    "Cyprus"
, 
    "Czechia",

    "Czech Republic"
, 
    "Democratic Republic of the Congo"
, 
    "Denmark"
, 
    "Djibouti"
, 
    "Dominica"
, 
    "Dominican Republic"
, 
    "Ecuador"
, 
    "Egypt"
, 
    "El Salvador"
, 
    "Equatorial Guinea"
, 
    "Eritrea"
, 
    "Estonia"
, 
    "Eswatini (fmr. \"Swaziland\")"
, 
    "Ethiopia"
, 
    "Fiji"
, 
    "Finland"
, 
    "France"
, 
    "Gabon"
, 
    "Gambia"
, 
    "Georgia"
, 
    "Germany"
, 
    "Ghana"
, 
    "Greece"
, 
    "Grenada"
, 
    "Guatemala"
, 
    "Guinea"
, 
    "Guinea-Bissau"
, 
    "Guyana"
, 
    "Haiti"
, 
    "Holy See"
, 
    "Honduras"
, 
    "Hungary"
, 
    "Iceland"
, 
    "India"
, 
    "Indonesia"
, 
    "Iran"
, 
    "Iraq"
, 
    "Ireland"
, 
    "Israel"
, 
    "Italy"
, 
    "Jamaica"
, 
    "Japan"
, 
    "Jordan"
, 
    "Kazakhstan"
, 
    "Kenya"
, 
    "Kiribati"
, 
    "Kuwait"
, 
    "Kyrgyzstan"
, 
    "Laos"
, 
    "Latvia"
, 
    "Lebanon"
, 
    "Lesotho"
, 
    "Liberia"
, 
    "Libya"
, 
    "Liechtenstein"
    , 
    "Lithuania"
    , 
    "Luxembourg"
    , 
    "Madagascar"
    , 
    "Malawi"
    , 
    "Malaysia"
    , 
    "Maldives"
    , 
    "Mali"
    , 
    "Malta"
    , 
    "Marshall Islands"
    , 
    "Mauritania"
    , 
    "Mauritius"
    , 
    "Mexico"
    , 
    "Micronesia"
    , 
    "Moldova"
    , 
    "Monaco"
    , 
    "Mongolia"
    , 
    "Montenegro"
    , 
    "Morocco"
    , 
    "Mozambique"
    , 
    "Myanmar (formerly Burma)"
    , 
    "Namibia"
    , 
    "Nauru"
    , 
    "Nepal"
    , 
    "Netherlands"
    , 
    "New Zealand"
    , 
    "Nicaragua"
    , 
    "Niger"
    , 
    "Nigeria"
    , 
    "North Korea"
    , 
    "North Macedonia"
    , 
    "Norway"
    , 
    "Oman"
    , 
    "Pakistan"
    , 
    "Palau"
    , 
    "Palestine State"
    , 
    "Panama"
    , 
    "Papua New Guinea"
    , 
    "Paraguay"
    , 
    "Peru"
    , 
    "Philippines"
    , 
    "Poland"
    , 
    "Portugal"
    , 
    "Qatar"
    , 
    "Romania"
    , 
    "Russia"
    , 
    "Rwanda"
    , 
    "Saint Kitts and Nevis"
    , 
    "Saint Lucia"
    , 
    "Saint Vincent and the Grenadines"
    , 
    "Samoa"
    , 
    "San Marino"
    , 
    "Sao Tome and Principe"
    , 
    "Saudi Arabia"
    , 
    "Senegal"
    , 
    "Serbia"
    , 
    "Seychelles"
    , 
    "Sierra Leone"
    , 
    "Singapore"
    , 
    "Slovakia"
    , 
    "Slovenia"
    , 
    "Solomon Islands"
    , 
    "Somalia"
    , 
    "South Africa"
    , 
    "South Korea"
    , 
    "South Sudan"
    , 
    "Spain"
    , 
    "Sri Lanka"
    , 
    "Sudan"
    , 
    "Suriname"
    , 
    "Sweden"
    , 
    "Switzerland"
    , 
    "Syria"
    , 
    "Tajikistan"
    , 
    "Tanzania"
    , 
    "Thailand"
    , 
    "Timor-Leste"
    , 
    "Togo"
    , 
    "Tonga"
    , 
    "Trinidad and Tobago"
    , 
    "Tunisia"
    , 
    "Turkey"
    , 
    "Turkmenistan"
    , 
    "Tuvalu"
    , 
    "Uganda"
    , 
    "Ukraine"
    , 
    "United Arab Emirates"
    , 
    "United Kingdom"
    , 
    "United States of America"
    , 
    "Uruguay"
    , 
    "Uzbekistan"
    , 
    "Vanuatu"
    , 
    "Venezuela"
    , 
    "Vietnam"
    , 
    "Yemen"
    , 
    "Zambia"
    , 
    "Zimbabwe"]



form.addEventListener('submit', (e) => {
    e.preventDefault();
})

emailInput.addEventListener('input', (e) => {
    switch(regx.test(emailInput.value)){
        case true:
            emailError.textContent = ""
            emailInput.setCustomValidity('')
        break;
        case false:
            emailError.textContent = "Please provide a correct email adress!"
            emailInput.setCustomValidity('asd')
    }
        
    }
)

countryInput.addEventListener('input', (e) => {

    switch(countries.includes(countryInput.value)) {
        case true:
            countryInput.setCustomValidity('')
            countryError.textContent = ""
            break;
        case false:
            countryError.textContent = "Please provide a valid country name!"
            countryInput.setCustomValidity('invalid')
            break;
    }
        
    
})

passInput.addEventListener('input', (e) => {
    if(passInput.value.length < 6) {
        passInput.setCustomValidity('asd')
        passError.textContent = "Password must be between 6 and 12 characters" 
    } else if (passInput.value.length > 12) {
        passInput.setCustomValidity('asd')
        passError.textContent = "Password must be between 6 and 12 characters" 
    } else { 
        passInput.setCustomValidity('')
        passError.textContent = "" 
    }
})

passRepeatInput.addEventListener('input', (e) => {
    if(passRepeatInput.value === passInput.value) {
        passRepeatError.textContent = ""
        passRepeatInput.setCustomValidity('')
    } else {
        passRepeatError.textContent = "Passwords need to match!"
        passRepeatInput.setCustomValidity('asd')
    }
})

submitBtn.addEventListener('click', () => {
    emailInput.value = ""
    countryInput.value = ""
    postalInput.value = ""
    passInput.value = ""
    passRepeatInput.value = ""
})