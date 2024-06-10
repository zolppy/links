const toggleThemeButton = document.querySelector(
  "#toggle-theme"
) as HTMLButtonElement;

toggleThemeButton.addEventListener("click", () => {
  const icon = document.querySelector("#theme-icon") as HTMLElement;
  const body = document.querySelector("body") as HTMLBodyElement;

  if (icon.classList.contains("bi-sun")) {
    icon.classList.replace("bi-sun", "bi-moon");
  } else {
    icon.classList.replace("bi-moon", "bi-sun");
  }

  if (body.classList.contains("dark")) {
    body.classList.replace("dark", "light");
  } else {
    body.classList.replace("light", "dark");
  }
});
