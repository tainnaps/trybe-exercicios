// Part 2 - question 2
const getLongestWord = (phrase) => {
  const words = phrase.split(' ');
  const lengths = [];
  for (let i = 0; i < words.length; i += 1) {
    lengths[i] = words[i].length;
  }
  const index = lengths.indexOf(Math.max(...lengths));
  return words[index];
};

console.log(`The longest word is '${getLongestWord('Antônio foi no banheiro e não sabemos o que aconteceu')}'.`);
