const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
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
        baseUrl: 'http://www.advantageonlineshopping.com',
        login_name: "iameduardoneill",
        user_password: "Eduhitman1**",
        username: "iameduardoneill",
        email: "edu.hitman01.eh@gmail.com",
        password: "Eduhitman1**",
        confirmpassword: "Eduhitman1**",
        pesquisa_produto: "HP ELITEPAD 1000 G2 TABLET"
      }
});
