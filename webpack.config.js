const path = require('path');

const {
    BuildConfig,
    ModuleConfig,
    WebpackConfigBuilder,
    Version,
    DesignType,
} = require('@bsi-cx/design-build');

// module.exports =
//   WebpackConfigBuilder.fromConfigs(
//     new BuildConfig()
//       .withName(
//         "email",
//       )
//       .withVersion(
//         "1.0.0",
//       )
//       .withDesignType(
//         DesignType.EMAIL,
//       )
//       .withTargetVersion(
//         Version.CX_1_3,
//       )
//       .withRootPath(
//         path.resolve(
//           __dirname,
//           "templates",
//           "email",
//         ),
//       )
//       .withPropertiesFilePath(
//         "properties.js",
//       ),
//   );

const emailBuildConfig = new BuildConfig()
    .withName('email')
    .withVersion('1.0.0')
    .withDesignType(DesignType.EMAIL)
    .withTargetVersion(Version.CX_1_3)
    .withRootPath(path.resolve(__dirname, 'templates', 'email'))
    .withPropertiesFilePath('properties.js');

module.exports = WebpackConfigBuilder.fromConfigs(
    emailBuildConfig
        .clone()
        .withName('master-template-cx-22.0-email-de')
        .withPropertiesFilePath('properties-de.js'),
    emailBuildConfig
        .clone()
        .withName('master-template-cx-22.0-email-en')
        .withPropertiesFilePath('properties-en.js')
);
