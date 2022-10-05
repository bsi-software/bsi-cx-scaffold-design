const {cx, Icon} = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("edit-text")
  .withIcon(Icon.Text)
  .withLabel("Formatted Text")
  .withFile(require("./template.twig"));
