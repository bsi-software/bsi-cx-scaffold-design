const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('large-event-full-width')
    .withIcon(Icon.TWO_COLUMNS)
    .withLabel('Large Event Section')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.image
            .withId('91171a64-4649-11ed-b878-0242ac120002')
            .withLabel('Large Event Image'),
        cx.part.plainText
            .withId('9117192e-4649-11ed-b878-0242ac120002')
            .withLabel('Date-1'),
        cx.part.plainText
            .withId('91171802-4649-11ed-b878-0242ac120002')
            .withLabel('Date-2'),
        cx.part.plainText
            .withId('911711c2-4649-11ed-b878-0242ac120002')
            .withLabel('Medium Story Title'),
        cx.part.plainText
            .withId('91170fd8-4649-11ed-b878-0242ac120002')
            .withLabel('Large Event Text'),
        cx.part.link
            .withId('91170bb4-4649-11ed-b878-0242ac120002')
            .withLabel('Large Event Button')
    )
    .withDropzones(
        cx.dropzone
            .withDropzone('d025b9b6-5514-11ed-bdc3-0242ac120002')
            .withAllowedElements(require('../../elements/image-full-width'))
    );
