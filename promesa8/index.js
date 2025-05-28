//Procesar Datos en Serie con await
//Crear una función que procese una lista de nombres (en un arreglo) uno por uno.
//  Usa await para simular un retraso de 1 segundo entre cada nombre procesado. Implementar la función delay y el arreglo de nombres.

function delay(ms){
    return new Promise (resolve =>setTimeout(resolve,ms))
}

const nombres =["Ana", "Carlos", "Juan", "Daniel"]

async function proceso(lista){
    for(const nombre of lista){
        console.log(`${nombre}`)
        await delay(1000)
    }
    console.log("EXITO")
}
proceso (nombres)