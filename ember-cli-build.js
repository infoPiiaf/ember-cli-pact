/* eslint-env node */
'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    'ember-cli-babel': {
      includePolyfill: true
    },

    babel: {
      plugins: [
        'transform-class-properties'
      ]
    }
  });

  return app.toTree();
};