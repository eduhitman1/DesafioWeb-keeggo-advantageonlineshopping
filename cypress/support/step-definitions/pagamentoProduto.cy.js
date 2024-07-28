      
And("clico no botao CHECKOUT para acessa area de pagamento", () =>{
    cy.wait(2000)
    cy.acessarAreaCheckout()
})

Then("valido produtos incluídos na tela de pagamento", () =>{
    cy.wait(2000)
    cy.validarProdutoTelaPagamento()
})