const {cx, Icon} = require('@bsi-cx/design-build'); 

module.exports = cx.contentElement
  .withElementId('caseblock')
  .withLabel('Case Block')
  .withDescription('')
  .withIcon(Icon.SNIPPET)
  .withFile(require('./template.twig'))
  .withParts(
    cx.part.plainText
      .withLabel('Number'),
    cx.part.formattedText
      .withLabel('Subtitle'),
    cx.part.formattedText
      .withLabel('Text Editor'));