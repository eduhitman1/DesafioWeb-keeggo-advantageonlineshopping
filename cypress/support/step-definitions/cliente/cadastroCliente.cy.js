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