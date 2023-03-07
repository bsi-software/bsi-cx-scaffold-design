const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("subtitle")
  .withIcon(Icon.TEXT)
  .withLabel("Subtitle")
  .withFile(require("./template.twig"))
  .withParts(cx.part.plainText.withLabel("Subtitle text"));
