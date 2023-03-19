const { cx } = require('@bsi-cx/design-build');

module.exports = cx.style
    .withIdentifier('cmnvxnv')
    .withLabel('Containet Height')
    .withCssClasses(
        cx.cssClass.withLabel('50%').withCssClass('content-image-height-half'),
        cx.cssClass
            .withLabel('100% Default')
            .withCssClass('class.content-image-height-full'),
        cx.cssClass.withLabel('100px').withCssClass('content-image-height-100'),
        cx.cssClass.withLabel('200px').withCssClass('content-image-height-200'),
        cx.cssClass.withLabel('300px').withCssClass('content-image-height-300'),
        cx.cssClass.withLabel('400px').withCssClass('content-image-height-400')
    );
