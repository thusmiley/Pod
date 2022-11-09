const form = document.querySelector("form");
const input = document.querySelector(".input-email");
const errorMsg = document.querySelector(".noti-error");
const successMsg = document.querySelector(".noti-success");

input.addEventListener("invalid", () => {
  errorMsg.classList.add("showError");
});
input.addEventListener("input", () => {
  errorMsg.classList.remove("showError");
});

form.addEventListener("submit", (evt) => {
  successMsg.classList.add("showSuccess");
  evt.preventDefault();
  input.value = input.value;
});

