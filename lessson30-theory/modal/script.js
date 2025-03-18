const registerButton = document.querySelector("button");
const modalContainer = document.querySelector(".modal-container");
const modalBody = document.querySelector(".modal-body");
const modalCloseButton = document.querySelector(".modal-close-button");
const messageButton = document.getElementById("message");

function openModal(elToAdd) {
  modalBody.appendChild(
    typeof elToAdd === "string" ? document.createTextNode(elToAdd) : elToAdd
  );
  modalContainer.classList.remove("hidden");
}
modalCloseButton.addEventListener("click", () => {
  modalContainer.classList.add("hidden");
  modalBody.removeChild(modalBody.lastChild);
});

registerButton.addEventListener("click", () => {
  const form = document.createElement("form");
  openModal(form);
});

messageButton.addEventListener("click", () => {
  openModal("gsgsgse");
});
