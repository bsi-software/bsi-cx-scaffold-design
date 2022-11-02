const {cx, Icon} = require('@bsi-cx/design-build'); 

module.exports = cx.contentElement
  .withElementId('box')
  .withLabel('Box')
  .withDescription('')
  .withIcon(Icon.SNIPPET)
  .withFile(require('./template.twig'));