// Part 2 - Question 1
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
