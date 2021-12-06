import { setOutput } from '@actions/core';
import semanticRelease from 'semantic-release';

import { getPluginsConfig } from '@src/helpers/utils/get-plugins-config';

async function dryRunRelease(): Promise<semanticRelease.Result> {
  return semanticRelease({
    ci: false,
    dryRun: true,
    plugins: await getPluginsConfig(),
  }, {
    env: { ...process.env, GITHUB_ACTIONS: '' },
  });
}

export async function outputPreview(): Promise<void> {
  const result = await dryRunRelease();

  if (!result) {
    throw new Error('Failed to generate preview');
  }

  setOutput('releaseNotes', result.nextRelease.notes);
}
