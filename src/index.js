import './style.css';
import Task from './CRUD.js';


// const addButton = document.getElementById('addButton');
// const inputDescription = document.getElementById('inputDescription').value;

// const newlist = new CRUD();
// newlist.displayInfo();
// addButton.addEventListener('click', newlist.create(inputDescription));

const newTask = new Task();
newTask.displayInfo();
document.getElementById('addButton').addEventListener('click', () => {
  newTask.add();
  document.getElementById('inputDescription').value = '';
});