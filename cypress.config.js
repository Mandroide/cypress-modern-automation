const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '7ai5ur',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 10000,
    baseUrl: "https://rahulshettyacademy.com/angularpractice/"
    //specPattern: "cypress/e2e/examples/*.js"
  },
});
