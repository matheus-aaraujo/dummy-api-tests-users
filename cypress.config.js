const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    baseUrl: "https://dummyjson.com",
  },
  e2e: {
    specPattern: "cypress/tests/**/*.cy.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
