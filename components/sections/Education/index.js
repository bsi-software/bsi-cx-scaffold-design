const { cx, Icon } = require('@bsi-cx/design-build')

module.exports = cx.contentElement
    .withElementId('education')
    .withLabel('Education')
    .withDescription('')
    .withIcon(Icon.SNIPPET)
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.plainText.withLabel('Label'),
        cx.part.backgroundImage.withLabel('Background Image'),
        cx.part.plainText.withLabel('Subheading'),
        cx.part.plainText.withLabel('Number'),
        cx.part.formattedText.withLabel('Text'),
        cx.part.link.withLabel('Button')
    )
