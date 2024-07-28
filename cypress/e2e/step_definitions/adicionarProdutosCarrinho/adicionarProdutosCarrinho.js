import {Given, And, Then} from 'cypress-cucumber-preprocessor/steps'

Given("que estou com a aplicacao aberta", () =>{
    cy.carregandoAplicacao()
})

And("clico no link na area login create new account", () =>{
     cy.acessarAreaCadastro()
})

And("preencho os dados account details", () =>{
    cy.preencherAccountDetails()
})

And("preencho os dados personal details", () =>{
    cy.personalDetails()
})

And("preencho os dados address", () =>{
    cy.address()
})

And("clico no botao register para realizar o cadastro", () =>{
    cy.clicarBotaoRegister()
})

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

And("seleciono a categoria do produto {string}", (categoria) =>{
    cy.log(`que busco uma proposta na etapa ${categoria}`)
    cy.selecionarCategoriaProduto(categoria)
    
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

And("preencho no campo pesquisa produto", () =>{
    cy.pesquisaProduto()
})

Then("valido se existe o produto no sistema", () =>{
    cy.validaProdutoPesquisa()
})

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