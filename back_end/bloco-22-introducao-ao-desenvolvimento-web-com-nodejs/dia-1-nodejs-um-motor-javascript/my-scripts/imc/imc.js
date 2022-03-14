const readlineSync = require('readline-sync');

const name = readlineSync.question('What is your name? ');
const weight = readlineSync.questionFloat('What is your weight? ');
const height = readlineSync.questionFloat('What is your height? ');

const imc = (weight, height) => (weight / (height ** 2)).toFixed(2);

console.log(`Hello, ${name}! Your IMC is ${imc(weight, height)}`);
