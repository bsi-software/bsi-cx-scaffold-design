const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('address-full')
    .withIcon(Icon.TEXT)
    .withLabel('City + Country Line')
    .withDescription('For Use In Form')
    .withFile(require('./template.twig'))
    .withParts(cx.part.formField.withLabel('Field Details'))
    .withDropzones(
        cx.dropzone
            .withDropzone('address-full-container-one')
            .withAllowedElements(require('../city')),
        cx.dropzone
            .withDropzone('address-full-container-two')
            .withAllowedElements(require('../country'))
    );
