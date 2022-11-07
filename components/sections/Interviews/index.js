const { cx, Icon } = require('@bsi-cx/design-build')

module.exports = cx.contentElement
    .withElementId('interviews')
    .withLabel('Interviews')
    .withDescription('')
    .withIcon(Icon.SNIPPET)
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.plainText.withLabel('Label'),
        cx.part.formattedText.withLabel('Title'),
        cx.part.formattedText.withLabel('Text')
    )
