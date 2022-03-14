const readlineSync = require('readline-sync');

const raffle = () => {
  let result = '';
  const randomNumber = Math.floor(Math.random() * 10);
  const userGuess = readlineSync.questionInt('Guess an integer number between 0 and 10: ');

  if (userGuess === randomNumber) {
    result = 'Congratulations, right number!';
  } else {
    result = `Ops, it was not this time. The number was ${randomNumber}.`; 
  }

  console.log(result);

  const playAgain = readlineSync.question(
    'Would you like to play again (press Y for yes and N for no)? '
  );

  if (playAgain.toLowerCase() === 'y') {
    raffle();
  } else {
    console.log('Thanks for playing!');
  }
}

module.exports = raffle;
