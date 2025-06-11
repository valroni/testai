// Theme toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  document.documentElement.setAttribute(
    "data-theme",
    currentTheme === "dark" ? "light" : "dark"
  );
});

// Simple contact form feedback
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for reaching out! We’ll get back to you soon. 🚀");
  this.reset();
});
