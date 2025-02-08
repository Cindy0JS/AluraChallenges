// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    // Validar si el campo está vacío
    if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }
    // Agregar el nombre a la lista de amigos
    amigos.push(nombreAmigo);

    // Limpiar el campo de texto
    inputAmigo.value = '';

    // Actualizar la lista visual en la interfaz
    mostrarListaAmigos();
}

// Función para mostrar la lista de amigos en el HTML
function mostrarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar la lista antes de actualizar

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Debes agregar al menos dos amigos para realizar el sorteo.');
        return;
    }

    // Crear un array con los amigos y hacer el sorteo
    const resultado = [];
    const amigosRestantes = [...amigos]; // Copiar el array original

    amigos.forEach((amigo) => {
        // Seleccionar un amigo aleatorio
        const indiceAleatorio = Math.floor(Math.random() * amigosRestantes.length);
        const amigoSorteado = amigosRestantes.splice(indiceAleatorio, 1)[0]; // Eliminar el amigo sorteado

        // Mostrar el resultado del sorteo para el amigo
        resultado.push(`${amigo} -> ${amigoSorteado}`);
    });

    // Mostrar el resultado en la interfaz
    mostrarResultadoSorteo(resultado);
}

// Función para mostrar los resultados del sorteo
function mostrarResultadoSorteo(resultado) {
    const listaResultado = document.getElementById('resultado');
    listaResultado.innerHTML = ''; // Limpiar la lista antes de actualizar

    resultado.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        listaResultado.appendChild(li);
    });
}



