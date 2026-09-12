const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const searchOpen = document.querySelector("[data-search-open]");
const searchDialog = document.querySelector(".search-dialog");
const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector("#site-search");
const searchMessage = document.querySelector("[data-search-message]");
const newsletter = document.querySelector(".newsletter");
const testimonialText = document.querySelector("[data-testimonial-text]");
const testimonialAuthor = document.querySelector("[data-testimonial-author]");
const testimonialButtons = document.querySelectorAll("[data-testimonial]");

const testimonials = [
  {
    text:
      "\"Skillsoft's content helped me gain practical skills and confidence to apply my knowledge in real-world situations.\"",
    author: "JNTUH learner",
  },
  {
    text:
      "\"The learning paths made it easier to connect certification preparation with the skills I need for my next role.\"",
    author: "Certification learner",
  },
  {
    text:
      "\"Flexible formats helped our learners continue professional development alongside academic work.\"",
    author: "Institution partner",
  },
];

menuToggle?.addEventListener("click", () => {
  const isOpen = header.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".site-nav a, .header-actions a").forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

searchOpen?.addEventListener("click", () => {
  if (typeof searchDialog.showModal === "function") {
    searchDialog.showModal();
    searchInput?.focus();
  }
});

searchForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = searchInput.value.trim();

  if (!query) {
    searchMessage.textContent = "Enter a topic, course, or certification to search.";
    return;
  }

  searchMessage.textContent = `Search prepared for "${query}". Connect this form to the course catalog endpoint during integration.`;
});

newsletter?.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = newsletter.querySelector("input");
  const message = newsletter.querySelector(".form-message");
  const email = input.value.trim();

  if (!email || !input.validity.valid) {
    message.textContent = "Enter a valid email address.";
    return;
  }

  message.textContent = "Thanks. You are subscribed for Skillsoft updates.";
  newsletter.reset();
});

testimonialButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const index = Number(button.dataset.testimonial);
    const testimonial = testimonials[index];

    testimonialText.textContent = testimonial.text;
    testimonialAuthor.textContent = testimonial.author;

    testimonialButtons.forEach((item) => {
      item.classList.toggle("is-active", item === button);
    });
  });
});
