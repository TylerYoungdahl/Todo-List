let projects = [];

export class Project {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.tasks = [];
    this.isCompleted = false;
  }

  toggleIsCompleted() {
    this.isCompleted = !this.isCompleted;
  }
}

export class Task {
  constructor(title) {
    this.title = title;
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

export function addProject(title, description, dueDate, priority) {
  const newProj = new Project(title, description, dueDate, priority);
  projects.push(newProj);
  saveProjects();
}

export function addTask(project) {
  const newTask = new Task(title);
  project.tasks.push(newTask);
}

export function removeTask(project, index) {
  project.tasks.splice(index, 1);
}

export function clearCompletedTasks(project) {
  project.tasks = project.tasks.filter((task) => task.isCompleted === true);
}
