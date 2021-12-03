const actionsCore = require('@actions/core');
const semanticRelease = require('semantic-release');
const {cosmiconfig} = require('cosmiconfig');

function findPluginConfig(plugins, pluginName) {
  return plugins.find((plugin) => (
    Array.isArray(plugin)
      ? plugin[0] === pluginName
      : plugin.name === pluginName
  )) || pluginName
}

async function getPluginsConfig() {
  const {config} = await cosmiconfig('release').search();

  if (!config) {
    throw new Error('No config found');
  }

  const {plugins} = config;

  const commitAnalyzerConfig = findPluginConfig(plugins, '@semantic-release/commit-analyzer');
  const releaseNotesGeneratorConfig = getPluginsConfig(plugins, '@semantic-release/release-notes-generator');

  console.log({
    commitAnalyzerConfig,
    releaseNotesGeneratorConfig
  });

  return [
    commitAnalyzerConfig,
    releaseNotesGeneratorConfig,
  ]
}

async function run() {
  const { nextRelease } = await semanticRelease({
     ci: false,
     dryRun: true,
     plugins: getPluginsConfig(),
   }, {
    env: {
       ...process.env,
        GITHUB_ACTIONS: false,
      },
  });
  
  actionsCore.setOutput('releaseNotes', nextRelease.notes);
}

run();
