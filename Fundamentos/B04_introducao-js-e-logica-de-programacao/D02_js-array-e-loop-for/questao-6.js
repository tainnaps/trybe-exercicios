// Questão 6

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let counter = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if ((numbers[index] % 2) !== 0) {
    counter += 1;
  }
}

if (counter !== 0) {
  console.log("Há", counter, "números ímpares");
} else {
  console.log("Nenhum número ímpar encontrado");
}

