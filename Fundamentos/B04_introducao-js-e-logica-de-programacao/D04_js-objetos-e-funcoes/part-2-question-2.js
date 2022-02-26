// Part 2 - Question 2
function findHighestNumberIndex(numbers) {
  let highestNumber = Math.max(...numbers);
  return numbers.indexOf(highestNumber);
}

console.log(findHighestNumberIndex([2, 3, 6, 7, 10, 1]));
