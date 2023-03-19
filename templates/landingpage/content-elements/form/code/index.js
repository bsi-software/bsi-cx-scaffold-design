const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('code')
    .withIcon(Icon.FORMFIELD)
    .withLabel('Code')
    .withDescription('Just numbers')
    .withFile(require('./template.twig'))
    .withParts(cx.part.formField.withLabel('Field Details'));
