const taskForm = document.getElementById('task-form');

const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const taskInput = document.getElementById('task-input');

  const task = taskInput.value;
  console.log(task);
  if (task) {
    taskList.append(createTaskElement(task));
    taskInput.value = '';
  }
});

const createTaskElement = (task) => {
  const li = document.createElement('li');
  li.textContent = task;
  li.append(createButton('❌', 'delete-btn'), createButton('✏️', 'edit'));
  return li;
};

const createButton = (text, className) => {
  const btn = document.createElement('span');
  btn.textContent = text;
  btn.className = className;
  return btn;
};