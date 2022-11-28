const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('h1')
    .withIcon(Icon.Text)
    .withLabel('H1 Title')
    .withFile(require('./template.twig'));
