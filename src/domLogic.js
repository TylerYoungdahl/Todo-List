import {
  projects,
  Project,
  Task,
  saveProjects,
  loadProjects,
  addProject,
  addTask,
} from "./logic.js";

export function loadProjectsDOM() {
  const sideBarProjectsContainer = document.querySelector("#sidebar-projects");

  sideBarProjectsContainer.innerHTML = "";

  projects.forEach((proj, i) => {
    const newProj = document.createElement("div");
    newProj.classList.add("sidebar-project");
    if (proj.isActive) {
      newProj.classList.add("sidebar-project-active");
      newProj.dataset.active = "true";
    } else {
      newProj.dataset.active = "false";
    }
    newProj.dataset.index = i;
    newProj.innerHTML = `${proj.title}`;

    const deleteProj = document.createElement("button");
    deleteProj.classList.add("delete-proj-btn");
    deleteProj.innerHTML = "X";
    deleteProj.dataset.index = i;
    newProj.appendChild(deleteProj);

    sideBarProjectsContainer.appendChild(newProj);
  });

  const sideBarProjects = document.querySelectorAll(".sidebar-project");

  sideBarProjects.forEach((project) => {
    project.addEventListener("click", (e) => {
      setActiveProject(e.target);
      loadTasksDOM();
    });
  });
}

export function loadTasksDOM() {
  const tasksContainer = document.querySelector("#tasks");
  const activeProject = projects.find((project) => project.isActive);

  tasksContainer.innerHTML = "";

  activeProject.tasks.forEach((task, i) => {
    const newTask = document.createElement("div");

    let taskPriority = "";
    if (task.priority === "high") {
      taskPriority = "task-red";
    } else if (task.priority === "medium") {
      taskPriority = "task-yellow";
    } else if (task.priority === "low") {
      taskPriority = "task-green";
    }

    newTask.classList.add("task");
    newTask.innerHTML = `<div class="${taskPriority}">${task.title}</div>
          <div class="task-description">${task.description}</div>
          <div class="task-bottom">${task.dueDate}
            <div>
              <button class="task-bottom-btns edit-task-btn" data-index="${i}">Edit</button>
              <button class="task-bottom-btns delete-task-btn" data-index="${i}">Delete</button>
            </div>
          </div>`;

    tasksContainer.appendChild(newTask);
  });

  const editTaskBtns = document.querySelectorAll(".edit-task-btn");
  const taskModalEdit = document.querySelector("#edit-task-modal");
  const title = document.querySelector("#edit-task-title");
  const description = document.querySelector("#edit-task-description");
  const dueDate = document.querySelector("#edit-task-due-date");
  const priority = document.querySelector("#edit-task-priority");
  const saveTaskBtn = document.querySelector("#save-task-btn");

  editTaskBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const task = activeProject.tasks[btn.dataset.index];

      title.value = task.title;
      description.value = task.description;
      dueDate.value = task.dueDate;
      priority.value = task.priority;
      saveTaskBtn.dataset.index = btn.dataset.index;

      taskModalEdit.showModal();
    });
  });

  const deleteTaskBtns = document.querySelectorAll(".delete-task-btn");
  deleteTaskBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => deleteTask(e.target.dataset.index));
  });
}

export function submitProject() {
  const titleInput = document.querySelector("#proj-title");
  addProject(titleInput.value);
  loadProjectsDOM();
}

export function submitTask() {
  const titleInput = document.querySelector("#task-title");
  const dateInput = document.querySelector("#task-due-date");
  const descriptionInput = document.querySelector("#task-description");
  const priorityInput = document.querySelector("#task-priority");

  const activeProject = projects.find((project) => project.isActive);

  addTask(
    activeProject,
    titleInput.value,
    descriptionInput.value,
    priorityInput.value,
    dateInput.value
  );

  saveProjects();
}

export function setActiveProject(project) {
  if (project.dataset.active === "false") {
    projects.forEach((proj) => {
      if (proj.isActive) {
        proj.toggleIsActive();
      }
    });
    projects[parseInt(project.dataset.index)].toggleIsActive();
    console.log("test");
  }

  loadProjectsDOM();
}

export function deleteTask(i) {
  const activeProject = projects.find((project) => project.isActive);
  activeProject.tasks.splice(i, 1);

  saveProjects();

  loadTasksDOM();
}

export function editTask(i) {
  const activeProject = projects.find((project) => project.isActive);
  const activeTask = activeProject.tasks[i];
  const title = document.querySelector("#edit-task-title");
  const description = document.querySelector("#edit-task-description");
  const dueDate = document.querySelector("#edit-task-due-date");
  const priority = document.querySelector("#edit-task-priority");

  activeTask.title = title.value;
  activeTask.description = description.value;
  activeTask.dueDate = dueDate.value;
  activeTask.priority = priority.value;

  saveProjects();
  loadTasksDOM();
}
