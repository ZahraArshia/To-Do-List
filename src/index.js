import './style.css';
import Task from './modules/CRUD.js';
import {
  reset, setStatus, getStatus, clear,
}
from './modules/interaction.js';

const newTask = new Task();
newTask.update();
document.getElementById('addButton').addEventListener('click', () => {
  newTask.add();
  document.getElementById('inputDescription').value = '';
});
getStatus();
const editbtn = document.querySelectorAll('.editButton');
editbtn.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    newTask.edit(index);
  });
});

document.getElementById('reset').addEventListener('click', reset);
document.getElementById('clear').addEventListener('click', clear);
const chekboxs = document.querySelectorAll('.check');
chekboxs.forEach((box) => {
  box.addEventListener('change', setStatus);
});