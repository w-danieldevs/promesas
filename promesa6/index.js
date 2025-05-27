//6. Crear una Función Asíncrona Simple
//Escribir una función asíncrona que devuelva un mensaje "Hola, Mundo" y consumirla con .then() o await.


async function saludar (){
    return "HOLA MUNDO"
}

    async function hacer (){
        const mensaje= await saludar()
        console.log(mensaje)
    }
    hacer()
    