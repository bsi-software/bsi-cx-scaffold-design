const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("one-one")
  .withIcon(Icon.TWO_COLUMNS)
  .withLabel("Two Columns (1:1)")
  .withDescription("Normally Stacked in Mobile View")
  .withFile(require("./template.twig"));
