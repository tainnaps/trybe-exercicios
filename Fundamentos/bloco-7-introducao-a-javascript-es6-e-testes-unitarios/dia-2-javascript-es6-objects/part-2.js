// Part 2
const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Question 1
const addPairKeyValue = (object, key, value) => { object[key] = value; };

addPairKeyValue(lesson2, 'turno', 'noturno');

// console.log(lesson2);

// Question 2
const getObjectKeys = (object) => Object.keys(object);

// console.log(getObjectKeys(lesson2));

// Question 3
const getObjectLength = (object) => Object.entries(object).length;

// console.log(getObjectLength(lesson2));

// Question 4
const getObjectValues = (object) => Object.values(object);

// console.log(getObjectValues(lesson2));

// Question 5
const joinLessons = () => {
  const allLessons = new Object();

  for (let i = 1; i < 4; i += 1) {
    allLessons[`lesson${i}`] = {};
  }

  Object.assign(allLessons.lesson1, lesson1);
  Object.assign(allLessons.lesson2, lesson2);
  Object.assign(allLessons.lesson3, lesson3);

  return allLessons;
};

console.log(joinLessons());

// Question 6


// Question 7


// Question 8
