// element.image-cropped.label=Cropped Image
// element.image-cropped.description=Original Image used
// element.image-cropped.icon=image

const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('image-cropped')
    .withIcon(Icon.IMAGE)
    .withLabel('Cropped Image')
    .withDescription('Original Image used')
    .withFile(require('./template.twig'))
    .withStyleConfigs(
        require('../../../configs/styles/cropped-container-height'),
        require('../../../configs/styles/cropped-container-width'),
        require('../../../configs/styles/cropped-fill'),
        require('../../../configs/styles/cropped-horizontal'),
        require('../../../configs/styles/cropped-vertical')
    )
    .withParts(cx.part.image.withLabel('Image'));
