// Part 2 - Question 6
function cumulativeSum(integerNumber) {
  let sum = 0;

  for (let number = 1; number <= integerNumber; number += 1) {
    sum += number;
  }

  return sum;
}

console.log(cumulativeSum(5));
