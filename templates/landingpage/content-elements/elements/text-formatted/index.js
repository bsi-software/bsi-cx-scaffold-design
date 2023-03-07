const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('text-formatted')
    .withIcon(Icon.TEXT)
    .withLabel('Formatted Text')
    .withDescription('With special formats')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.formattedText
            .withLabel('Formatted Text')
            .withHtmlEditorConfig(
                require('../../../configs/editor/formatted-text')
            )
    );
