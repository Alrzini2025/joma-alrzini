// Smooth Scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Scroll Reveal Animation
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 80) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Dark Mode Toggle
const darkToggle = document.getElementById("darkToggle");

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  darkToggle.textContent =
    document.body.classList.contains("dark") ? "☀ Light Mode" : "🌙 Dark Mode";
});