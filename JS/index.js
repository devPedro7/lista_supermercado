//LÓGICA DA APLICAÇÃO

//QUANDO FOR CLICADO NO BOTÃO DE CADASTRAR, O EVENTO DE CLICK VAI PREENCHER A LISTA DE ITENS.

//LISTA ONDE SERÁ PREENCHIDO OS ITENS
let itens = JSON.parse(localStorage.getItem("@listaSupermercado")) || []

//AÇÃO DE CADASTRAR PRODUTO
document.querySelector('input[type=submit]')
.addEventListener('click', ()=>{
    //CAPTURAR OS VALORES INSERIDOS NOS INPUTS
    let nomeProduto = document.querySelector('input[name = nome_produto]')
    let precoProduto = document.querySelector('input[name = preco_produto]')

    //VALIDAÇÃO PARA NÃO INSERIR VAZIO
     if(nomeProduto.value.trim() === "" || precoProduto.value.trim() === ""){
         alert("Por favor, preencha todos os campos.");
            return;
        }

    //ADICIONAR OS VALORES NA LISTA
    itens.push({
        //CAPTURANDO E INSERINDO OS VALORES DOS INPUTS
        nome: nomeProduto.value,
        valor: precoProduto.value
        
    })
    /*PRINTANDO O VALOR INSERIDO NO ARRAY teste
    alert(itens[0].nome)*/

    //CAPTURANDO div DO LISTA-PRODUTOS
    let listaProdutos = document.querySelector('.lista-produtos')
    let soma = 0 //VARIAVEL QUE VAI RECEBER O VALOR DA SOMA DOS PRODUTOS

    listaProdutos.innerHTML = "" //limpando o valor da lista pra não repetir cadastro 


    //MAPEANDO OS VALORES DO ARRAY E RECUPERANDO SEU VALOR
    itens.map((valor)=>{

        soma+= parseFloat(valor.valor) //A CADA VEZ QUE O LOOP REINICIAR, O VALOR DOS PRODUTOS SERÃO SOMADOS NA VARIÁVEL
        listaProdutos.innerHTML +=`

             <div class="lista-produtos-single">
                <h3>${valor.nome}</h3>
                <h3 class="preco"><span>R$ ${valor.valor}</span></h3>
            </div>    
        ` //OS NOMES NO TAMPLATE STRING SÃO DOS OBJETOS DA LISTA

        
    })

    //RESETANDO OS VALORES DOS INPUTS APÓS CADASTRAR
    nomeProduto.value = ""
    precoProduto.value = ""

    //SETANDO AS CASAS DECIMAIS DA SOMA DOS PRODUTOS
    soma = soma.toFixed(2)

    //INSERINDO O VALOR DA SOMA NO HTML
    let somaProdutos = document.querySelector('.soma-produto span')
    somaProdutos.innerHTML =+ ` ${soma}`

    salvarDados()
    
})

//FUNCIONALIDADE DE LIMPAR TODOS OS CAMPOS DA LISTA
document.querySelector('.limpar-lista')
.addEventListener('click', ()=>{
    itens = [] //VOLTANDO O ARRAY DE INTENS PARA VAZIO
    document.querySelector('.lista-produtos').innerHTML = "" //DEIXANDO A LISTA PARA VAZIO
    document.querySelector('.soma-produto').innerHTML = "<h2>Soma dos produtos: R$ 0</h2>"

    salvarDados()
})

//ARMAZENANDO DADOS NO NAVEGADOR: LOCALSTORAGE
function salvarDados(){
    localStorage.setItem("@listaSupermercado", JSON.stringify(itens))
}

/* pesca para criar layout

     <div class="lista-produtos-single">
            <h3>Whey</h3>
            <h3 class="preco"><span>R$ 20,00</span></h3>
    </div>
*/