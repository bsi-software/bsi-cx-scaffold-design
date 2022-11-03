const {cx, Icon} = require('@bsi-cx/design-build'); 

module.exports = cx.contentElement
  .withElementId('footer')
  .withLabel('Footer')
  .withDescription('')
  .withIcon(Icon.SNIPPET)
  .withFile(require('./template.twig'))
  .withParts(
    cx.part.link
      .withLabel('About Us'),
    cx.part.link
      .withLabel('Contact'),
    cx.part.link
      .withLabel('Legal'),
    cx.part.link
      .withLabel('Facebook Link'),
    cx.part.link
      .withLabel('Twitter Link'),
    cx.part.link
      .withLabel('Youtube Link'),
    cx.part.link
      .withLabel('Linkedin Link'),
    cx.part.link
      .withLabel('Instagram Link'),
    cx.part.link
      .withLabel('Data Privacy'),
    cx.part.link
      .withLabel('Terms of use'),
    cx.part.link
      .withLabel('News Alert'),
    cx.part.plainText
      .withLabel('Copyright Text'),
    cx.part.link
      .withLabel('Terms of Use'),
    cx.part.link
      .withLabel('Data Privacy Policy'),
    cx.part.link
      .withLabel('Back to top'));