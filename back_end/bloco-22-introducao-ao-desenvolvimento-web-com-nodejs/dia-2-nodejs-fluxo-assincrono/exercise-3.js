const operateNumbers = require('./exercise-1');
const generateNumber = require('./randomNumber');

async function callOperateNumbers() {
  const num1 = generateNumber();
  const num2 = generateNumber();
  const num3 = generateNumber();
  // const numbers = Array.from({ length: 3 }, generateNumber);

  try {
    const result = await operateNumbers(num1, num2, num3);
    // const result = await operateNumbers(...numbers);
    console.log(`O resultado é ${result}.`);
  } catch (err) {
    console.error(`Ops! ${err}.`)
  }
};

callOperateNumbers();

console.log(randomNumbers);
