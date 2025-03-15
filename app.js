//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Lista para armazenar os amigos
let amigos = [];

document.addEventListener("DOMContentLoaded", function () {
    // Capturando elementos do DOM
    const inputNome = document.getElementById("amigo");
    const botaoAdicionar = document.querySelector(".button-add");
    const listaAmigos = document.getElementById("listaAmigos");
    const botaoSortear = document.querySelector(".button-draw");
    const resultado = document.getElementById("resultado");

    // Função para adicionar um amigo à lista
    function adicionarAmigo() {
        let nome = inputNome.value.trim();

        if (nome === "") {
            alert("Por favor, insira um nome válido.");
            return;
        }

        amigos.push(nome);
        inputNome.value = ""; // Limpa o campo de entrada
        atualizarLista();
    }

    // Atualiza a lista exibida na tela
    function atualizarLista() {
        listaAmigos.innerHTML = ""; // Limpa a lista antes de atualizar

        amigos.forEach((nome, index) => {
            let item = document.createElement("li");
            item.textContent = nome;
            listaAmigos.appendChild(item);
        });
    }

    // Função para sortear um amigo aleatoriamente
    function sortearAmigo() {
        if (amigos.length === 0) {
            alert("A lista está vazia! Adicione amigos antes de sortear.");
            return;
        }

        let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
        resultado.innerHTML = `<li>🎉 O amigo secreto sorteado é: <strong>${sorteado}</strong> 🎉</li>`;
    }

    // Adiciona os eventos de clique aos botões
    botaoAdicionar.addEventListener("click", adicionarAmigo);
    botaoSortear.addEventListener("click", sortearAmigo);
});

