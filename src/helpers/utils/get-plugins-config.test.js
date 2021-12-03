const { cosmiconfig } = require('cosmiconfig');

const { getPluginsConfig } = require('./get-plugins-config');
const { resolvePluginConfig } = require('./resolve-plugin-config');

jest.mock('cosmiconfig');
jest.mock('./resolve-plugin-config');

const mockSearchResult = (searchResult) => {
  const search = () => Promise.resolve(searchResult);
  cosmiconfig.mockReturnValue({ search });
};

describe('getPluginsConfig', () => {
  it('should return the config for commit analyzer and release notes generator', async () => {
    const plugins = ['dummy-plugin'];
    mockSearchResult({ config: { plugins } });
    resolvePluginConfig.mockImplementation((config, pluginName) => pluginName);

    const result = await getPluginsConfig();

    expect(resolvePluginConfig).toHaveBeenCalledWith(plugins, '@semantic-release/commit-analyzer');
    expect(resolvePluginConfig).toHaveBeenCalledWith(plugins, '@semantic-release/release-notes-generator');
    expect(result).toEqual([
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
    ]);
  });
});
