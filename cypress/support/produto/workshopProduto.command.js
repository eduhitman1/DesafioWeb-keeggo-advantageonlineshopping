const LBL_EVENTO_ADD_PRODUCT = 'a > h3.ng-binding'
const LBL_PRODUTO_EXISTENTE = '.productName'

const BTN_BUY_NOW = 'a:contains(BUY NOW)'
const BTN_ADD_TO_CART = 'button:contains(ADD TO CART)'

Cypress.Commands.add('acessarPrimeiraOferta', ()=>{
    cy.get(BTN_BUY_NOW).click()
  })

  Cypress.Commands.add('adicionarProdutoAoCarrinho', ()=>{
    cy.get(BTN_ADD_TO_CART).click()
  })

  Cypress.Commands.add('validaEventoProdutoAdicionado', ()=>{
    cy.get(LBL_EVENTO_ADD_PRODUCT).should("be.visible")
  })

  Cypress.Commands.add('validaProdutoPesquisa', ()=>{
    cy.get(LBL_PRODUTO_EXISTENTE).should("be.visible")
  })