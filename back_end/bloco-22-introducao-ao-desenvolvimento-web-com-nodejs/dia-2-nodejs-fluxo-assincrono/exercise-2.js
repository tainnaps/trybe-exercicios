const operateNumbers = require('./exercise-1');
const generateNumber = require('./randomNumber');

function callOperateNumbers() {
  const num1 = generateNumber();
  const num2 = generateNumber();
  const num3 = generateNumber();

  operateNumbers(num1, num2, num3)
    .then((result) => console.log(`O resultado é ${result}.`))
    .catch((err) => console.error(`Ops! ${err}.`));
};

callOperateNumbers();
