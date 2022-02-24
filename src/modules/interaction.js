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

export { reset, clear };