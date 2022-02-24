/* eslint-disable no-restricted-globals */
import Icon from './icons8-drop-down-24.png';
import removeIcon from './icons8-remove-24.png';
import editIcon from './icons8-edit-24.png';

export default class Task {
  constructor(index, description, completed) {
    this.index = index;
    this.description = description;
    this.completed = completed;
  }

  taskList = [];

  editMood = false;

  add() {
    const temp = new Task((this.taskList.length) + 1, document.getElementById('inputDescription').value, false);
    this.taskList.push(temp);
    localStorage.setItem('taskList', JSON.stringify(this.taskList));
    this.taskList = JSON.parse(localStorage.getItem('taskList'));
    this.update();
    location.reload();
  }

  update() {
    if (JSON.parse(localStorage.getItem('taskList'))) {
      this.taskList = JSON.parse(localStorage.getItem('taskList'));
      document.getElementById('placeholder').innerHTML = '';
      this.taskList.forEach((task, index) => {
        const item = document.createElement('div');
        item.classList.add('items');
        item.setAttribute('id', index);
        item.innerHTML = `<div>
                <input type="checkbox" class="check">
                <label for="check">${task.description}</label>
                </div>
                `;
        const btnDiv = document.createElement('div');
        const removeButton = document.createElement('button');
        removeButton.classList.add('removeButton');
        const editButton = document.createElement('button');
        editButton.classList.add('editButton');
        const moreButton = document.createElement('button');
        moreButton.classList.add('moreButton');
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
      });
    }
  }

  remove(index) {
    this.taskList.splice(index, 1);
    this.taskList.forEach((task, id) => {
      task.index = id + 1;
    });
    localStorage.setItem('taskList', JSON.stringify(this.taskList));
    this.update();
    location.reload();
  }

  edit(index) {
    const btn = document.querySelectorAll('.editButton');
    btn.forEach((element) => {
      element.disabled = true;
    });
    document.getElementById('inputDescription').style.animationName = 'mymove';
    document.getElementById('inputDescription').value = this.taskList[index].description;
    document.getElementById('addButton').style.display = 'none';
    document.getElementById('approve').style.display = 'block';
    document.getElementById('approve').addEventListener('click', () => {
      const tempDescription = document.getElementById('inputDescription').value;
      document.getElementById('inputDescription').value = '';
      this.taskList[index].description = tempDescription;
      localStorage.setItem('taskList', JSON.stringify(this.taskList));
      document.getElementById('inputDescription').style.animationName = 'none';
      document.getElementById('addButton').style.display = 'block';
      document.getElementById('approve').style.display = 'none';
      location.reload();
    });
  }
}