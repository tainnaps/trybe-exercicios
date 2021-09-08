// Part 2 - Question 4
function countRepetition(numbers) {
  let repetitions = [];

  for (let index = 0; index < numbers.length; index += 1) {
    let counter = 0;

    for (const number of numbers) {
      if (number === numbers[index]) {
        counter += 1;
      }
    }
    repetitions[index] = counter;
    counter = 0;
  }

  return repetitions;
}

function findMostRepeatedNumber(numbers) {
  let repetitions = countRepetition(numbers);
  let index = repetitions.indexOf(Math.max(...repetitions));

  return numbers[index];
}

console.log(findMostRepeatedNumber([2, 3, 2, 5, 3, 8, 2, 3, 3]));
