const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("city-zip")
  .withIcon(Icon.FORMFIELD)
  .withLabel("City + Zip Code Line")
  .withDescription("For Use In Form")
  .withFile(require("./template.twig"))
  .withParts(cx.part.formField.withLabel("Field Details"));
