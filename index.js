const actionsCore = require('@actions/core');
const semanticRelease = require('semantic-release');

async function run() {
  const preset = actionsCore.getInput('preset');
  const { nextRelease } = await semanticRelease({
     ci: false,
     dryRun: true,
     plugins: [['@semantic-release/release-notes-generator', { preset }]],
   }, {
    env: {
       ...process.env,
        GITHUB_ACTIONS: false,
      },
  });
  
  actionsCore.setOutput('releaseNotes', nextRelease.notes);
}

run();
