const { cx } = require('@bsi-cx/design-build');

module.exports = cx.style
    .withIdentifier('qwertyBuklklkltton')
    .withLabel('Containet Height')
    .withCssClasses(
        cx.cssClass.withLabel('50%').withCssClass('cropped-image-height-half'),
        cx.cssClass
            .withLabel('100% Default')
            .withCssClass('cropped-image-height-full'),
        cx.cssClass.withLabel('100px').withCssClass('cropped-image-height-100'),
        cx.cssClass.withLabel('200px').withCssClass('cropped-image-height-200'),
        cx.cssClass.withLabel('300px').withCssClass('cropped-image-height-300'),
        cx.cssClass.withLabel('400px').withCssClass('cropped-image-height-400')
    );
