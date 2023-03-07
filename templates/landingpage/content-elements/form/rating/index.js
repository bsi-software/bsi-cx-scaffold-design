const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("rating")
  .withIcon(Icon.SNIPPET)
  .withLabel("Rating")
  .withDescription("For Use In Form")
  .withFile(require("./template.twig"))
  .withParts(
    cx.part.formRadio.withLabel("Option Details"),
    cx.part.formRadio.withLabel("Option Details"),
    cx.part.plainText.withLabel("Label For Worst"),
    cx.part.plainText.withLabel("Label For Best")
  );
