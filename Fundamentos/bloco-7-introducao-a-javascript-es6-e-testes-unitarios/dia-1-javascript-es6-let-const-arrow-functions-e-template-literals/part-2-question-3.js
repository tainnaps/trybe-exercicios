// Part 2 - question 3
const main = document.querySelector('main');

const button = document.querySelector('button');

const section = document.createElement('section');
main.appendChild(section);

let clickCount = 0;

window.onload = () => {
  button.addEventListener('click', () => {
    clickCount += 1;
    section.innerText = clickCount > 1 ? `You have clicked the button ${clickCount} times.` : `You have clicked the button ${clickCount} time.`;
  });
};
