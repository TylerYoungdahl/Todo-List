import "./assets/styles/style.css";
import {
  projects,
  Project,
  Task,
  saveProjects,
  loadProjects,
  addProject,
  addTask,
  clearProjects,
} from "./logic.js";
import {
  loadProjectsDOM,
  submitProject,
  setActiveProject,
} from "./domLogic.js";
import sideBar from "./modules/sideBar.js";
import newProjModal from "./modules/newProjModal.js";
import { format, parseISO } from "date-fns";
import { af } from "date-fns/locale";

const content = document.querySelector("#content");

content.innerHTML = `${sideBar()}<div id="tasks">
        <div class="task">
          <div class="task-green">task One</div>
          <div class="task-description">
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914
            translation by H. Rackham.
          </div>
          <div class="task-due-date" id="test-date"></div>
        </div>
        <div class="task">
          <div class="task-yellow">task One</div>
          <div class="task-description">
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914
            translation by H. Rackham.
          </div>
          <div class="task-due-date">some text goes here</div>
        </div>
        <div class="task">
          <div class="task-red">task One</div>
          <div class="task-description">
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32
          </div>
          <div class="task-due-date">some text goes here</div>
        </div>
        <div class="task">
          <div class="task-green"></div>
          <div class="task-description"></div>
          <div class="task-due-date"></div>
        </div>
      </div>${newProjModal()}`;

loadProjects();
if (projects.length === 0) {
  addProject("project one");
}
const firstProject = projects[0];
firstProject.toggleIsActive();
loadProjectsDOM();

const newProjBtn = document.querySelector("#new-proj-btn");
const sideBarProjects = document.querySelectorAll(".sidebar-project");
const projModal = document.querySelector("#new-proj-modal");
const closeProjModal = document.querySelector("#close-proj-modal");
const submitProjBtn = document.querySelector("#submit-proj-btn");

console.log(projects);

newProjBtn.addEventListener("click", () => projModal.showModal());
closeProjModal.addEventListener("click", () => projModal.close());
submitProjBtn.addEventListener("click", () => {
  submitProject();
  projModal.close();
});

sideBarProjects.forEach((project) => {
  project.addEventListener("click", (e) => {
    setActiveProject(e.target);
  });
});

const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", () => {
  clearProjects();
  loadProjectsDOM();
});
