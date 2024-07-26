import {Given, And, Then} from 'cypress-cucumber-preprocessor/steps'

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

// ========================== ADICIONA PRODUTO =======================

And("clico no icone superior direito com o simbolizando de login", () =>{
    cy.acessarAreaLogin()
})

And("preencho os campos userName e Password", () =>{
    cy.preencherUsernamePassword()
})
    
And("clico no botão Sign in", () =>{
    cy.botaoSignIN()
})

And("valido na barra superior direito o cliente registrado", () =>{
    cy.validarUsuarioLogador()
})

And("seleciono a categoria do produto Tablets", () =>{
    cy.selecionarCategoriaProduto()
})

And("clico na primeira oferta de produto no botao BUY NOW", () =>{
    cy.acessarPrimeiraOferta()
})

And("clico no botão ADD TO CART", () =>{
    cy.adicionarProdutoAoCarrinho()
})

Then("valido o evento de mensagem que o produto foi adicionando com sucesso", () =>{
    cy.validaEventoProdutoAdicionado()
})

// ================ SEACH PRODUCT 

And("preencho no campo pesquisa produto", () =>{
    cy.pesquisaProduto()
})

Then("valido se existe o produto no sitema", () =>{
    cy.validaProdutoPesquisa()
})

// =================== CHECK OUT PRODUCT

And("clico no icone de carrinho para acessa os produtos adicionados", () =>{
    cy.clicarBotaoCarrinho()
})    
      
And("clico no botao CHECKOUT para acessa area de pagamento", () =>{
    cy.wait(2000)
    cy.acessarAreaCheckout()
})

Then("valido produtos incluídos na tela de pagamento", () =>{
    cy.wait(2000)
    cy.validarProdutoTelaPagamento()
})