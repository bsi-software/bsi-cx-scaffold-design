const {cx, Icon} = require('@bsi-cx/design-build'); 

module.exports = cx.contentElement
  .withElementId('articleteaser')
  .withLabel('Article Teaser')
  .withDescription('')
  .withIcon(Icon.SNIPPET)
  .withFile(require('./template.twig'));