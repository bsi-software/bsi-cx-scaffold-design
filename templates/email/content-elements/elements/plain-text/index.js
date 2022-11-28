const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('text-main')
    .withIcon(Icon.Text)
    .withLabel('Plain Text')
    .withFile(require('./template.twig'));
