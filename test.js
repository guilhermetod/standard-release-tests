const semanticRelease = require('semantic-release')

semanticRelease({}, {env: {
  ...process.env,
  GITHUB_EVENT: false,
}}).then(r => {console.log(r.nextRelease.notes)})
