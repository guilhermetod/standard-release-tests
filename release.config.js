module.exports = {
  branches: [
    { name: 'main' },
    { name: 'devel', prerelase: 'beta' },
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    ['@semantic-release/npm', { npmPublish: false }],
    '@semantic-release/git',
    '@semantic-release/github',
  ],
}
