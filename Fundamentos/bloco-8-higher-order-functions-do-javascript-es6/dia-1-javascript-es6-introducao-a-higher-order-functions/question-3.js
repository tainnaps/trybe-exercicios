// Question 3

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (correctAnswers, studentAnswers) => {
  let score = 0;

  for (let i = 0; i < correctAnswers.length; i += 1) {
    if (studentAnswers[i] !== 'N.A') {
      studentAnswers[i] === correctAnswers[i] ? score += 1 : score -= 0.5;
    }
  }

  return score;
};

const getScore = (correctAnswers, studentAnswers, callback) => callback(correctAnswers, studentAnswers);

console.log(getScore(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers));
