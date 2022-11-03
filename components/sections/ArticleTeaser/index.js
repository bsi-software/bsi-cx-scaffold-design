const {cx, Icon} = require('@bsi-cx/design-build'); 

module.exports = cx.contentElement
  .withElementId('articleteaser')
  .withLabel('Article Teaser')
  .withDescription('')
  .withIcon(Icon.SNIPPET)
  .withFile(require('./template.twig'))
  .withParts(
    cx.part.formattedText
      .withLabel('Topic'),
    cx.part.plainText
      .withLabel('Chapter'),
    cx.part.formattedText
      .withLabel('Article Teaser'),
    cx.part.formattedText
      .withLabel('Teaser Text'),
    cx.part.formattedText
      .withLabel('Article Image'));