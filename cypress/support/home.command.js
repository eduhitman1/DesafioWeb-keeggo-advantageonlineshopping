const LBL_USUARIO_LOGADO = 'a:contains(iameduardoneill)'

const TXT_PESQUISA_PRODUTO = '[name="mobile_search"]'

const LINK_ICON_LOGIN = '#menuUserLink'

const LINK_SPEAKERS = '#speakersTxt'
const LINK_TABLETS = '#tabletsTxt'
const LINK_LAPTOPS = '#laptopsTxt'
const LINK_MICE = '#miceTxt'
const LINK_HEADPHONES = '#headphonesTxt'

Cypress.Commands.add('carregandoAplicacao', ()=>{
  cy.visit(Cypress.env('baseUrl'))
  cy.wait(5000)
})

Cypress.Commands.add('pesquisaProduto', ()=>{
  cy.get(TXT_PESQUISA_PRODUTO).type(Cypress.env('pesquisa_produto'),"{enter}")
  })

Cypress.Commands.add('acessarAreaLogin', ()=>{
  cy.get(LINK_ICON_LOGIN).click()
})

Cypress.Commands.add('validarUsuarioLogador', ()=>{
  cy.get(LBL_USUARIO_LOGADO).should('be.visible')
})

Cypress.Commands.add('selecionarCategoriaProduto', (categoria)=>{
  switch(categoria) {
    case 'speakers':
      cy.get(LINK_SPEAKERS).click();
      break;

      case 'tablets':
      cy.get(LINK_TABLETS).click();
      break;
      
      case 'labtops':
      cy.get(LINK_LAPTOPS).click();
      break;
      
      case 'mice':
      cy.get(LINK_MICE).click();
      break; 

      case 'headphone':
      cy.get(LINK_HEADPHONES).click();
      break; 
  }
})