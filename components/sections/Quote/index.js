const {cx, Icon} = require('@bsi-cx/design-build'); 

module.exports = cx.contentElement
  .withElementId('quote')
  .withLabel('Quote')
  .withDescription('')
  .withIcon(Icon.SNIPPET)
  .withFile(require('./template.twig'))
  .withParts(
    cx.part.formattedText
      .withLabel('Quote'),
    cx.part.formattedText
      .withLabel('Quote Author'));