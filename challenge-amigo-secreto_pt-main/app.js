let amigos = [];


function adicionarAmigo() {
    let input = document.querySelector("#amigo");
    let nome = input.value.trim();

    
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }
    amigos.push(nome);
    input.value = "";
    atualizarLista();
}


function atualizarLista() {
    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = ""; // Limpa antes de recriar

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}


function sortearAmigo() {
    let resultado = document.querySelector("#resultado");

    
    if (amigos.length === 0) {
        resultado.innerHTML = "<li>Nenhum amigo disponível para sortear.</li>";
        return;
    }

    
    let indice = Math.floor(Math.random() * amigos.length);
    let sorteado = amigos[indice];

    
    resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${sorteado}</strong></li>`;
}
