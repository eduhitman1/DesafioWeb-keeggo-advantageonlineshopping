const LBL_USUARIO_LOGADO = 'a:contains(iameduardoneill)'

const TXT_PESQUISA_PRODUTO = '[name="mobile_search"]'

const LINK_ICON_LOGIN = '#menuUserLink'

Cypress.Commands.add('carregandoAplicacao', ()=>{
  cy.visit(Cypress.env('baseUrl'))
  cy.wait(5000)
})

Cypress.Commands.add('pesquisaProduto', ()=>{
  cy.get(TXT_PESQUISA_PRODUTO).type("HP ELITEPAD 1000 G2 TABLET{enter}")
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