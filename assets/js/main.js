const toggleThemeButton = document.querySelector("#toggle-theme");

function toggleTheme() {
  const icon = document.querySelector("#theme-icon");
  const body = document.querySelector("body");

  /* Refatorar para element.classList.toggle() */
  if (icon.className === "bi bi-sun") {
    icon.className = "bi bi-moon";
  } else {
    icon.className = "bi bi-sun";
  }

  if (body.className === "dark") {
    body.className = "light";
  } else {
    body.className = "dark";
  }
}

toggleThemeButton.addEventListener("click", toggleTheme);