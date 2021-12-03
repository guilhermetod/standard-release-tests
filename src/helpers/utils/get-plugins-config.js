const { cosmiconfig } = require('cosmiconfig');

const { resolvePluginConfig } = require('./resolve-plugin-config');

async function getPluginsConfig() {
  const result = await cosmiconfig('release').search();
  const plugins = result?.config?.plugins ?? [];

  return [
    resolvePluginConfig(plugins, '@semantic-release/commit-analyzer'),
    resolvePluginConfig(plugins, '@semantic-release/release-notes-generator'),
  ];
}

module.exports = { getPluginsConfig };
