const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("street-house")
  .withIcon(Icon.FORMFIELD)
  .withLabel("Street-House Field")
  .withDescription("Without special formats")
  .withFile(require("./template.twig"))
  .withParts(cx.part.formField.withLabel("Field Details"));
