const path = require('path');

const {
    BuildConfig,
    ModuleConfig,
    WebpackConfigBuilder,
    Version,
    DesignType,
} = require('@bsi-cx/design-build');

const landingpageBuildConfig = new BuildConfig()
    .withName('German_Prospects')
    .withVersion('1.0.0')
    .withDesignType(DesignType.LANDINGPAGE)
    .withTargetVersion(Version.CX_22_0)
    .withRootPath(path.resolve(__dirname, 'templates', 'landingpage'))
    .withPropertiesFilePath('properties.js')
    .withModules(new ModuleConfig().withName('main').withPath('main.js'))
    .withAdditionalFilesToCopy(
        {
            from: path.resolve(__dirname, 'resources', 'img'), // copy from <project root>/files/**/*
            to: 'static/img', // copy to <output folder>/files/**/*
        },

        {
            from: path.resolve(
                __dirname,
                'templates',
                'landingpage',
                'preview.png'
            ),
            to: 'static/preview.png',
        }
    );

module.exports = WebpackConfigBuilder.fromConfigs(
    landingpageBuildConfig
        .clone()
        .withName('JB-German-prospects-de-cx-22.0')
        .withPropertiesFilePath('lang-de.js'),
    landingpageBuildConfig
        .clone()
        .withName('JB-German-prospects-en-cx-22.0')
        .withPropertiesFilePath('lang-en.js')
);
