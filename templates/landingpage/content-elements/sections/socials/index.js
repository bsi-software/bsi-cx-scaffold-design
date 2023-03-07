const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("socials")
  .withIcon(Icon.SOCIAL_SHARE)
  .withLabel("Socials")
  .withFile(require("./template.twig"))
  .withParts(
    cx.part.link.withLabel("Instagram Link"),
    cx.part.link.withLabel("Linkedin Link"),
    cx.part.link.withLabel("Twitter Link"),
    cx.part.link.withLabel("Facebook Link"),
    cx.part.link.withLabel("Youtube Link")
  );
