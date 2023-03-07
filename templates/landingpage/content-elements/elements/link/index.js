const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("link")
  .withIcon(Icon.CHAIN)
  .withLabel("Link")
  .withDescription("Active Link")
  .withFile(require("./template.twig"))
  .withParts(cx.part.link.withLabel("Link"));
