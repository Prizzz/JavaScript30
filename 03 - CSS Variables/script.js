const spacing = document.querySelector('input[name="spacing"]');
const blur = document.querySelector('input[name="blur"]');
const base = document.querySelector('input[name="base"]');

spacing.addEventListener("input", () => {
  document.documentElement.style.setProperty("--spacing", `${spacing.value}px`);
});

blur.addEventListener("input", () => {
  document.documentElement.style.setProperty("--blur", `${blur.value}px`);
});

base.addEventListener("input", () => {
  document.documentElement.style.setProperty("--base", `${base.value}`);
});
