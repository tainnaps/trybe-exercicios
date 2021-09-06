// Questão 1

const a = 7;
const b = 5;
let operation = '+';

switch (operation) {
  case '+':
    console.log(a + b);
    break;
  case '-':
    console.log(a - b);
    break;
  case '*':
    console.log(a * b);
    break;
  case '/':
    console.log(a / b);
    break;
  case '%':
    console.log(a % b);
    break;
  default:
    console.log('Operação inválida.');
    break;
}
