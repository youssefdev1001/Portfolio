// =============================
// Portfolio JavaScript
// =============================

// السنة الحالية في Footer
const year = new Date().getFullYear();

const footerText = document.querySelector("footer p");

if (footerText) {
  footerText.textContent = `© ${year} All Rights Reserved.`;
}

// Scroll Smooth

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// تغيير لون الـ Navbar أثناء النزول

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.background = "#1d2b4e";
    navbar.style.transition = ".3s";

    document.querySelectorAll(".menu a").forEach((link) => {
      link.style.color = "white";
    });
  } else {
    navbar.style.background = "white";

    document.querySelectorAll(".menu a").forEach((link) => {
      link.style.color = "#333";
    });
  }
});

// تأثير ظهور العناصر

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  },
);

document.querySelectorAll("section").forEach((section) => {
  section.classList.add("hidden");
  observer.observe(section);
});

// زر العودة للأعلى

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "30px";
topBtn.style.right = "30px";
topBtn.style.padding = "15px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#2563eb";
topBtn.style.color = "white";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.fontSize = "18px";

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.onclick = () => {
  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
};

// رسالة عند الضغط على زر المشاريع

const projectBtn = document.querySelector("button");

// ===========================
// Hamburger Menu
// ===========================

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
});

// إغلاق القائمة عند الضغط على أي رابط

document.querySelectorAll(".menu a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
  });
});
