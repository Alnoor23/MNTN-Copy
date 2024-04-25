const backgroundImage = document.getElementById("background");
const midgroundImage = document.getElementById("midground");
const foregroundImage = document.getElementById("foreground");
const headerText = document.getElementById("header_text");

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  let windowHeight = window.innerHeight;

  if (value <= windowHeight - 50) {
    var opacity = 1 - value / 600;
    opacity = Math.min(Math.max(opacity, 0), 1);

    backgroundImage.style.transform = `translate(0,-${value * 0.8}px)`;
    midgroundImage.style.transform = `translate(0,-${value * 0.3}px)`;
    foregroundImage.style.transform = `translate(0,-${value * 0.15}px)`;

    // headerText.style.transform = `translate(-50%,${value * 1.15}px)`;
    headerText.style.transform = `translate(0%,${value * 1.15}px)`;
    headerText.style.opacity = opacity;
  }
});
