const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage(studentsList, gradesList) {
  const studentsAverageArr = studentsList.map((student, index) => {
    const sumGrades = gradesList[index].reduce((acc, cur) => {
      return acc + cur;
    });

    return {
      name: student,
      average: sumGrades / gradesList[index].length
    };
  });

  return studentsAverageArr;
}

console.log(studentAverage(students, grades));
