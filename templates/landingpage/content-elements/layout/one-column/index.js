const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("one-column")
  .withIcon(Icon.ONE_COLUMN)
  .withLabel("Single Column")
  .withDescription("Page Width")
  .withFile(require("./template.twig"));
