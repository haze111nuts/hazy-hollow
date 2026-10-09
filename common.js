// ===========================================================
// Box-expand page transition — forward and reverse.
//
// Forward (index -> page): clones the clicked box, grows it to
// fill the viewport, then navigates. The target page's own
// background color matches the box's accent so the landing
// feels seamless.
//
// Reverse (page -> index): stores which box was originally
// clicked in sessionStorage. On the way back, a fullscreen
// overlay in the page's color shrinks back down into that exact
// box's position, then disappears to reveal the real box beneath.
// ===========================================================

const EXPAND_DURATION = 480; // ms
const EXPAND_EASING = "cubic-bezier(.65,0,.35,1)";

function expandTransitionCSS(duration) {
  return `
    top ${duration}ms ${EXPAND_EASING},
    left ${duration}ms ${EXPAND_EASING},
    width ${duration}ms ${EXPAND_EASING},
    height ${duration}ms ${EXPAND_EASING},
    border-radius ${duration}ms ${EXPAND_EASING}
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".link-box");

  // ---------------- forward: index -> page ----------------
  links.forEach((link, idx) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const href = link.getAttribute("href");
      if (!href) return;

      const rect = link.getBoundingClientRect();
      const accent = getComputedStyle(link).getPropertyValue("--accent").trim();

      // remember which box this was, so the return trip can shrink into it
      sessionStorage.setItem("oc_lastIndex", idx);

      const overlay = document.createElement("div");
      overlay.className = "transition-overlay";
      overlay.style.setProperty("--accent", accent);
      overlay.style.top = `${rect.top}px`;
      overlay.style.left = `${rect.left}px`;
      overlay.style.width = `${rect.width}px`;
      overlay.style.height = `${rect.height}px`;
      overlay.style.borderRadius = "16px";
      document.body.appendChild(overlay);

      overlay.getBoundingClientRect(); // force layout
      overlay.style.transition = expandTransitionCSS(EXPAND_DURATION);

      requestAnimationFrame(() => {
        overlay.style.top = "0px";
        overlay.style.left = "0px";
        overlay.style.width = "100vw";
        overlay.style.height = "100vh";
        overlay.style.borderRadius = "0px";
      });

      window.setTimeout(() => {
        window.location.href = href;
      }, EXPAND_DURATION - 40);
    });
  });

  // ---------------- back: page -> index ----------------
  const backLink = document.querySelector(".back-link");
  if (backLink) {
    backLink.addEventListener("click", (e) => {
      e.preventDefault();
      const href = backLink.getAttribute("href");
      if (!href) return;

      const colorSource = document.querySelector(".au-page-header") || document.body;
      const color = getComputedStyle(colorSource).backgroundColor;
      sessionStorage.setItem("oc_returning", "true");
      sessionStorage.setItem("oc_returnColor", color);

      // no local animation needed here — the current page is already
      // a solid color, so we just hand off to the index page, which
      // paints the same color instantly and shrinks it into place.
      window.location.href = href;
    });
  }

  // ---------------- reverse reveal on index load ----------------
  const returning = sessionStorage.getItem("oc_returning");
  if (returning && links.length) {
    sessionStorage.removeItem("oc_returning");
    const color = sessionStorage.getItem("oc_returnColor");
    const idx = parseInt(sessionStorage.getItem("oc_lastIndex") || "0", 10);
    sessionStorage.removeItem("oc_returnColor");

    // reuse the overlay the early inline script already painted,
    // so there's no flash of the index page's default background
    let overlay = document.getElementById("oc-return-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "oc-return-overlay";
      overlay.style.position = "fixed";
      overlay.style.top = "0px";
      overlay.style.left = "0px";
      overlay.style.width = "100vw";
      overlay.style.height = "100vh";
      overlay.style.borderRadius = "0px";
      overlay.style.zIndex = "999";
      document.body.appendChild(overlay);
    }
    overlay.style.background = color || overlay.style.background;

    const target = links[idx] || links[0];
    const rect = target.getBoundingClientRect();

    overlay.getBoundingClientRect(); // force layout
    overlay.style.transition = expandTransitionCSS(EXPAND_DURATION);

    requestAnimationFrame(() => {
      overlay.style.top = `${rect.top}px`;
      overlay.style.left = `${rect.left}px`;
      overlay.style.width = `${rect.width}px`;
      overlay.style.height = `${rect.height}px`;
      overlay.style.borderRadius = "16px";
    });

    window.setTimeout(() => {
      overlay.remove();
    }, EXPAND_DURATION + 30);
  }
});

// ===========================================================
// Site language (i18n) — shared by every page.
//
// Interface text lives in data/lang.js (load it BEFORE this file).
//   siteText(key)       -> text for the current language
//   getSiteLang()       -> "en", "zh", ...
//   setSiteLang(code)   -> switch language (remembered per visitor)
//
// In HTML:
//   data-i18n="key"        fills the element's text
//   data-i18n-aria="key"   fills its aria-label
//   <div data-lang-switch></div>   becomes the language buttons
//
// Pages that build content in JS listen for the "sitelangchange"
// event on document and re-render themselves.
// ===========================================================

const SITE_LANG_STORAGE_KEY = "hazy_lang";

function siteLangs() {
  return typeof SITE_LANGS !== "undefined" ? SITE_LANGS : { en: "EN" };
}

function siteDefaultLang() {
  return typeof SITE_DEFAULT_LANG !== "undefined" ? SITE_DEFAULT_LANG : "en";
}

function getSiteLang() {
  const langs = siteLangs();
  let saved = null;
  try { saved = localStorage.getItem(SITE_LANG_STORAGE_KEY); } catch (e) {}
  if (saved && langs[saved]) return saved;

  // first visit: follow the browser if it's one of our languages
  const browser = (navigator.language || "").toLowerCase();
  const match = Object.keys(langs).find((code) => browser.startsWith(code));
  return match || siteDefaultLang();
}

function siteText(key, vars) {
  const strings = typeof SITE_STRINGS !== "undefined" ? SITE_STRINGS : {};
  const lang = getSiteLang();
  let text = (strings[lang] && strings[lang][key]) ??
             (strings[siteDefaultLang()] && strings[siteDefaultLang()][key]) ??
             key;
  if (vars) {
    Object.keys(vars).forEach((k) => { text = text.replace(`{${k}}`, vars[k]); });
  }
  return text;
}

// fill every data-i18n / data-i18n-aria element inside `root`
function applySiteText(root) {
  (root || document).querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = siteText(el.dataset.i18n);
  });
  (root || document).querySelectorAll("[data-i18n-aria]").forEach((el) => {
    el.setAttribute("aria-label", siteText(el.dataset.i18nAria));
  });
  document.documentElement.lang = getSiteLang() === "zh" ? "zh-Hant" : getSiteLang();
}

function renderLangSwitches() {
  const current = getSiteLang();
  document.querySelectorAll("[data-lang-switch]").forEach((box) => {
    box.classList.add("lang-switch");
    box.setAttribute("role", "group");
    box.setAttribute("aria-label", siteText("lang.label"));
    box.innerHTML = Object.keys(siteLangs()).map((code) => `
      <button type="button" class="lang-btn${code === current ? " is-active" : ""}"
              data-lang="${code}" aria-pressed="${code === current}">${siteLangs()[code]}</button>
    `).join("");
  });
}

function setSiteLang(code) {
  if (!siteLangs()[code]) return;
  try { localStorage.setItem(SITE_LANG_STORAGE_KEY, code); } catch (e) {}
  applySiteText();
  renderLangSwitches();
  document.dispatchEvent(new CustomEvent("sitelangchange", { detail: { lang: code } }));
}

document.addEventListener("click", (e) => {
  const btn = e.target.closest && e.target.closest("[data-lang-switch] .lang-btn");
  if (btn) setSiteLang(btn.dataset.lang);
});

// set the language before the page's own scripts render anything
applySiteText();
document.addEventListener("DOMContentLoaded", () => {
  applySiteText();
  renderLangSwitches();
});
