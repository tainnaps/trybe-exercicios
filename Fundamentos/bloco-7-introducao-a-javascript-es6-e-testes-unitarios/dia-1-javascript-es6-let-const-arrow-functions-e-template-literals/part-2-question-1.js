// Part 2 - question 1
const factorial = (number) => {
  let factorial = 1;
  for (let i = 1; i <= number; i += 1) {
    factorial *= i;
  }
  return factorial;
};

// Bônus:
// const factorial = (number) => (number > 0) ? factorial(number) : 1;

console.log(factorial(4));
