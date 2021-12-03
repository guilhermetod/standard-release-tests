const changelogConfig = require('conventional-changelog-conventionalcommits/parser-opts')

const otherChanges = { section: 'Other Changes', hidden: false };

const commitConvention = [
  { type: 'Build', release: 'patch', ...otherChanges },
  { type: 'Chore', release: false, ...otherChanges },
  { type: 'CI', release: false, ...otherChanges },
  { type: 'Docs', release: false, ...otherChanges },
  { type: 'Feat', release: 'minor', section: 'Features' },
  { type: 'Fix', release: 'patch', section: 'Bug Fixes' },
  { type: 'Perf', release: 'patch', ...otherChanges },
  { type: 'Refactor', release: 'patch', ...otherChanges },
  { type: 'Revert', release: 'patch', ...otherChanges },
  { type: 'Style', release: false, ...otherChanges },
  { type: 'Test', release: false, ...otherChanges },
];

const releaseRules = commitConvention.map(({ type, release }) => ({ type, release }));

const types = commitConvention.map(({ type, section }) => ({ type: type.toLowerCase(), section }));

module.exports = {
  branches: [
    { name: 'main' },
    { name: 'devel', prerelase: 'beta' },
  ],
  plugins: [
    ['@semantic-release/commit-analyzer', { preset: 'conventionalcommits', releaseRules }],
    ['@semantic-release/release-notes-generator', { preset: 'conventionalcommits', presetConfig: changelogConfig({types}) }],
    '@semantic-release/changelog',
    ['@semantic-release/npm', { npmPublish: false }],
    '@semantic-release/git',
    '@semantic-release/github',
  ],
}
