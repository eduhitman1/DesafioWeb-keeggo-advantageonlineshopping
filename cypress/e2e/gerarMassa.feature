#utf-8
#language: pt

Funcionalidade: Fluxo de registro de produtos no carrinho

Contexto: inicializa aplicação
Dado que estou com a aplicacao aberta 

@GerarMassa01
Cenario: CT00 - Cenario criação de massa de usuario 
E clico no link na area login create new account
E preencho os dados account details
E preencho os dados personal details
E preencho os dados address
Entao clico no botao register para realizar o cadastro

