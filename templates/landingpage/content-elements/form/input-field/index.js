const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("input-field")
  .withIcon(Icon.FORMFIELD)
  .withLabel("Input Field")
  .withDescription("For Use in Form")
  .withFile(require("./template.twig"))
  .withParts(cx.part.formField.withLabel("Field Details"));
