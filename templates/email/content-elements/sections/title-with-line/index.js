const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('title-with-line')
    .withIcon(Icon.ONE_COLUMN)
    .withLabel('Title With Line Section')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.image
            .withId('7649e65c-5432-11ed-bdc3-0242ac120002')
            .withLabel('Image Gradient Line'),
        cx.part.plainText
            .withId('7649e454-5432-11ed-bdc3-0242ac120002')
            .withLabel('Subtitle With Line')
    );
