/* PRELOADER */
window.addEventListener("load", () => {
  document.getElementById("preloader").classList.add("hide");
});

/* ELEMENTS */
const body = document.body;
const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const themeToggle = document.getElementById("themeToggle");
const topBtn = document.getElementById("topBtn");
const typing = document.getElementById("typing");
const footerText = document.getElementById("footerText");
const contactForm = document.getElementById("contactForm");

/* FOOTER YEAR */
footerText.textContent = `© ${new Date().getFullYear()} All Rights Reserved.`;

/* DARK MODE */
const savedTheme = localStorage.getItem("theme");

if (
  savedTheme === "dark" ||
  (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  body.classList.add("dark");
}

function updateThemeIcon() {
  themeToggle.innerHTML = body.classList.contains("dark")
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon"></i>';

  themeToggle.setAttribute(
    "aria-label",
    body.classList.contains("dark")
      ? "Activer le mode clair"
      : "Activer le mode sombre",
  );
}

updateThemeIcon();

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  localStorage.setItem(
    "theme",
    body.classList.contains("dark") ? "dark" : "light",
  );

  updateThemeIcon();
});

/* HAMBURGER */
hamburger.addEventListener("click", () => {
  const open = hamburger.classList.toggle("active");
  menu.classList.toggle("active", open);
  hamburger.setAttribute("aria-expanded", open ? "true" : "false");
});

/* CLOSE MOBILE MENU */
document.querySelectorAll(".menu a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  });
});

document.addEventListener("click", (event) => {
  if (!navbar.contains(event.target)) {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  }
});

/* TYPING EFFECT */
const words = [
  "Infographiste",
  "Designer Graphique",
  "Créateur d'identités visuelles",
  "Designer Branding",
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const word = words[wordIndex];

  if (!deleting) {
    typing.textContent = word.slice(0, charIndex + 1);
    charIndex++;

    if (charIndex === word.length) {
      deleting = true;
      setTimeout(typeEffect, 1600);
      return;
    }
  } else {
    typing.textContent = word.slice(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeEffect, deleting ? 55 : 90);
}

typeEffect();

/* SCROLL */
function onScroll() {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.12)";
  } else {
    navbar.style.boxShadow = "none";
  }

  topBtn.style.display = window.scrollY > 350 ? "grid" : "none";

  const sections = document.querySelectorAll("section[id]");
  const links = document.querySelectorAll(".menu a");

  let current = "home";

  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 140) {
      current = section.id;
    }
  });

  links.forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${current}`,
    );
  });
}

window.addEventListener("scroll", onScroll);
onScroll();

/* SCROLL REVEAL */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.12 },
);

document
  .querySelectorAll(".reveal, .reveal-left, .reveal-right")
  .forEach((el) => revealObserver.observe(el));

/* TOP BUTTON */
topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* CONTACT */
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();

  alert(`Merci ${name} ! Votre message a été reçu.`);

  contactForm.reset();
});
