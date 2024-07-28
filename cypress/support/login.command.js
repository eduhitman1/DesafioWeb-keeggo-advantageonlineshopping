Cypress.Commands.add('acessarAreaCadastro', ()=>{
    cy.get('#menuUserLink').click()
    cy.get('.create-new-account').click()
})


Cypress.Commands.add('preencherUsernamePassword', ()=>{
    cy.wait(3000)
    cy.login()
  })
  
  Cypress.Commands.add('login', 
    (user = Cypress.env('login_name'),password = Cypress.env('user_password'),) => {
      const login = () =>{
        cy.get('[name="username"]').type(user)
        cy.get('[name="password"]').type(password, {log:false})
      
      }
      login()
})

    
Cypress.Commands.add('botaoSignIN', ()=>{
        cy.get('#sign_in_btn',{ timeout: 3000 }).click()
})