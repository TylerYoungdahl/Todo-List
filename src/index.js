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
import sideBar from "./modules/sideBar.js";
import { format, parseISO } from "date-fns";

const content = document.querySelector("#content");
