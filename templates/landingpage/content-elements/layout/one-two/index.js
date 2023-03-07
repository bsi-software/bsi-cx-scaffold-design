const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("one-two")
  .withIcon(Icon.THREE_COLUMNS)
  .withLabel("Two Columns (1:2)")
  .withDescription("Normally Stacked in Mobile View")
  .withFile(require("./template.twig"));
