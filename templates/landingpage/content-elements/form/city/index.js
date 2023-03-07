const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("city")
  .withIcon(Icon.FORMFIELD)
  .withLabel("For Use in Form")
  .withDescription("For Use in Form")
  .withFile(require("./template.twig"))
  .withParts(cx.part.formField.withLabel("Field Details"));
