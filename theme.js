const themeStorageKey = "daniell-portfolio-theme";
const rootElement = document.documentElement;

let savedTheme = null;
try {
  savedTheme = window.localStorage.getItem(themeStorageKey);
} catch (error) {
  console.warn("Could not read the saved theme preference.", error);
}

const applyTheme = (theme) => {
  rootElement.dataset.theme = theme;
  rootElement.setAttribute("data-bs-theme", theme);

  document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    const label = `Switch to ${nextTheme} mode`;
    button.setAttribute("aria-label", label);
    button.title = label;
    button.querySelector("[data-theme-icon]").textContent =
      nextTheme === "light" ? "light_mode" : "dark_mode";
  });
};

applyTheme(savedTheme === "light" ? "light" : "dark");

const initializeThemeToggles = () => {
  applyTheme(rootElement.dataset.theme === "light" ? "light" : "dark");

  document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const theme = rootElement.dataset.theme === "dark" ? "light" : "dark";
      applyTheme(theme);

      try {
        window.localStorage.setItem(themeStorageKey, theme);
      } catch (error) {
        console.warn("Could not save the theme preference.", error);
      }
    });
  });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeThemeToggles, {
    once: true,
  });
} else {
  initializeThemeToggles();
}
