/* eslint-disable no-restricted-globals */

function reset() {
  localStorage.clear();
  location.reload();
}

function clear() {
  let checkList = [];
  checkList = document.querySelectorAll('.check');
  let taskList = JSON.parse(localStorage.getItem('taskList'));
  checkList.forEach((element, index) => {
    if (element.checked === true) {
      taskList[index].completed = true;
      localStorage.setItem('taskList', JSON.stringify(taskList));
    }
  });
  taskList = taskList.filter((task) => task.completed === false);
  taskList.forEach((task, id) => {
    task.index = id + 1;
  });
  localStorage.setItem('taskList', JSON.stringify(taskList));
  location.reload();
}

function setStatus() {
  let checkList = [];
  checkList = document.querySelectorAll('.check');
  const taskList = JSON.parse(localStorage.getItem('taskList'));
  checkList.forEach((element, index) => {
    if (element.checked === true) {
      taskList[index].completed = true;
      localStorage.setItem('taskList', JSON.stringify(taskList));
    } else if (element.checked === false) {
      taskList[index].completed = false;
      localStorage.setItem('taskList', JSON.stringify(taskList));
    }
  });
}

function getStatus() {
  const taskList = JSON.parse(localStorage.getItem('taskList'));
  const checkList = document.querySelectorAll('.check');
  taskList.forEach((task, index) => {
    if (task.completed === true) {
      checkList[index].checked = true;
    } else if (task.completed === false) {
      checkList[index].checked = false;
    }
  });
}

export {
  reset, setStatus, getStatus, clear,
};