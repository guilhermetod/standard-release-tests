module.exports = {
  branches: [
    { name: 'main' },
    { name: 'devel', prerelase: 'beta' },
  ],
  plugins: [
    ['@semantic-release/commit-analyzer', {
      preset: 'angular',
      releaseRules: [
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
      ],
    }],
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    ['@semantic-release/npm', { npmPublish: false }],
    '@semantic-release/git',
    '@semantic-release/github',
  ],
}
