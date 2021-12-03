const { setOutput } = require('@actions/core');
const semanticRelease = require('semantic-release');

const { getPluginsConfig } = require('../helpers/utils/get-plugins-config');

const { outputPreview } = require('./output-preview');

jest.mock('@actions/core');
jest.mock('semantic-release');
jest.mock('../helpers/utils/get-plugins-config');

describe('outputPreview', () => {
  const plugins = ['dummy-plugin'];

  it('should generate the release notes and output it to GitHub Actions', async () => {
    const notes = 'Release notes';
    const nextRelease = { notes };
    semanticRelease.mockResolvedValue({ nextRelease });
    getPluginsConfig.mockResolvedValue(plugins);

    await outputPreview();

    expect(semanticRelease).toHaveBeenCalledWith(
      { ci: false, dryRun: true, plugins },
      { env: { ...process.env, GITHUB_ACTIONS: '' } },
    );
    expect(setOutput).toHaveBeenCalledWith('releaseNotes', notes);
  });
});
