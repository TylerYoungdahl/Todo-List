export default function newProjModal() {
  const newProjModalContent = `<dialog id="new-proj-modal">
      <div>
        <button id="close-proj-modal">X</button>
      </div>
      <form id="new-proj-form">
        <div id="proj-submit-container">
          <input type="text" name="title" id="proj-title" />
          <button id="submit-proj-btn" type="submit">Add Project</button>
        </div>
      </form>
    </dialog>`;

  return newProjModalContent;
}
