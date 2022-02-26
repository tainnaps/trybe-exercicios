const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(matrix) {
  const reduced = matrix.reduce((accumulator, currentValue) => {
    accumulator.push(...currentValue);

    return accumulator;
  }, []);

  return reduced;
}

console.log(flatten(arrays));
