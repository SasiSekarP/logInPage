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

    // User Name

    const UserNameLen = UserNameValue.length;

    if (UserNameValue === '') {
        const formControleEl = UserNameEl.parentElement;
        formControleEl.classList.add('error');
        document.getElementById('UserNameAlert').textContent = 'Please fill the above.'
    } else if (UserNameLen <= 4) {
        const formControleEl = UserNameEl.parentElement;
        formControleEl.classList.add('error');
        document.getElementById('UserNameAlert').textContent = "Minimum 5 charectors"
    } else {
        const formControleEl = UserNameEl.parentElement;
        formControleEl.classList.remove('error')
    }

    // email Id

    if (EmailIDValue === '') {
        const formControleEl = EmailIDEl.parentElement;
        formControleEl.classList.add('error');
    } else {
        const formControleEl = EmailIDEl.parentElement;
        formControleEl.classList.remove('error')
    }

    // phone number

    if (PhoneNumberValue === '') {
        const formControleEl = PhoneNumberEl.parentElement;
        formControleEl.classList.add('error');
        document.getElementById('PhoneNumberAlert').textContent = 'Please fill the above.';
    } else if (PhoneNumberValue <= 999999999){
        const formControleEl = PhoneNumberEl.parentElement;
        formControleEl.classList.add('error');
        document.getElementById('PhoneNumberAlert').textContent = 'Phone number must have 10 numbers';
    } else {
        const formControleEl = PhoneNumberEl.parentElement;
        formControleEl.classList.remove('error')
    }

    // password

    const PasswordLen = PasswordValue.length;

    if (PasswordValue === '') {
        const formControleEl = PasswordEl.parentElement;
        formControleEl.classList.add('error');
        document.getElementById('PasswordAlert').textContent = 'Please fill the above.';
    } else if (PasswordLen <= 4) {
        const formControleEl = PasswordEl.parentElement;
        formControleEl.classList.add('error');
        document.getElementById('PasswordAlert').textContent = 'Minimum 5 charectors';
    } else {
        const formControleEl = PasswordEl.parentElement;
        formControleEl.classList.remove('error')
    }

    // confirm Password

    if (ConfirmPasswordValue === '') {
        const formControleEl = ConfirmPasswordEl.parentElement;
        formControleEl.classList.add('error');
        document.getElementById('ConfirmPasswordAlert').textContent = 'Please fill the above.';
    } else if (ConfirmPasswordValue !== PasswordValue ) {
        const formControleEl = ConfirmPasswordEl.parentElement;
        formControleEl.classList.add('error');
        document.getElementById('ConfirmPasswordAlert').textContent = 'Password does not match';
    } else {
        const formControleEl = ConfirmPasswordEl.parentElement;
        formControleEl.classList.remove('error')
    }
});