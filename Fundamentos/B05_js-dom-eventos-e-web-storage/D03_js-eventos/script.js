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
    listItem = document.createElement('li');
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
  holidayButton = document.createElement('button');
  holidayButton.id = 'btn-holiday';
  holidayButton.innerText = buttonContent;
  divButtons.appendChild(holidayButton);
}

createHolidayButton('Feriados');
