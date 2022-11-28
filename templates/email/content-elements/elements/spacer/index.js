const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('spacer-30')
    .withIcon(Icon.DIVIDER)
    .withLabel('Spacer')
    .withFile(require('./template.twig'));
