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

function validaTrataInput(amigoInput) {

    // remove espaços do começo e final do texto
    const amigo = capitalizar(amigoInput.trim());

    // verifica se o campo está vazio
    if (validaCampoVazio(amigo)) {
        alert('Digite o nome do amigo!');
        return;
    }

    // valida se o nome possui apenas letras
    if (!/^[a-zA-Z\s]+$/.test(amigo)) {
        alert(`Nome ${amigo} inválido! O nome deve conter apenas letras!`);
        return;
    }

    // verifica se o amigo já foi adicionado
    if (validaDuplicado(amigo)) {
        alert(`Amigo ${amigo} já adicionado!`);
        return;
    }
    amigos.push(amigo);
}

// Adiciona um amigo à lista
function adicionarAmigo() {
    const amigoInput = document.getElementById('amigo').value;

    //adiciona amigos separados por vírgula
    if (amigoInput.includes(',')) {
        //split a string em um array
        let amigosInput = amigoInput.split(',');
        for (let item of amigosInput) {
           validaTrataInput(item);
        }
    }else{
        validaTrataInput(amigoInput);
    }

    document.getElementById('resultado').innerHTML = '';
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
