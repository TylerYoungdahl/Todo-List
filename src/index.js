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
  submitTask,
} from "./domLogic.js";
import sideBar from "./modules/sideBar.js";
import newProjModal from "./modules/newProjModal.js";
import newTaskModal from "./modules/newTaskModal.js";
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
if (!projects.some((proj) => proj.isActive)) {
  firstProject.toggleIsActive();
}
loadProjectsDOM();

const newProjBtn = document.querySelector("#new-proj-btn");
const projModal = document.querySelector("#new-proj-modal");
const closeProjModal = document.querySelector("#close-proj-modal");
const submitProjBtn = document.querySelector("#submit-proj-btn");
const newTaskBtn = document.querySelector("#new-task-btn");
const taskModal = document.querySelector("#new-task-modal");
const closeTaskModal = document.querySelector("#close-task-modal");
const submitTaskBtn = document.querySelector("#submit-task-btn");

console.log(projects);

newProjBtn.addEventListener("click", () => projModal.showModal());
closeProjModal.addEventListener("click", () => projModal.close());
submitProjBtn.addEventListener("click", () => {
  submitProject();
  projModal.close();
});

newTaskBtn.addEventListener("click", () => taskModal.showModal());
closeTaskModal.addEventListener("click", () => taskModal.close());
submitTaskBtn.addEventListener("click", submitTask);

const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", () => {
  clearProjects();
  loadProjectsDOM();
});
