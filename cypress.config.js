const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1200,
  viewportWidth: 1600,
  e2e: {
    baseUrl: 'https://juice-shop-sanitarskyi.herokuapp.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
