const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("button")
  .withIcon(Icon.CHAIN)
  .withLabel("Button")
  .withDescription("With Link")
  .withFile(require("./template.twig"))
  .withParts(cx.part.link.withLabel("Link Details"));

// element.button.label=Button
// element.button.description=With Link
// element.button.icon=chain

// element.button.parts.link[0].label=Link Details

// style.button.label=Alignment
// style.button.class.layout-button-left.label=Left (Default)
// style.button.class.layout-button-centered.label=Centered
// style.button.class.layout-button-right.label=Right

// element.button.styles=button
