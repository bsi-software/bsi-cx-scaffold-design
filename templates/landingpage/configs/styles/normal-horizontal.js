const { cx } = require('@bsi-cx/design-build');

module.exports = cx.style
    .withIdentifier('oooogygy')
    .withLabel('Horizontal Alignment')
    .withCssClasses(
        cx.cssClass
            .withLabel('Left ')
            .withCssClass('content-positioning-horizontal-start'),
        cx.cssClass
            .withLabel('Centered Default')
            .withCssClass('content-positioning-horizontal-centered'),
        cx.cssClass
            .withLabel('Right')
            .withCssClass('content-positioning-horizontal-end')
    );
