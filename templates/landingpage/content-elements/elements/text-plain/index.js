const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("text-plain")
  .withIcon(Icon.TEXT)
  .withLabel("Plain Text")
  .withDescription("Without special formats")
  .withFile(require("./template.twig"))
  .withParts(cx.part.plainText.withLabel("Text Details"));
