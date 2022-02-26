// Questão 2

const n = 5;

if (n > 1) {
  for (let line = 1; line <= n; line += 1) {
    let asterisks = "";
    for (let column = 0; column < line; column += 1) {
      asterisks += "*";
    }
    console.log(asterisks);
  }
} else {
  console.log("Entrada inválida.");
}
