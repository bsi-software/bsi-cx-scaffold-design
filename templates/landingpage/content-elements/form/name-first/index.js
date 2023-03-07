const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("name-first")
  .withIcon(Icon.FORMFIELD)
  .withLabel("First Name Field")
  .withDescription("For Use in Form")
  .withFile(require("./template.twig"))
  .withParts(cx.part.formField.withLabel("Field Details"));
