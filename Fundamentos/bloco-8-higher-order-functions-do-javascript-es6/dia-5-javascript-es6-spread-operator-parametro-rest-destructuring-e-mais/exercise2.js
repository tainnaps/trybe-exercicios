const sum = (...numbers) => {
  // console.log(numbers);
  return numbers.reduce((acc, cur) => acc + cur);
};

console.log(sum(1, 2, 3, 4));
