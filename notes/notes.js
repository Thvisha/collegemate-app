const noteForm = document.getElementById("noteForm");
const subjectInput = document.getElementById("subject");
const noteTextInput = document.getElementById("noteText");
const notesContainer = document.getElementById("notesContainer");

let notes = [];

noteForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const note = {
    id: Date.now(),
    subject: subjectInput.value,
    text: noteTextInput.value,
  };

  notes.push(note);
  displayNotes();
  noteForm.reset();
});

function displayNotes() {
  notesContainer.innerHTML = "";

  notes.forEach((note) => {
    const noteCard = document.createElement("div");
    noteCard.className = "note-card";

    noteCard.innerHTML = `
      <strong>${note.subject}</strong>
      <p>${note.text}</p>
      <button onclick="deleteNote(${note.id})">Delete</button>
    `;

    notesContainer.appendChild(noteCard);
  });
}

function deleteNote(id) {
  notes = notes.filter((note) => note.id !== id);
  displayNotes();
}
