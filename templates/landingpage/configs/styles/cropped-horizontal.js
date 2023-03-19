const { cx } = require('@bsi-cx/design-build');

module.exports = cx.style
    .withIdentifier('hdfhdhfButton')
    .withLabel('Horizontal Alignment')
    .withCssClasses(
        cx.cssClass
            .withLabel('Left ')
            .withCssClass('cropped-positioning-horizontal-start'),
        cx.cssClass
            .withLabel('Centered Default')
            .withCssClass('cropped-positioning-horizontal-centered'),
        cx.cssClass
            .withLabel('Right')
            .withCssClass('cropped-positioning-horizontal-end')
    );
