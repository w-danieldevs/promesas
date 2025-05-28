// Crear la promesa
const miPromesa = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promesa cumplida");
  }, 2000); // 2000 milisegundos = 2 segundos
});

// Consumir la promesa usando .then()
miPromesa.then((mensaje) => {
  console.log(mensaje);
});