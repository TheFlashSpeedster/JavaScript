console.info("script loaded!");

let todoList = [
  { item: 'Task 1', date: '4/10/25' },
  { item: 'Task 2', date: '3/12/25' }
]
showTasks();

function addTask() {
  let inputElement = document.getElementById('todo-input')
  let todoItem = inputElement.value;

  let dateElement = document.getElementById('todo-date');
  let todoDate = dateElement.value;

  todoList.push({item: todoItem, date: todoDate});
  // todoItem = ''
  // todoDate = ''
  showTasks();
}

function showTasks() {
  let tasks = document.querySelector('.tasks-container')
  let tasksHtml = '' // empty initially
  for (let i = 0; i < todoList.length; i++) {
    let {item, date} = todoList[i];

    tasksHtml += `
      <span>${item}</span>
      <span>${date}</span>
      <button class="btn-delete" onclick="todoList.splice(${i}, 1); showTasks();">DELETE</button>
    `
  }
  tasks.innerHTML = tasksHtml;
}