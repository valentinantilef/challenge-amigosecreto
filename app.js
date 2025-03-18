let amigos = [];

function agregarAmigo() {

    let inputAmigo = document.getElementById("amigo").value.trim();

    // Validar que el campo no esté vacío
    if (inputAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar el nombre al array
    amigos.push(inputAmigo);

    // Limpiar el campo de entrada
    document.getElementById("amigo").value = "";

    // Llamar a la función para actualizar la lista en pantalla
    actualizarLista();
}

function actualizarLista() {
    
    let lista = document.getElementById("listaAmigos");

    lista.innerHTML = "";
 
    amigos.forEach((nombre, index) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {

    let resultado = document.getElementById("resultado");

    if (amigos.length === 0) {
        resultado.innerHTML = "<li>No hay amigos en la lista para sortear.</li>";
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    let amigoSorteado = amigos[indiceAleatorio];
 
    resultado.innerHTML = `<li>🎉 ¡El amigo secreto es: <strong>${amigoSorteado}</strong>! 🎁</li>`;
}
