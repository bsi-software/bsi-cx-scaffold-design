const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("one-two-reverse")
  .withIcon(Icon.THREE_COLUMNS)
  .withLabel("Two Columns (1:2)")
  .withDescription("Reversed in Mobile View")
  .withFile(require("./template.twig"));
