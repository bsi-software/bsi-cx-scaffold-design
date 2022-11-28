const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('content-text')
    .withIcon(Icon.TEXT)
    .withLabel('Text')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.plainText
            .withId('e3b03b5a-7882-4ed5-8683-d811f488b663')
            .withLabel('Text')
    );
