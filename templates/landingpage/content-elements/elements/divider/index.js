const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("divider")
  .withIcon(Icon.DIVIDER)
  .withLabel("Divider")
  .withDescription("Expands to Full Width of Container")
  .withFile(require("./template.twig"));
