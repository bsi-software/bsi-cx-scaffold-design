const {cx, Icon} = require('@bsi-cx/design-build'); 

module.exports = cx.contentElement
  .withElementId('contact')
  .withLabel('Contact')
  .withDescription('')
  .withIcon(Icon.SNIPPET)
  .withFile(require('./template.twig'))
  .withParts(
    cx.part.formattedText
      .withLabel('Subtitle'),
    cx.part.formattedText
      .withLabel('Text Editor'),
    cx.part.link
      .withLabel('Primary Button'),
    cx.part.link
      .withLabel('Secondary Button'));