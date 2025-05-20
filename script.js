function logger() {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  console.log("vw:", viewportWidth, "vh:", viewportHeight);

  const rem = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue("font-size");

  console.log("rem:", rem);
}

window.addEventListener("DOMContentLoaded", logger);
window.addEventListener("resize", logger);
