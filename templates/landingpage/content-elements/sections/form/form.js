(function() {
    function setCheckboxTrue() {
        const checkboxes = [
            ...document.getElementsByClassName('last-two-boxes'),
        ];
        if (!checkboxes) {
            return true;
        }
        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].addEventListener('change', event => {
                for (const checkbox of checkboxes) {
                    checkbox.checked = false;
                }
                const clickedCheckbox = [...checkboxes].find(
                    checkbox => checkbox === event.target
                );

                clickedCheckbox.checked = true;
                checkboxes.map(checkbox => {
                    checkbox.classList.remove('missing-required-field');
                });
            });
        }
    }

    setCheckboxTrue();
})();

const submissionForms = document.querySelector('.submission-form');
const errorWrapper = document.getElementById('error-wrapper');
const submissionFormsError = errorWrapper?.getElementsByClassName(
    'error-message-form'
)[0];
console.log(submissionFormsError, 'submissionFormsError');
const radioWrapper = document.getElementById('option-radio-group');
const radioButtons = document.querySelectorAll('[type="radio"]');
const radioError = radioWrapper?.getElementsByClassName(
    'error-message-title'
)[0];
const emailWrapper = document.getElementById('email-wrapper');
const email = document.getElementById('email');
const emailError = emailWrapper?.getElementsByClassName('error-message')[0];
const cityWrapper = document.getElementById('city2-wrapper');
const city = document.getElementById('city2');
const zipWrapper = document.getElementById('zip-wrapper');
const zip = document.getElementById('zip');
const firstNameWrapper = document.getElementById('first-name-wrapper');
const firstName = document.getElementById('first-name');
const lastNameWrapper = document.getElementById('last-name-wrapper');
const lastName = document.getElementById('last-name');
const streetWrapper = document.getElementById('street-wrapper');
const street = document.getElementById('street');
const stadtWrapper = document.getElementById('city-wrapper');
const stadt = document.getElementById('city');
const countrySelectWrapper = document.getElementById('country-select-wrapper');
const countrySelect = document.getElementById('country-select');
const dropdownSelectWrapper = document.getElementById('dropdown-wrapper');
const dropdownSelect = document.getElementById('dropdown-select');
const checkboxWrapper = document.getElementById('checkbox-wrapper');
const checkbox = document.getElementsByClassName('checkbox-input')[0];
const checkboxBlockWrapper = document.getElementById('checkboxesBlock-wrapper');
const checkboxes = document.querySelectorAll('.last-two-boxes');
const codeWrapper = document.getElementById('code-wrapper');
const code = document.getElementById('code');
const codeError = codeWrapper?.getElementsByClassName('error-message')[0];
const phoneWrapper = document.getElementById('tel-wrapper');
const phone = document.getElementById('telefon');
const phoneError = phoneWrapper?.getElementsByClassName('error-message')[0];

function verifyFields(event) {
    event.preventDefault();
    const isPhone = verifyPhone();
    const isEmailTrue = verifyEmail();
    const isRadioBTNTrue = verifyRadioBtn();
    const isCity2 = verifyCity2();
    const isZip = verifyZip();
    const isName = verifyName();
    const isLastName = verifyLastName();
    const isStreet = verifyStreet();
    const isStadt = verifyStadt();
    const isCountrySelect = verifyCountrySelect();
    const isDropdownSelect = verifyDropdownSelect();
    const isCheckbox = verifyCheckbox();
    const isCheckboxBlock = verifyCheckboxBlock();
    const isCode = verifyCode();
    console.log(isPhone);
    console.log(isEmailTrue);
    console.log(isRadioBTNTrue, 'isRadioBTNTrue');
    console.log(isCity2);
    console.log(isZip);
    console.log(isName);
    console.log(isLastName);
    console.log(isStreet);
    console.log(isStadt);
    console.log(isDropdownSelect);
    console.log(isCountrySelect);
    console.log(isCheckbox);
    console.log(isCheckboxBlock, 'isCheckboxBlock');
    console.log(isCode, 'code');
    if (
        isPhone &&
        isEmailTrue &&
        isRadioBTNTrue &&
        isCity2 &&
        isZip &&
        isName &&
        isLastName &&
        isStreet &&
        isStadt &&
        isCountrySelect &&
        isDropdownSelect &&
        isCheckbox &&
        isCheckboxBlock &&
        isCode
    ) {
        submissionFormsError.classList.add('isVisible');
        submissionForms.submit();
    } else {
        submissionFormsError.classList.remove('isVisible');
    }
}

