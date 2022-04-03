const form = document.querySelector('.form-wrapper__form');
const formInfo = document.querySelector('.form-info');
const btnClose = document.querySelector('.btn-close');

console.log(form.elements);

form.addEventListener('submit', function(event) {

    event.preventDefault();

    const formElements = form.elements;
    let fName = formElements[0].value.trim();
    let lName = formElements[1].value.trim();
    let isValidEmail = validateEmail(formElements[2]);
    let email = isValidEmail ? formElements[2].value.trim() : '';
    let option = formElements[3].value;
    let message = formElements[4].value.trim();

    showPopup(fName, lName, email, option, message);

    form.reset();

});

// Button Close zatvara dijalog
btnClose.addEventListener('click', () => {
    formInfo.remove();
});

const showPopup = (fName, lName, email, option, message) => {
    const popupMessage = document.createElement('p');
    formInfo.classList.remove('not-visible');
    const popupText = `Dear ${fName} ${lName}, thanks for enrolling for our ${option} course! \nWe will inform you about starting   date on ${email}. \nAlso, our team will take a look at your message: ${message}`;
    popupMessage.textContent = popupText;
    console.log(formInfo.classList);
    formInfo.appendChild(popupMessage);
}

const validateEmail = (input) => {

    // validacija email-a dobijenog iz input polja
    const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const email = input.value.trim();

    if(!email) {
        alert('Email is mandatory field!');
        return;
    }

    if(!emailRegex.test(email)) {
        alert('Your email is not valid!');
        return;
    }

    return true;

}