describe('Realizar cadastramento completo do usuario', () => {

context('Criando usuario', () =>{ 
  beforeEach(() => { 
    cy.visit('/#/')
    cy.get('#menuUserLink').click()
    cy.get('.create-new-account').click()
  })
  
    it('preencher account details', () => {
      cy.preencherAccountDetails()
      cy.personalDetails()
      cy.address()    
      cy.get('[sec-name="registrationAgreement"] > .inputContainer > .ng-pristine',{timeout: 3000}).click()
  })
})



})