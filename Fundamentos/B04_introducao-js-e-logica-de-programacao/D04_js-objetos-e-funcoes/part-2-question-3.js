// Part 2 - Question 3
function findLowerNumberIndex(numbers) {
  let lowerNumber = Math.min(...numbers);
  return numbers.indexOf(lowerNumber);
}

console.log(findLowerNumberIndex([2, 4, 6, 7, 10, 0, -3]));
