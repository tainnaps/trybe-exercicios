const readlineSync = require('readline-sync');

const userName = readlineSync.question('What is your name? ');
const userWeight = readlineSync.questionFloat('What is your weight? ');
const userHeight = readlineSync.questionFloat('What is your height? ');

const imc = (weight, height) => (weight / (height ** 2)).toFixed(2);

const userIMC = imc(userWeight, userHeight);

const userStatus = () => {
  if (userIMC < 18.5) {
    return 'under weight';
  }
  if (userIMC >= 18.5 && userIMC <= 24.9) {
    return 'normal weight';
  }
  if (userIMC >= 25.0 && userIMC <= 29.9) {
    return 'overweight';
  }
  if (userIMC >= 30.0 && userIMC <= 34.9) {
    return 'obesity level I';
  }
  if (userIMC >= 35.0 && userIMC <= 39.9) {
    return 'obesity level II';
  }
  if (userIMC >= 40.0) {
    return 'obesity levels III e IV';
  }
}

console.log(`Hello, ${userName}! Your IMC is ${userIMC} and you have ${userStatus()}.`);
