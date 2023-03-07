const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("checkbox")
  .withIcon(Icon.CHECKBOX)
  .withLabel("Checkbox")
  .withDescription("For Use in Form")
  .withFile(require("./template.twig"))
  .withParts(cx.part.formCheckbox.withLabel("Checkbox Details"));
