export let projects = [];

export class Project {
  constructor(title) {
    this.title = title;
    this.tasks = [];
    this.isCompleted = false;
  }

  toggleIsCompleted() {
    this.isCompleted = !this.isCompleted;
  }
}

export class Task {
  constructor(title, description, priority, dueDate) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
    this.isChecked = false;
  }

  toggleIsChecked() {
    this.isChecked = !this.isChecked;
  }
}

export function saveProjects() {
  localStorage.setItem("projects", JSON.stringify(projects));
}

export function loadProjects() {
  projects = JSON.parse(localStorage.getItem("projects")) || [];
}

export function addProject(title) {
  const newProj = new Project(title);
  projects.push(newProj);
  saveProjects();
}

export function addTask(project, title, description, priority, dueDate) {
  const newTask = new Task(title, description, priority, dueDate);
  project.tasks.push(newTask);
}

export function removeTask(project, index) {
  project.tasks.splice(index, 1);
}

export function clearCompletedTasks(project) {
  project.tasks = project.tasks.filter((task) => task.isCompleted === true);
}
