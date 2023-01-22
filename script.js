'use strict'
const formEl = document.getElementById('form');
const UserNameEl = document.getElementById('UserName');
const EmailIDEl = document.getElementById('EmailID');
const PhoneNumberEl = document.getElementById('PhoneNumber');
const PasswordEl = document.getElementById('Password');
const ConfirmPasswordEl = document.getElementById('ConfirmPassword');

// global variable

let obj = {
    userName: false,
    EmailID: false,
    PhoneNo: false,
    Password: false,
    ConfirmPassword: false
}

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

    // run

    
    checkIsItValid()

    // User Name

    const UserNameLen = UserNameValue.length;

    if (UserNameValue === '') {
        ShowError(UserNameEl);
        document.getElementById('UserNameAlert').textContent = 'Please fill the above.';
        obj.userName= false;
    } else if (UserNameLen < 4) {
        ShowError(UserNameEl);
        document.getElementById('UserNameAlert').textContent = "Minimum 4 charectors";
        obj.userName= false;
    } else {
        hideError(UserNameEl);
        obj.userName = true;
    }

    // email Id

    if (EmailIDValue === '') {
        document.getElementById('EmailIDError').style.visibility = 'visible';
        obj.EmailID= false;
    } else {
        document.getElementById('EmailIDError').style.visibility = 'hidden';
        if (/@/.test(EmailIDValue)) {
            document.getElementById('OnlyEmail').style.visibility = 'hidden';
            obj.EmailID = true;
            checkIsItValid()
        } else {
            document.getElementById('OnlyEmail').style.visibility = 'visible';
            obj.EmailID= false;
        }
    }

    // phone number
    if (PhoneNumberValue === '') {
        ShowError(PhoneNumberEl);
        document.getElementById('PhoneNumberAlert').textContent = 'Please fill the above.';
        obj.PhoneNo = false;
    } else if (String(PhoneNumberValue).length != 10){
        ShowError(PhoneNumberEl);
        document.getElementById('PhoneNumberAlert').textContent = 'Phone number must have 10 numbers';
        obj.PhoneNo= false;
    } else {
        hideError(PhoneNumberEl);
        obj.PhoneNo = true;
    }

    // password

    const PasswordLen = PasswordValue.length;

    if (PasswordValue === '') {
        ShowError(PasswordEl);
        obj.Password= false;
        document.getElementById('PasswordAlert').textContent = 'Please fill the above.';
    } else if (PasswordLen <= 4) {
        ShowError(PasswordEl);
        obj.Password= false;
        document.getElementById('PasswordAlert').textContent = 'Minimum 5 charectors';
    } else {
        hideError(PasswordEl);
        obj.Password = true;
    }

    // confirm Password

    if (ConfirmPasswordValue === '') {
        ShowError(ConfirmPasswordEl);
        document.getElementById('ConfirmPasswordAlert').textContent = 'Please fill the above.';
        obj.ConfirmPassword= false;
    } else if (ConfirmPasswordValue !== PasswordValue ) {
        ShowError(ConfirmPasswordEl);
        obj.ConfirmPassword= false;
        document.getElementById('ConfirmPasswordAlert').textContent = 'Password does not match';
    } else {
        hideError(ConfirmPasswordEl);
        obj.ConfirmPassword = true;
        checkIsItValid()
    }
});

function checkIsItValid() {
    if (obj.userName && obj.EmailID && obj.PhoneNo && obj.Password && obj.ConfirmPassword) {
        alert('Form validation is success. Your form is valid');
    }
}