const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("country")
  .withIcon(Icon.LIST)
  .withLabel("Country Dropdown")
  .withDescription("For Use in Form")
  .withFile(require("./template.twig"))
  .withParts(cx.part.formField.withLabel("Dropdown Details"));
