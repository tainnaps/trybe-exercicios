//Question 5
let info1 = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

info1.recorrente = "Sim";

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

for (let key in (info1 && info2)) {
  if ((key === "recorrente") && (info1.recorrente === "Sim") && (info2.recorrente === info1.recorrente)) {
    console.log("Ambos recorrentes");
  } else {
    console.log(info1[key], "e", info2[key]);
  }
}
