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

    function setRadioBtnTrue() {
        const radios = [...document.getElementsByClassName('radio-btn')];
        // console.log(radios);
        // return
        for (let i = 0; i < radios.length; i++) {
            radios[i].addEventListener('change', event => {
                //console.log(event);
                for (const radio of radios) {
                    radio.checked = false;
                    radio.required = false;
                }
                event.target.required = true;
                const clickedRadio = radios.find(
                    radio => radio === event.target
                );
                //console.log(clickedRadio)
                clickedRadio.checked = true;
                // radios.map(radio => {
                //      radio.classList.remove('missing-required-field');
                //  });
            });
        }
    }
    setRadioBtnTrue();

    setCheckboxTrue();
})();

(function() {
    const submissionForms = document.getElementsByClassName('submission-form');
    const amountOfForms = submissionForms.length;

    if (amountOfForms > 0) {
        function verifyFields(event) {
            const form = event.target.closest('form');

            event.preventDefault();

            // Get all of the required form fields
            // Query the form fields in the order in which they appear in the form, to facilitate the addition of an eventually
            // wanted scroll animation
            let requiredFields = form.querySelectorAll('[required=""]');

            // Pick out all of the radiobuttons, as these must be handled differently
            let radiobuttonNames = [];
            let missingFields = [];
            [...requiredFields].forEach(function(field) {
                // Check if the currently iterated field is a radiobutton
                if (
                    field.tagName === 'INPUT' &&
                    field.hasAttribute('type') &&
                    field.getAttribute('type') === 'radio'
                ) {
                    // Push the current radiobuttons name into the raidobuttonNames to not do the following thing twice
                    const currentName = field.getAttribute('name');
                    // And in this case, check if any of the available options have been checked
                    if (
                        document.querySelector(
                            'input[type="radio"][name="' +
                                currentName +
                                '"]:checked'
                        )
                    ) {
                        let fieldsClass = field.classList;
                        console.log(000000000000);
                        if (fieldsClass.contains('missing-required-field')) {
                            fieldsClass.remove('missing-required-field');
                        }

                        const radios = document.querySelectorAll('.radio-btn');
                        console.log(radios);
                        const checkedRadios = Array.from(radios).some(
                            radio => radio.checked
                        );
                        console.log(checkedRadios);
                        if (!checkedRadios) {
                            Array.from(radios).map(radio => {
                                const radioGroup = document.getElementById(
                                    'option-radio-group'
                                );
                                radioGroup
                                    .getElementsByClassName(
                                        'error-message-radio'
                                    )
                                    .classList.remove('hidden');
                            });
                            return;
                        } else {
                            Array.from(radios).map(radio => {
                                const radioGroup = document.getElementById(
                                    'option-radio-group'
                                );
                                radioGroup
                                    .getElementsByClassName(
                                        'error-message-radio'
                                    )
                                    .classList.add('hidden');
                            });

                            console.log(
                                document.getElementById(
                                    'option-radio-group',
                                    11111
                                )
                            );
                        }
                        return;
                    }
                } else if (
                    field.tagName === 'INPUT' &&
                    field.hasAttribute('type') &&
                    field.getAttribute('type') === 'checkbox'
                ) {
                    // In this case, simply return the concerned checkbox
                    const currentName = field.getAttribute('name');
                    if (
                        document.querySelector(
                            'input[type="checkbox"][name="' +
                                currentName +
                                '"]:checked'
                        )
                    ) {
                        // If not, simply add the first radiobutton element of the group into the missingFields array
                        let fieldsClass = field.classList;
                        if (fieldsClass.contains('missing-required-field')) {
                            fieldsClass.remove('missing-required-field');
                        }

                        return;
                    }
                    //checkbox required field
                    const checkboxes = document.querySelectorAll(
                        '.last-two-boxes'
                    );
                    const checked = Array.from(checkboxes).some(
                        checkbox => checkbox.checked
                    );

                    if (!checked) {
                        Array.from(checkboxes).map(checkbox => {
                            checkbox.classList.add('missing-required-field');
                        });
                        return;
                    } else {
                        Array.from(checkboxes).map(checkbox => {
                            checkbox.classList.remove('missing-required-field');
                        });
                    }

                    if (
                        !document.querySelector(
                            'input[type="checkbox"][name="' +
                                currentName +
                                '"]:checked'
                        )
                    ) {
                        // If not, simply add the first radiobutton element of the group into the missingFields array
                        missingFields.push(field);
                        let fieldsClass = field.classList;
                        if (!fieldsClass.contains('missing-required-field')) {
                            fieldsClass.add('missing-required-field');
                        }

                        return;
                    }
                } else if (
                    // Treat all of the following elements in the same way, as they should all gain a highlighted border
                    // if they're missing
                    (field.tagName === 'INPUT' &&
                        field.hasAttribute('type') &&
                        field.getAttribute('type') === 'text') ||
                    field.getAttribute('type') === 'email' ||
                    field.tagName === 'SELECT' ||
                    field.tagName === 'TEXTAREA'
                ) {
                    // Add a class used to highlight field as missing
                    let fieldsClass = field.classList;
                    // If the current field value is empty
                    if (field.value.trim() === '') {
                        if (!fieldsClass.contains('missing-required-field')) {
                            fieldsClass.add('missing-required-field');
                        }
                        // And in this case add the field into the field of missing fields
                        missingFields.push(field);
                        return;
                    } else {
                        if (fieldsClass.contains('missing-required-field')) {
                            fieldsClass.remove('missing-required-field');
                        }
                    }
                }
            });

            if (missingFields.length !== 0) {
                document.getElementById('required-missing-feedback').className =
                    'enable';
            } else {
                document.getElementById('required-missing-feedback').className =
                    '';
                //Form can now safely be submitted
                form.submit();
            }
        }

        document
            .querySelector('.submission-form input[type="submit"]')
            .addEventListener('click', function(event) {
                verifyFields(event);
            });
    }
})();
