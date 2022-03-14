const weight = 50;
const height = 1.63;
const imc = (weight, height) => (weight / (height ** 2)).toFixed(2);

console.log(imc(weight, height));
