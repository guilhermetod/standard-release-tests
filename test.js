const envci = require('env-ci');
const execa = require('execa');
const semanticRelease = require('semantic-release')

console.log({actions: process.env.GITHUB_ACTIONS})

semanticRelease({ci: false, dryRun: true}, {env: {
  ...process.env,
  GITHUB_EVENT: false,
  GITHUB_ACTIONS: false
}})
