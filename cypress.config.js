const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1000,
    viewportHeight: 660,
    watchForFileChanges: false,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportFilename: '[status]_[datetime]-[name]-report',
      timestamp: 'longDate',
      reportDir: 'cypress/cucumber-report/',
      overwrite: true,
      html: false,
      json: true,
      charts: true,
      reportPageTitle: 'Resultado Cypress',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
      saveJson: true,
      ignoreVideos: true
    },
    projectId: 'mwk2hp',
    defaultCommandTimeout: 240000,
    pageLoadTimeout: 240000,
    requestTimeout: 180000,
    responseTImeout: 180000,
    taskTimeout: 180000,
    numTestsKeptInMemory: 0,
    scrollBehavior: 'center',
    chromeWebSecurity: false,
    video: true,
    experimentalMemoryManagement: true,
    screenshotOnRunFailure: true,
    modifyObstructiveCode: true,
    downloadsFolder: 'cypress/downloads',
    specPattern: 'cypress/e2e/*.feature',
    setupNodeEvents(on, config) {
      // require('cypress-mochawesome-reporter/plugin')(on);
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
      
      env: {
        baseUrl: 'http://www.advantageonlineshopping.com/#/',
        login_name: "iameduardoneill",
        user_password: "Eduhitman1**",
        username: "iameduardoneill",
        email: "edu.hitman01.eh@gmail.com",
        password: "Eduhitman1**",
        confirmpassword: "Eduhitman1**",
        pesquisa_produto: "HP ELITEPAD 1000 G2 TABLET"
      }
});
