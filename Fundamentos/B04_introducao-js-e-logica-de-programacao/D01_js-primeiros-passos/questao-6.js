// Questão 6

let pecaDeXadrez = "Cavalo";

pecaDeXadrez = pecaDeXadrez.toLowerCase();

switch (pecaDeXadrez) {
  case "rainha":
    console.log("Move-se na vertical, horizontal e diagonal, quantas casas quiser.");
    break;
  case "rei":
    console.log("Move-se na vertical, horizontal e diagonal, uma casa por vez.");
    break;
  case "torre":
    console.log("Move-se na vertical e horizontal, quantas casas quiser.");
    break;
  case "bispo":
    console.log("Move-se na diagonal, quantas casas quiser.");
    break;
  case "cavalo":
    console.log("Move-se em L, uma casa na horizontal e duas na vertical ou o contrário.");
    break;
  case "peão":
    console.log("Move-se na vertical, uma casa por vez, exceto no primeiro movimento.");
    break;
  default:
    console.log("Erro: peça inválida.");
}
