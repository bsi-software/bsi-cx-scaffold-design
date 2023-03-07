// element.top-bar.label=Top Bar
// element.top-bar.description=With Brand Logo & Alignment Options
// element.top-bar.icon=snippet

// element.top-bar.parts.image[0].label=Image Details

// style.top-bar-logo-alignment.label=Brand Logo Alignment
// style.top-bar-logo-alignment.class.top-bar-left-aligned.label=Left Aligned
// style.top-bar-logo-alignment.class.top-bar-centered.label=Centered (Default)
// style.top-bar-logo-alignment.class.top-bar-right-aligned.label=Right Aligned

// element.top-bar.styles=top-bar-logo-alignment,display

// style.display.label=Display
// style.display.class.language-shown.label=Shown
// style.display.class.language-hidden.label=Hidden

const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("top-bar")
  .withIcon(Icon.SNIPPET)
  .withLabel("Top Bar")
  .withFile(require("./template.twig"))
  .withParts(cx.part.image.withLabel("Image Details"));
