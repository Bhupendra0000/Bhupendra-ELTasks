const addBtn = document.getElementById('add-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') addTask();
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.classList.add('task-item');

  const span = document.createElement('span');
  span.textContent = taskText;

  // Toggle complete
  span.addEventListener('click', () => {
    li.classList.toggle('completed');
    if (li.classList.contains('completed')) {
      alert(`Task "${span.textContent}" marked as completed.`);
    }
  });

  // Delete button
  const delBtn = document.createElement('button');
  delBtn.textContent = 'Delete';
  delBtn.className = 'delete-btn';
  delBtn.addEventListener('click', () => {
    taskList.removeChild(li);
  });

  li.appendChild(span);
  li.appendChild(delBtn);
  taskList.appendChild(li);

  taskInput.value = '';
  taskInput.focus();
}
