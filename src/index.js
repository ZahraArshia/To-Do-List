import './style.css';
import Task from './CRUD.js';

const newTask = new Task();
newTask.update();
document.getElementById('addButton').addEventListener('click', () => {
  newTask.add();
  document.getElementById('inputDescription').value = '';
});

const editbtn = document.querySelectorAll('.editButton');
editbtn.forEach((btn , index) => {
btn.addEventListener('click', () => {
  newTask.edit(index); 
});
});