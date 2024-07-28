Cypress.Commands.add('acessarPrimeiraOferta', ()=>{
    cy.get('a:contains(BUY NOW)').click()
  })

  Cypress.Commands.add('adicionarProdutoAoCarrinho', ()=>{
    cy.get('button:contains(ADD TO CART)').click()
  })

  Cypress.Commands.add('validaEventoProdutoAdicionado', ()=>{
    cy.get('a > h3.ng-binding').should("be.visible")
  })

  Cypress.Commands.add('validaProdutoPesquisa', ()=>{
    cy.get('.productName').should("be.visible")
    })