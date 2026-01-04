/**
 * ==========================================================================
 * GRADE 1: VANILLA JAVASCRIPT PORTFOLIO DEMO
 * Scroll animations using IntersectionObserver
 * No frameworks, no dependencies — just modern JavaScript!
 * ==========================================================================
 *
 * 🎓 LEARNING OBJECTIVES:
 * - Understand the IntersectionObserver API for scroll-based triggers
 * - Learn why IntersectionObserver is better than scroll event listeners
 * - Implement accessible animations with prefers-reduced-motion
 * - Master the observer pattern for performant scroll detection
 *
 * 📚 WHAT IS INTERSECTIONOBSERVER?
 * IntersectionObserver is a browser API that efficiently detects when elements
 * enter or leave the viewport (or any ancestor element). It's the modern
 * replacement for scroll event listeners.
 *
 * ⚡ WHY NOT USE addEventListener('scroll', ...)?
 * - scroll events fire on EVERY PIXEL of scroll (60+ times per second!)
 * - This blocks the main thread and causes "jank" (stuttering)
 * - IntersectionObserver is optimized by the browser, runs asynchronously,
 *   and only fires when intersection state actually changes
 *
 * 🔗 MDN DOCS: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
 */

// ==========================================================================
// 1. INTERSECTIONOBSERVER CONFIGURATION
// ==========================================================================

const observerOptions = {
  root: null,
  rootMargin: "0px 0px -10% 0px",
  threshold: 0.1,
};

const revealOnScroll = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
};

const revealStaggered = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("revealed");
      observer.unobserve(entry.target);
    }
  });
};

const singleObserver = new IntersectionObserver(
  revealOnScroll,
  observerOptions
);
const staggerObserver = new IntersectionObserver(
  revealStaggered,
  observerOptions
);

// ==========================================================================
// 2. INITIALIZE OBSERVERS
// ==========================================================================

function initScrollAnimations() {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) {
    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      el.classList.add("visible");
    });
    document.querySelectorAll("[data-reveal-stagger]").forEach((el) => {
      el.classList.add("revealed");
    });
    return;
  }

  document.querySelectorAll(".animate-on-scroll").forEach((el) => {
    singleObserver.observe(el);
  });

  document.querySelectorAll("[data-reveal-stagger]").forEach((el) => {
    staggerObserver.observe(el);
  });
}

// ==========================================================================
// 3. SMOOTH SCROLL FOR ANCHOR LINKS
// ==========================================================================

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href");
      if (targetId === "#") return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navHeight = document.querySelector(".nav")?.offsetHeight || 0;
        const targetPosition =
          target.getBoundingClientRect().top + window.scrollY - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        history.pushState(null, "", targetId);
      }
    });
  });
}

// ==========================================================================
// 4. ACTIVE NAVIGATION STATE
// ==========================================================================

function initActiveNav() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  const observerOptions = {
    root: null,
    rootMargin: "-50% 0px -50% 0px",
    threshold: 0,
  };

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          link.style.color =
            link.getAttribute("href") === `#${id}` ? "var(--main-color)" : "";
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => navObserver.observe(section));
}

// ==========================================================================
// 7. NAV-BAR HAMBURGER MENU
// ==========================================================================

function initHamburgerMenu() {
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (!toggle || !navLinks) {
    console.error("No se encuentra el menú");
    return;
  }

  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// ==========================================================================
// 8. NAVBAR COLOR CHANGE (ONLY BACKGROUND)
// ==========================================================================

function initNavbarBackground() {
  const navbar = document.querySelector(".nav");
  const hero = document.querySelector("#hero");

  if (!navbar || !hero) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navbar.classList.remove("scrolled");
        } else {
          navbar.classList.add("scrolled");
        }
      });
    },
    {
      root: null,
      threshold: 0,
      rootMargin: "0px 0px -100px 0px",
    }
  );

  observer.observe(hero);
}

// ==========================================================================
// 5. INITIALIZATION (SINGLE ENTRY POINT)
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  // Initialize all features
  initScrollAnimations();
  initSmoothScroll();
  initActiveNav();
  initHamburgerMenu();
  initNavbarBackground();

  console.log("🚀 Grade 1 Demo: Vanilla scroll animations initialized");
});

// ==========================================================================
// 6. CLEANUP (FOR SPA ENVIRONMENTS)
// ==========================================================================

window.cleanupScrollObservers = () => {
  singleObserver.disconnect();
  staggerObserver.disconnect();
  console.log("🧹 Observers cleaned up");
};
