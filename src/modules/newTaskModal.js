export default function newTaskModal() {
  const newTaskModal = `<dialog id="new-task-modal">
      <div>
        <button class="close-task-modal" id="close-new-task-modal">X</button>
      </div>
      <form id="new-task-form">
    <div id="task-submit-container">
        <label for="task-title">Task Title:</label>
        <input type="text" name="title" id="task-title" />

        <label for="task-due-date">Due Date:</label>
        <input type="date" name="dueDate" id="task-due-date" />

        <label for="task-description">Description:</label>
        <textarea name="description" id="task-description"></textarea>

        <label for="task-priority">Priority:</label>
        <select name="priority" id="task-priority">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select>

        <button id="submit-task-btn" type="submit">Add Task</button>
    </div>
</form>

    </dialog>`;

  return newTaskModal;
}
