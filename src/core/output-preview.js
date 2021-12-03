const { setOutput } = require('@actions/core');
const semanticRelease = require('semantic-release');

const { getPluginsConfig } = require('../helpers/utils/get-plugins-config');

async function dryRunRelease() {
  return semanticRelease({
    ci: false,
    dryRun: true,
    plugins: await getPluginsConfig(),
  }, {
    env: { ...process.env, GITHUB_ACTIONS: '' },
  });
}

async function outputPreview() {
  const result = await dryRunRelease();

  if (!result) {
    throw new Error('Failed to generate preview');
  }

  setOutput('releaseNotes', result.nextRelease.notes);
}

module.exports = { outputPreview };
