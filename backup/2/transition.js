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

const OC_DURATION = 480; // ms
const OC_EASING = "cubic-bezier(.65,0,.35,1)";

function ocTransitionCSS(duration) {
  return `
    top ${duration}ms ${OC_EASING},
    left ${duration}ms ${OC_EASING},
    width ${duration}ms ${OC_EASING},
    height ${duration}ms ${OC_EASING},
    border-radius ${duration}ms ${OC_EASING}
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
      overlay.style.transition = ocTransitionCSS(OC_DURATION);

      requestAnimationFrame(() => {
        overlay.style.top = "0px";
        overlay.style.left = "0px";
        overlay.style.width = "100vw";
        overlay.style.height = "100vh";
        overlay.style.borderRadius = "0px";
      });

      window.setTimeout(() => {
        window.location.href = href;
      }, OC_DURATION - 40);
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
    overlay.style.transition = ocTransitionCSS(OC_DURATION);

    requestAnimationFrame(() => {
      overlay.style.top = `${rect.top}px`;
      overlay.style.left = `${rect.left}px`;
      overlay.style.width = `${rect.width}px`;
      overlay.style.height = `${rect.height}px`;
      overlay.style.borderRadius = "16px";
    });

    window.setTimeout(() => {
      overlay.remove();
    }, OC_DURATION + 30);
  }
});
