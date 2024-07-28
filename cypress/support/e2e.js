// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import './commands/home.command'
import './commands/login.command'
import './commands/cliente/cadastroCliente.command'
import './commands/produto/workshopProduto.command'
import './commands/produto/pagamentoProduto.command'
// Alternatively you can use CommonJS syntax:
// require('./commands')