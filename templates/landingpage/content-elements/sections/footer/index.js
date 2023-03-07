const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("footer")
  .withIcon(Icon.SNIPPET)
  .withLabel("Footer")
  .withFile(require("./template.twig"));
//   .withParts(cx.part.link.withLabel("Link Details"));
