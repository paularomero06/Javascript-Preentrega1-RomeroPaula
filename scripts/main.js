class ClaseTejido {
    constructor(nombre, horario, profesora) {
        this.nombre = nombre;
        this.horario = horario;
        this.profesora = profesora;
    }

    obtenerDescripcion() {
        return `${this.nombre} - Horario: ${this.horario}, Profesora: ${this.profesora}`;
    }

    // Filtrar clases por nombre 
    static filtrarPorClase(clases, nombreClase) {
        return clases.filter(clase => clase.nombre.toLowerCase() === nombreClase.toLowerCase());
    }
}

let respuesta = prompt("¿Deseas inscribirte a clases de tejido? (si/no)");

if (respuesta.toLowerCase() === "si") {
    let clases = [
        new ClaseTejido("Crochet", "Lunes 10:00 AM", "Patricia"),
        new ClaseTejido("Macramé", "Martes 2:00 PM", "Alicia"),
        new ClaseTejido("Tricot", "Miércoles 4:00 PM", "Sonia"),
        new ClaseTejido("Telar", "Jueves 6:00 PM", "Monica")
    ];

    let mensaje = "¡Genial! Estas son las opciones disponibles: \n";
    clases.forEach((clase, index) => {
        mensaje += `${index + 1}. ${clase.obtenerDescripcion()}\n`;
    });
    alert(mensaje);
    console.log(mensaje);

    let seleccion = parseInt(prompt("Por favor, elige el número de la clase a la que deseas inscribirte:"));

    if (seleccion > 0 && seleccion <= clases.length) {
        let claseElegida = clases[seleccion - 1];
        alert(`Te has inscripto en la clase de ${claseElegida.obtenerDescripcion()}`);
        console.log(`Inscripto en: ${claseElegida.nombre}`);
    } else {
        alert("Respuesta inválida. Por favor, intenta nuevamente.");
        console.log("Selección inválida.");
    }

    // Buscar clases por nombre
    let claseBuscada = prompt("Ingresa el nombre de la clase para buscar sus detalles:");
    let clasesFiltradas = ClaseTejido.filtrarPorClase(clases, claseBuscada);

    if (clasesFiltradas.length > 0) {
        let mensajeFiltrado = `Clases encontradas con el nombre ${claseBuscada}:\n`;
        clasesFiltradas.forEach(clase => {
            mensajeFiltrado += `${clase.obtenerDescripcion()}\n`;
        });
        alert(mensajeFiltrado);
        console.log(mensajeFiltrado);
    } else {
        alert("No se encontraron clases con ese nombre.");
        console.log("No se encontraron clases con ese nombre.");
    }

} else if (respuesta.toLowerCase() === "no") {
    alert("Está bien, tal vez en otra ocasión.");
    console.log("Está bien, tal vez en otra ocasión.");
} else {
    alert("Respuesta inválida. Por favor, responde con 'si' o 'no'.");
    console.log("Respuesta inválida. Por favor, responde con 'si' o 'no'.");
}