const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("image-normal")
  .withIcon(Icon.IMAGE)
  .withLabel("Image")
  .withDescription("100% Width or 100% Height")
  .withFile(require("./template.twig"))
  .withParts(cx.part.image.withLabel("Image"));
