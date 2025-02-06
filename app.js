let amigos = [];
let sorteioRealizado = false;
let toRemove = '';
let sorteado = '';
let sorteioIniciado = false;

// Coloca a primeira letra de cada palavra em maiúscula
function capitalizar(texto) {
    return texto.split(' ')
        .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase())
        .join(' ');
}

// Validacoes campo vazio e duplicado
const validaCampoVazio = texto => texto === '';
const validaDuplicado = amigo => amigos.includes(amigo);


// aplica validacoes e trata cada amigo no input do usuário
function validaTrataInput(amigoInput) {

    const amigo = capitalizar(amigoInput.replace(/\s+/g, ' ').trim(););


    if (validaCampoVazio(amigo)) {
        alert('Digite o nome do amigo!');
        return;
    }

    if (!/^[\p{L} ]+$/u.test(amigo)) {
        alert(`Nome ${amigo} inválido! O nome deve conter apenas letras!`);
        return;
    }

    if (validaDuplicado(amigo)) {
        alert(`Amigo ${amigo} já adicionado!`);
        return;
    }
    amigos.push(amigo);
}

// Adiciona amigos à lista
function adicionarAmigo() {
    const amigoInput = document.getElementById('amigo').value;

    // Adiciona cada amigo separado por vírgula
    amigoInput.split(',').forEach(item => validaTrataInput(item));

    document.getElementById('resultado').innerHTML = '';
    
    atualizarListaAmigos();
    limparElementos("amigo");
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

    if (toRemove) {
        amigos = amigos.filter(amigo => amigo !== toRemove);
        toRemove = '';
    }

    document.getElementById('adicionar-amigo').disabled = true
    sorteado = amigos[Math.floor(Math.random() * amigos.length)];

    if (amigos.length == 1) {
        sorteioRealizado = true;
    } else {
        toRemove = sorteado;
    }

    // se sorteioRealizado acao = add else remove
    let acao = sorteioRealizado ? true : false;

    limparElementos('amigo', 'listaAmigos');
    alterarValorElemento('resultado', sorteado);

    alterarClasseElemento("hiden-elements", "remove", "hidden");
    document.getElementById('auto-sorteio').disabled = acao
}

// Re-sortear amigo caso o mesmo tenha sido sorteado
function resortearAmigo() {
    let nomeSorteado = sorteado;
    while (sorteado == nomeSorteado) {
        sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    }
    limparElementos('amigo', 'listaAmigos');
    alterarValorElemento('resultado', sorteado);
    document.getElementById('auto-sorteio').disabled = true

    toRemove = sorteado;
}

// Atualiza a lista de amigos no HTML
function atualizarListaAmigos() {
    alterarValorElemento('listaAmigos', amigos.map(amigo => `<li>${amigo}</li>`).join(''));
}

// Limpa a lista de amigos no HTML
function reiniciarAmigoSecreto() {
    document.getElementById('adicionar-amigo').disabled = false
    limparElementos('amigo', 'resultado', 'listaAmigos');
    alterarClasseElemento(elemento = "hiden-elements", "add", "hidden");
    amigos = [];
    sorteioRealizado = false;
    sorteado = '';
    toRemove = '';
}

// Oculta o resultado do sorteio
function ocultarResultado() {
    document.getElementById('auto-sorteio').disabled = true
    alterarClasseElemento("hiden-elements", "add", "hidden");

    if (!sorteioRealizado) {
        alterarValorElemento('resultado', 'Continue sorteando!');
    }
    else {
        alterarValorElemento('resultado', '');
        reiniciarAmigoSecreto();
    }
}

// Limpa o valor de um ou mais elementos
function limparElementos(...elementos) {
    elementos.forEach(elemento => {
        alterarValorElemento(elemento, '');
        document.getElementById(elemento).value = '';
    });
}

// Altera o valor de um elemento no HTML
function alterarValorElemento(elemento, valor) {
    document.getElementById(elemento).innerHTML = valor;
}

// Adiciona ou remove uma classe css de um elemento
function alterarClasseElemento(elemento, acao, classe) {
    document.getElementById(elemento).classList[acao](classe);
};