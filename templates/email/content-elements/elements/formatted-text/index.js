const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('formatted-text')
    .withIcon(Icon.Text)
    .withLabel('Formatted Text')
    .withFile(require('./template.twig'));
