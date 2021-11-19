const envci = require('env-ci');
const execa = require('execa');
const {execSync} = require('child_process')
// const semanticRelease = require('semantic-release')

// semanticRelease({ci: false, dryRun: true}, {env: {
//   ...process.env,
//   GITHUB_EVENT: false,
//   GITHUB_ACTIONS: false
// }}).then(r => {console.log(r.nextRelease.notes)})

const ci = envci({
  env: {
    ...process.env,
    GITHUB_EVENT: false,      
    GITHUB_ACTIONS: false
  }
})

const headRef = execa.sync('git', ['rev-parse', '--abbrev-ref', 'HEAD']).stdout;

if (headRef === 'HEAD') {
  const gitShow = execa.sync('git', ['show', '-s', '--pretty=%d', 'HEAD']).stdout
  const branch = gitShow
    .replace(/^\(|\)$/g, '')
    .split(', ')
    .find((branch) => branch.startsWith('origin/'));

  console.log({branch, gitShow})
}


console.log({ci, headRef})
