const  types = [
  { type: 'Docs', release: 'patch' },
  { type: 'Chore', release: 'patch' },
  { type: 'CI', release: 'patch' },
  { type: 'Feat', release: 'minor' },
  { type: 'Fix', release: 'patch' },
  { type: 'Perf', release: 'patch' },
  { type: 'Refactor', release: 'patch' },
  { type: 'Revert', release: 'patch' },
  { type: 'Style', release: 'patch' },
  { type: 'Test', release: 'patch' },
  { type: 'WIP', release: 'patch' },
];

module.exports = {
  branches: [
    { name: 'main' },
    { name: 'devel', prerelase: 'beta' },
  ],
  plugins: [
    ['@semantic-release/commit-analyzer', { preset: 'conventionalcommits', releaseRules: types }],
    ['@semantic-release/release-notes-generator', { preset: 'conventionalcommits' }],
    '@semantic-release/changelog',
    ['@semantic-release/npm', { npmPublish: false }],
    '@semantic-release/git',
    '@semantic-release/github',
  ],
}
