import _ from 'lodash';
import './style.css';
import Icon from './icons8-drop-down-24.png';

// function component() {
//   const element = document.createElement('div');

//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//   element.classList.add('hello');

//   // Add the image to our existing div.
//   const myIcon = new Image();
//   myIcon.src = Icon;

//   element.appendChild(myIcon);

//   return element;
// }

// document.body.appendChild(component());

const placeholder = document.getElementById('placeholder');
const taskList = [
  {
    index: 0,
    description: 'task1',
    completed : false,
  },
  {
    index: 1,
    description: 'task2',
    completed : false,
  },
  {
    index: 2,
    description: 'task3',
    completed : false,
  },
];

taskList.forEach((task) => {
  const item = document.createElement('div');
  item.classList.add('items');
  item.setAttribute('id', task.index);
  item.innerHTML = `
  <div>
  <input type="checkbox" id="check">
  <label for="check">${task.description}</label>
  </div>
  <img src="${Icon}" alt="move">
  `;
  placeholder.appendChild(item);
});