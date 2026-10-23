/* ==========================================================================
   ORÉE — main.js
   Small, independent pieces of behaviour. Each one:
     1. finds the elements it needs with document.querySelector(All)
     2. listens for an event (click, submit, …)
     3. updates the page, usually by changing a class or an attribute
   ========================================================================== */


/* --------------------------------------------------------------------------
   1. Mobile menu
   Toggles the menu panel and keeps aria-expanded in sync for screen readers.
   -------------------------------------------------------------------------- */
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");

function setMenuOpen(isOpen) {
  mobileMenu.hidden = !isOpen;
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  setMenuOpen(!isOpen);
});

// Close the menu when a link inside it is clicked…
mobileMenu.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    setMenuOpen(false);
  }
});

// …or when the Escape key is pressed.
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !mobileMenu.hidden) {
    setMenuOpen(false);
    menuToggle.focus();
  }
});


/* --------------------------------------------------------------------------
   2. Wishlist hearts
   The CSS fills the heart when aria-pressed="true", so all we do is flip it.
   -------------------------------------------------------------------------- */
const wishlistButtons = document.querySelectorAll(".wishlist-button");

wishlistButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const isSaved = button.getAttribute("aria-pressed") === "true";
    button.setAttribute("aria-pressed", String(!isSaved));
  });
});


/* --------------------------------------------------------------------------
   3. Contact form
   Checks the required fields and shows a message. There is no server here,
   so a "successful" send just resets the form.
   -------------------------------------------------------------------------- */
const contactForm = document.querySelector(".contact-form");
const formStatus = contactForm.querySelector(".form-status");

contactForm.addEventListener("submit", (event) => {
  // Stop the browser from reloading the page
  event.preventDefault();

  let firstInvalidField = null;

  contactForm.querySelectorAll("input, textarea").forEach((field) => {
    // checkValidity() uses the HTML attributes: required, type="email", etc.
    const isValid = field.checkValidity();
    field.closest(".field").classList.toggle("has-error", !isValid);

    if (!isValid && !firstInvalidField) {
      firstInvalidField = field;
    }
  });

  if (firstInvalidField) {
    formStatus.textContent = "Please fill in the highlighted fields.";
    formStatus.className = "form-status is-error";
    firstInvalidField.focus();
    return;
  }

  const firstName = contactForm.elements.firstName.value.trim();
  formStatus.textContent = `Thank you, ${firstName}. We will be in touch soon.`;
  formStatus.className = "form-status is-success";
  contactForm.reset();
});


/* --------------------------------------------------------------------------
   4. Newsletter form
   -------------------------------------------------------------------------- */
const newsletterForm = document.querySelector(".newsletter__form");
const newsletterNote = document.querySelector(".newsletter__note");

newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const emailInput = newsletterForm.elements.email;

  if (!emailInput.checkValidity()) {
    newsletterNote.textContent = "Please enter a valid email address.";
    emailInput.focus();
    return;
  }

  newsletterNote.textContent = "Thank you. Something worth keeping is on its way.";
  newsletterForm.reset();
});


/* --------------------------------------------------------------------------
   5. Current year in the footer
   -------------------------------------------------------------------------- */
document.querySelector(".current-year").textContent = new Date().getFullYear();


/* --------------------------------------------------------------------------
   6. Scroll reveal
   IntersectionObserver tells us when an element enters the viewport,
   which is far cheaper than checking positions on every scroll event.
   -------------------------------------------------------------------------- */
const revealTargets = document.querySelectorAll(
  ".section-head, .category-card, .product-card, .split__content, .story__text, .story__media, .testimonial blockquote, .feature, .contact"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target); // only animate once
      }
    });
  },
  { threshold: 0.15 }
);

revealTargets.forEach((element) => {
  element.classList.add("reveal");
  observer.observe(element);
});