function verifyPhone() {
    const phoneRegExp = /^[\+]{1}[0-9]{10,16}$/;
    if (!phone) {
        return true;
    }
    if (phone.required && !phoneRegExp.test(phone.value)) {
        const phoneError = codeWrapper.getElementsByClassName(
            'error-message'
        )[0];
        phoneError.classList.remove('isVisible');
        phone.classList.add('red-border');
        return false;
    } else {
        phoneError.classList.add('isVisible');
        phone.classList.remove('red-border');
        return true;
    }
}
function verifyRadioBtn() {
    if (!radioWrapper) {
        return true;
    }
    const isChecked = Array.from(radioButtons).some(
        radioBtn => radioBtn.checked
    );

    if (!isChecked) {
        radioError?.classList.remove('isVisible');
        return false;
    } else {
        radioError?.classList.add('isVisible');
        return true;
    }
}

function verifyCode() {
    const regExp = /^[0-9]{9}$/;
    if (!code) {
        return true;
    }
    if (code.required && !regExp.test(code.value)) {
        console.log(code.required);
        console.log(code.value);
        const codeError = codeWrapper.getElementsByClassName(
            'error-message'
        )[0];
        codeError.classList.remove('isVisible');
        code.classList.add('red-border');
        return false;
    } else {
        codeError.classList.add('isVisible');
        code.classList.remove('red-border');
        return true;
    }
}

function verifyEmail() {
    const regExp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+[\.]{1})+([a-zA-Z0-9]{2,4})+$/;
    if (!email) {
        return true;
    }
    if (email.required && !regExp.test(email.value)) {
        emailError?.classList.remove('isVisible');
        email.classList.add('red-border');
        return false;
    } else {
        emailError?.classList.add('isVisible');
        email.classList.remove('red-border');
        return true;
    }
}

function verifyCity2() {
    if (!city) {
        return true;
    }
    if (city.required && city.value === '') {
        city.classList.add('red-border');
        return false;
    } else {
        city.classList.remove('red-border');
        return true;
    }
}
function verifyZip() {
    if (!zip) {
        return true;
    }
    if (zip.required && zip.value === '') {
        zip.classList.add('red-border');
        return false;
    } else {
        zip.classList.remove('red-border');
        return true;
    }
}

function verifyName() {
    if (!firstName) {
        return true;
    }
    if (firstName.required && firstName.value === '') {
        firstName.classList.add('red-border');
        return false;
    } else {
        firstName.classList.remove('red-border');
        return true;
    }
}

function verifyLastName() {
    if (!lastName) {
        return true;
    }
    if (lastName.required && lastName.value === '') {
        lastName.classList.add('red-border');
        return false;
    } else {
        lastName.classList.remove('red-border');
        return true;
    }
}

function verifyStreet() {
    if (!street) {
        return true;
    }
    if (street.required && street.value === '') {
        street.classList.add('red-border');
        return false;
    } else {
        street.classList.remove('red-border');
        return true;
    }
}

function verifyStadt() {
    if (!stadt) {
        return true;
    }
    if (stadt.required && stadt.value === '') {
        stadt.classList.add('red-border');
        return false;
    } else {
        stadt.classList.remove('red-border');
        return true;
    }
}

function verifyCheckbox() {
    if (!checkbox) {
        return true;
    }
    if (checkbox.required && !checkbox.checked) {
        checkbox.classList.add('missing-required-field');
        return false;
    } else {
        checkbox.classList.remove('missing-required-field');
        return true;
    }
}

function verifyCheckboxBlock() {
    if (!checkboxBlockWrapper) {
        return true;
    }
    const checked = Array.from(checkboxes).some(checkbox => checkbox.checked);
    if (!checked) {
        Array.from(checkboxes).map(checkbox => {
            checkbox.classList.add('missing-required-field');
        });
        return false;
    } else {
        Array.from(checkboxes).map(checkbox => {
            checkbox.classList.remove('missing-required-field');
        });
        return true;
    }
}

function verifyCountrySelect() {
    if (!countrySelect) {
        return true;
    }
    if (countrySelect.required && countrySelect.value === '') {
        countrySelect.classList.add('red-border-select');
        return false;
    } else {
        countrySelect.classList.remove('red-border-select');
        return true;
    }
}

function verifyDropdownSelect() {
    if (!dropdownSelect) {
        return true;
    }
    if (dropdownSelect.required && dropdownSelect.value === '') {
        dropdownSelect.classList.add('red-border-select');
        return false;
    } else {
        dropdownSelect.classList.remove('red-border-select');
        return true;
    }
}

