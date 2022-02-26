// Questão 4

const n = 5;

if (n > 1) {
  for (let line = 1; line <= n; line += 1) {
    let content = "";
    for (let spacesColumn = 1; spacesColumn <= (spacesColumn + 2); spacesColumn += 1) {
      content += " ";
      if (spacesColumn === (spacesColumn + 2)) {
        for (let asterisksColumn = 0; asterisksColumn < array.length; asterisksColumn += 1) {
          content += "*";
          spacesColumn = 1;
        }
      }
    }
    console.log(content);
  }
} else {
  console.log("Entrada inválida.");
}
