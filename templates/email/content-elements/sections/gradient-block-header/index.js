const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('gradient-block-header')
    .withIcon(Icon.ONE_COLUMN)
    .withLabel('Gradient Block Header Section')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.image
            .withId('60884cfe-4551-11ed-b878-0242ac120002')
            .withLabel('Image Gradient Text'),
        cx.part.image
            .withId('60884e52-4551-11ed-b878-0242ac120002')
            .withLabel('Image Gradient Line')
    );
