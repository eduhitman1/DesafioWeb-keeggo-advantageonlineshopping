import {Given, And} from 'cypress-cucumber-preprocessor/steps'

Given("que estou com a aplicacao aberta", () =>{
    cy.carregandoAplicacao()
})

And("clico em CREATE NEW ACCOUNT", () =>{
     cy.acessarAreaCadastro()
})

And("informo os dados account details", () =>{
    cy.preencherAccountDetails()
})

And("informo os dados personal details", () =>{
    cy.personalDetails()
})

And("informo o address", () =>{
    cy.address()
})


      
      