// timetable.js
const timetable = document.getElementById('timetable');
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const times = ['9:00', '10:00', '11:00', '12:00', '1:00', '2:00', '3:00'];

// Load saved data
window.onload = () => {
  const saved = JSON.parse(localStorage.getItem('timetableData')) || {};
  for (let key in saved) {
    const cell = document.querySelector(`[data-cell='${key}']`);
    if (cell) cell.textContent = saved[key];
  }
};

// Edit slot
function editCell(cell) {
  const subject = prompt('Enter subject for this slot:', cell.textContent);
  if (subject !== null) {
    cell.textContent = subject;
    saveData();
  }
}

// Save to localStorage
function saveData() {
  const data = {};
  document.querySelectorAll('[data-cell]').forEach(cell => {
    data[cell.dataset.cell] = cell.textContent;
  });
  localStorage.setItem('timetableData', JSON.stringify(data));
}

// Attach event listeners
function initListeners() {
  document.querySelectorAll('[data-cell]').forEach(cell => {
    cell.addEventListener('click', () => editCell(cell));
  });
}

initListeners();