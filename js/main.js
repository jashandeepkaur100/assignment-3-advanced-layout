
const button = document.querySelector(".toggle-btn");
button.addEventListener("click", function () {
  document.querySelector("nav").classList.toggle("show-nav");
});