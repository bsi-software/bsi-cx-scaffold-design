const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('large-story-full-width')
    .withIcon(Icon.TWO_COLUMNS)
    .withLabel('Large Story Section')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.image
            .withId('d10e62ea-4643-11ed-b878-0242ac120002')
            .withLabel('Large Story Image'),
        cx.part.plainText
            .withId('d10e5d9a-4643-11ed-b878-0242ac120002')
            .withLabel('Large Story Title'),
        cx.part.plainText
            .withId('d10e5bd8-4643-11ed-b878-0242ac120002')
            .withLabel('Large Story Text'),
        cx.part.link
            .withId('d10e59f8-4643-11ed-b878-0242ac120002')
            .withLabel('Large Story Button')
    )
    .withDropzones(
        cx.dropzone
            .withDropzone('93a899b6-4435-4399-b352-61e347f79038')
            .withAllowedElements(require('../../elements/image-full-width'))
    );
