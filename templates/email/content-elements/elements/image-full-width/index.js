const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('image-full-width')
    .withIcon(Icon.Text)
    .withLabel('Image full width')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.image
            .withId('6987a230-448b-11ed-b878-0242ac120002')
            .withLabel('Image')
    );
