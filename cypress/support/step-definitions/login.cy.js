
Given('que estou com a aplicacao aberta', () =>{
    cy.carregandoAplicacao()
})

And("clico no link na area login create new account", () =>{
    cy.acessarAreaCadastro()
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