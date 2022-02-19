const form = document.querySelector('.form-wrapper__form');
const formInfo = document.querySelector('.form-info');
const btnClose = document.querySelector('.btn-close');

const EMAIL_REQUIRED = 'Please enter your email address.'
const EMAIL_INVALID = 'Please enter a correct format of your email address.'

console.log(form.elements);

form.addEventListener('submit', (event) => {

    event.preventDefault();

    let fName = form.elements[0].value.trim();
    let lName = form.elements[1].value.trim();
    let emailIsValid = validateEmail(form.elements[2], EMAIL_INVALID);
    let email;
    let option = form.elements[3].value;
    let message = form.elements[4].value.trim();

    if(emailIsValid) {
        email = form.elements[2].value.trim();
    }

    if(!fName || !lName || !email) {
        alert('Something is missing. Please try again!');
        return;
    }

    showPopup(fName,lName,email,option,message);

    form.reset();

});

// * button za zatvaranje dijaloga
btnClose.addEventListener('click', () => {
    formInfo.remove();
});

const showPopup = (fName,lName,email,option,message) => {
    const popupMessage = document.createElement('p');
    formInfo.classList.remove('not-visible');
    // formInfo.classList.add('active');
    const popupData = `Dear ${fName} ${lName}, thanks for enrolling for our ${option} course! \nWe will inform you about start date on ${email}. Also, our administration will note your additional message: ${message}`;
    popupMessage.textContent = popupData;
    formInfo.appendChild(popupMessage);
}

const validateEmail = (input) => {

    // validate email format entered by user
    const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const email = input.value.trim();

    if(!email) {
        alert(EMAIL_REQUIRED);
        return;
    }

    if(!emailRegex.test(email)) {
        alert(EMAIL_INVALID);
    }

    return true;

}