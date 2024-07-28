Cypress.Commands.add('clicarBotaoCarrinho', ()=>{
    cy.get('#shoppingCartLink').click()
    })
    
    Cypress.Commands.add('acessarAreaCheckout', ()=>{
    cy.get('#checkOutButton').click()
    })
    
    Cypress.Commands.add('validarProdutoTelaPagamento', ()=>{
    cy.get('#userCart').should("be.visible")
    })