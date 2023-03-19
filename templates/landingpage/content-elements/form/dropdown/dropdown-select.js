(function() {
    let select = document.getElementById('dropdown-select'); // get the select element

    let defaultOption = document.createElement('option'); // create a new option element
    defaultOption.text = 'Choose Country';
    defaultOption.value = ''; // set the value of the option to an empty string
    defaultOption.selected = true; // set the option as the default selected option
    defaultOption.disabled = true; // disable the option so that it cannot be selected

    select.insertBefore(defaultOption, select.firstChild); // add the new option to the beginning of the select element
})();
