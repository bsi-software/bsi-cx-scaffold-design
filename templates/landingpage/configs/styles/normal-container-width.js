const { cx } = require('@bsi-cx/design-build');

module.exports = cx.style
    .withIdentifier('qwertyhkjhkjButton')
    .withLabel('Container Width')
    .withCssClasses(
        cx.cssClass.withLabel('20%').withCssClass('content-image-width-fifth'),
        cx.cssClass
            .withLabel('25%')
            .withCssClass('content-image-width-quarter'),
        cx.cssClass.withLabel('50%').withCssClass('content-image-width-half'),
        cx.cssClass
            .withLabel('75%')
            .withCssClass('content-image-width-three-quarters'),
        cx.cssClass
            .withLabel('100% Default')
            .withCssClass('content-image-width-full')
    );
