import '../sass/style.scss';
const sum = require('./sum');
const answer = sum(1,2);
const message = `1 + 2 equals ${answer}`;
const grid = document.querySelector('.js-grid');

const displayDemo = () => {
  const div = document.createElement('div');
  div.setAttribute('class', 'grid-item');
  div.textContent = message;
  return grid.appendChild(div);
};

displayDemo();

console.log('Hello! Source maps are enabled in production for JS too!');
