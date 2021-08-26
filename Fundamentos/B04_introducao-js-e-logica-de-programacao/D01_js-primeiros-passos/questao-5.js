// Questão 5

const a = 30;
const b = 60;
const c = 90;

if (a < 0 || b < 0 || c < 0) {
  console.log("Erro: ângulo(s) inválido(s). Insira-os novamente.");
}
else if (a + b + c === 180) {
  console.log("true");
}
else {
  console.log("false");
}
