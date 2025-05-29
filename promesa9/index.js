//9. Promise.all en una Función Asíncrona
//Escribir una función asíncrona que use Promise.all para esperar varias promesas.
//  Por ejemplo, realizar tres búsquedas simuladas (con un retraso aleatorio) y mostrar los resultados juntos.

// Simula una búsqueda con un retraso aleatorio (entre 1 y 3 segundos)
function buscar(nombre) {
    return new Promise(resolve => {
        const tiempo = Math.floor(Math.random() * 2000) + 1000; // 1000 a 3000 ms
        setTimeout(() => {
            resolve(`Resultado de: ${nombre} (tardó ${tiempo} ms)`);
        }, tiempo);
    });
}

// Función principal que ejecuta todas las búsquedas a la vez
async function realizarBusquedas() {
    const promesas = [
        buscar("Película"),
        buscar("Libro"),
        buscar("Canción")
    ];

    const resultados = await Promise.all(promesas); // Espera que todas terminen
    console.log("Resultados completos:");
    resultados.forEach(resultado => console.log(resultado));
}

// Ejecutar
realizarBusquedas();