export default function editTaskModal() {
  const editTaskModal = `<dialog id="edit-task-modal">
      <div>
        <button class="close-task-modal" id="close-edit-task-modal">X</button>
      </div>
      <form id="edit-task-form">
    <div id="task-edit-container">
        <label for="edit-task-title">Task Title:</label>
        <input type="text" name="editTitle" id="edit-task-title"/>

        <label for="edit-task-due-date">Due Date:</label>
        <input type="date" name="editDueDate" id="edit-task-due-date" />

        <label for="edit-task-description">Description:</label>
        <textarea name="editDescription" id="edit-task-description"></textarea>

        <label for="edit-task-priority">Priority:</label>
        <select name="editPriority" id="edit-task-priority">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select>

        <button id="save-task-btn" type="submit">Save</button>
    </div>
</form>

    </dialog>`;

  return editTaskModal;
}
