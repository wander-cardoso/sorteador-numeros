function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    
    let sorteados = []; 
    let numero;

    for (let i = 0; i <quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);
        if( de >= ate){
            alert('Atenção você não pode colocar o número inicial maior ou igual do que o final!');
        }

        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
            if (quantidade > (ate - de + 1)) {
                alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
                return;
            }
        }
            sorteados.push(numero);
    }
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__resultado">Números sorteados: ${sorteados}</label>`

    alterarStatusBotao();
}



function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')){ 
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}