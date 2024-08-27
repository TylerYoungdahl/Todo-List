let projects = [];

class Project {
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

class Task {
  constructor(title) {
    this.title = title;
    this.isChecked = false;
  }

  toggleIsChecked() {
    this.isChecked = !this.isChecked;
  }
}

function saveProjects() {
  localStorage.setItem("projects", JSON.stringify(projects));
}

function loadProjects() {
  projects = JSON.parse(localStorage.getItem("projects")) || [];
}

function addProject(title, description, dueDate, priority) {
  const newProj = new Project(title, description, dueDate, priority);
  projects.push(newProj);
  saveProjects();
}

function addTask(project) {
  const newTask = new Task(title);
  project.tasks.push(newTask);
}

export {
  projects,
  Project,
  Task,
  saveProjects,
  loadProjects,
  addProject,
  addTask,
};
