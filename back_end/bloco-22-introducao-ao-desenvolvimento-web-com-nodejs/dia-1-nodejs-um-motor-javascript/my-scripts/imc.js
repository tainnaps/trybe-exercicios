const readlineSync = require('readline-sync');

const calculateIMC = () => {
  let userStatus = '';
  const userName = readlineSync.question('What is your name? ');
  const userWeight = readlineSync.questionFloat('What is your weight (kg)? ');
  const userHeight = readlineSync.questionFloat('What is your height (m)? ');

  const userIMC = (userWeight / (userHeight ** 2)).toFixed(2);

  if (userIMC < 18.5) {
    userStatus = 'under weight';
  } else if (userIMC >= 18.5 && userIMC <= 24.9) {
    userStatus = 'normal weight';
  } else if (userIMC >= 25.0 && userIMC <= 29.9) {
    userStatus = 'overweight';
  } else if (userIMC >= 30.0 && userIMC <= 34.9) {
    userStatus = 'obesity level I';
  } else if (userIMC >= 35.0 && userIMC <= 39.9) {
    userStatus = 'obesity level II';
  } else {
    userStatus = 'obesity levels III e IV';
  }

  console.log(`Hello, ${userName}! Your IMC is ${userIMC} and you have ${userStatus}.`);
}

calculateIMC();
