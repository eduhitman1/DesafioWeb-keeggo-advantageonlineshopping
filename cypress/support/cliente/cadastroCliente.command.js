const LBL_ACCOUNT_DETAILS ='#formCover > :nth-child(1) > h3.ng-scope'

const TXT_USERNAME = ':nth-child(2) > [a-hint="Username"] > .inputContainer > .ng-pristine'
const TXT_EMAIL = '[sec-name="userEmail"] > .inputContainer > .ng-pristine'
const TXT_PASSWORD = ':nth-child(3) > [a-hint="Password"] > .inputContainer > .ng-pristine' 
const TXT_CONFIRMPASSWORD = '[a-hint="Confirm password"]'
const TXT_FIRSTNAME = '[sec-name="userFirstName"] > .inputContainer > label'
const TXT_LASTNAME = '[sec-name="userLastName"] > .inputContainer > .ng-pristine'
const TXT_TELEFONE = ':nth-child(2) > :nth-child(3) > .ng-isolate-scope > .inputContainer > .ng-pristine'
const TXT_CIDADE = '[sec-name="userCity"] > .inputContainer > .ng-pristine'
const TXT_ENDERECO = '[sec-name="userAdress"] > .inputContainer > .ng-pristine'
const TXT_REGIAO = '[sec-name="userState"] > .inputContainer > label'
const TXT_CEP = '#formCover > :nth-child(3) > :nth-child(4) > .ng-isolate-scope > .inputContainer > .ng-pristine'

const BTN_REGISTRAR = '#register_btn'

const SELECT_PAIS = '[sec-name="userCountry"] > .inputContainer > .ng-pristine'

const CHECKBOX_LICENSE = '[sec-name="registrationAgreement"] > .inputContainer > .ng-pristine'

Cypress.Commands.add('preencherAccountDetails', ()=>{
    cy.get(LBL_ACCOUNT_DETAILS).should('exist')
    cy.contains('ACCOUNT DETAILS').should('be.visible')
    cy.get(TXT_USERNAME).should('be.visible').type(Cypress.env('username'))
    cy.get(TXT_EMAIL).should('be.visible').type(Cypress.env('email'))
    cy.get(TXT_PASSWORD).should('be.visible').type(Cypress.env('password'))
    cy.get(TXT_CONFIRMPASSWORD).should('be.visible').type(Cypress.env('confirmpassword'))  
})

Cypress.Commands.add('personalDetails', ()=>{
    cy.get(TXT_FIRSTNAME).type("Eduardo")
    cy.get(TXT_LASTNAME).type("Matias")
    cy.get(TXT_TELEFONE).type("11947226441")
})  
Cypress.Commands.add('address', ()=>{
    cy.get(SELECT_PAIS).select("Brazil")
    cy.get(TXT_CIDADE).type('São paulo')
    cy.get(TXT_ENDERECO).type("Rua Francisco Alvares")
    cy.get(TXT_REGIAO).type("SP")
    cy.get(TXT_CEP).type("02368040")
    
    cy.get(CHECKBOX_LICENSE).click()
    cy.get(BTN_REGISTRAR).click()
})
