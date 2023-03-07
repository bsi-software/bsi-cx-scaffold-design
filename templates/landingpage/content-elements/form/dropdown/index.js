const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("dropdown")
  .withIcon(Icon.DROPDOWN)
  .withLabel("Additional Dropdown")
  .withDescription("For Use in Form")
  .withFile(require("./template.twig"))
  .withParts(cx.part.formSelect.withLabel("Additional Dropdown Details"));
