const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("spacer")
  .withIcon(Icon.DIVIDER)
  .withLabel("Spacer")
  .withDescription("Expands to Full Width of Container")
  .withFile(require("./template.twig"));
