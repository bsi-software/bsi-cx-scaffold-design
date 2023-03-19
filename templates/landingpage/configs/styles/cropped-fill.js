const { cx } = require('@bsi-cx/design-build');

module.exports = cx.style
    .withIdentifier('qwedjfhksjdhutton')
    .withLabel('Image Fills...')
    .withCssClasses(
        cx.cssClass
            .withLabel('Width Default')
            .withCssClass('cropped-positioning-max-width'),
        cx.cssClass
            .withLabel('Hight Default')
            .withCssClass('cropped-positioning-max-height')
    );
