const core = require('@actions/core');
const semanticRelease = require('semantic-release');

async function run() {
  const { nextRelease } = await semanticRelease({
     ci: false,
     dryRun: true,
     plugins: ['@semantic-release/release-notes-generator'],
   }, {
    env: { ...process.env,  GITHUB_ACTIONS: false },
  });
  
  core.setOutput('releaseNotes', nextRelease.notes);
}

run();
