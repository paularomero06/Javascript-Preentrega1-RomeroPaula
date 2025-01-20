class ClaseTejido {
    constructor(nombre, horario, profesora) {
        this.nombre = nombre;
        this.horario = horario;
        this.profesora = profesora;
    }

    obtenerDescripcion() {
        return `${this.nombre} - Horario: ${this.horario}, Profesora: ${this.profesora}`;
    }

    // Método estático para filtrar clases por nombre de clase
    static filtrarPorClase(clases, nombreClase) {
        return clases.filter(clase => clase.nombre.toLowerCase() === nombreClase.toLowerCase());
    }
}

let clases = [
    new ClaseTejido("Crochet", "Lunes 10:00 AM", "Patricia"),
    new ClaseTejido("Macramé", "Martes 2:00 PM", "Alicia"),
    new ClaseTejido("Tricot", "Miércoles 4:00 PM", "Sonia"),
    new ClaseTejido("Telar", "Jueves 6:00 PM", "Monica")
];

// Mostrar clases disponibles con botón de inscripción
document.getElementById("mostrarClases").addEventListener("click", () => {
    const clasesDisponibles = document.getElementById("clasesDisponibles");
    clasesDisponibles.innerHTML = "<h3>Opciones de clases disponibles:</h3>";

    clases.forEach((clase, index) => {
        clasesDisponibles.innerHTML += `
            <div>
                <p>${index + 1}. ${clase.obtenerDescripcion()}</p>
                <button onclick="inscribirse(${index})">Inscribirse</button>
            </div>
        `;
    });
});

// Manejar inscripción
function inscribirse(index) {
    const claseElegida = clases[index];
    const resultadoInscripcion = document.getElementById("resultadoInscripcion");

    resultadoInscripcion.innerHTML = `
        <h3>Inscripción confirmada</h3>
        <p>Te has inscripto en: ${claseElegida.obtenerDescripcion()}</p>
    `;
}

// Buscar clases por nombre
document.getElementById("buscar").addEventListener("click", () => {
    const claseBuscada = document.getElementById("buscarClase").value;
    const resultadoBusqueda = document.getElementById("resultadoBusqueda");

    const clasesFiltradas = ClaseTejido.filtrarPorClase(clases, claseBuscada);

    if (clasesFiltradas.length > 0) {
        resultadoBusqueda.innerHTML = "<h3>Clases encontradas:</h3>";
        clasesFiltradas.forEach(clase => {
            resultadoBusqueda.innerHTML += `<p>${clase.obtenerDescripcion()}</p>`;
        });
    } else {
        resultadoBusqueda.innerHTML = "<p>No se encontraron clases con ese nombre.</p>";
    }
});

function inscribirse(index) {
    const claseElegida = clases[index];
    
    // Obtener inscripciones existentes o inicializar un array
    let inscripciones = JSON.parse(localStorage.getItem("inscripciones")) || [];
    
    // Agregar la nueva inscripción
    inscripciones.push(claseElegida);
    
    // Guardar nuevamente en localStorage
    localStorage.setItem("inscripciones", JSON.stringify(inscripciones));

    // Mostrar el mensaje de confirmación
    const resultadoInscripcion = document.getElementById("resultadoInscripcion");
    resultadoInscripcion.innerHTML = `
        <h3>Inscripción confirmada</h3>
        <p>Te has inscrito en: ${claseElegida.obtenerDescripcion()}</p>
    `;
}

document.getElementById("verInscripciones").addEventListener("click", () => {
    const inscripciones = JSON.parse(localStorage.getItem("inscripciones")) || [];
    const historial = document.getElementById("resultadoBusqueda");

    if (inscripciones.length > 0) {
        historial.innerHTML = "<h3>Historial de Inscripciones:</h3>";
        inscripciones.forEach(inscripcion => {
            historial.innerHTML += `<p>${inscripcion.nombre} - Horario: ${inscripcion.horario}, Profesora: ${inscripcion.profesora}</p>`;
        });
    } else {
        historial.innerHTML = "<p>No tienes inscripciones registradas.</p>";
    }
});

