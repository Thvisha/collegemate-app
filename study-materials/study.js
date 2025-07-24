const uploadForm = document.getElementById("uploadForm");
const materialsList = document.getElementById("materialsList");

let studyMaterials = [];

uploadForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const subject = document.getElementById("subject").value;
  const fileInput = document.getElementById("file");

  if (fileInput.files.length === 0) return;

  const file = fileInput.files[0];

  const material = {
    id: Date.now(),
    subject: subject,
    filename: file.name,
    url: URL.createObjectURL(file), // Dummy blob URL
  };

  studyMaterials.push(material);
  displayMaterials();
  uploadForm.reset();
});

function displayMaterials() {
  materialsList.innerHTML = "";

  studyMaterials.forEach((material) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${material.subject}</strong>: 
      <a href="${material.url}" target="_blank">${material.filename}</a>
    `;
    materialsList.appendChild(li);
  });
}
