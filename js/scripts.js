function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


let tasks = [];

function addTask() {
  const taskInput = document.getElementById("newTask, newPicture");
  const taskValue = taskInput.value.trim();
  const pictureValue = taskInput.value.trim();

  if (taskValue, pictureValue) {
    tasks.push(taskValue);
    pictures.push(pictureValue);
    renderTasks();
    taskInput.value = "";
    renderPictures();
    pictureInput.value = "";
  }
}

function renderTasks() {
  const list = document.getElementById("games");
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    list.innerHTML += `
            <li>
                ${task}
                <input type="text" id="edit-${index}" value="${task}" style="display: none;">
                <div id="wrapper-btn">
                    <button onclick="editTask(${index})" id="edit">Edit</button>
                    <button onclick="saveTask(${index})" class="save" id="save-${index}" style="display: none;">Save</button>
                    <button onclick="removeTask(${index})" id="delete">Hapus</button>
                </div>
            </li>`;
  });
}

function renderPictures() {
  const list = document.getElementById("games");
  list.innerHTML = "";
  pictures.forEach((picture, index) => {
    list.innerHTML += `
            <li>
                ${picture}
                <input type="text" id="edit-${index}" value="${picture}" style="display: none;">
                <div id="wrapper-btn">
                    <button onclick="editTask(${index})" id="edit">Edit</button>
                    <button onclick="saveTask(${index})" class="save" id="save-${index}" style="display: none;">Save</button>
                    <button onclick="removeTask(${index})" id="delete">Hapus</button>
                </div>
            </li>`;
  });
}

function removeTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function editTask(index) {
  document.getElementById(`edit-${index}`).style.display = "inline-block";
  document.getElementById(`save-${index}`).style.display = "inline-block";
}

function saveTask(index) {
  const editedTask = document.getElementById(`edit-${index}`).value.trim();

  if (editedTask) {
    tasks[index] = editedTask;
    renderTasks();
  } else {
    alert("Task tidak boleh kosong!");
  }
}

