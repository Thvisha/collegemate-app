const reminderForm = document.getElementById("reminderForm");
const reminderList = document.getElementById("reminderList");

let reminders = [];

reminderForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const reminder = {
    id: Date.now(),
    title: document.getElementById("title").value,
    description: document.getElementById("description").value,
    date: document.getElementById("date").value,
    time: document.getElementById("time").value,
  };

  reminders.push(reminder);
  displayReminders();
  reminderForm.reset();
});

function displayReminders() {
  reminderList.innerHTML = "";

  reminders.forEach((reminder) => {
    const card = document.createElement("div");
    card.className = "reminder-card";

    card.innerHTML = `
      <h3>${reminder.title}</h3>
      <p>${reminder.description}</p>
      <p>📅 ${reminder.date} ⏰ ${reminder.time}</p>
      <button onclick="deleteReminder(${reminder.id})">Delete</button>
    `;

    reminderList.appendChild(card);
  });
}

function deleteReminder(id) {
  reminders = reminders.filter((r) => r.id !== id);
  displayReminders();
}
