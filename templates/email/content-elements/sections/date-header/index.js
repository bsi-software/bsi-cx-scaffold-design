const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('date-header')
    .withIcon(Icon.TWO_COLUMNS)
    .withLabel('Date Header')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.plainText
            .withId('b9b0fac8-449e-11ed-b878-0242ac120002')
            .withLabel('Date-1'),
        cx.part.plainText
            .withId('b9b0f6b8-449e-11ed-b878-0242ac120002')
            .withLabel('Date-2'),
        cx.part.plainText
            .withId('b9b0f140-449e-11ed-b878-0242ac120002')
            .withLabel('Date-3'),
        cx.part.formattedText
            .withId('3a32bee2-457c-11ed-b878-0242ac120002')
            .withLabel('Header Main Text Event')
            .withHtmlEditorConfig(require('../../../../formatted-text-config'))
    );