phone?.addEventListener('input', event => {
    const target = event.target;
    const phoneRegExp = /^[\+]{1}[0-9]{10,16}$/;

    if (target.value !== '' && phoneRegExp.test(target.value)) {
        phoneError.classList.add('isVisible');
        phone.classList.remove('red-border');
    } else {
        phoneError.classList.remove('isVisible');
        phone.classList.add('red-border');
    }
});

email?.addEventListener('input', event => {
    const target = event.target;
    const regExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;

    if (target.value !== '' && regExp.test(target.value)) {
        emailError.classList.add('isVisible');
        email.classList.remove('red-border');
    } else {
        emailError.classList.remove('isVisible');
        email.classList.add('red-border');
    }
});

city?.addEventListener('input', event => {
    const target = event.target;
    if (target.value !== '') {
        city.classList.remove('red-border');
    } else {
        city.classList.add('red-border');
    }
});

zip?.addEventListener('input', event => {
    const regExpZip = /^[0-9]{5}(?:-[0-9]{4})?$/;
    const target = event.target;
    if (target.value !== '' && regExpZip.test(target.value)) {
        zip.classList.remove('red-border');
    } else {
        zip.classList.add('red-border');
    }
});

firstName?.addEventListener('input', event => {
    const target = event.target;
    if (target.value !== '') {
        firstName.classList.remove('red-border');
    } else {
        firstName.classList.add('red-border');
    }
});

lastName?.addEventListener('input', event => {
    const target = event.target;
    if (target.value !== '') {
        lastName.classList.remove('red-border');
    } else {
        lastName.classList.add('red-border');
    }
});

street?.addEventListener('input', event => {
    const target = event.target;
    if (target.value !== '') {
        street.classList.remove('red-border');
    } else {
        street.classList.add('red-border');
    }
});

// code?.addEventListener('keydown', event => {
//     var regex = new RegExp('^[0-9+]+$');

//     var key = String.fromCharCode(
//         !event.charCode ? event.which : event.charCode
//     );

//     if (
//         event.code == 'ArrowLeft' ||
//         event.code == 'ArrowRight' ||
//         event.code == 'Backspace' ||
//         event.code == 'Delete' ||
//         event.code == 'NumpadAdd' ||
//         event.code == 'NumpadDecimal' ||
//         event.code == 'Numpad1' ||
//         event.code == 'Numpad2' ||
//         event.code == 'Numpad3' ||
//         event.code == 'Numpad4' ||
//         event.code == 'Numpad5' ||
//         event.code == 'Numpad6' ||
//         event.code == 'Numpad7' ||
//         event.code == 'Numpad8' ||
//         event.code == 'Numpad9' ||
//         event.code == 'Numpad0'
//     ) {
//         return false;
//     } else if (!regex.test(key) || event.ctrlKey || code.value.length > 9) {
//         event.preventDefault();

//         return false;
//     }
// });

code?.addEventListener('input', event => {
    const regexCode = new RegExp('^[0-9+]+$');
    if (!regexCode.test(code.value) || code.value.length > 9) {
        code.value = code.value.slice(
            0,
            code.value.length - event?.data?.length
        );
        return false;
    }
});

code?.addEventListener('input', event => {
    const target = event.target;
    const regExp = /^[0-9]{9}$/;
    if (target.value !== '' && regExp.test(target.value)) {
        codeError.classList.add('isVisible');
        code.classList.remove('red-border');
    } else {
        codeError.classList.remove('isVisible');
        code.classList.add('red-border');
    }
});

stadt?.addEventListener('input', event => {
    const target = event.target;
    if (target.value !== '') {
        stadt.classList.remove('red-border');
    } else {
        stadt.classList.add('red-border');
    }
});

countrySelect?.addEventListener('change', event => {
    const targetValue = event.target.value;
    console.log(targetValue);
    if (targetValue) {
        countrySelect.classList.remove('red-border-select');
    } else {
        countrySelect.classList.add('red-border-select');
    }
});

dropdownSelect?.addEventListener('change', event => {
    const target = event.target.value;
    if (target) {
        dropdownSelect.classList.remove('red-border-select');
    } else {
        dropdownSelect.classList.add('red-border-select');
    }
});

checkbox?.addEventListener('change', event => {
    const isCheckboxChecked = checkbox.checked;

    if (isCheckboxChecked) {
        checkbox.classList.remove('missing-required-field');
    } else {
        checkbox.classList.add('missing-required-field');
    }
});

radioButtons?.forEach(radioBtn => {
    radioBtn.addEventListener('change', event => {
        radioError.classList.add('isVisible');
    });
});

document
    .querySelector('.submission-form input[type="submit"]')
    .addEventListener('click', function(event) {
        verifyFields(event);
    });
