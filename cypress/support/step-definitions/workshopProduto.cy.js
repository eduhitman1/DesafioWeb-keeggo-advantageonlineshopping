
And("clico na primeira oferta de produto no botao BUY NOW", () =>{
    cy.acessarPrimeiraOferta()
})

And("clico no botão ADD TO CART", () =>{
    cy.adicionarProdutoAoCarrinho()
})

Then("valido o evento de mensagem que o produto foi adicionando com sucesso", () =>{
    cy.validaEventoProdutoAdicionado()
})

Then("valido se existe o produto no sistema", () =>{
    cy.validaProdutoPesquisa()
})

And("clico no icone de carrinho para acessa os produtos adicionados", () =>{
    cy.clicarBotaoCarrinho()
})