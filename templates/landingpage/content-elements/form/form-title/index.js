const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("form-title")
  .withIcon(Icon.TEXT)
  .withLabel("Form Title Field")
  .withDescription("For form Content")
  .withFile(require("./template.twig"))
  .withParts(cx.part.plainText.withLabel("Form Title Text"));
