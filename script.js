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

    if (UserNameValue === '') {
        const formControleEl = UserNameEl.parentElement;
        formControleEl.classList.add('error')
    } else {
        const formControleEl = UserNameEl.parentElement;
        formControleEl.classList.remove('error')
    }

    if (EmailIDValue === '') {
        const formControleEl = EmailIDEl.parentElement;
        formControleEl.classList.add('error')
    } else {
        const formControleEl = EmailIDEl.parentElement;
        formControleEl.classList.remove('error')
    }

    if (PhoneNumberValue === '') {
        const formControleEl = PhoneNumberEl.parentElement;
        formControleEl.classList.add('error')
    } else {
        const formControleEl = PhoneNumberEl.parentElement;
        formControleEl.classList.remove('error')
    }

    if (PasswordValue === '') {
        const formControleEl = PasswordEl.parentElement;
        formControleEl.classList.add('error')
    } else {
        const formControleEl = PasswordEl.parentElement;
        formControleEl.classList.remove('error')
    }

    if (ConfirmPasswordValue === '') {
        const formControleEl = ConfirmPasswordEl.parentElement;
        formControleEl.classList.add('error')
    } else {
        const formControleEl = ConfirmPasswordEl.parentElement;
        formControleEl.classList.remove('error')
    }
});