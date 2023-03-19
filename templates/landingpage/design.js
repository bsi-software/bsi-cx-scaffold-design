require('./styles/styles.scss');

const { cx, Locale } = require('@bsi-cx/design-build');

module.exports = cx.design
    .withTitle('Landingpage German Prospects')
    .withAuthor('BSI Business Systems Integration AG')
    .withDate('03.07.2023')
    .withPreviewImage('static/preview.png')
    .withDefaultLocale(Locale.EN)
    .withLocales(Locale.EN, Locale.DE)
    .withContentElementGroups(
        cx.contentElementGroup
            .withGroupId('elements')
            .withLabel('Elements')
            .withContentElements(
                require('../landingpage/content-elements/elements/button'),
                require('../landingpage/content-elements/elements/divider'),
                require('../landingpage/content-elements/elements/image-cropped'),
                require('../landingpage/content-elements/elements/image-normal'),
                require('../landingpage/content-elements/elements/language-switcher'),
                require('../landingpage/content-elements/elements/link'),
                require('../landingpage/content-elements/elements/spacer'),
                require('../landingpage/content-elements/elements/subtitle'),
                require('../landingpage/content-elements/elements/text-formatted'),
                require('../landingpage/content-elements/elements/text-plain'),
                require('../landingpage/content-elements/elements/title')
            ),
        cx.contentElementGroup
            .withGroupId('layouts')
            .withLabel('Layouts')
            .withContentElements(
                require('../landingpage/content-elements/layout/full-width'),
                require('../landingpage/content-elements/layout/one-column'),
                require('../landingpage/content-elements/layout/one-one'),
                require('../landingpage/content-elements/layout/one-one-reverse'),
                require('../landingpage/content-elements/layout/one-two'),
                require('../landingpage/content-elements/layout/one-two-reverse'),
                require('../landingpage/content-elements/layout/two-one'),
                require('../landingpage/content-elements/layout/two-one-reverse')
            ),
        cx.contentElementGroup
            .withGroupId('sections')
            .withLabel('Sections')
            .withContentElements(
                require('../landingpage/content-elements/sections/top-bar'),
                require('../landingpage/content-elements/sections/visual'),
                require('../landingpage/content-elements/sections/form'),
                require('../landingpage/content-elements/sections/socials')
            ),
        cx.contentElementGroup
            .withGroupId('form')
            .withLabel('Form')
            .withContentElements(
                require('../landingpage/content-elements/form/address-full'),
                require('../landingpage/content-elements/form/checkbox'),
                require('../landingpage/content-elements/form/checkbox-block'),
                require('../landingpage/content-elements/form/city'),
                require('../landingpage/content-elements/form/city-zip'),
                require('../landingpage/content-elements/form/country'),
                require('../landingpage/content-elements/form/dropdown'),
                require('../landingpage/content-elements/form/dropdown-text'),
                require('../landingpage/content-elements/form/email'),
                require('../landingpage/content-elements/form/firm'),
                require('../landingpage/content-elements/form/form-title'),
                require('../landingpage/content-elements/form/input-field'),
                require('../landingpage/content-elements/form/name-first'),
                require('../landingpage/content-elements/form/name-full'),
                require('../landingpage/content-elements/form/name-last'),
                require('../landingpage/content-elements/form/radiobuttons'),
                require('../landingpage/content-elements/form/rating'),
                require('../landingpage/content-elements/form/street-house'),
                require('../landingpage/content-elements/form/telefon'),
                require('../landingpage/content-elements/form/code'),
                require('../landingpage/content-elements/form/textarea')
            )
    )
    .withDropzones(
        cx.dropzone.withDropzone('header-zone').withAllowedElements(
            require('../landingpage/content-elements/elements/spacer'),
            require('../landingpage/content-elements/sections/top-bar'),
            require('../landingpage/content-elements/sections/visual')
            // require('../landingpage/content-elements/layout/one-column')
        ),
        cx.dropzone
            .withDropzone('title-zone')
            .withAllowedElements(
                require('../landingpage/content-elements/elements/title')
            ),
        cx.dropzone.withDropzone('body-zone').withAllowedElements(
            // require('../landingpage/content-elements/layout/one-one'),
            // require('../landingpage/content-elements/layout/one-one-reverse'),
            // require('../landingpage/content-elements/layout/one-two'),
            // require('../landingpage/content-elements/layout/one-two-reverse'),
            // require('../landingpage/content-elements/layout/two-one'),
            // require('../landingpage/content-elements/layout/two-one-reverse'),
            require('../landingpage/content-elements/sections/form'),
            require('../landingpage/content-elements/elements/spacer'),
            require('../landingpage/content-elements/elements/image-cropped'),
            require('../landingpage/content-elements/elements/image-normal'),
            require('../landingpage/content-elements/elements/button'),
            require('../landingpage/content-elements/elements/text-formatted'),
            require('../landingpage/content-elements/elements/text-plain'),
            require('../landingpage/content-elements/elements/subtitle'),
            require('../landingpage/content-elements/sections/visual')
        )
    );
