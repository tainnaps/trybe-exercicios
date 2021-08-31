// Part 2 - Question 1

/*let word = "ola";
let splitWord = word.split("");
let reverseWord = splitWord.reverse();
let joinWord = reverseWord.join("");

console.log(word);
console.log(splitWord);
console.log(reverseWord);
console.log(joinWord);*/


function palindromeChecker(word) {
  let splitWordArray = word.split("");
  let reverseArray = splitWordArray.reverse();
  let reverseWord = reverseArray.join("");
  if (word === reverseWord) {
    return true;
  } else {
    return false;
  }
}

let isPalindrome = palindromeChecker("arara");

console.log(isPalindrome);
