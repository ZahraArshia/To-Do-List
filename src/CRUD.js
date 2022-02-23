import Icon from './icons8-drop-down-24.png';
import removeIcon from './icons8-remove-24.png';
import editIcon from './icons8-edit-24.png';
import './style.css';


export default class Task {
  constructor(index, description, completed) {
        this.index = index;
        this.description = description;
        this.completed = completed;
      }

  taskList = [];
  editMood = false;

  add() {
  const temp = new Task (this.taskList.length ,document.getElementById('inputDescription').value, false);
  this.taskList.push(temp);
  localStorage.setItem('taskList', JSON.stringify(this.taskList));
  this.taskList = JSON.parse(localStorage.getItem('taskList'));
  this.displayInfo();
  }

  displayInfo() {
    if (JSON.parse(localStorage.getItem('taskList'))) {
      this.taskList = JSON.parse(localStorage.getItem('taskList'));
      // this.taskList.sort((a, b) => (a.index > b.index) ? 1 : -1);
      document.getElementById('placeholder').innerHTML = '';
      this.taskList.forEach((task, index) => {
        const item = document.createElement('div');
        item.classList.add('items');
        item.innerHTML = `<div>
                <input type="checkbox" id="check">
                <label for="check">${task.description}</label>
                </div>
                `;
        const btnDiv = document.createElement('div');
        const removeButton = document.createElement('button');
        const editButton = document.createElement('button');
        const moreButton = document.createElement('button');
        removeButton.innerHTML = `<img src="${removeIcon}" alt="remove">`;
        editButton.innerHTML = `<img src="${editIcon}" alt="edit">`;
        moreButton.innerHTML = `<img src="${Icon}" alt="edit">`;
        btnDiv.appendChild(removeButton);
        btnDiv.appendChild(editButton);
        btnDiv.appendChild(moreButton);
        item.appendChild(btnDiv);
        document.getElementById('placeholder').appendChild(item);
        removeButton.addEventListener('click', (event) => {
          event.preventDefault();
          this.remove(index);
        });
        editButton.addEventListener('click', (event) => {
          event.preventDefault();
          this.edit(index); 
      });
    });
  }
}

  remove(index) {
    this.taskList.splice(index, 1);
    this.taskList.forEach((task , id) => {
      task.index = id;
    });
    localStorage.setItem('taskList', JSON.stringify(this.taskList));
    this.displayInfo();
  }
 
  edit(index) {
    document.getElementById('inputDescription').style.animationName = 'mymove';
    document.getElementById('inputDescription').value = this.taskList[index].description;
    document.getElementById('addButton').style.display = 'none';
    document.getElementById('approve').style.display = 'block';
    document.getElementById('approve').addEventListener('click', (e) => 
    {
      // e.preventDefault();
      const tempDescription = document.getElementById('inputDescription').value;
      document.getElementById('inputDescription').value = '';
      this.taskList[index].description = tempDescription;
      // this.taskList.forEach((task , id) => {
      //   task.index = id;
      // });
    
      localStorage.setItem('taskList', JSON.stringify(this.taskList));
      document.getElementById('inputDescription').style.animationName = 'none';
      document.getElementById('addButton').style.display = 'block';
      document.getElementById('approve').style.display = 'none';

      this.displayInfo();
  });
  }

}