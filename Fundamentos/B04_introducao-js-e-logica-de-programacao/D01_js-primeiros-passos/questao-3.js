// Questão 3

const a = 18;
const b = 4;
const c = 8;

if (a > b && a > c) {
  console.log(a);
}
else if (b > a && b > c) {
  console.log(b);
}
else if (a === b && b === c) {
  console.log("Os números são iguais");
}
else {
  console.log(c);
}
