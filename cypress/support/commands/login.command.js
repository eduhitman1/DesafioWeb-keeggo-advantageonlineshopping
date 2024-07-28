const TXT_USERNAME = '[name="username"]'
const TXT_PASSWORD = '[name="password"]'

const BTN_SIGN_IN = '#sign_in_btn'

const LINK_ICON_LOGIN = '#menuUserLink'
const LINK_CREATE_NEW_ACCOUNT = '.create-new-account'

Cypress.Commands.add('acessarAreaCadastro', ()=>{
    cy.get(LINK_ICON_LOGIN).click()
    cy.get(LINK_CREATE_NEW_ACCOUNT).click()
})

Cypress.Commands.add('preencherUsernamePassword', ()=>{
    cy.wait(3000)
    cy.login()
  })
  
  Cypress.Commands.add('login', 
    (user = Cypress.env('login_name'),password = Cypress.env('user_password'),) => {
      const login = () =>{
        cy.get(TXT_USERNAME).type(user)
        cy.get(TXT_PASSWORD).type(password, {log:false})      
      }
      login()
})

Cypress.Commands.add('botaoSignIN', ()=>{
        cy.get(BTN_SIGN_IN,{ timeout: 3000 }).click()
})