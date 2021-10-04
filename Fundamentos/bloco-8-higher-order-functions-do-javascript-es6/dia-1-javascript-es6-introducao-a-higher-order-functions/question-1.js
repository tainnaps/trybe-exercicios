// Question 1

const newEmployeeData = (name) => {
  const joinedName = name.split(' ').join('_');

  return {
    name,
    email: `${joinedName.toLowerCase()}@trybe.com`,
  };
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  };
  return employees;
};

console.log(newEmployees(newEmployeeData));
