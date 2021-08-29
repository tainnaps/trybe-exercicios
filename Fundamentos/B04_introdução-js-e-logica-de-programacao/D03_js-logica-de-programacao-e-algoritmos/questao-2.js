// Questão 2

const n = 5;

if (n > 1) {
  for (let line = 1; line <= n; line += 1) {
    let asteristiks = "";
    for (let column = 0; column < line; column += 1) {
      asteristiks += "*";
    }
    console.log(asteristiks);
  }
} else {
  console.log("Entrada inválida.");
}
