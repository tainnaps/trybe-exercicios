// Part 2 - Question 4
function findLongestName(names) {
  let longestName = names[0];

  for (const name of names) {
    if (name.length > longestName.length) {
      longestName = name;
    }
  }

  return longestName;
}

console.log(findLongestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
