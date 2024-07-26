
const LBL_ACCOUNT_DETAILS ='#formCover > :nth-child(1) > h3.ng-scope'
const TXT_USERNAME = ':nth-child(2) > [a-hint="Username"] > .inputContainer > .ng-pristine'
const TXT_EMAIL = '[sec-name="userEmail"] > .inputContainer > .ng-pristine'
const TXT_PASSWORD = ':nth-child(3) > [a-hint="Password"] > .inputContainer > .ng-pristine' 
const TXT_CONFIRMPASSWORD = '[a-hint="Confirm password"]'

Cypress.Commands.add('assertLoadingIsShownAndHidden', () => {
    cy.contains('Loading ...').should('be.visible')
    cy.contains('Loading ...').should('not.exist')
  })

Cypress.Commands.add('carregandoAplicacao', ()=>{
    cy.visit('http://www.advantageonlineshopping.com/#/')
})

Cypress.Commands.add('acessarAreaCadastro', ()=>{
    cy.get('#menuUserLink').click()
    cy.get('.create-new-account').click()
})

Cypress.Commands.add('acessarAreaLogin', ()=>{
  cy.get('#menuUserLink').click()
})

Cypress.Commands.add('preencherUsernamePassword', ()=>{
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
  cy.get('#sign_in_btn').click()
})

Cypress.Commands.add('validarUsuarioLogador', ()=>{
cy.get('a:contains(iameduardoneill)')
})

Cypress.Commands.add('selecionarCategoriaProduto', ()=>{
  var categoria = "tablets";
  switch(categoria) {
    case 'speakers':
      cy.get('#speakersTxt').click();
      break;

      case 'tablets':
      cy.get('#tabletsTxt').click();
      break;
      
      case 'labtops':
      cy.get('#laptopsTxt').click();
      break;
      
      case 'mice':
      cy.get('#miceTxt').click();
      break; 

      case 'headphone':
      cy.get('#headphonesTxt').click();
      break; 
  }
})

Cypress.Commands.add('acessarPrimeiraOferta', ()=>{
  cy.get('a:contains(BUY NOW)').click()
})
  
Cypress.Commands.add('adicionarProdutoAoCarrinho', ()=>{
  cy.get('button:contains(ADD TO CART)').click()
})

Cypress.Commands.add('validaEventoProdutoAdicionado', ()=>{
  cy.get('a > h3.ng-binding').should("be.visible")
})

Cypress.Commands.add('pesquisaProduto', ()=>{
cy.get('[name="mobile_search"]').type("HP ELITEPAD 1000 G2 TABLET{enter}")
})

Cypress.Commands.add('validaProdutoPesquisa', ()=>{
cy.get('.productName').should("be.visible")
})

Cypress.Commands.add('clicarBotaoCarrinho', ()=>{
cy.get('#shoppingCartLink').click()
})

Cypress.Commands.add('acessarAreaCheckout', ()=>{
cy.get('#checkOutButton').click()
})

Cypress.Commands.add('validarProdutoTelaPagamento', ()=>{
cy.get('#userCart').should("be.visible")
})

Cypress.Commands.add('preencherAccountDetails', ()=>{
    cy.get(LBL_ACCOUNT_DETAILS).should('exist')
    cy.contains('ACCOUNT DETAILS').should('be.visible')
    cy.get(TXT_USERNAME).should('be.visible').type(Cypress.env('username'))
    cy.get(TXT_EMAIL).should('be.visible').type(Cypress.env('email'))
    cy.get(TXT_PASSWORD).should('be.visible').type(Cypress.env('password'))
    cy.get(TXT_CONFIRMPASSWORD).should('be.visible').type(Cypress.env('confirmpassword'))
    
})
Cypress.Commands.add('personalDetails', ()=>{
    cy.get('[sec-name="userFirstName"] > .inputContainer > label').type("Eduardo")
    cy.get('[sec-name="userLastName"] > .inputContainer > .ng-pristine').type("Matias")
    cy.get(':nth-child(2) > :nth-child(3) > .ng-isolate-scope > .inputContainer > .ng-pristine').type("11947226441")
})  
Cypress.Commands.add('address', ()=>{
    cy.get('[sec-name="userCountry"] > .inputContainer > .ng-pristine').select("Brazil")
    cy.get('[sec-name="userCity"] > .inputContainer > .ng-pristine').type('São paulo')
    cy.get('[sec-name="userAdress"] > .inputContainer > .ng-pristine').type("Rua Francisco Alvares")
    cy.get('[sec-name="userState"] > .inputContainer > label').type("SP")
    cy.get('#formCover > :nth-child(3) > :nth-child(4) > .ng-isolate-scope > .inputContainer > .ng-pristine').type("02368040")
    
    cy.get('[sec-name="registrationAgreement"] > .inputContainer > .ng-pristine').click()
    cy.get('#register_btn').click()
})




