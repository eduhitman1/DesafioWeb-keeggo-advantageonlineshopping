const BTN_ADICIONAR_KART = '#shoppingCartLink'
const BTN_CHECKOUT = '#checkOutButton'

const LAYOUT_USER_CART = '#userCart'

Cypress.Commands.add('clicarBotaoCarrinho', ()=>{
    cy.get(BTN_ADICIONAR_KART).click()
    })
    
    Cypress.Commands.add('acessarAreaCheckout', ()=>{
    cy.get(BTN_CHECKOUT).click()
    })
    
    Cypress.Commands.add('validarProdutoTelaPagamento', ()=>{
    cy.get(LAYOUT_USER_CART).should("be.visible")
    })