// Part 2 - Question 7
function substringCheck(word, ending) {
  if (ending === (word.substr(word.length - ending.length))) {
    return true;
  }

  return false;
}

console.log(substringCheck('trybe', 'be'));
