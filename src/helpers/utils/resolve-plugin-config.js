function resolvePluginConfig(plugins, pluginName) {
  const foundConfig = plugins.find((plugin) => (
    Array.isArray(plugin)
      ? plugin[0] === pluginName
      : plugin === pluginName
  ));

  return foundConfig ?? pluginName;
}

module.exports = { resolvePluginConfig };
