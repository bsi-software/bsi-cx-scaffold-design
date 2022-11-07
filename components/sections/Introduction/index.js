const { cx, Icon } = require('@bsi-cx/design-build')

module.exports = cx.contentElement
    .withElementId('introduction')
    .withLabel('Introduction')
    .withDescription('')
    .withIcon(Icon.SNIPPET)
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.formattedText.withLabel('Introduction Title'),
        cx.part.formattedText.withLabel('Text Editor')
    )
