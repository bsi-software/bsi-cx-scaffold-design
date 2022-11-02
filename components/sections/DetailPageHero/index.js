const {cx, Icon} = require('@bsi-cx/design-build'); 

module.exports = cx.contentElement
  .withElementId('detailpagehero')
  .withLabel('Hero')
  .withDescription('')
  .withIcon(Icon.SNIPPET)
  .withFile(require('./template.twig'));