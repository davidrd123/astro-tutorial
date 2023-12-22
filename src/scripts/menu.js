const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
document.addEventListener('astro:page-load', () => {
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      console.log("clicked");
      navLinks.classList.toggle("expanded");
    });
  }
});
