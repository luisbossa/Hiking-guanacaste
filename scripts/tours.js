(function () {
  const header = document.querySelector("[data-header]");
  const menuToggle = document.querySelector(".menu-toggle");
  const primaryNav = document.querySelector(".primary-nav");
  const languageSwitcher = document.getElementById("languageSwitcher");
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  function closeSiblingMenus(item) {
    const parent = item.parentElement;
    if (!parent) return;

    parent
      .querySelectorAll(":scope > .has-dropdown.is-open")
      .forEach(function (sibling) {
        if (sibling !== item) sibling.classList.remove("is-open");
      });
  }

  function setupMenu() {
    if (!menuToggle || !primaryNav) return;

    menuToggle.addEventListener("click", function () {
      const isOpen = primaryNav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close menu" : "Open menu",
      );
      document.body.classList.toggle("menu-open", isOpen);
    });

    primaryNav
      .querySelectorAll(".has-dropdown > button")
      .forEach(function (button) {
        button.addEventListener("click", function (event) {
          if (window.innerWidth > 840) return;

          event.preventDefault();
          const item = button.closest(".has-dropdown");
          closeSiblingMenus(item);
          item.classList.toggle("is-open");
        });
      });

    document.addEventListener("click", function (event) {
      if (!header || header.contains(event.target)) return;
      primaryNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 840) {
        primaryNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
        primaryNav
          .querySelectorAll(".has-dropdown.is-open")
          .forEach(function (item) {
            item.classList.remove("is-open");
          });
      }
    });
  }

  function setupLanguageSwitcher() {
    if (!languageSwitcher) return;

    const currentLang =
      window.location.pathname.indexOf("/es/") === 0 ? "es" : "en";
    languageSwitcher.value = currentLang;

    languageSwitcher.addEventListener("change", function () {
      const lang = languageSwitcher.value;
      const baseURL = window.location.origin;
      const cleanPath =
        window.location.pathname.replace(/^\/es/, "").replace(/^\/en/, "") ||
        "/";
      window.location.href =
        lang === "es" ? baseURL + "/es" + cleanPath : baseURL + cleanPath;
    });
  }

  function createDots(carousel, slides, goTo) {
    const dotsWrap = carousel.querySelector(".carousel-dots");
    if (!dotsWrap) return [];

    dotsWrap.innerHTML = "";
    return slides.map(function (_, index) {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.setAttribute("aria-label", "Go to slide " + (index + 1));
      dot.addEventListener("click", function () {
        goTo(index, true);
      });
      dotsWrap.appendChild(dot);
      return dot;
    });
  }

  function setupCarousel(carousel) {
    const slides = Array.from(carousel.querySelectorAll(".slide"));
    const prev = carousel.querySelector(".prev");
    const next = carousel.querySelector(".next");
    const delay = Number(carousel.dataset.autoplay || 0);
    let current = Math.max(
      0,
      slides.findIndex(function (slide) {
        return slide.classList.contains("is-active");
      }),
    );
    let timer = null;
    let dots = [];

    function update() {
      slides.forEach(function (slide, index) {
        const isActive = index === current;
        slide.classList.toggle("is-active", isActive);
        slide.setAttribute("aria-hidden", String(!isActive));
      });

      dots.forEach(function (dot, index) {
        dot.classList.toggle("is-active", index === current);
        dot.setAttribute("aria-current", index === current ? "true" : "false");
      });
    }

    function stop() {
      if (timer) window.clearInterval(timer);
      timer = null;
    }

    function start() {
      if (!delay || prefersReducedMotion || slides.length < 2) return;
      stop();
      timer = window.setInterval(function () {
        goTo(current + 1);
      }, delay);
    }

    function goTo(index, userInitiated) {
      current = (index + slides.length) % slides.length;
      update();
      if (userInitiated) start();
    }

    if (slides.length < 2) {
      update();
      return;
    }

    dots = createDots(carousel, slides, goTo);

    if (prev) {
      prev.addEventListener("click", function () {
        goTo(current - 1, true);
      });
    }

    if (next) {
      next.addEventListener("click", function () {
        goTo(current + 1, true);
      });
    }

    carousel.addEventListener("mouseenter", stop);
    carousel.addEventListener("mouseleave", start);
    carousel.addEventListener("focusin", stop);
    carousel.addEventListener("focusout", start);

    update();
    start();
  }

  function setupReveal() {
    const revealItems = Array.from(document.querySelectorAll(".reveal"));
    if (!revealItems.length) return;

    if (!("IntersectionObserver" in window) || prefersReducedMotion) {
      revealItems.forEach(function (item) {
        item.classList.add("is-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.16,
      },
    );

    revealItems.forEach(function (item) {
      observer.observe(item);
    });
  }

  setupMenu();
  setupLanguageSwitcher();
  document.querySelectorAll("[data-carousel]").forEach(setupCarousel);
  setupReveal();
})();
