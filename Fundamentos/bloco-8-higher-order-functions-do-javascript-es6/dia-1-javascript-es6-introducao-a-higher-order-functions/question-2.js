// Question 2

const checkNumbers = (betNumber, raffledNumber) => betNumber === raffledNumber ? true : false;

const checkBet = (number, callback) => {
  const randomNumber = Math.round(Math.random() * (5 - 1) + 1);

  return callback(number, randomNumber) ? 'Parabéns você ganhou' : 'Tente novamente';
};

console.log(checkBet(2, checkNumbers));
