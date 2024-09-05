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
  const sideBarProjects = document.querySelector("#sidebar-projects");
  sideBarProjects.innerHTML = "";

  loadProjects();

  projects.forEach((proj) => {
    const newProj = document.createElement("div");
    newProj.classList.add("sidebar-project");
    newProj.textContent = `${proj.title}`;
    sideBarProjects.appendChild(newProj);
  });
}

export function submitProject() {
  const titleInput = document.querySelector("#proj-title");
  addProject(titleInput.value);
  loadProjectsDOM();
}
