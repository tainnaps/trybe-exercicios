// Questão 9

let numbers = [];
let divisionResults = [];
const limit = 25;

for (let index = 0; index < limit; index += 1) {
  numbers[index] = index + 1;
  divisionResults[index] = numbers[index] / 2;
}

console.log(divisionResults);
