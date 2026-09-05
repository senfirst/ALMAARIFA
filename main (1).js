/* =========================================================
   INSTITUT AL MAARIFA — comportements partagés
   ========================================================= */
(function () {
  "use strict";

  const WHATSAPP_NUMBERS = ["221774036424", "221775722937"];
  const WHATSAPP_DEFAULT_MSG = "Assalamu alaikum, je souhaite avoir des informations sur l'Institut Al Maarifa.";
  window.waLink = function (msg) {
    return `https://wa.me/${WHATSAPP_NUMBERS[0]}?text=${encodeURIComponent(msg || WHATSAPP_DEFAULT_MSG)}`;
  };

  /* ---------- mobile nav ---------- */
  function initNav() {
    const burger = document.querySelector(".burger");
    if (!burger) return;
    burger.addEventListener("click", () => {
      document.body.classList.toggle("nav-open");
      const open = document.body.classList.contains("nav-open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.querySelectorAll(".mobile-nav a").forEach(a =>
      a.addEventListener("click", () => document.body.classList.remove("nav-open"))
    );
  }

  /* ---------- highlight active nav link ---------- */
  function markActiveLink() {
    const path = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll("[data-nav-link]").forEach(a => {
      const href = a.getAttribute("href");
      if (href === path) a.classList.add("active");
    });
  }

  /* ---------- reveal on scroll (single restrained effect) ---------- */
  function initReveal() {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || els.length === 0) {
      els.forEach(el => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    els.forEach(el => io.observe(el));
  }

  /**
   * Render an image with automatic placeholder fallback.
   * Never generates or fetches an image: only tries the real file
   * the school administrator will place under /public/images/.
   */
  window.renderImage = function (path, alt, extraClass) {
    const cls = "img-slot" + (extraClass ? " " + extraClass : "");
    const safeAlt = (alt || "").replace(/"/g, "&quot;");
    return `
      <div class="${cls}" data-img-slot>
        <img src="${path}" alt="${safeAlt}" loading="lazy"
             onerror="this.closest('[data-img-slot]').classList.add('is-empty'); this.remove();">
        <svg class="placeholder-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">
          <rect x="3" y="5" width="18" height="14" rx="2"></rect>
          <circle cx="8.5" cy="10" r="1.6"></circle>
          <path d="M21 16l-5.5-5.5a2 2 0 0 0-2.8 0L3 19"></path>
        </svg>
        <span class="placeholder-label">${safeAlt || "Photo à venir"}</span>
      </div>`;
  };

  /* ---------- countdown to 15 September 2026 ---------- */
  function initCountdown() {
    const box = document.querySelector("[data-countdown]");
    if (!box) return;
    const target = new Date("2026-09-15T08:00:00");
    function tick() {
      const now = new Date();
      let diff = Math.max(0, target - now);
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      box.querySelector('[data-cd="d"]').textContent = String(d);
      box.querySelector('[data-cd="h"]').textContent = String(h).padStart(2, "0");
      box.querySelector('[data-cd="m"]').textContent = String(m).padStart(2, "0");
      box.querySelector('[data-cd="s"]').textContent = String(s).padStart(2, "0");
      if (diff <= 0) clearInterval(interval);
    }
    tick();
    const interval = setInterval(tick, 1000);
  }

  /* ---------- generic form handling (front-end only for now) ---------- */
  function initForms() {
    document.querySelectorAll("form[data-form]").forEach(form => {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!form.reportValidity()) return;
        const successBox = form.parentElement.querySelector(".form-success") ||
          form.querySelector(".form-success");
        // Placeholder for future integration (Supabase / Firebase / API REST).
        // See /src/services/README.md
        const data = Object.fromEntries(new FormData(form).entries());
        console.log("[form:" + form.dataset.form + "] soumis (démo, non envoyé) →", data);
        if (successBox) successBox.classList.add("show");
        form.reset();
        if (successBox) successBox.scrollIntoView({ behavior: "smooth", block: "center" });
      });
    });
  }

  /* ---------- filter buttons (activities / library) ---------- */
  window.initFilters = function (root, itemSelector, dataAttr) {
    const wrap = document.querySelector(root);
    if (!wrap) return;
    const buttons = wrap.querySelectorAll(".filter-btn");
    const items = document.querySelectorAll(itemSelector);
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const val = btn.dataset.filter;
        items.forEach(item => {
          const show = val === "all" || item.getAttribute(dataAttr) === val;
          item.style.display = show ? "" : "none";
        });
      });
    });
  };

  document.addEventListener("DOMContentLoaded", () => {
    initNav();
    markActiveLink();
    initReveal();
    initCountdown();
    initForms();
    document.querySelectorAll("[data-wa-link]").forEach(a => a.setAttribute("href", waLink()));
  });
})();
