export default function sideBar() {
  const content = document.querySelector("#content");

  content.innerHTML = `<div id="sidebar">
        <div id="sidebar-btn-container">
          <button class="sidebar-btn" id="new-proj-btn">
            New Project <i class="fa-solid fa-list"></i>
          </button>
          <button class="sidebar-btn" id="new-task-btn">
            New Task <i class="fa-regular fa-square-check"></i>
          </button>
        </div>
        <div id="sidebar-projects">
          <div class="sidebar-project">default</div>
        </div>
      </div>`;
}
