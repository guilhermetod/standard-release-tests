const { releaseRules } = require('./tools/utils/release-rules');

module.exports = {
  branches: ['main'],
  plugins: [
    ['@semantic-release/commit-analyzer', { preset: 'conventionalcommits', releaseRules }],
    ['@semantic-release/release-notes-generator', { preset: 'conventionalcommits' }],
    ['@semantic-release/npm', { npmPublish: false }],
    '@semantic-release/git',
    '@semantic-release/github',
  ],
};
