const btn = document.querySelector('.toggle__wrapper input[type="checkbox"]');

const colorMode = (e) => {
  if (e.currentTarget.checked) {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
};

const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "light") {
    btn.checked = true;
  }
}

btn.addEventListener("change", colorMode, false);
