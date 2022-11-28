const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('footer')
    .withIcon(Icon.ONE_COLUMN)
    .withLabel('Footer')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.image
            .withId('c68df184-44b6-11ed-b878-0242ac120002')
            .withLabel('Linkedin Link'),
        cx.part.image
            .withId('c68dfa80-44b6-11ed-b878-0242ac120002')
            .withLabel('Twitter Link'),
        cx.part.image
            .withId('d243dcf8-44b3-11ed-b878-0242ac120002')
            .withLabel('Logo'),
        cx.part.plainText
            .withId('5a87c380-44b5-11ed-b878-0242ac120002')
            .withLabel('Street'),
        cx.part.plainText
            .withId('5a87c1f0-44b5-11ed-b878-0242ac120002')
            .withLabel('Post-code'),
        cx.part.plainText
            .withId('5a87c038-44b5-11ed-b878-0242ac120002')
            .withLabel('Country'),
        cx.part.link
            .withId('48e8c0c2-3f09-11ed-b878-0242ac120002')
            .withLabel('Phone Number Link'),
        cx.part.link
            .withId('48e8bf82-3f09-11ed-b878-0242ac120002')
            .withLabel('Email Address'),
        cx.part.link
            .withId('d243e6da-44b3-11ed-b878-0242ac120002')
            .withLabel('Unsubscribe'),
        cx.part.link
            .withId('d243e068-44b3-11ed-b878-0242ac120002')
            .withLabel('Data protection'),
        cx.part.link
            .withId('d243e3ce-44b3-11ed-b878-0242ac120002')
            .withLabel('Terms of use'),
        cx.part.link
            .withId('d243e590-44b3-11ed-b878-0242ac120002')
            .withLabel('Imprint')
    );
