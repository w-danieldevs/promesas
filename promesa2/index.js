const promesa = new Promise((resolve, reject) => {
  const numero = Math.random();
  if (numero < 0.5) {
    reject('Número menor a 0.5');
  } else {
    resolve('Número aceptado: ' + numero);
  }
});

promesa
  .then(res => console.log(res))
  .catch(err => console.log('Promesa rechazada'));