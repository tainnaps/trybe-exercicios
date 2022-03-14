const imcCalculator = require('./imc');
const velocityCalculator = require('./velocity');
const guessTheNumber = require('./raffle');
const readlineSync = require('readline-sync');

const selectService = () => {
  const userChoice = readlineSync.questionInt(`Which service would you like to use (press the correspondent number)?
  1 - IMC Calculator
  2 - Velocity Calculator
  3 - Guess the number
  `);

  if (userChoice === 1) {
    imcCalculator();
  } else if (userChoice === 2) {
    velocityCalculator();
  } else {
    guessTheNumber();
  }
}

selectService();
