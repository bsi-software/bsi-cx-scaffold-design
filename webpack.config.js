const path = require("path");

const {
  BuildConfig,
  ModuleConfig,
  WebpackConfigBuilder,
  Version,
  DesignType,
} = require("@bsi-cx/design-build");

module.exports = WebpackConfigBuilder.fromConfigs(
  new BuildConfig()
    .withName("email")
    .withVersion("1.0.0")
    .withDesignType(DesignType.EMAIL)
    .withTargetVersion(Version.CX_1_3)
    .withRootPath(path.resolve(__dirname, "templates", "email"))
    .withPropertiesFilePath("properties.js")
);
