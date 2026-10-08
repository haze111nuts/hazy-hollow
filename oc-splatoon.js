// ===========================================================
// Splatoon OC browser — character grid + modal.
//
// Reads SPLAT_CHARA_ROSTER and SPLATEAM from data/oc-splatoon.js.
//
// Thumbnails: add an optional `thumb` field to any character in
// SPLAT_CHARA_ROSTER (e.g. thumb: "img/splatoon/blade.png") and
// it shows up automatically. Characters without one get a colored
// placeholder with their initial.
// ===========================================================

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("splat-grid");
  const viewButtons = document.querySelectorAll(".splat-view-btn");
  if (!grid || typeof SPLAT_CHARA_ROSTER === "undefined") return;

  // ---------------- data helpers ----------------

  // list of team keys each character belongs to
  function teamsOf(name) {
    return Object.keys(SPLATEAM).filter((key) =>
      SPLATEAM[key].members.includes(name)
    );
  }

  // members of a team. Blank entries ("") stay in as reserved slots
  // for characters not designed yet; names missing from the roster are skipped.
  function membersOf(teamKey) {
    return SPLATEAM[teamKey].members.filter((name) => {
      if (!name) return true;
      if (!SPLAT_CHARA_ROSTER[name]) {
        console.warn(`[oc-splatoon] "${name}" is in team "${teamKey}" but not in SPLAT_CHARA_ROSTER`);
        return false;
      }
      return true;
    });
  }

  function unaffiliated() {
    return Object.keys(SPLAT_CHARA_ROSTER).filter((name) => teamsOf(name).length === 0);
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));
  }

  // ---------------- rendering ----------------

  function thumbHtml(name, extraClass) {
    const chara = SPLAT_CHARA_ROSTER[name];
    const inner = chara.thumb
      ? `<img src="${escapeHtml(chara.thumb)}" alt="" loading="lazy">`
      : `<span class="splat-thumb-initial">${escapeHtml(name[0])}</span>`;
    return `<div class="splat-thumb ${extraClass || ""}" style="--chara:${chara.color}">${inner}</div>`;
  }

  // type "collab" (a friend's character) and "npc" (already created by
  // someone else) get their own card style via a modifier class
  function typeClass(chara) {
    return chara.type ? ` splat-card--${chara.type}` : "";
  }

  function cardHtml(name) {
    if (!name) {
      return `
        <div class="splat-card splat-card--reserved" aria-label="Reserved slot">
          <div class="splat-thumb"><span class="splat-thumb-initial">?</span></div>
          <span class="splat-card-name">Reserved</span>
        </div>
      `;
    }
    return `
      <button class="splat-card${typeClass(SPLAT_CHARA_ROSTER[name])}" type="button" data-name="${escapeHtml(name)}" style="--chara:${SPLAT_CHARA_ROSTER[name].color}">
        ${thumbHtml(name)}
        <span class="splat-card-name">${escapeHtml(name)}</span>
      </button>
    `;
  }

  function sectionHtml(title, subtitle, names) {
    if (!names.length) return "";
    return `
      <section class="splat-team">
        <header class="splat-team-header">
          <h2 class="splat-team-name">${escapeHtml(title)}</h2>
          ${subtitle ? `<span class="splat-team-name-ch">${escapeHtml(subtitle)}</span>` : ""}
        </header>
        <div class="splat-card-grid">
          ${names.map(cardHtml).join("")}
        </div>
      </section>
    `;
  }

  function renderByTeam() {
    let html = Object.keys(SPLATEAM)
      .map((key) => {
        const team = SPLATEAM[key];
        return sectionHtml(team.teamName, team.teamName_ch, membersOf(key));
      })
      .join("");
    html += sectionHtml("Unaffiliated", "", unaffiliated());
    grid.innerHTML = html;
  }

  function renderAll() {
    const names = Object.keys(SPLAT_CHARA_ROSTER);
    grid.innerHTML = sectionHtml("All Characters", "", names);
  }

  const VIEWS = { team: renderByTeam, all: renderAll };

  function setView(view) {
    (VIEWS[view] || renderByTeam)();
    viewButtons.forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.view === view);
    });
  }

  viewButtons.forEach((btn) => {
    btn.addEventListener("click", () => setView(btn.dataset.view));
  });

  // one listener for every card, so re-rendering needs no rebinding
  grid.addEventListener("click", (e) => {
    const card = e.target.closest(".splat-card");
    if (card) openCharaModal(card.dataset.name);
  });

  // ---------------- scroll lock (wheel/touch/key interception) ----------------

  const SCROLL_KEYS = ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "];

  function isInsideModal(target) {
    return !!(target && target.closest && target.closest(".splat-modal"));
  }
  function preventScroll(e) {
    if (!isInsideModal(e.target)) e.preventDefault();
  }
  function preventScrollKeys(e) {
    if (SCROLL_KEYS.includes(e.key) && !isInsideModal(e.target)) e.preventDefault();
  }
  function lockScroll() {
    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });
    window.addEventListener("keydown", preventScrollKeys, { passive: false });
  }
  function unlockScroll() {
    window.removeEventListener("wheel", preventScroll, { passive: false });
    window.removeEventListener("touchmove", preventScroll, { passive: false });
    window.removeEventListener("keydown", preventScrollKeys, { passive: false });
  }

  // ---------------- modal ----------------

  function openCharaModal(name) {
    const chara = SPLAT_CHARA_ROSTER[name];
    if (!chara) return;

    const backdrop = document.createElement("div");
    backdrop.className = "splat-modal-backdrop";
    backdrop.innerHTML = `
      <div class="splat-modal${chara.type ? ` splat-modal--${chara.type}` : ""}" role="dialog" aria-modal="true" aria-label="${escapeHtml(name)}" style="--chara:${chara.color}">
        <button class="splat-modal-close" type="button" aria-label="Close">&times;</button>
        ${thumbHtml(name, "splat-modal-thumb")}
        <div class="splat-modal-body">
          <h3 class="splat-modal-name">${escapeHtml(name)}</h3>
          <div class="splat-modal-name-ch">${escapeHtml(chara.name_ch || "")}</div>
          <p class="splat-modal-text">Placeholder text — character details go here.</p>
        </div>
      </div>
    `;

    function close() {
      backdrop.remove();
      document.removeEventListener("keydown", onKey);
      unlockScroll();
    }
    function onKey(e) {
      if (e.key === "Escape") close();
    }

    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) close();
    });
    backdrop.querySelector(".splat-modal-close").addEventListener("click", close);
    document.addEventListener("keydown", onKey);

    lockScroll();
    document.body.appendChild(backdrop);
    backdrop.querySelector(".splat-modal-close").focus();
  }

  setView("team");
});
