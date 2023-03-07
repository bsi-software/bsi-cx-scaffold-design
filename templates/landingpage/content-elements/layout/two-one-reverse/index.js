const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("two-one-reverse")
  .withIcon(Icon.THREE_COLUMNS)
  .withLabel("Two Columns (2:1)")
  .withDescription("Reversed in Mobile View")
  .withFile(require("./template.twig"));
