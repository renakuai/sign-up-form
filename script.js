const form  = document.getElementsByTagName('form')[0];
const emailError = document.querySelector('span.email-error');
const email = document.getElementById('email');
const passwordError = document.querySelector('span.pw-error');
const password = document.getElementById('password');
const confirmPwError = document.querySelector('span.pw-confirm-error');
const confirmPw = document.getElementById('confirm-password');

//submit button
const submit = document.getElementById("submit");

submit.addEventListener('click', function (event) {  
    if(!email.validity.valid || !password.validity.valid || !confirmPw.validity.valid) {
      // If it isn't, we display an appropriate error message
      showEmailError();
      showPasswordError();
      showConfirmPasswordError();
      // Then we prevent the form from being sent by canceling the event
      event.preventDefault();
    }
});

function showEmailError() {
    if(email.validity.valueMissing) {
        // If the field is empty,display the following error message.
        emailError.textContent = 'You need to enter an e-mail address.';
    } 
    else if(email.validity.typeMismatch) {
    // If the field doesn't contain an email address, display the following error message.
        emailError.textContent = 'Please input a valid email address.';
    }
    else if(email.validity.valid) {
        emailError.textContent = '';
    }
}


function showPasswordError() {
    if(password.validity.valueMissing) {
        // If the field is empty,display the following error message.
        passwordError.textContent = 'You need to enter a password.';
    } 
    else if(password.validity.tooShort) {
    // If the field doesn't contain an email address, display the following error message.
        passwordError.textContent = 'Your password must have at least 8 characters.';
    }
    else if(password.validity.valid) {
        passwordError.textContent = '';
    }
}

function showConfirmPasswordError() {
    if(confirmPw.value !== password.value) {
        // If the field is empty,display the following error message.
        confirmPwError.textContent = 'Your confirmation password does not match.';
    }
    else if ((confirmPw.value == password.value)) {
        confirmPwError.textContent = '';
    }
}
  
  
  