document.addEventListener("DOMContentLoaded", () => {
  const modalElement = document.querySelector("#contactModal");
  const form = modalElement.querySelector("form");
  const successMessage = document.querySelector("#successMessage");
  const animationContainer = document.querySelector("#successAnimation");

  let animation = null;

document.addEventListener("DOMContentLoaded", () => {
  const modalElement = document.querySelector("#contactModal");
  const form = modalElement.querySelector("form");
  const successMessage = document.querySelector("#successMessage");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Перевірка форми
    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    // Показуємо успіх
    form.classList.add("d-none");
    successMessage.classList.remove("d-none");
  });

  // Скидання при закритті
  modalElement.addEventListener("hidden.bs.modal", () => {
    form.reset();
    form.classList.remove("was-validated", "d-none");
    successMessage.classList.add("d-none");
  });
});
