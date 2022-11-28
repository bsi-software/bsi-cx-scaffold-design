const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('cta-full-width')
    .withIcon(Icon.ONE_COLUMN)
    .withLabel('CTA Section')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.plainText
            .withId('5514aad4-4547-11ed-b878-0242ac120002')
            .withLabel('Get in Touch Subtitle'),
        cx.part.formattedText
            .withId('5514a412-4547-11ed-b878-0242ac120002')
            .withLabel('Get in Touch Title'),
        cx.part.link
            .withId('5514ac5a-4547-11ed-b878-0242ac120002')
            .withLabel('Get in Touch Link')
    );
