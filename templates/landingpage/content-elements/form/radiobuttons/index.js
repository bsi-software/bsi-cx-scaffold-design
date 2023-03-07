(function () {
  // // Function which higlights required radiobuttons fields
  // function highlightRequiredRadios() {
  //     let radioSets = document.getElementsByClassName(
  //         'radiobutton-set-container'
  //     );
  //     if (radioSets.length !== 0) {
  //         // .map only works for arrays, not for HTML Collections, so convert to array
  //         [...radioSets].map(function(radioSet) {
  //             if (radioSet.querySelector('input[required=""]') !== null) {
  //                 radioSet.parentNode.children[0].className +=
  //                     'required-radiobutton-field';
  //             }
  //         });
  //     }
  // }
  // // Immediately run on page load
  // highlightRequiredRadios();
})();

const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("radiobuttons")
  .withIcon(Icon.RADIOBUTTON)
  .withLabel("Radiobuttons")
  .withDescription("For Use In Form")
  .withFile(require("./template.twig"))
  .withParts(
    cx.part.formRadio.withLabel("Radio Button Details"),
    cx.part.formRadio.withLabel("Radio Button Details")
  );
