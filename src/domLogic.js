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
    sideBarProjectsContainer.appendChild(newProj);
  });

  const sideBarProjects = document.querySelectorAll(".sidebar-project");

  sideBarProjects.forEach((project) => {
    project.addEventListener("click", (e) => {
      setActiveProject(e.target);
    });
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
