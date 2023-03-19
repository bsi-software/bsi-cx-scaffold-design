(function() {
    function setCheckboxTrue() {
        const checkboxes = [
            ...document.getElementsByClassName('last-two-boxes'),
        ];
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
const radioWrapper = document.getElementById('option-radio-group');
const radioError = radioWrapper.getElementsByClassName('error-message')[0];
const emailWrapper = document.getElementById('email-wrapper');
const email = document.getElementById('email');
const emailError = emailWrapper.getElementsByClassName('error-message')[0];
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
const checkboxes = document.querySelectorAll('.last-two-boxes');
const codeWrapper = document.getElementById('code-wrapper');
const code = document.getElementById('code');
const codeError = codeWrapper.getElementsByClassName('error-message')[0];

function verifyFields(event) {
    event.preventDefault();

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

    if (
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
        submissionForms.submit();
    }
}
function verifyRadioBtn() {
    const radioButtons = document.querySelectorAll('[type="radio"]');
    const isChecked = Array.from(radioButtons).some(
        radioBtn => radioBtn.checked
    );
    if (!radioButtons) {
        return;
    }
    if (!isChecked) {
        radioError.classList.remove('isVisible');
        return false;
    } else {
        radioError.classList.add('isVisible');
        return true;
    }
}

function verifyCode() {
    if (!code) {
        return;
    }
    if (code.required && code.value === '') {
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
    if (!email) {
        return;
    }
    if (email.required && email.value === '') {
        emailError.classList.remove('isVisible');
        email.classList.add('red-border');
        return false;
    } else {
        emailError.classList.add('isVisible');
        email.classList.remove('red-border');
        return true;
    }
}

function verifyCity2() {
    if (!city) {
        return;
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
        return;
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
        return;
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
        return;
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
        return;
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
        return;
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
        return;
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
    if (!checkboxes) {
        return;
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
        return;
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
        return;
    }
    if (dropdownSelect.required && dropdownSelect.value === '') {
        dropdownSelect.classList.add('red-border-select');
        return false;
    } else {
        dropdownSelect.classList.remove('red-border-select');
        return true;
    }
}

email.addEventListener('input', event => {
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

city.addEventListener('input', event => {
    const target = event.target;
    if (target.value !== '') {
        city.classList.remove('red-border');
    } else {
        city.classList.add('red-border');
    }
});

zip.addEventListener('input', event => {
    const regExpZip = /^[0-9]{5}(?:-[0-9]{4})?$/;
    const target = event.target;
    if (target.value !== '' && regExpZip.test(target.value)) {
        zip.classList.remove('red-border');
    } else {
        zip.classList.add('red-border');
    }
});

firstName.addEventListener('input', event => {
    const target = event.target;
    if (target.value !== '') {
        firstName.classList.remove('red-border');
    } else {
        firstName.classList.add('red-border');
    }
});

lastName.addEventListener('input', event => {
    const target = event.target;
    if (target.value !== '') {
        lastName.classList.remove('red-border');
    } else {
        lastName.classList.add('red-border');
    }
});

street.addEventListener('input', event => {
    const target = event.target;
    if (target.value !== '') {
        street.classList.remove('red-border');
    } else {
        street.classList.add('red-border');
    }
});

code.addEventListener('input', event => {
    const target = event.target;
    const regExp = /^\d{9}$/;
    if (target.value !== '' && regExp.test(target.value)) {
        codeError.classList.add('isVisible');
        code.classList.remove('red-border');
    } else {
        codeError.classList.remove('isVisible');
        code.classList.add('red-border');
    }
});

stadt.addEventListener('input', event => {
    const target = event.target;
    if (target.value !== '') {
        stadt.classList.remove('red-border');
    } else {
        stadt.classList.add('red-border');
    }
});

countrySelect.addEventListener('change', event => {
    const targetValue = event.target.value;
    console.log(targetValue);
    if (targetValue) {
        countrySelect.classList.remove('red-border-select');
    } else {
        countrySelect.classList.add('red-border-select');
    }
});

dropdownSelect.addEventListener('change', event => {
    const target = event.target.value;
    if (target) {
        dropdownSelect.classList.remove('red-border-select');
    } else {
        dropdownSelect.classList.add('red-border-select');
    }
});

checkbox.addEventListener('change', event => {
    const isCheckboxChecked = checkbox.checked;

    if (isCheckboxChecked) {
        checkbox.classList.remove('missing-required-field');
    } else {
        checkbox.classList.add('missing-required-field');
    }
});

document.querySelectorAll('[type="radio"]').forEach(radioBtn => {
    radioBtn.addEventListener('change', event => {
        radioError.classList.add('isVisible');
    });
});

document
    .querySelector('.submission-form input[type="submit"]')
    .addEventListener('click', function(event) {
        verifyFields(event);
    });
