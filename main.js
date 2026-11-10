document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initAos();
  initExpertiseCards();
  initStatsCounters();
});

function initMobileMenu() {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (!menuBtn || !mobileMenu) return;

  const mobileLinks = document.querySelectorAll(".mobile-nav-link");
  let isMenuOpen = false;
  let openScrollPos = 0;
  let isMenuJustOpened = false;

  function openMenu() {
    isMenuOpen = true;
    isMenuJustOpened = true;
    openScrollPos = window.scrollY;
    menuBtn.setAttribute("aria-expanded", "true");
    mobileMenu.classList.remove("hidden");
    requestAnimationFrame(() => {
      mobileMenu.classList.remove("opacity-0", "-translate-y-2");
      mobileMenu.classList.add("opacity-100", "translate-y-0");
    });
    setTimeout(() => {
      isMenuJustOpened = false;
    }, 200);
  }

  function closeMenu() {
    if (!isMenuOpen) return;
    isMenuOpen = false;
    menuBtn.setAttribute("aria-expanded", "false");
    mobileMenu.classList.remove("opacity-100", "translate-y-0");
    mobileMenu.classList.add("opacity-0", "-translate-y-2");
    setTimeout(() => {
      if (!isMenuOpen) mobileMenu.classList.add("hidden");
    }, 300);
  }

  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (isMenuOpen) closeMenu();
    else openMenu();
  });

  mobileLinks.forEach((link) =>
    link.addEventListener("click", () => closeMenu()),
  );

  window.addEventListener(
    "scroll",
    () => {
      if (!isMenuOpen || isMenuJustOpened) return;
      if (Math.abs(window.scrollY - openScrollPos) > 24) closeMenu();
    },
    { passive: true },
  );

  document.addEventListener("click", (e) => {
    if (!isMenuOpen) return;
    if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
      closeMenu();
    }
  });
}

function initAos() {
  if (!window.AOS) return;
  window.AOS.init({
    once: true,
    mirror: false,
    offset: 30,
    duration: 700,
    easing: "ease-out-cubic",
    delay: 0,
    throttleDelay: 20,
  });
}

function initExpertiseCards() {
  const cards = document.querySelectorAll("#expertise .grid > div");
  if (!cards.length) return;

  const expertisePages = [
    "/rheumatoid-arthritis.html",
    "/sle-lupus.html",
    "/ankylosing-spondylitis.html",
    "/osteoarthritis.html",
    "/osteoporosis-bone-health.html",
    "/gout-hyperuricemia.html",
    "/psoriatic-arthritis.html",
    "/vasculitis-apla.html",
    "/pregnancy-rheumatic-disease.html",
    "/recurrent-pregnancy-loss.html",
    "/thyroid-disorders.html",
    "/general-internal-medicine.html",
  ];

  cards.forEach((card, index) => {
    card.setAttribute("role", "link");
    card.setAttribute("tabindex", "0");
    card.setAttribute(
      "aria-label",
      `Learn more about ${card.querySelector("h3")?.textContent.trim() || "this condition"}`,
    );
    const openPage = () => {
      if (expertisePages[index]) window.location.href = expertisePages[index];
    };
    card.addEventListener("click", openPage);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openPage();
      }
    });
  });
}

function initStatsCounters() {
  const firstStat = document.getElementById("stat1");
  if (!firstStat) return;

  const statElements = [
    { id: "stat1", target: 30, suffix: "+" },
    { id: "stat2", target: 6, suffix: "" },
    { id: "stat3", target: 48, suffix: "+" },
    { id: "stat4", target: 1999, suffix: "" },
  ];

  const DURATION = 2000;
  const activeAnimations = new Map();
  let hasAnimated = false;

  function resetStats() {
    statElements.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) el.textContent = "0";
    });
  }

  function animateSingleStat(item, delay = 0) {
    const el = document.getElementById(item.id);
    if (!el) return;

    if (activeAnimations.has(item.id)) {
      cancelAnimationFrame(activeAnimations.get(item.id));
    }

    setTimeout(() => {
      const start = performance.now();
      const from = 0;
      const to = item.target;

      function frame(now) {
        const progress = Math.min((now - start) / DURATION, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.round(from + (to - from) * eased);
        el.textContent = String(value) + item.suffix;
        if (progress < 1) {
          activeAnimations.set(item.id, requestAnimationFrame(frame));
        } else {
          activeAnimations.delete(item.id);
        }
      }

      activeAnimations.set(item.id, requestAnimationFrame(frame));
    }, delay);
  }

  function runStats() {
    if (hasAnimated) return;
    hasAnimated = true;
    statElements.forEach((item, index) => animateSingleStat(item, index * 120));
  }

  const section = document.getElementById("stats-section");
  if (!section || !("IntersectionObserver" in window)) {
    runStats();
    return;
  }

  resetStats();
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          runStats();
          observer.disconnect();
        }
      });
    },
    { threshold: 0.35 },
  );
  observer.observe(section);
}
