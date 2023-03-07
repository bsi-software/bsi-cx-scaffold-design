const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("title")
  .withIcon(Icon.TEXT)
  .withLabel("Title Field")
  .withDescription("For main Content")
  .withFile(require("./template.twig"))
  .withParts(cx.part.plainText.withLabel("Title Text"));
