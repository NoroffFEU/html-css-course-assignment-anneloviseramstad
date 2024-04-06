const nav_Toggle = document.querySelector("#navToggle");
const nav = document.querySelector("nav");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});
