// JavaScript to handle smooth scrolling and dynamic behaviors

document.addEventListener("DOMContentLoaded", () => {
  // Add smooth scrolling to anchor links
  const links = document.querySelectorAll("a[href^='#']");
  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // Contact form submission handling (basic example)
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name && email && message) {
        alert("Thank you for your message, " + name + "!");
        contactForm.reset();
      } else {
        alert("Please fill in all fields before submitting.");
      }
    });
  }
});
