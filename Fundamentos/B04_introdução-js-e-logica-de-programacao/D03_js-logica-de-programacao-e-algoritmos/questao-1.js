// Questão 1

const n = 5;

if (n > 1) {
  let asterisks = "";
  for (let column = 0; column < n; column += 1) {
    asterisks += "*";
  }
  for (let line = 0; line < n; line += 1) {
    console.log(asterisks);
  }
} else {
  console.log("Entrada inválida.");
}
