
Given('que estou com a aplicacao aberta', () =>{
    cy.carregandoAplicacao()
})

And("clico no link na area login create new account", () =>{
    cy.acessarAreaCadastro()
})

And("clico no icone superior direito com o simbolizando de login", () =>{
    cy.acessarAreaLogin()
})

And("valido na barra superior direito o cliente registrado", () =>{
    cy.validarUsuarioLogador()
})

And("seleciono a categoria do produto {string}", (categoria) =>{
    cy.log(`que busco uma proposta na etapa ${categoria}`)
    cy.selecionarCategoriaProduto(categoria)    
})

And("preencho no campo pesquisa produto", () =>{
    cy.pesquisaProduto()
})