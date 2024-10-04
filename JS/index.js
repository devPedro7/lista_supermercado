let itens = JSON.parse(localStorage.getItem("@listaSupermercado")) || [] //localStorage PARA ARMAZENAR OS DADOS INSERIDOS NA LISTA DE ITENS

document.querySelector('input[type=submit]')
.addEventListener('click', ()=>{// QUANDO O BOTÃO DE CADASTRAR FOR CLICADO, SERÁ INSERIDO OS PRODUTOS

    let nomeProduto = document.querySelector('input[name=nome_produto]');//CRIANDO VARIÁVEIS PARA RECEBER OS VALORES DOS INPUTS
    let precoProduto = document.querySelector('input[name=preco_produto]');//CRIANDO VARIÁVEIS PARA RECEBER OS VALORES DOS INPUTS

    if (nomeProduto.value.trim() === "" || precoProduto.value.trim() === "") {//TRAVA/VALIDAÇÃO IMPEDINDO A INSERÇÃO DE VALORES NULOS
        alert("Por favor, preencha todos os campos.");
        return;
    }

    itens.push({//ADICIONANDO O QUE FOI DIGITADO NOS INPUTS NA LISTA DE ITENS 
        nome: nomeProduto.value,
        valor: precoProduto.value
    });

    atualizarLista();
    salvarDados();

    nomeProduto.value = "";//LIMPANDO OS INPUTS 
    precoProduto.value = "";//LIMPANDO OS INPUTS 
});

document.querySelector('.limpar-lista').addEventListener('click', () => {//FUNCIONALIDADE DE LIMPAR A LISTA QUANDO É CLICADO NO BOTÃO DE LIMPAR
    itens = [];//ZERANDO A LISTA
    localStorage.removeItem("@listaSupermercado");//FUNÇÃO DO JAVASCRIPT QUE LIMPA OS VALORES DO LOCALSTORAGE
    atualizarLista();//ATUALIZANDO A LISTA DEPOIS QUE ELA É LIMPA
});

function atualizarLista() {//FUNÇÃO QUE ATUALIZA A LISTA A CADA VALOR INSERIDO
    let listaProdutos = document.querySelector('.lista-produtos');
    let soma = 0;

    listaProdutos.innerHTML = ""; //LIMPANDO A LISTA

    itens.forEach((valor) => {//PERCORRENDO A LISTA
        soma += parseFloat(valor.valor);//SOMANDO OS VALORES INSERINDO 
        listaProdutos.innerHTML += `
            <div class="lista-produtos-single">
                <h3>${valor.nome}</h3>
                <h3 class="preco"><span>R$ ${valor.valor}</span></h3>
            </div>
        `;//CRIANDO O TEMPLATE DA LISTA
    });

    soma = soma.toFixed(2); //FIXANDO AS CASAS DECIMAIS PARA DUAS
    let somaProdutos = document.querySelector('.soma-produto span');
    somaProdutos.innerHTML = `${soma}`;
}

function salvarDados() {//FUNÇÃO QUE CRIA O LOCALSTORAGE
    localStorage.setItem("@listaSupermercado", JSON.stringify(itens));
}

// INICIA A LISTA AO CARREGAR A PÁGINA
atualizarLista();
