import { setOutput } from '@actions/core';
import { mocked } from 'jest-mock';
import semanticRelease from 'semantic-release';

import { outputPreview } from '@src/core/output-preview';
import { getPluginsConfig } from '@src/helpers/utils/get-plugins-config';

jest.mock('@actions/core');
jest.mock('semantic-release');
jest.mock('@src/helpers/utils/get-plugins-config');

describe('outputPreview', () => {
  const plugins = ['dummy-plugin'];

  it('should generate the release notes and output it to GitHub Actions', async () => {
    const notes = 'Release notes';
    const nextRelease = { notes };
    mocked(semanticRelease).mockResolvedValue({ nextRelease } as semanticRelease.Result);
    mocked(getPluginsConfig).mockResolvedValue(plugins);

    await outputPreview();

    expect(semanticRelease).toHaveBeenCalledWith(
      { ci: false, dryRun: true, plugins },
      { env: { ...process.env, GITHUB_ACTIONS: '' } },
    );
    expect(setOutput).toHaveBeenCalledWith('releaseNotes', notes);
  });
});
