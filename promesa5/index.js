const promesaRapida = new Promise(resolve => setTimeout(() => resolve('Ganó la de 2 segundos'), 2000));
const promesaLenta = new Promise(resolve => setTimeout(() => resolve('Ganó la de 5 segundos'), 5000));

Promise.race([promesaRapida, promesaLenta])
  .then(resultado => console.log(resultado));