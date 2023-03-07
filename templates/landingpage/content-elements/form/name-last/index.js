const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("name-last")
  .withIcon(Icon.FORMFIELD)
  .withLabel("Last Name Field")
  .withDescription("For Use In Form")
  .withFile(require("./template.twig"))
  .withParts(cx.part.formField.withLabel("Field Details"));
