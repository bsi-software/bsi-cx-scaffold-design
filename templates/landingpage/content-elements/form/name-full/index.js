const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('name-full')
    .withIcon(Icon.FORMFIELD)
    .withLabel('First + Last Name Line')
    .withDescription('For Use In Form')
    .withFile(require('./template.twig'))
    .withParts(cx.part.formField.withLabel('Form Details'))
    .withDropzones(
        cx.dropzone
            .withDropzone('name-first-container-one')
            .withAllowedElements(require('../name-first')),
        cx.dropzone
            .withDropzone('name-last-container-two')
            .withAllowedElements(require('../name-last'))
    );
