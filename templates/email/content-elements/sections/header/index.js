const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('header')
    .withIcon(Icon.TWO_COLUMNS)
    .withLabel('Header')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.image
            .withId('213846a4-4681-11ed-b878-0242ac120002')
            .withLabel('Logo Header'),
        cx.part.link
            .withId('2138451e-4681-11ed-b878-0242ac120002')
            .withLabel('Link WebVersion')
    );
