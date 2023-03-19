const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('button')
    .withIcon(Icon.CHAIN)
    .withLabel('Button')
    .withDescription('With Link')
    .withFile(require('./template.twig'))
    .withStyleConfigs(require('../../../configs/styles/button-alignment'))
    .withParts(cx.part.link.withLabel('Link Details'));
