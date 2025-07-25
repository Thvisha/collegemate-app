const events = [
  {
    title: "Hackathon 2025",
    date: "2025-08-10",
    venue: "Main Auditorium",
    description:
      "A 24-hour coding hackathon for all CSE/IT students. Prizes and internships for winners!",
  },
  {
    title: "AI & ML Workshop",
    date: "2025-08-18",
    venue: "Lab 3, CS Block",
    description:
      "Hands-on workshop on building AI models using Python and TensorFlow.",
  },
  {
    title: "Web Dev Bootcamp",
    date: "2025-08-22",
    venue: "Seminar Hall 2",
    description: "Learn HTML, CSS, JS, and Firebase in this 3-day bootcamp.",
  },
];

const eventsContainer = document.getElementById("eventsContainer");

function displayEvents() {
  events.forEach((event) => {
    const card = document.createElement("div");
    card.className = "event-card";

    card.innerHTML = `
      <h2>${event.title}</h2>
      <p><strong>Date:</strong> ${event.date}</p>
      <p><strong>Venue:</strong> ${event.venue}</p>
      <p>${event.description}</p>
    `;

    eventsContainer.appendChild(card);
  });
}

displayEvents();
