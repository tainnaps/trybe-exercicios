// Part 2 - question 3
const main = document.querySelector('main');

const button = document.querySelector('button');

const paragraph = document.createElement('p');
main.appendChild(paragraph);

let clickCount = 0;

window.onload = () => {
  button.addEventListener('click', () => {
    const phrase = 'You have clicked the button';
    clickCount += 1;
    paragraph.innerText = clickCount > 1 ? `${phrase} ${clickCount} times.` : `${phrase} ${clickCount} time.`;
  });
};
