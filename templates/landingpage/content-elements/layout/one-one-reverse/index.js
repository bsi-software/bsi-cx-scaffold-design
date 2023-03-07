const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("one-one-reverse")
  .withIcon(Icon.TWO_COLUMNS)
  .withLabel("Two Columns (1:1)")
  .withDescription("Reversed In Mobile View")
  .withFile(require("./template.twig"));
