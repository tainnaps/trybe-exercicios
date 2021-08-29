// Questão 1

const n = 5;
let asteristics = "";

if (n > 1) {
  for (let column = 0; column < n; column += 1) {
    asteristics += "*";
  }

  for (let line = 0; line < n; line += 1) {
    console.log(asteristics);
  }
} else {
  console.log("Entrada inválida.");
}

