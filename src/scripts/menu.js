const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    console.log("clicked");
    navLinks.classList.toggle("expanded");
  });
}
