const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("firm")
  .withIcon(Icon.FORMFIELD)
  .withLabel("Firm Field")
  .withDescription("For Use In Form")
  .withFile(require("./template.twig"))
  .withParts(cx.part.formField.withLabel("Field Details"));
