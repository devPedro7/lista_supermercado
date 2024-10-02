//LÓGICA DA APLICAÇÃO

//QUANDO FOR CLICADO NO BOTÃO DE CADASTRAR, O EVENTO DE CLICK VAI PREENCHER A LISTA DE ITENS.

//LISTA ONDE SERÁ PREENCHIDO OS ITENS
let itens = []

//AÇÃO DE CADASTRAR PRODUTO
document.querySelector('input[type=submit]')
.addEventListener('click', ()=>{
    //CAPTURAR OS VALORES INSERIDOS NOS INPUTS
    let nomeProduto = document.querySelector('input[name = nome_produto]').value
    let precoProduto = document.querySelector('input[name = preco_produto]').value


    //ADICIONAR OS VALORES NA LISTA
    itens.push({
        nome: nomeProduto,
        valor: precoProduto
    })
    //PRINTANDO O VALOR INSERIDO NO ARRAY
    alert(itens[0].nome)
})