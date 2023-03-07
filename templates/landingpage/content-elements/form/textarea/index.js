const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("textarea")
  .withIcon(Icon.FORMFIELD)
  .withLabel("Textarea")
  .withDescription("For Use in Form")
  .withFile(require("./template.twig"))
  .withParts(cx.part.formTextarea.withLabel("Textarea Details"));
