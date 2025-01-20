let amigos = [];
let sorteioRealizado = false;

// Adiciona um amigo à lista
function adicionarAmigo() {
    const amigo = capitalizar(document.getElementById('amigo').value.trim());
  
    if (validaCampoVazio(amigo)) {
        alert('Digite o nome do amigo!');
    } else {
        if (validaDuplicado(amigo)) {
            alert('Amigo já adicionado!');
        } else {
            document.getElementById('resultado').innerHTML = '';
            amigos.push(amigo);
            atualizarListaAmigos();
            limparElemento('amigo');
            sorteioRealizado = false;
        }
    }
}

// coloca primeira letra de cada palavra em maiuscula
function capitalizar(texto) { 
    return texto.split(' ').map(palavra => palavra[0]?.toUpperCase() + palavra.slice(1).toLowerCase()).join(' ');
}

// Sorteia um amigo da lista
function sortearAmigo() {
    if (sorteioRealizado) {
        alert('Sorteio já realizado, adicione novos amigos para sortear novamente!');
    } else if (amigos.length === 0) {
        alert('Adicione amigos para sortear!');
    } else {
        const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
        reiniciarAmigoSecreto();
        alterarValorElemento('resultado', sorteado);
        sorteioRealizado = true;
    }
}

// Atualiza a lista de amigos no HTML
function atualizarListaAmigos() {
    alterarValorElemento('listaAmigos', amigos.map(amigo => `<li>${amigo}</li>`).join(''));
}

// Limpa o campo de entrada do nome do amigo
function limparElemento(nome_campo) {
    document.getElementById(nome_campo).value = '';
    document.getElementById(nome_campo).innerHTML = '';
}

// Limpa a lista de amigos no HTML
function reiniciarAmigoSecreto() {
    limparElemento('amigo');
    limparElemento('resultado');
    limparElemento('listaAmigos');
    amigos = [];
    sorteioRealizado = false;
}

function alterarValorElemento(elemento, valor) {
    document.getElementById(elemento).innerHTML = valor;
}

// Verifica se o campo está vazio
function validaCampoVazio(campo) {
    return campo == '';
}

function validaDuplicado(amigo) {
    return amigos.includes(amigo);
}
