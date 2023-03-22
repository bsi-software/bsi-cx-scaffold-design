const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('full-width')
    .withIcon(Icon.ONE_COLUMN)
    .withLabel('Full Width')
    .withDescription('Container')
    .withFile(require('./template.twig'))
    .withDropzones(
        cx.dropzone
            .withDropzone('full-width-layout-container')
            .withAllowedElements(require('../one-column'))
    );
