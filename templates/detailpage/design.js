require('./styles/styles.scss');

const {cx, Locale} = require('@bsi-cx/design-build');

module.exports = cx.design
  .withTitle('Detailpage Digital Magazine')
  .withAuthor('BSI Business Systems Integration AG')
  .withDate('20.05.2022')
  .withPreviewImage(require('./thumbnail.png'))
  .withDefaultLocale(Locale.EN)
  .withLocales(
    Locale.EN,
    Locale.DE)
  .withContentElementGroups(
    cx.contentElementGroup
      .withGroupId('sections')
      .withLabel('Sections')
      .withContentElements(
        require('../../components/sections/Header'),
        require('../../components/sections/DetailPageHero'),
        require('../../components/sections/TextBlock'),
        require('../../components/sections/Subheading'),
        require('../../components/sections/Box'),
        require('../../components/sections/CaseBlock'),
        require('../../components/sections/Figure'),
        require('../../components/sections/Quote'),
        require('../../components/sections/InterviewBlock'),
        require('../../components/sections/ArticleTeaser'),
        require('../../components/sections/BackToTop'),
        require('../../components/sections/Contact'),
        require('../../components/sections/Footer')),
    cx.contentElementGroup
      .withGroupId('elements')
      .withLabel('Elements')
      .withContentElements(
        require('../../components/elements/Lead')));
