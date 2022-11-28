const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('medium-event')
    .withIcon(Icon.TWO_COLUMNS)
    .withLabel('Medium Event')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.plainText
            .withId('088595d2-460c-11ed-b878-0242ac120002')
            .withLabel('Date-1'),
        cx.part.plainText
            .withId('088594d8-460c-11ed-b878-0242ac120002')
            .withLabel('Date-2'),
        cx.part.plainText
            .withId('088593ca-460c-11ed-b878-0242ac120002')
            .withLabel('Date-3'),
        cx.part.plainText
            .withId('0885928a-460c-11ed-b878-0242ac120002')
            .withLabel('Medium Story Title'),
        cx.part.link
            .withId('08858f9c-460c-11ed-b878-0242ac120002')
            .withLabel('Medium Story Link')
    );
