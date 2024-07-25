#utf-8
#language: pt

Funcionalidade: Cadastrar Usuario

Contexto: inicializa aplicação
Dado que estou com a aplicacao aberta 

@CriaçãoMassa01
Cenario: CT00 - De criação de massa de usuario 
E clico em CREATE NEW ACCOUNT
E informo os dados account details
E informo os dados personal details
E informo o address

@AdicionarProduto01
Cenario: CT01 - Validar que o produto foi adicionado no carrinho após o cliente reazlizar o login
E clico no icone superior direito com o simbolizando de login 
E preencho os campos userName e Password
E clico no botão Sign in 
E valido na barra superior direito o cliente registrado
E seleciono a categoria do produto Tablets 
E clico na primeira oferta de produto no botao BUY NOW 
E clico no botão ADD TO CART
Entao valido o evento de mensagem que o produto foi adicionando com sucesso

@PesquisarProduto
Cenario: CT02 - Validar que o produto foi adicionado no carrinho após o cliente reazlizar o login
E clico no icone superior direito com o simbolizando de login 
E preencho os campos userName e Password
E clico no botão Sign in 
E valido na barra superior direito o cliente registrado
E preencho no campo pesquisa produto
Entao valido se existe o produto no sitema
