const semanticRelease = require('semantic-release');
const core = require('@actions/core');

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
