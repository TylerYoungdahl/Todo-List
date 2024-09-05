import "./assets/styles/style.css";
import {
  projects,
  Project,
  Task,
  saveProjects,
  loadProjects,
  addProject,
  addTask,
} from "./logic.js";
import { loadProjectsDOM, submitProject } from "./domLogic.js";
import sideBar from "./modules/sideBar.js";
import newProjModal from "./modules/newProjModal.js";
import { format, parseISO } from "date-fns";
import { af } from "date-fns/locale";

const content = document.querySelector("#content");

content.innerHTML = `${sideBar()}<div id="tasks">
        <div class="task">
          <div class="task-green">Project One</div>
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
          <div class="task-yellow">Project One</div>
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
          <div class="task-red">Project One</div>
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

const newProjBtn = document.querySelector("#new-proj-btn");
const projModal = document.querySelector("#new-proj-modal");
const closeProjModal = document.querySelector("#close-proj-modal");
const submitProjBtn = document.querySelector("#submit-proj-btn");

loadProjectsDOM();

newProjBtn.addEventListener("click", () => projModal.showModal());
closeProjModal.addEventListener("click", () => projModal.close());
submitProjBtn.addEventListener("click", () => {
  submitProject();
  projModal.close();
});
