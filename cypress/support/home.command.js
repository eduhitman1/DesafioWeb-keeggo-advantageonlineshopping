Cypress.Commands.add('carregandoAplicacao', ()=>{
  cy.visit('http://www.advantageonlineshopping.com/#/')
  cy.wait(5000)
})

Cypress.Commands.add('pesquisaProduto', ()=>{
  cy.get('[name="mobile_search"]').type("HP ELITEPAD 1000 G2 TABLET{enter}")
  })

Cypress.Commands.add('acessarAreaLogin', ()=>{
  cy.get('#menuUserLink').click()
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