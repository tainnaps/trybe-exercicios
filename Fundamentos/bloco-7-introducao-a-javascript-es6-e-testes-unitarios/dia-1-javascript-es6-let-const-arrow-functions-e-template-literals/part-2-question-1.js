// Part 2 - question 1
const calcFactorial = (number) => {
  let factorial = 1;
  for (let i = 1; i <= number; i += 1) {
    factorial *= i;
  }
  return factorial;
};

const getFactorial = (number) => (number > 0) ? calcFactorial(number) : 1;

console.log(getFactorial(4));
