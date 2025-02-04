let amigos = [];
let sorteioRealizado = false;
let toRemove = '';
let sorteado = '';

// Coloca a primeira letra de cada palavra em maiúscula
function capitalizar(texto) {
    return texto.split(' ')
                .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase())
                .join(' ');
}

// Verifica se o campo está vazio
function validaCampoVazio(texto) {
    return texto === '';
}

// Verifica se o amigo já foi adicionado
function validaDuplicado(amigo) {
    return amigos.includes(amigo);
}

// Adiciona um amigo à lista
function adicionarAmigo() {
    const amigoInput = document.getElementById('amigo');
    const amigo = capitalizar(amigoInput.value.trim());

    if (validaCampoVazio(amigo)) {
        alert('Digite o nome do amigo!');
        return;
    }

    if (validaDuplicado(amigo)) {
        alert('Amigo já adicionado!');
        return;
    }

    document.getElementById('resultado').innerHTML = '';
    amigos.push(amigo);
    atualizarListaAmigos();
    limparElemento("amigo");
}

// Sorteia um amigo da lista
function sortearAmigo() {
    if (sorteioRealizado) {
        alert('Sorteio já realizado, adicione novos amigos para sortear novamente!');
        ocultarResultado();
        return;
    } 
    if (amigos.length === 0) {
        alert('Adicione amigos para sortear!');
        return;
    } 
    
    if(toRemove){
        amigos = amigos.filter(amigo => amigo !== toRemove);
        toRemove = '';
    }
    
    sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    limparElemento('amigo');
    limparElemento('listaAmigos');
    if (amigos.length == 1) {
        alterarValorElemento('resultado', sorteado);
        document.getElementById("hiden-elements").classList.remove("hidden");
        document.getElementById("auto-sorteio").classList.add("hidden");
    
        console.log("removeu");
        sorteioRealizado = true;
    }else{
        alterarValorElemento('resultado', sorteado);
        document.getElementById("hiden-elements").classList.remove("hidden");
        document.getElementById("auto-sorteio").classList.remove("hidden");
        console.log("removeu");
        toRemove = sorteado;
    }
}

function resortearAmigo() {
    let nomeSorteado = sorteado;
    while(sorteado == nomeSorteado) {
        sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    }
    limparElemento('amigo');
    limparElemento('listaAmigos');
    alterarValorElemento('resultado', sorteado);
    document.getElementById("auto-sorteio").classList.add("hidden");
    
    toRemove = sorteado;
}

// Atualiza a lista de amigos no HTML
function atualizarListaAmigos() {
    alterarValorElemento('listaAmigos', amigos.map(amigo => `<li>${amigo}</li>`).join(''));
}

// Limpa a lista de amigos no HTML
function reiniciarAmigoSecreto() {
    limparElemento('amigo');
    limparElemento('resultado');
    limparElemento('listaAmigos');
    document.getElementById("hiden-elements").classList.add("hidden");
    amigos = [];
    sorteioRealizado = false;
    sorteado = '';
    toRemove = '';
}


function ocultarResultado(){
    if (!sorteioRealizado) {
        alterarValorElemento('resultado', 'Continue sorteando!');
        document.getElementById("auto-sorteio").classList.remove("hidden");
        document.getElementById("hiden-elements").classList.add("hidden");
    }
    else{
        alterarValorElemento('resultado', '');
        reiniciarAmigoSecreto();
    }
    document.getElementById("auto-sorteio").classList.remove("hidden");
    document.getElementById("hiden-elements").classList.add("hidden");
}

// Limpa o valor de um elemento
function limparElemento(elemento) {
    alterarValorElemento(elemento, '');
    document.getElementById(elemento).value = '';
}

function alterarValorElemento(elemento, valor) {
    document.getElementById(elemento).innerHTML = valor;
}
