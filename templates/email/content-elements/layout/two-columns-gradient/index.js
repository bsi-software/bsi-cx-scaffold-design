require('./styles.scss');

const { cx, Icon } = require('@bsi-cx/design-build');

const element = cx.contentElement;

const columnElements = [
    element,
    require('../../elements/plain-text'),
    require('../../elements/h3'),
];

module.exports = element
    .withElementId('two-columns-gradient')
    .withIcon(Icon.TWO_COLUMNS)
    .withLabel('Columns Gradient')
    .withFile(require('./template.twig'))
    .withDropzones(
        cx.dropzone
            .withDropzone('columnRight')
            .withAllowedElements(...columnElements),
        cx.dropzone
            .withDropzone('columnLeft')
            .withAllowedElements(...columnElements)
    );
