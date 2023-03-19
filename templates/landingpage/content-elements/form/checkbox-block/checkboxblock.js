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
