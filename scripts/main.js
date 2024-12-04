const intentos = parseInt(prompt("Facilite la realización de sus recetas ¿Cuántas conversiones de temperatura deseas realizar?"));

if (isNaN(intentos) || intentos <= 0) {
    alert("Por favor, ingresa un número válido de intentos.");
    console.log("Número de intentos inválido.");
} else {
    for (let i = 0; i < intentos; i++) {
        const fahrenheit = parseFloat(prompt(`Conversión ${i + 1}/${intentos}: Ingresa la temperatura en Fahrenheit:`)
        );

        if (isNaN(fahrenheit)) {
            alert("Por favor, ingresa un número válido.");
            console.log(`Conversión ${i + 1}: Valor no válido.`);
            continue; // Pasar al intento siguente cuando sea válido
        }

        const celsius = (fahrenheit - 32) * 5 / 9;
        alert(`${fahrenheit} grados Fahrenheit son equivalentes a ${celsius.toFixed(2)} grados Celsius.`);
        console.log(`Conversión ${i + 1}: ${fahrenheit} grados Fahrenheit son equivalentes a ${celsius.toFixed(2)} grados Celsius.`);
    }

    alert("Gracias por usar el conversor. ¡Hasta pronto!");
    console.log("El programa terminó después de realizar todas las conversiones.");
}
