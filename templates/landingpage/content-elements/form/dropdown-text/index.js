const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('dropdown-text')
    .withIcon(Icon.TEXT)
    .withLabel(' Dropdown Text')
    .withDescription('With special formats')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.formattedText
            .withLabel('Text Details')
            .withHtmlEditorConfig(
                require('../../../configs/editor/formatted-text')
            )
    );
