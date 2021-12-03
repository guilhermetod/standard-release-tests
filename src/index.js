const { error } = require('@actions/core');

const { outputPreview } = require('./core/output-preview');

outputPreview()
  .catch((e) => error(e));
