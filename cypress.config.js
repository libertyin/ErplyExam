const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "execTimeout": 18000,
  "defaultCommandTimeout": 300000,
  "requestTimeout": 10000,
  "pageLoadTimeout": 30000,
  "responseTimeout": 10000,
  "viewportWidth": 1920,
  "viewportHeight": 1080,
  "scrollBehavior": false,
  "retries": {
    "runMode": 2,
    "openMode": 0
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
