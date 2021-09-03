let sentence = 'oi mundo';
let phrase = sentence.split('');
console.log(phrase);
  for (let index = 0; index < phrase.length; index += 1) {
    phrase[index] = phrase.replace('a', '1');
    phrase[index] = phrase.replace('e', '2');
    phrase[index] = phrase.replace('i', '3');
    phrase[index] = phrase.replace('o', '4');
    phrase[index] = phrase.replace('u', '5');
  }
  //return phrase.join('');
