const { cx } = require('@bsi-cx/design-build');

module.exports = cx.style
    .withIdentifier('qwertyButton')
    .withLabel('Alignment')
    .withCssClasses(
        cx.cssClass
            .withLabel('Left Default')
            .withCssClass('layout-button-left'),
        cx.cssClass
            .withLabel('Centered')
            .withCssClass('layout-button-centered'),
        cx.cssClass.withLabel('Right').withCssClass('layout-button-right')
    );
