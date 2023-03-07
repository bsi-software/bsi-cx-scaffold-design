const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("full-width")
  .withIcon(Icon.ONE_COLUMN)
  .withLabel("Full Width")
  .withDescription("Container")
  .withFile(require("./template.twig"));
