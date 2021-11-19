const envci = require('envci');
const {execSync} = require('child_process')
// const semanticRelease = require('semantic-release')

// semanticRelease({ci: false, dryRun: true}, {env: {
//   ...process.env,
//   GITHUB_EVENT: false,
//   GITHUB_ACTIONS: false
// }}).then(r => {console.log(r.nextRelease.notes)})

const ci = envci({
  ...process.env,
  GITHUB_EVENT: false,
})

const execa = execSync('git rev-parse --abbrev-ref HEAD', {encoding: 'utf8'})

console.log({ci, execa})
