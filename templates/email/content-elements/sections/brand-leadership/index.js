const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('brand-leadership')
    .withIcon(Icon.TWO_COLUMNS)
    .withLabel('Brand Leadership')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.plainText
            .withId('2138483e-4681-11ed-b878-0242ac120002')
            .withLabel('Brand Text'),
        cx.part.image
            .withId('21384988-4681-11ed-b878-0242ac120002')
            .withLabel('Brand Image')
    );
