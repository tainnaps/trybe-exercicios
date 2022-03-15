const fs = require('fs').promises;

function getAllSimpsonsData() {
  fs.readFile('./simpsons.json', 'utf-8')
    .then((response) => JSON.parse(response))
    .then((simpsonsData) => simpsonsData.map(({ id, name }) => `${id} - ${name}`))
    .then((formattedData) => formattedData.forEach((data) => console.log(data)))
    .catch((err) => console.error(err.message));
}

getAllSimpsonsData();
