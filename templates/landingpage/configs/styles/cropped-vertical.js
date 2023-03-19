const { cx } = require('@bsi-cx/design-build');

module.exports = cx.style
    .withIdentifier('nmnmnButton')
    .withLabel('Vertical Alignment')
    .withCssClasses(
        cx.cssClass
            .withLabel('Left')
            .withCssClass('cropped-positioning-vertical-start'),
        cx.cssClass
            .withLabel('Centered Default')
            .withCssClass('cropped-positioning-vertical-centered'),
        cx.cssClass
            .withLabel('Right')
            .withCssClass('cropped-positioning-vertical-end')
    );
