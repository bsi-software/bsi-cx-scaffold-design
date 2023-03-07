// element.image-cropped.label=Cropped Image
// element.image-cropped.description=Original Image used
// element.image-cropped.icon=image

const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("image-cropped")
  .withIcon(Icon.IMAGE)
  .withLabel("Cropped Image")
  .withDescription("Original Image used")
  .withFile(require("./template.twig"))
  .withParts(cx.part.image.withLabel("Image"));
