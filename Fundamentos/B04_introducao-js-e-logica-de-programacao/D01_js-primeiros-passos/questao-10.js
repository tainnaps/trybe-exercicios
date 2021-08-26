// Questão 10

const valorCusto = 200;
const valorVenda = 1000;
let valorCustoTotal = valorCusto + (valorCusto * 0.2);
let lucro = valorVenda - valorCustoTotal;

if (valorCusto < 0 || valorVenda < 0) {
  console.log("Erro: valores de entrada inválidos.");
}
else {
  console.log(1000 * lucro);
}
