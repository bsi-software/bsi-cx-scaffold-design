const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("form")
  .withIcon(Icon.SNIPPET)
  .withLabel("Form")
  .withDescription("Components in 'Form Components' Element group")
  .withFile(require("./template.twig"))
  .withParts(cx.part.form.withLabel("Form Details"));
