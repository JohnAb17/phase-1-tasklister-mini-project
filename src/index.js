// As a user, I should be able to type a task into the input field. -
// As a user, I should be able to click some form of a submit button. -
// As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated. -
document.addEventListener('DOMContentLoaded', () => {
  addingEventListeners()
});

function addingEventListeners() {
  document  
    .getElementById('create-task-form')
    .addEventListener('submit', handleFormSubmit)
}

// const newTaskDescription = document.getElementById('new-task-description');
// const addTaskButton = document.getElementById('submit');
//const listOfTasks = document.getElementById('tasks');

// function addNewTask(event) {
//     event.preventDefault();
//     const task = newTaskDescription.value;
//     if (task !== '') {
//     const listTask = document.createElement('li');
//     listTask.textContent = task;
//     listOfTasks.appendChild(listTask);

//     newTaskDescription.value = '';
//     }
// }


function handleFormSubmit(e) {
  e.preventDefault()
 // console.log(e)
  const task = e.target[0].value
  console.log(task)

  displayTask(task);
}

function displayTask(task) {
  const listOfTasks = document.getElementById('tasks');
  const taskLi = document.createElement('li')
  const deleteBtn = document.createElement('button');

  deleteBtn.textContent = "x";
  deleteBtn.addEventListener("click", deleteTask)

  taskLi.textContent = task + ' '
  taskLi.appendChild(deleteBtn);
  listOfTasks.appendChild(taskLi);
}

function deleteTask(e) {
  console.log(e);
  e.target.parentNode.remove();
}

// addTaskButton.addEventListener('submit', function(event) {
//   event.preventDefault();
//   addNewTask();
  
// });


// newTaskDescription.addEventListener('keydown', (event) => {
//   if (event.key === 'Enter') {
//     addNewTask(event);
//   }
// }); 