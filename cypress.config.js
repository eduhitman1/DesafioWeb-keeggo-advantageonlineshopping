const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://www.advantageonlineshopping.com',
    setupNodeEvents(on, config) {
      on('file:preprocessor',cucumber())
      },
      },
      e2e: {
        setupNodeEvents(on, config) {
          on('file:preprocessor',cucumber())
        },
        specPattern: "cypress/e2e/step_definitions/*.feature"
      },
      env: {
        login_name: "iameduardoneill",
        user_password: "Eduhitman1**",
        username: "iameduardoneill",
        email: "edu.hitman01.eh@gmail.com",
        password: "Eduhitman1**",
        confirmpassword: "Eduhitman1**"
      }
});
