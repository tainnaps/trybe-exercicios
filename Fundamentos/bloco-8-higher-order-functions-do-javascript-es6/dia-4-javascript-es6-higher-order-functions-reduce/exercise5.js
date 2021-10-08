const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

/*
function containsA(namesList) {
  const repetition = namesList.reduce((acc, cur) => {
    return cur.toLowerCase().startsWith('a') ? acc += 1 : acc += 0;
  }, 0);

  return repetition;
}
*/

function containsA(namesList) {
  const repetition = namesList.reduce((acc, cur) => {
    return cur[0].match(/a/i) ? acc += 1 : acc += 0;
  }, 0);

  return repetition;
}

console.log(containsA(names));
