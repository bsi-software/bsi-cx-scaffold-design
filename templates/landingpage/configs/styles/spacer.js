const { cx } = require('@bsi-cx/design-build');

module.exports = cx.style
    .withIdentifier('nnbnbnbx')
    .withLabel('Spacer Height')
    .withCssClasses(
        cx.cssClass.withLabel('30px').withCssClass('spacer-30'),
        cx.cssClass.withLabel('20px').withCssClass('spacer-20'),
        cx.cssClass.withLabel('10px').withCssClass('spacer-10')
    );
