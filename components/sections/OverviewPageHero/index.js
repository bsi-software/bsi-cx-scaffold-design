const { cx, Icon } = require('@bsi-cx/design-build')

module.exports = cx.contentElement
    .withElementId('overviewpagehero')
    .withLabel('Hero')
    .withDescription('')
    .withIcon(Icon.SNIPPET)
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.backgroundImage.withLabel('Background Image'),
        cx.part.plainText.withLabel('Subheading'),
        cx.part.link.withLabel('Button'),
        cx.part.formattedText.withLabel('Title'),
        cx.part.plainText.withLabel('Scroll Indicator')
    )
