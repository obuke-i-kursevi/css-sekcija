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
    let option = form.elements[3].value;
    let message = form.elements[4].value.trim();

    if(emailIsValid) {
        email = form.elements[2].value;
    }

    showPopup(fName, lName, email, option, message);

    form.reset();

    // setTimeout(() => {
    //     formInfo.remove();
    // }, 5000);

    // console.log(fName, lName, email, option, message);

});

// * button za zatvaranje dijaloga
btnClose.addEventListener('click', () => {
    formInfo.remove();
});

const showPopup = (fName, lName, email, option, message) => {
    const popupMessage = document.createElement('p');
    formInfo.classList.remove('not-visible');
    const popupData = `Dear ${fName} ${lName}, thanks for enrolling for our ${option} course! \nWe will inform you about start date on ${email}. \nAlso, our administration will take a look at your message: ${message}`;
    popupMessage.textContent = popupData;
    formInfo.appendChild(popupMessage);
}

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