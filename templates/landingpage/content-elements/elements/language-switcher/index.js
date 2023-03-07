const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("language")
  .withIcon(Icon.SNIPPET)
  .withLabel("Language Switcher")
  .withDescription("For Language Change")
  .withFile(require("./template.twig"))
  .withParts(cx.part.link.withLabel("Language Link"));
