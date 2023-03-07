const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("checkbox-block")
  .withIcon(Icon.CHECKBOX)
  .withLabel("Checkbox bBlock")
  .withDescription("Checkbox-block")
  .withFile(require("./template.twig"))
  .withParts(
    cx.part.formCheckbox.withLabel("Checkbox Details"),
    cx.part.formCheckbox.withLabel("Checkbox Details")
  );
