require('./styles/styles.scss');

const {cx, Locale} = require('@bsi-cx/design-build');

module.exports = cx.design
  .withTitle('Landingpage Scaffold')
  .withAuthor('BSI Business Systems Integration AG')
  .withDate('20.05.2022')
  .withPreviewImage(require('./thumbnail.png'))
  .withDefaultLocale(Locale.EN)
  .withLocales(
    Locale.EN,
    Locale.DE)
  .withContentElementGroups(
    cx.contentElementGroup
      .withGroupId('content')
      .withLabel('Content')
      .withContentElements(
        require('./content-elements/content/title'),
        require('./content-elements/content/text')),
    cx.contentElementGroup
      .withGroupId('layout')
      .withLabel('Layout')
      .withContentElements(
        require('./content-elements/layout/columns')))
  .withDropzones(
    cx.dropzone
      .withDropzone('a1683342-d4a7-4c26-924e-bce162c4399f')
      .withAllowedElements(
        require('./content-elements/content/title'),
        require('./content-elements/content/text'),
        require('./content-elements/layout/columns')));
