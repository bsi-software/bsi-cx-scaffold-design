// (function() {
//     function setCheckboxTrue() {
//         const checkboxes = [
//             ...document.getElementsByClassName('last-two-boxes'),
//         ];
//         for (let i = 0; i < checkboxes.length; i++) {
//             checkboxes[i].addEventListener('change', event => {
//                 for (const checkbox of checkboxes) {
//                     checkbox.checked = false;
//                 }
//                 const clickedCheckbox = [...checkboxes].find(
//                     checkbox => checkbox === event.target
//                 );

//                 clickedCheckbox.checked = true;
//                 checkboxes.map(checkbox => {
//                     checkbox.classList.remove('missing-required-field');
//                 });
//             });
//         }
//     }
//     function setRadioBtnTrue() {
//         const radios = [...document.getElementsByClassName('radio-btn')];
//         console.log(radios);
//         // return
//         for (let i = 0; i < radios.length; i++) {
//             radios[i].addEventListener('change', event => {
//                 console.log(event);
//                 for (const radio of radios) {
//                     radio.checked = false;
//                     radio.required = false;
//                 }
//                 event.target.required = true;
//                 const clickedRadio = radios.find(
//                     radio => radio === event.target
//                 );
//                 // console.log(clickedRadio)
//                 clickedRadio.checked = true;
//                 //    radios.map(radio => {
//                 //         radio.classList.remove('missing-required-field');
//                 //     });
//             });
//         }
//     }
//     setRadioBtnTrue();

//     setCheckboxTrue();
// })();
