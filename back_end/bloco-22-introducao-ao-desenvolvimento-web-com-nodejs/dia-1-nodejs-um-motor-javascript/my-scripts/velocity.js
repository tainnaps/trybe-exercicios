const readlineSync = require('readline-sync');

const calculateVelocity = () => {
  const distance = readlineSync.questionInt('Whats is the travelled distance by the car (m)? ');
  const time = readlineSync.questionInt('In how much time did the car travelled this distance (s)? ');
  const velocity = (distance / time).toFixed(2);

  console.log(`The car average velocity is ${velocity}.`);
}

module.exports = calculateVelocity;
