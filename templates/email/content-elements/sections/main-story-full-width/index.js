const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('main-story-full-width')
    .withIcon(Icon.TWO_COLUMNS)
    .withLabel('Main Story Section')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.plainText
            .withId('1234016c-4617-11ed-b878-0242ac120002')
            .withLabel('Main Story Title'),
        cx.part.image
            .withId('12340068-4617-11ed-b878-0242ac120002')
            .withLabel('Medium Story Image'),
        cx.part.plainText
            .withId('1233ff50-4617-11ed-b878-0242ac120002')
            .withLabel('Main Story Text-1'),
        cx.part.plainText
            .withId('1233fe24-4617-11ed-b878-0242ac120002')
            .withLabel('Main Story Text-2'),
        cx.part.link
            .withId('1233fbe0-4617-11ed-b878-0242ac120002')
            .withLabel('Main Story Button')
    )
    .withDropzones(
        cx.dropzone
            .withDropzone('d025b380-5514-11ed-bdc3-0242ac120002')
            .withAllowedElements(require('../../elements/image-full-width'))
    );
