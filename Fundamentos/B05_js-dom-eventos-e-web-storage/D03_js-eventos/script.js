function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercício 1
const daysList = document.getElementById('days');

function createDezDays() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let listItem = document.createElement('li');
    listItem.innerText = dezDaysList[index];
    listItem.className = 'day';
    daysList.appendChild(listItem);

    if (listItem.innerText === '24' || listItem.innerText === '25' || listItem.innerText === '31') {
      listItem.classList.add('holiday');
    }

    if (listItem.innerText === '4' || listItem.innerText === '11' || listItem.innerText === '18' || listItem.innerText === '25') {
      listItem.classList.add('friday');
    }
  }
}

createDezDays();

// Exercício 2
const divButtons = document.querySelector('.buttons-container');

function createHolidayButton(buttonContent) {
  const button = document.createElement('button');
  button.id = 'btn-holiday';
  button.innerText = buttonContent;
  divButtons.appendChild(button);
  return button;
}

const holidayButton = createHolidayButton('Feriados');


// Exercício 3
const holidays = document.querySelectorAll('.holiday');
let holidaysCounter = 0;

holidayButton.addEventListener('click', function () {
  holidaysCounter += 1;

  if ((holidaysCounter % 2) === 0) {
    for (let index = 0; index < holidays.length; index += 1) {
      holidays[index].style.backgroundColor = 'rgb(238,238,238)';
    }
  } else {
    for (let index = 0; index < holidays.length; index += 1) {
      holidays[index].style.backgroundColor = 'rgb(255, 255, 255)';
    }
  }
});

// Exercício 4
function createFridayButton(buttonContent) {
  const button = document.createElement('button');
  button.id = 'btn-friday';
  button.innerText = buttonContent;
  divButtons.appendChild(button);
  return button;
}

const fridayButton = createFridayButton('Sexta-feira');

// Exercício 5
const fridays = document.querySelectorAll('.friday');
let fridaysBackup = [];
let fridaysCounter = 0;

for (let index = 0; index < fridays.length; index += 1) {
  fridaysBackup[index] = fridays[index].innerText;
}

fridayButton.addEventListener('click', function () {
  fridaysCounter += 1;

  if ((fridaysCounter % 2) === 0) {
    for (let index = 0; index < fridays.length; index += 1) {
      fridays[index].innerText = fridaysBackup[index];
    }
  } else {
    for (let index = 0; index < fridays.length; index += 1) {
      fridays[index].innerText = 'SEXTOU!!';
    }
  }
});

// Exercício 6
const monthDays = document.querySelectorAll('.day');

function giveZoom() {
  for (const monthDay of monthDays) {
    monthDay.addEventListener('mouseover', function (event) {
      event.target.style.fontSize = 'x-large';
    });
  }
}

function takeZoomOut() {
  for (const monthDay of monthDays) {
    monthDay.addEventListener('mouseout', function (event) {
      event.target.style.fontSize = '20px';
    });
  }
}

giveZoom();
takeZoomOut();

// Exercício 7
const divTasks = document.querySelector('.my-tasks');

function addTask(name) {
  const task = document.createElement('span');
  task.innerText = name;
  divTasks.appendChild(task);
}

addTask('Estudar conteúdo do dia');

// Exercício 8
function addTaskColor(color) {
  const div = document.createElement('div');
  div.className = 'task';
  div.style.backgroundColor = color;
  divTasks.appendChild(div);
}

addTaskColor('rgb(3, 187, 133');

// Exercício 9
const taskColor = document.querySelector('.task');
let taskCounter = 0;

function taskSelection() {
  taskColor.addEventListener('click', function (event) {
    taskCounter += 1;

    if ((taskCounter % 2) === 0) {
      event.target.classList.remove('selected');
    } else {
      event.target.classList.add('selected');
    }
  });
}

taskSelection();
