// Questão 1

const n = 5;

if (n > 1) {
  let asteristiks = "";
  for (let column = 0; column < n; column += 1) {
    asteristiks += "*";
  }
  for (let line = 0; line < n; line += 1) {
    console.log(asteristiks);
  }
} else {
  console.log("Entrada inválida.");
}

