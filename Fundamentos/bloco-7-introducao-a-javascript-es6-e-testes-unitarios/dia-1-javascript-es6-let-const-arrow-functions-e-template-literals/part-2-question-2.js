// Part 2 - question 2
const longestWord = (phrase) => {
  const words = phrase.split(' ');
  const lengths = [];
  for (let i = 0; i < words.length; i += 1) {
    lengths[i] = words[i].length;
  }
  const index = lengths.indexOf(Math.max(...lengths));
  return words[index];
};

console.log(`The longest word is '${longestWord('Antônio foi no banheiro e não sabemos o que aconteceu')}'.`);
