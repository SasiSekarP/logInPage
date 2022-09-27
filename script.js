'use strict'
const formEl = document.getElementById('form');
const UserNameEl = document.getElementById('UserName');
const EmailIDEl = document.getElementById('EmailID');
const PhoneNumberEl = document.getElementById('PhoneNumber');
const PasswordEl = document.getElementById('Password');
const ConfirmPasswordEl = document.getElementById('ConfirmPassword');

formEl.addEventListener('submit', function (evenOrAnyName) {
    evenOrAnyName.preventDefault();
    let UserNameValue = UserNameEl.value;
    let EmailIDValue = EmailIDEl.value;
    let PhoneNumberValue = PhoneNumberEl.value;
    let PasswordValue = PasswordEl.value;
    let ConfirmPasswordValue = ConfirmPasswordEl.value;

     // function

     function ShowError (lableEl){
        const formControleEl = lableEl.parentElement;
        formControleEl.classList.add('error');
    }

    function hideError(lableEl) {
        const formControleEl = lableEl.parentElement;
        formControleEl.classList.remove('error');
    }

    // User Name

    const UserNameLen = UserNameValue.length;

    if (UserNameValue === '') {
        ShowError(UserNameEl);
        document.getElementById('UserNameAlert').textContent = 'Please fill the above.';
    } else if (UserNameLen <= 4) {
        ShowError(UserNameEl);
        document.getElementById('UserNameAlert').textContent = "Minimum 5 charectors"
    } else {
        hideError(UserNameEl);
    }

    // email Id

    if (EmailIDValue === '') {
        ShowError(EmailIDEl);
    } else {
        hideError(EmailIDEl);
    }

    // phone number

    if (PhoneNumberValue === '') {
        ShowError(PhoneNumberEl);
        document.getElementById('PhoneNumberAlert').textContent = 'Please fill the above.';
    } else if (PhoneNumberValue <= 999999999){
        ShowError(PhoneNumberEl);
        document.getElementById('PhoneNumberAlert').textContent = 'Phone number must have 10 numbers';
    } else {
        hideError(PhoneNumberEl);
    }

    // password

    const PasswordLen = PasswordValue.length;

    if (PasswordValue === '') {
        ShowError(PasswordEl);
        document.getElementById('PasswordAlert').textContent = 'Please fill the above.';
    } else if (PasswordLen <= 4) {
        ShowError(PasswordEl);
        document.getElementById('PasswordAlert').textContent = 'Minimum 5 charectors';
    } else {
        hideError(PasswordEl);
    }

    // confirm Password

    if (ConfirmPasswordValue === '') {
        ShowError(ConfirmPasswordEl);
        document.getElementById('ConfirmPasswordAlert').textContent = 'Please fill the above.';
    } else if (ConfirmPasswordValue !== PasswordValue ) {
        ShowError(ConfirmPasswordEl);
        document.getElementById('ConfirmPasswordAlert').textContent = 'Password does not match';
    } else {
        hideError(ConfirmPasswordEl);
    }
});