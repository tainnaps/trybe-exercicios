// Questão 3

const n = 5;

if (n > 1) {
  for (let line = 1; line <= n; line += 1) {
    let content = "";
    for (let spacesColumn = 0; spacesColumn < (n - line); spacesColumn += 1) {
      content += " ";
    }
    for (let asterisksColumn = 0; asterisksColumn < line; asterisksColumn += 1) {
      content += "*";
    }
    console.log(content);
  }
} else {
  console.log("Entrada inválida.");
}
