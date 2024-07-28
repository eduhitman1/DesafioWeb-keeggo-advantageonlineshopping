#utf-8
#language: pt

Funcionalidade: Fluxo de registro de produto no carrinho

Contexto: inicializa aplicação
Dado que estou com a aplicacao aberta 

@GerarMassa01
Cenario: CT00 - Cenario criação de massa de usuario 
E clico no link na area login create new account
E preencho os dados account details
E preencho os dados personal details
E preencho os dados address
Entao clico no botao register para realizar o cadastro

@PesquisarProduto
Cenario: CT01 - Validar busca de produto inserido no sistema
E clico no icone superior direito com o simbolizando de login 
E preencho os campos userName e Password
E clico no botão Sign in 
E valido na barra superior direito o cliente registrado
E preencho no campo pesquisa produto 
Entao valido se existe o produto no sistema

@AdicionarProduto01
Cenario: CT02 - Validar que o produto foi adicionado no carrinho após o cliente reazlizar o login
E clico no icone superior direito com o simbolizando de login 
E preencho os campos userName e Password
E clico no botão Sign in 
E valido na barra superior direito o cliente registrado
E seleciono a categoria do produto 'tablets' 
E clico na primeira oferta de produto no botao BUY NOW 
E clico no botão ADD TO CART
Entao valido o evento de mensagem que o produto foi adicionando com sucesso

@AdicionarProduto02
Cenario: CT03 - Validar os produtos incluídos no carrinho na tela de pagamento
E clico no icone superior direito com o simbolizando de login 
E preencho os campos userName e Password
E clico no botão Sign in 
E valido na barra superior direito o cliente registrado
E seleciono a categoria do produto 'tablets'
E clico na primeira oferta de produto no botao BUY NOW 
E clico no botão ADD TO CART
E clico no icone de carrinho para acessa os produtos adicionados
E clico no botao CHECKOUT para acessa area de pagamento
Então valido produtos incluídos na tela de pagamento