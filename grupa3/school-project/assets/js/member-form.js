const form = document.querySelector('.form-wrapper__form');
const formInfo = document.querySelector('.form-info');
const btnClose = document.querySelector('.btn-close');

console.log(form.elements);

form.addEventListener('submit', (event) => {

    event.preventDefault();

    let fName = form.elements[0].value.trim();
    let lName = form.elements[1].value.trim();
    let emailIsValid = validateEmail(form.elements[2])
    let email;
    let message = form.elements[4].value.trim();

    if(emailIsValid) {
        email = form.elements[2].value;
    }

    showPopup(fName, lName, email, message);

    form.reset();

});

const showPopup = (fName, lName, email, message) => {
    const popupMessage = document.createElement('p');
    formInfo.classList.remove('not-visible');
    const popupData = `Dear ${fName} ${lName}, thank you for applying! \nWe will get back to you on provided email: ${email}. \n`;
    popupMessage.textContent = popupData;
    formInfo.appendChild(popupMessage);
}

// * button za zatvaranje dijaloga
btnClose.addEventListener('click', () => {
    formInfo.remove();
});

const validateEmail = (input) => {
    // validate email format entered by user
    const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const email = input.value.trim();

    if(!email) {
        alert('Email is missing!');
        return;
    }

    if(!emailRegex.test(email)) {
        alert('Your email is not valid');
        return;
    }

    return true;
} 