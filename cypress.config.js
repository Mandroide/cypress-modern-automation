const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );
  
  allureWriter(on, config);
  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  projectId: '7ai5ur',
  e2e: {
    env: {
      allureReuseAfterSpec: true,
      allureLogCypress: false,
      allureLogGherkin: true,
      allureAvoidLoggingCommands: ["then"]
    },
    defaultCommandTimeout: 10000,
    baseUrl: "https://rahulshettyacademy.com/angularpractice/",
    setupNodeEvents,
    specPattern: "cypress/e2e/examples/features/*.feature"
  },
});

// Cucumber HTML report can be generated with the help of the test execution results
// It might be in JSON Format