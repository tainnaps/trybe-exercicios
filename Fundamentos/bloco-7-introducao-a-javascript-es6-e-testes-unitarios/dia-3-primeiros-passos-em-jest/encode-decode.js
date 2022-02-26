function encode(string) {
  let sentence = string;
  sentence = sentence.replace(/a/g, '1');
  sentence = sentence.replace(/e/g, '2');
  sentence = sentence.replace(/i/g, '3');
  sentence = sentence.replace(/o/g, '4');
  sentence = sentence.replace(/u/g, '5');
  return sentence;
}

function decode(string) {
  let sentence = string;
  sentence = sentence.replace(/1/g, 'a');
  sentence = sentence.replace(/2/g, 'e');
  sentence = sentence.replace(/3/g, 'i');
  sentence = sentence.replace(/4/g, 'o');
  sentence = sentence.replace(/5/g, 'u');
  return sentence;
}

module.exports = { encode, decode };
