// Part 2 - question 4
const skills = ['HTML', 'CSS', 'JavaScript', 'Git', 'Bash'];

const placeName = (name) => {
  const phrase = 'Tryber x aqui!';
  return phrase.replace(/x/i, name);
};

const message = (string) => {
  return `${string} Minhas cinco principais habilidades são:
  - ${skills[0]}
  - ${skills[1]}
  - ${skills[2]}
  - ${skills[3]}
  - ${skills[4]}
  #goTrybe`;
};

console.log(message(placeName('Tainá')));
