document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit" , (e) => {
    e.preventDefault();
    const taskInput = document.getElementById("new-task-description");
    const task = taskInput.value;
    buildToDo(task);
    form.reset();
  });
});
function buildToDo(task) {
  const li = document.createElement("li");
  li.textContent = task;
  const taskList = document.getElementById("tasks");
  taskList.appendChild(li);
}
