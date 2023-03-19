const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('image-normal')
    .withIcon(Icon.IMAGE)
    .withLabel('Image')
    .withDescription('100% Width or 100% Height')
    .withFile(require('./template.twig'))
    .withStyleConfigs(
        require('../../../configs/styles/normal-container-height'),
        require('../../../configs/styles/normal-container-width'),
        require('../../../configs/styles/normal-full-image'),
        require('../../../configs/styles/normal-horizontal'),
        require('../../../configs/styles/normal-vertical')
    )
    .withParts(cx.part.image.withLabel('Image'));
