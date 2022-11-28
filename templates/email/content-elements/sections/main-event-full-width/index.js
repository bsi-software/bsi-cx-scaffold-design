const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('main-event-full-width')
    .withIcon(Icon.TWO_COLUMNS)
    .withLabel('Main Event Section')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.image
            .withId('1a847a4c-463d-11ed-b878-0242ac120002')
            .withLabel('Medium Story Image'),
        cx.part.plainText
            .withId('1a847c22-463d-11ed-b878-0242ac120002')
            .withLabel('Main Event Text-1'),
        cx.part.plainText
            .withId('1a847880-463d-11ed-b878-0242ac120002')
            .withLabel('Main Event Text-2'),
        cx.part.plainText
            .withId('1a847682-463d-11ed-b878-0242ac120002')
            .withLabel('Main Event Location'),
        cx.part.plainText
            .withId('1a8470ba-463d-11ed-b878-0242ac120002')
            .withLabel('Main Event Text-3'),
        cx.part.plainText
            .withId('1a846ebc-463d-11ed-b878-0242ac120002')
            .withLabel('Main Event Speaker'),
        cx.part.plainText
            .withId('fa11370e-463d-11ed-b878-0242ac120002')
            .withLabel('Main Event Themen'),
        cx.part.plainText
            .withId('fa1134e8-463d-11ed-b878-0242ac120002')
            .withLabel('Main Event Themen'),
        cx.part.plainText.withId('').withLabel('Main Event Themen'),
        cx.part.link
            .withId('1a846a5c-463d-11ed-b878-0242ac120002')
            .withLabel('Main Story Button')
    )
    .withDropzones(
        cx.dropzone
            .withDropzone('d025b542-5514-11ed-bdc3-0242ac120002')
            .withAllowedElements(require('../../elements/image-full-width'))
    );
