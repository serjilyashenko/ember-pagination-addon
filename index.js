/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-pagination-addon',

  afterInstall: function() {
    // Add addons to package.json and run defaultBlueprint
    return this.addAddonsToProject({
      // a packages array defines the addons to install
      packages: [
        // name is the addon name, and target (optional) is the version
        {name: 'semantic-ui-ember'},
        // {name: 'ember-cli-sass'}
      ]
    });
  },
};
