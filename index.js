const semanticRelease = require('semantic-release')
const core = require('@actions/core')


async function run() {
  const release = await semanticRelease({ ci: false, dryRun: true }, { env: { ...process.env,  GITHUB_ACTIONS: false } });
  
  core.setOutput('releaseNotes', release.nextRelease.notes);
}


run()
