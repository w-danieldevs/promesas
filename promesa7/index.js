//7. Uso de await con una Promesa
//Crea una función asíncrona que utilice await para esperar una promesa que resuelve en 3 segundos y luego imprime "Proceso terminado".

 function proceso (ms){
     return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve("EXITO")
        },ms)
    })
}
async function ejecutar() {
    const resultado = await proceso(3000)
    console.log(resultado)

    console.log("Proceso terminado")

}
ejecutar()