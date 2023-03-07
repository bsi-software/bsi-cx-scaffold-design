const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("two-one")
  .withIcon(Icon.THREE_COLUMNS)
  .withLabel("Two Columns (2:1)")
  .withDescription("Normally Stacked in Mobile View")
  .withFile(require("./template.twig"));
