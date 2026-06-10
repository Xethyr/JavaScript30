const spacingSlider = document.getElementById("spacing");
const blurSlider = document.getElementById("blur");
const colorPicker = document.getElementById("base");

const root = document.documentElement;
const rootStyles = window.getComputedStyle(root);
const base = rootStyles.getPropertyValue("--base");

const blur = rootStyles.getPropertyValue("--blur");
const spacing = rootStyles.getPropertyValue("--spacing");

function updateSpacing() {
  root.style.setProperty("--spacing", `${spacingSlider.value}px`);
}

function updateBlur() {
  root.style.setProperty("--blur", `blur(${blurSlider.value}px)`);
}

function updateBase() {
  root.style.setProperty("--base", `${colorPicker.value}`);
}

spacingSlider.addEventListener("input", updateSpacing);
blurSlider.addEventListener("input", updateBlur);
colorPicker.addEventListener("input", updateBase);
