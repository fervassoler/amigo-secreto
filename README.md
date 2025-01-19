# Descrição

Este projeto é parte de um challenge do curso Oracle Next Education (ONE), realizado pela Oracle em parceria com a Alura, com o objetivo de capacitar talentos em tecnologia. 
Neste challenge estamos criando uma aplicação web para realizar o sorteio de um amigo secreto.

![Image](assets/tela_inicial.png)
_______

## Funcionalidades

- **Adicionar amigos:** 
  - Ao clicar em "Adicionar" o nome do amigo inserido no campo irá aparecer em uma lista abaixo. 
  - Caso o campo de texto esteja vazio ou o nome já esteja na lista irá aparecer um alerta pedindo para digitar um nome válido.
  <br><img src="assets/campo_insert.png" style="heigt: 80px;"><br>
<br>

- **Sorteio aleatório:** 
  - Ao clicar no botão "Sortear Amigo", um nome da lista será selecionado aleatoriamente e exibido na tela. 
  - Caso o sorteio já tenha ocorrido ou ainda não tenha nenhum amigo adicionado irá aparecer um alerta pedindo para adicionar os nomes dos amigos.
  <br><img src="assets/botao_sortear.png" style="heigt: 80px;"><br>
<br>

- **Reiniciar:**
Ao clicar no icone de reiniciar amigo secreto a lista de amigos será resetada para iniciar novamnte a adição dos nomes para o sorteio.
<br><img src="assets/restart.svg" style="width: 80px;"><br>
  
_______

## Tecnologias Utilizadas

- <img alt="HTML" src="https://img.shields.io/badge/HTML-f79a4f?style=for-the-badge&logo=html5&logoColor=" style ="vertical-align: middle;"/> | <img alt="CSS" src="https://img.shields.io/badge/CSS-f79a4f?&style=for-the-badge&logo=css3&logoColor=36945d" style ="vertical-align: middle;"/> | <img alt="JS" src="https://img.shields.io/badge/JavaScript-f79a4f?style=for-the-badge&logo=javascript&logoColor=ffd02a" style ="vertical-align: middle;"/>

_______

## Como Executar o Projeto

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/challenge-amigo-secreto.git
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd challenge-amigo-secreto
    ```
3. Abra a página inicial:
    - No Linux ou Mac:
    ```bash
    open index.html
    ```
    - No Windows:
    ```cmd
    index.html
    ```
_______

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature:
    ```bash
    git checkout -b minha-feature
    ```
3. Commit suas mudanças:
    ```bash
    git commit -m 'Minha nova feature'
    ```
4. Faça um push para a branch:
    ```bash
    git push origin minha-feature
    ```
5. Abra um Pull Request
