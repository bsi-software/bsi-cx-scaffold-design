const {cx, Icon} = require('@bsi-cx/design-build'); 

module.exports = cx.contentElement
  .withElementId('lead')
  .withLabel('Lead')
  .withDescription('')
  .withIcon(Icon.SNIPPET)
  .withFile(require('./template.twig'));