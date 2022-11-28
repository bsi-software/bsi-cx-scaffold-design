const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('divider')
    .withIcon(Icon.DIVIDER)
    .withLabel('Divider')
    .withFile(require('./template.twig'));
