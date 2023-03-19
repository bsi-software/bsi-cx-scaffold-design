const { cx } = require('@bsi-cx/design-build');

module.exports = cx.style
    .withIdentifier('ioisrsts')
    .withLabel('Vertical Alignment')
    .withCssClasses(
        cx.cssClass
            .withLabel('Left')
            .withCssClass('content-positioning-vertical-start'),
        cx.cssClass
            .withLabel('Centered Default')
            .withCssClass('content-positioning-vertical-centered'),
        cx.cssClass
            .withLabel('Right')
            .withCssClass('content-positioning-vertical-end')
    );
