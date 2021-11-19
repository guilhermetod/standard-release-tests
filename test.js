const semanticRelease = require('semantic-release')

semanticRelease({ci: false, dryRun: true}, {env: {
  ...process.env,
  GITHUB_EVENT: false,
  GITHUB_ACTIONS: false
}}).then(r => {console.log(r.nextRelease.notes)})
