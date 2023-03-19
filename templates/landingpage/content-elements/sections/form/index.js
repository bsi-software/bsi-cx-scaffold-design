const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('form-main')
    .withIcon(Icon.SNIPPET)
    .withLabel('Form')
    .withDescription("Components in 'Form Components' Element group")
    .withFile(require('./template.twig'))
    .withParts(cx.part.form.withLabel('Form Details'))
    .withDropzones(
        cx.dropzone
            .withDropzone('form-container')
            .withAllowedElements(
                require('../../form/checkbox'),
                require('../../form/email'),
                require('../../form/dropdown'),
                require('../../form/country'),
                require('../../form/checkbox-block'),
                require('../../form/city'),
                require('../../form/city-zip'),
                require('../../form/form-title'),
                require('../../form/dropdown-text'),
                require('../../form/firm'),
                require('../../form/address-full'),
                require('../../form/telefon'),
                require('../../form/input-field'),
                require('../../form/name-first'),
                require('../../form/name-full'),
                require('../../form/name-last'),
                require('../../form/code'),
                require('../../form/radiobuttons'),
                require('../../form/street-house'),
                require('../../elements/text-plain'),
                require('../../elements/text-formatted'),
                require('../../form/textarea')
            )
    );
