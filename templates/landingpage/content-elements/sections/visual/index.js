const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("visual")
  .withIcon(Icon.IMAGE)
  .withLabel("Visual")
  .withDescription("For use in Header as Full Width Visual")
  .withFile(require("./template.twig"))
  .withParts(cx.part.image.withLabel("Visual Details"));
