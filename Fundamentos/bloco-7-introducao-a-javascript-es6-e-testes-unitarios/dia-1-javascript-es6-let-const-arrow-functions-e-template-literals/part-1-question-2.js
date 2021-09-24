// Part 1 - question 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Reference link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
const sortNumbers = (numbers) => numbers.sort((a, b) => a - b);

console.log(`The numbers ${sortNumbers(oddsAndEvens)} are in ascending order.`);
