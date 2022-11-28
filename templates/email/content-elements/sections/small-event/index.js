const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('small-event')
    .withIcon(Icon.TWO_COLUMNS)
    .withLabel('Small Event')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.plainText
            .withId('3a32c5f4-457c-11ed-b878-0242ac120002')
            .withLabel('Date-1'),
        cx.part.plainText
            .withId('3a32c4b4-457c-11ed-b878-0242ac120002')
            .withLabel('Date-2'),
        cx.part.formattedText
            .withId('3a32c1ee-457c-11ed-b878-0242ac120002')
            .withLabel('Text Link')
            .withHtmlEditorConfig(require('../../../../formatted-text-config'))
    );
