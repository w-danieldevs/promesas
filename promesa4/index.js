const promesa1 = new Promise(resolve => setTimeout(() => resolve('1s'), 1000));
const promesa2 = new Promise(resolve => setTimeout(() => resolve('2s'), 2000));
const promesa3 = new Promise(resolve => setTimeout(() => resolve('3s'), 3000));

Promise.all([promesa1, promesa2, promesa3])
  .then(resultados => {
    console.log('Resultados:', resultados);
  });
