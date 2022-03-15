const recieveOnlyNumbers = require('./exercise-1');
const generateNumber = require('./randomNumber');

function passNumbers() {
  const num1 = generateNumber();
  const num2 = generateNumber();
  const num3 = generateNumber();

  recieveOnlyNumbers(num1, num2, num3)
    .then((result) => console.log(`O resultado é ${result}.`))
    .catch((err) => console.error(`Ops! ${err}.`));
};

passNumbers();
