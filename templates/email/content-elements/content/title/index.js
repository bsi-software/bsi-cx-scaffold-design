const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('content-title')
    .withIcon(Icon.HEADING)
    .withLabel('Title')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.plainText
            .withId('06c92b29-c977-4884-a98b-85b20f586717')
            .withLabel('Title')
    );
