const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('h3')
    .withIcon(Icon.Text)
    .withLabel('H3 Title')
    .withFile(require('./template.twig'))
    .withParts(cx.part.plainText.withLabel('H3'));
