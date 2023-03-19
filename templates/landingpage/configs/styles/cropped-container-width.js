const { cx } = require('@bsi-cx/design-build');

module.exports = cx.style
    .withIdentifier('qwertyhkjhkjButton')
    .withLabel('Container Width')
    .withCssClasses(
        cx.cssClass.withLabel('20%').withCssClass('cropped-image-width-fifth'),
        cx.cssClass
            .withLabel('25%')
            .withCssClass('cropped-image-width-quarter'),
        cx.cssClass.withLabel('50%').withCssClass('cropped-image-width-half'),
        cx.cssClass
            .withLabel('75%')
            .withCssClass('cropped-image-width-three-quarters'),
        cx.cssClass
            .withLabel('100% Default')
            .withCssClass('cropped-image-width-full')
    );
