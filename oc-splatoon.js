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
          <span class="splat-card-name">TBD</span>
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

  // --i drives the staggered fade-in delay of each section (see CSS)
  let sectionIndex = 0;

  function sectionHtml(title, subtitle, names) {
    if (!names.length) return "";
    const i = Math.min(sectionIndex++, 6);
    return `
      <section class="splat-team" style="--i:${i}">
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
    sectionIndex = 0;
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

  // only let the wheel/keys through when they're over the modal's own
  // scroll area AND that area actually has something to scroll — otherwise
  // the scroll would leak through to the page behind
  function isInsideModal(target) {
    const scroller = target && target.closest && target.closest(".splat-modal-scroll");
    return !!scroller && scroller.scrollHeight > scroller.clientHeight;
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

  // pasted text can carry invisible zero-width characters — strip them
  function clean(text) {
    return String(text || "").replace(/[\u200B\u200C\u200D\uFEFF]/g, "");
  }

  // relationships are stored as [{ Name: "text" }, ...]
  function relationsOf(chara) {
    return (chara.relationships || []).map((obj) => {
      const who = Object.keys(obj)[0];
      return { who, text: clean(obj[who]) };
    });
  }

  function relHtml(rel) {
    const other = SPLAT_CHARA_ROSTER[rel.who];
    const swatch = other
      ? `<button type="button" class="splat-rel-swatch" style="--rel:${other.color}" data-goto="${escapeHtml(rel.who)}" aria-label="Open ${escapeHtml(rel.who)}">${escapeHtml(rel.who[0])}</button>`
      : `<span class="splat-rel-swatch">${escapeHtml(rel.who[0])}</span>`;
    return `
      <div class="splat-rel">
        ${swatch}
        <div>
          <span class="splat-rel-who">${escapeHtml(rel.who)}${other && other.name_ch ? `<small>${escapeHtml(other.name_ch)}</small>` : ""}</span>
          <p>${escapeHtml(rel.text)}</p>
        </div>
      </div>
    `;
  }

  function modalContentHtml(name, chara) {
    // summary is your own text and may contain <br>, so it goes in as HTML
    const summary = chara.summary
      ? `<p class="splat-modal-summary">${clean(chara.summary)}</p>`
      : `<p class="splat-modal-empty">No summary yet.</p>`;

    const notes = chara.notes && chara.notes.length ? `
      <section class="splat-modal-notes">
        <h4 class="splat-modal-label">追加筆記</h4>
        <ul>${chara.notes.map((n) => `<li>${escapeHtml(clean(n))}</li>`).join("")}</ul>
      </section>` : "";

    const rels = relationsOf(chara);
    const relSection = rels.length ? `
      <section>
        <h4 class="splat-modal-label">關係</h4>
        <div class="splat-rel-list">${rels.map(relHtml).join("")}</div>
      </section>` : "";

    return `
      <div class="splat-modal-hero">
        ${thumbHtml(name, "splat-modal-thumb")}
        <div class="splat-modal-hero-text">
          <h3 class="splat-modal-name">${escapeHtml(name)}${chara.name_ch ? `<small>${escapeHtml(chara.name_ch)}</small>` : ""}</h3>
          ${summary}
        </div>
      </div>
      ${notes}
      ${relSection}
    `;
  }

  function openCharaModal(name) {
    const chara = SPLAT_CHARA_ROSTER[name];
    if (!chara) return;

    const backdrop = document.createElement("div");
    backdrop.className = "splat-modal-backdrop";
    backdrop.innerHTML = `
      <div class="splat-modal" role="dialog" aria-modal="true">
        <button class="splat-modal-close" type="button" aria-label="Close">&times;</button>
        <div class="splat-modal-scroll"></div>
      </div>
    `;
    const modal = backdrop.querySelector(".splat-modal");
    const scroller = backdrop.querySelector(".splat-modal-scroll");

    // fill (or refill) the modal with a character — used again when a
    // relationship square is clicked, to jump to that character
    function show(charaName) {
      const c = SPLAT_CHARA_ROSTER[charaName];
      if (!c) return;
      modal.className = `splat-modal${c.type ? ` splat-modal--${c.type}` : ""}`;
      modal.style.setProperty("--chara", c.color);
      modal.setAttribute("aria-label", charaName);
      scroller.innerHTML = modalContentHtml(charaName, c);
      scroller.scrollTop = 0;
    }

    // play the closing animation (.is-closing in CSS), then remove
    let closing = false;
    function close() {
      if (closing) return;
      closing = true;
      document.removeEventListener("keydown", onKey);
      unlockScroll();
      backdrop.classList.add("is-closing");

      const remove = () => backdrop.remove();
      backdrop.addEventListener("animationend", (e) => {
        if (e.target === backdrop) remove();
      });
      // fallback in case the animation doesn't run (e.g. reduced motion)
      window.setTimeout(remove, 400);
    }
    function onKey(e) {
      if (e.key === "Escape") close();
    }

    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) return close();
      const goto = e.target.closest("[data-goto]");
      if (goto) show(goto.dataset.goto);
    });
    backdrop.querySelector(".splat-modal-close").addEventListener("click", close);
    document.addEventListener("keydown", onKey);

    show(name);
    lockScroll();
    document.body.appendChild(backdrop);
    backdrop.querySelector(".splat-modal-close").focus();
  }

  setView("team");
});
