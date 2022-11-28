const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('small-story')
    .withIcon(Icon.ONE_COLUMN)
    .withLabel('Small Story')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.formattedText
            .withId('0c4d650e-4563-11ed-b878-0242ac120002')
            .withLabel('Title Link')
            .withHtmlEditorConfig(require('../../../../formatted-text-config'))
    );
