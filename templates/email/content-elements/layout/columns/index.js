require('./styles.scss');

const { cx, Icon } = require('@bsi-cx/design-build');

const element = cx.contentElement;

const columnElements = [
    element,
    require('../../content/title'),
    require('../../content/text'),
];

module.exports = element
    .withElementId('layout-columns')
    .withIcon(Icon.TWO_COLUMNS)
    .withLabel('Columns')
    .withFile(require('./template.twig'))
    .withDropzones(
        cx.dropzone
            .withDropzone('6a5c0a6f-53a4-4e47-8d1c-e20fe57ef16e')
            .withAllowedElements(...columnElements),
        cx.dropzone
            .withDropzone('e97cd8de-1301-4c1e-82bf-a451d83e9bfb')
            .withAllowedElements(...columnElements)
    );
