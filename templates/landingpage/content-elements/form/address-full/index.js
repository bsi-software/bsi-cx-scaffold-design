const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("address-full")
  .withIcon(Icon.TEXT)
  .withLabel("ity + Country Line")
  .withDescription("For Use In Form")
  .withFile(require("./template.twig"))
  .withParts(cx.part.formField.withLabel("Field Details"));
