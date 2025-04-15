/*
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});*/

// cypress.config.js
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://staging.rides.co',
    env: {
      username: 'rides_dev',
      password: 'dev90'
    },
    setupNodeEvents(on, config) {
      // you can add plugin setup here later if needed
    }
  }
});


