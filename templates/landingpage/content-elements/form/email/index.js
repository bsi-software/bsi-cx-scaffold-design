const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("email")
  .withIcon(Icon.FORMFIELD)
  .withLabel("Email Field")
  .withDescription("Without special formats")
  .withFile(require("./template.twig"))
  .withParts(cx.part.formField.withLabel("Field Details"));
