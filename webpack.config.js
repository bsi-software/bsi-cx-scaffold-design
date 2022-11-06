const path = require('path');

const {BuildConfig, ModuleConfig, WebpackConfigBuilder, Version, DesignType} = require('@bsi-cx/design-build');

module.exports = WebpackConfigBuilder.fromConfigs(
  new BuildConfig()
    .withName('detailpage')
    .withVersion('1.0.0')
    .withDesignType(DesignType.LANDINGPAGE)
    .withTargetVersion(Version.CX_1_3)
    .withRootPath(path.resolve(__dirname, 'templates', 'detailpage'))
    .withPropertiesFilePath('properties.js')
    .withModules(
      new ModuleConfig()
        .withName('main')
        .withPath('main.js')),
  new BuildConfig()
    .withName('overviewpage')
    .withVersion('1.0.0')
    .withDesignType(DesignType.LANDINGPAGE)
    .withTargetVersion(Version.CX_1_3)
    .withRootPath(path.resolve(__dirname, 'templates', 'overviewpage'))
    .withPropertiesFilePath('properties.js')
    .withModules(
      new ModuleConfig()
        .withName('main')
        .withPath('main.js')));
