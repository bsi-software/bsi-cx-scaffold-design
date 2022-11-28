const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('teaser-full-width')
    .withIcon(Icon.ONE_COLUMN)
    .withLabel('Teaser')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.image
            .withId('fa2bf404-3f0d-11ed-b878-0242ac120002')
            .withLabel('Laptop Image'),
        cx.part.plainText
            .withId('ecbe1628-44a6-11ed-b878-0242ac120002')
            .withLabel('Teaser Title'),
        cx.part.image
            .withId('fa2bf512-3f0d-11ed-b878-0242ac120002')
            .withLabel('Image Link Linkedin')
    );
