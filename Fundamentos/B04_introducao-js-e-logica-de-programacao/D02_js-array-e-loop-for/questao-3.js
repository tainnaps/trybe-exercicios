// Questão 3

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let average = 0;

for (let element of numbers) {
  sum = sum + element;
}

average = sum / numbers.length;

console.log(average);
