// ===========================================================
// Splatoon OC browser — character grid + modal.
//
// Reads data/oc-splatoon-common.js (character color + type, groups,
// lore colors), data/oc-splatoon-zhtw.js and data/oc-splatoon-en.js
// (character profiles + lore text), and interface text from
// data/lang.js (via siteText() in common.js).
//
// Thumbnails: add an optional `thumb` field to any character in
// a language data file (e.g. thumb: "img/splatoon/blade.png") and
// it shows up automatically. Characters without one get a colored
// placeholder with their initial.
// ===========================================================

// ===========================================================
// CHARACTER ART
//
// All images live in SPLAT_IMG_DIR and are found by file name —
// no code changes needed when you add art.
//
//   Character WITH outfits (a `variant` list):
//     <name>_<outfit id>.png    one per outfit    e.g. blade_casual.png
//     The FIRST outfit in the list is also their grid thumbnail.
//
//   Character WITHOUT outfits:
//     <name>.png                thumbnail + modal  e.g. callie.png
//
// <name> is the character's name in lowercase, with spaces and dots
// turned into "-"   (Captain Cuttlefish -> captain-cuttlefish,
//                    Dr. Lapis -> dr-lapis).
// The outfit id is the key in the `variant` list ({casual: "日常"}).
//
// Optional: a `thumb: "path"` field on a character overrides the
// grid thumbnail. Until a file exists, a placeholder is shown, so
// nothing breaks while art is missing.
//
// TODO (Hazy): change the folder or the ".png" here if needed.
// ===========================================================
const SPLAT_IMG_DIR = "img/splatoon/";
const SPLAT_IMG_EXT = ".png";

// "Captain Cuttlefish" -> "captain-cuttlefish"
function splatSlug(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

// character without outfits: <name>.png
function splatMainSrc(name) {
  return `${SPLAT_IMG_DIR}${splatSlug(name)}${SPLAT_IMG_EXT}`;
}

// one outfit: <name>_<id>.png
function splatVariantSrc(name, id) {
  return `${SPLAT_IMG_DIR}${splatSlug(name)}_${id}${SPLAT_IMG_EXT}`;
}

// grid thumbnail: `thumb` field, else the first outfit, else <name>.png
function splatThumbSrc(name, chara) {
  if (chara.thumb) return chara.thumb;
  const first = (chara.variant || [])[0];
  return first ? splatVariantSrc(name, Object.keys(first)[0]) : splatMainSrc(name);
}

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("splat-grid");
  const viewButtons = document.querySelectorAll(".splat-view-btn");
  if (!grid || typeof SPLAT_CHARA_COMMON_DATA === "undefined") return;

  // ---------------- language helpers ----------------
  //
  // Each site language (data/lang.js code) has its own character data
  // file. Fields missing from a language fall back to the base
  // language (Chinese); color + type always come from the common file.

  const SPLAT_CHARA_DATA = {
    zh: typeof SPLAT_CHARA_DATA_ZHTW !== "undefined" ? SPLAT_CHARA_DATA_ZHTW : {},
    en: typeof SPLAT_CHARA_DATA_EN !== "undefined" ? SPLAT_CHARA_DATA_EN : {}
  };
  const SPLAT_BASE_LANG = "zh";

  function lang() {
    return getSiteLang();
  }

  // one character's data in the current language, merged with the
  // base language and the common data. undefined if not in the roster.
  function charaOf(id) {
    const common = SPLAT_CHARA_COMMON_DATA[id];
    if (!common) return undefined;
    const base = SPLAT_CHARA_DATA[SPLAT_BASE_LANG][id] || {};
    const own = (SPLAT_CHARA_DATA[lang()] || {})[id] || {};
    return { ...base, ...own, ...common };
  }

  // a character's name in one language ("" if the Chinese name is missing;
  // other languages fall back to the id, which is the English name)
  function nameIn(code, id) {
    const data = (SPLAT_CHARA_DATA[code] || {})[id];
    if (data && data.name) return data.name;
    return code === SPLAT_BASE_LANG ? "" : id;
  }

  // a character field in the current language
  function local(chara, field) {
    const block = chara[lang()];
    if (block && block[field] !== undefined) return block[field];
    return chara[field];
  }

  // display name of a character in the current language
  function charaName(id) {
    return nameIn(lang(), id) || id;
  }

  // Japanese names (data/oc-splatoon-jp.js) are hidden for now.
  // Set to true to show them as the small name in English mode again.
  const SHOW_JP_NAMES = false;

  // Japanese name, "" if there isn't one (or if they're hidden)
  function jpName(id) {
    if (!SHOW_JP_NAMES) return "";
    const data = typeof SPLAT_CHARA_DATA_JP !== "undefined" ? SPLAT_CHARA_DATA_JP[id] : null;
    return (data && data.name) || "";
  }

  // the small name next to the main one:
  // Chinese mode -> English name; English mode -> Japanese name
  // (nothing while SHOW_JP_NAMES is false, or if there's no Japanese name)
  function charaSubName(id) {
    if (!SPLAT_CHARA_COMMON_DATA[id]) return "";
    const sub = lang() === "zh" ? nameIn("en", id) : jpName(id);
    return sub && sub !== charaName(id) ? sub : "";
  }

  function groupName(group) {
    return lang() === "zh" ? (group.groupName_ch || group.groupName_en) : group.groupName_en;
  }

  // ---------------- lore helpers ----------------
  //
  // Lore ids + colors live in SPLAT_LORE_COMMON_DATA (common file);
  // title / subtitle / type / summary live in SPLAT_LORE_DATA_ZHTW
  // and SPLAT_LORE_DATA_EN. Missing fields fall back to Chinese,
  // except subtitle, which is only shown when that language has one.
  // Link to one from any summary / note / relationship text with
  //   [[OCTA]]                          -> shows "OCTA"
  //   [[深海地鐵測驗程序]]              -> found by any language's title
  //   [[Royal Flush|RF]]                -> links Royal Flush, shows "RF"
  // A group heading opens lore when the group has  lore: "<key>",
  // or when its groupName_en matches a lore key.

  const SPLAT_LORE_DATA = {
    zh: typeof SPLAT_LORE_DATA_ZHTW !== "undefined" ? SPLAT_LORE_DATA_ZHTW : {},
    en: typeof SPLAT_LORE_DATA_EN !== "undefined" ? SPLAT_LORE_DATA_EN : {}
  };

  function loreCommon() {
    return typeof SPLAT_LORE_COMMON_DATA !== "undefined" ? SPLAT_LORE_COMMON_DATA : {};
  }

  // one lore entry in the current language (undefined if not listed)
  function loreOf(key) {
    const common = loreCommon()[key];
    if (!common) return undefined;
    const base = SPLAT_LORE_DATA[SPLAT_BASE_LANG][key] || {};
    const own = (SPLAT_LORE_DATA[lang()] || {})[key];
    return {
      ...base, ...(own || {}), ...common,
      title: (own && own.title) || base.title || key,
      subtitle: own ? own.subtitle : base.subtitle
    };
  }

  // accepts the id or any language's title
  function findLoreKey(ref) {
    if (!ref) return null;
    const ids = Object.keys(loreCommon());
    if (ids.includes(ref)) return ref;
    return ids.find((k) =>
      Object.values(SPLAT_LORE_DATA).some((data) => data[k] && data[k].title === ref)
    ) || null;
  }

  function loreName(key) {
    const e = loreOf(key);
    return e ? e.title : key;
  }

  // line under the title (none if this language leaves it out)
  function loreSubName(key) {
    const e = loreOf(key);
    const sub = e && e.subtitle;
    return sub && sub !== loreName(key) ? sub : "";
  }

  function groupLoreKey(group) {
    return findLoreKey(group.lore) || findLoreKey(group.groupName_en);
  }

  // turn [[...]] in text into clickable lore links
  function linkLore(html) {
    return String(html).replace(/\[\[([^\]|]+?)(?:\|([^\]]+?))?\]\]/g, (all, ref, label) => {
      const key = findLoreKey(ref.trim());
      const text = label || ref;
      return key
        ? `<button type="button" class="splat-lore-link" data-lore="${escapeHtml(key)}">${text}</button>`
        : text;  // unknown entry: just show the words
    });
  }

  // a summary is a list of paragraphs (["…", "…"]) — each one becomes a
  // <p>. A single string still works, and is used as written.
  function hasText(value) {
    const list = Array.isArray(value) ? value : [value];
    return list.some((t) => clean(t).trim());
  }
  function paragraphsHtml(value) {
    if (!Array.isArray(value)) return linkLore(clean(value));
    return value
      .filter((t) => clean(t).trim())
      .map((t) => `<p>${linkLore(clean(t))}</p>`)
      .join("");
  }

  // ---------------- data helpers ----------------

  // list of group keys each character belongs to
  function groupsOf(name) {
    return Object.keys(SPLAT_GROUP).filter((key) =>
      SPLAT_GROUP[key].members.includes(name)
    );
  }

  // members of a group. Blank entries ("") stay in as reserved slots
  // for characters not designed yet; names missing from the roster are skipped.
  function membersOf(groupKey) {
    return SPLAT_GROUP[groupKey].members.filter((name) => {
      if (!name) return true;
      if (!SPLAT_CHARA_COMMON_DATA[name]) {
        console.warn(`[oc-splatoon] "${name}" is in group "${groupKey}" but not in SPLAT_CHARA_COMMON_DATA`);
        return false;
      }
      return true;
    });
  }

  function unaffiliated() {
    return Object.keys(SPLAT_CHARA_COMMON_DATA).filter((name) => groupsOf(name).length === 0);
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));
  }

  // pasted text can carry invisible zero-width characters — strip them
  function clean(text) {
    return String(text || "").replace(/[​‌‍﻿]/g, "");
  }

  // ---------------- grid ----------------

  // the character's main picture (see splatThumbSrc at the top).
  // The initial sits underneath and stays visible if there's no image yet.
  function thumbHtml(name, extraClass) {
    const chara = charaOf(name);
    const src = splatThumbSrc(name, chara);
    return `
      <div class="splat-thumb ${extraClass || ""}" style="--chara:${chara.color}">
        <span class="splat-thumb-initial">${escapeHtml(name[0])}</span>
        <img class="splat-thumb-img" src="${escapeHtml(src)}" alt="" loading="lazy" onerror="this.remove()">
      </div>`;
  }

  // type "collab" (a friend's character) and "npc" (already created by
  // someone else) get their own card style and a corner ribbon
  function typeClass(chara) {
    return chara.type ? ` splat-card--${chara.type}` : "";
  }
  function ribbonAttr(chara) {
    return chara.type ? ` data-ribbon="${escapeHtml(siteText("ribbon." + chara.type))}"` : "";
  }

  function cardHtml(name) {
    if (!name) {
      return `
        <div class="splat-card splat-card--reserved" aria-label="${escapeHtml(siteText("card.reservedLabel"))}">
          <div class="splat-thumb"><span class="splat-thumb-initial">?</span></div>
          <span class="splat-card-name">${escapeHtml(siteText("card.reserved"))}</span>
        </div>
      `;
    }
    const chara = charaOf(name);
    return `
      <button class="splat-card${typeClass(chara)}"${ribbonAttr(chara)} type="button" data-name="${escapeHtml(name)}" style="--chara:${chara.color}">
        ${thumbHtml(name)}
        <span class="splat-card-name">${escapeHtml(charaName(name))}</span>
      </button>
    `;
  }

  // --i drives the staggered fade-in delay of each section (see CSS)
  let sectionIndex = 0;

  // loreKey (optional): makes the heading a button that opens that lore entry
  function sectionHtml(title, names, loreKey) {
    if (!names.length) return "";
    const i = Math.min(sectionIndex++, 6);
    const heading = loreKey
      ? `<button type="button" class="splat-group-lore" data-lore="${escapeHtml(loreKey)}">${escapeHtml(title)}</button>`
      : escapeHtml(title);
    return `
      <section class="splat-group" style="--i:${i}">
        <header class="splat-group-header">
          <h2 class="splat-group-name">${heading}</h2>
        </header>
        <div class="splat-card-grid">
          ${names.map(cardHtml).join("")}
        </div>
      </section>
    `;
  }

  function renderByGroup() {
    let html = Object.keys(SPLAT_GROUP)
      .map((key) => {
        const group = SPLAT_GROUP[key];
        return sectionHtml(groupName(group), membersOf(key), groupLoreKey(group));
      })
      .join("");
    html += sectionHtml(siteText("group.unaffiliated"), unaffiliated());
    grid.innerHTML = html;
  }

  function renderAll() {
    const names = Object.keys(SPLAT_CHARA_COMMON_DATA);
    grid.innerHTML = sectionHtml(siteText("group.all"), names);
  }

  const VIEWS = { group: renderByGroup, all: renderAll };
  let currentView = "group";

  // animate: false re-draws the grid without the sections sliding in
  // (used when switching language — see .no-enter in the CSS)
  function setView(view, animate = true) {
    currentView = VIEWS[view] ? view : "group";
    sectionIndex = 0;
    grid.classList.toggle("no-enter", !animate);
    VIEWS[currentView]();
    viewButtons.forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.view === currentView);
    });
  }

  // clicking anywhere on the view switch toggles between the two views
  const viewToggle = document.querySelector(".splat-view-toggle");
  if (viewToggle) {
    viewToggle.addEventListener("click", () => setView(currentView === "group" ? "all" : "group"));
  }

  // one listener for every card, so re-rendering needs no rebinding
  grid.addEventListener("click", (e) => {
    const lore = e.target.closest("[data-lore]");
    if (lore) return openLoreModal(lore.dataset.lore, lore);
    const card = e.target.closest(".splat-card[data-name]");
    if (card) openCharaModal(card.dataset.name, card);
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
  // counted, so a lore modal on top of a character modal can close
  // without unlocking the page while the character modal is still open
  let lockCount = 0;
  function lockScroll() {
    if (lockCount++ > 0) return;
    // also stops the page scrollbar from being dragged (CSS: .is-scroll-locked)
    document.documentElement.classList.add("is-scroll-locked");
    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });
    window.addEventListener("keydown", preventScrollKeys, { passive: false });
  }
  function unlockScroll() {
    if (lockCount === 0 || --lockCount > 0) return;
    document.documentElement.classList.remove("is-scroll-locked");
    window.removeEventListener("wheel", preventScroll, { passive: false });
    window.removeEventListener("touchmove", preventScroll, { passive: false });
    window.removeEventListener("keydown", preventScrollKeys, { passive: false });
  }

  // ---------------- modal content ----------------

  // relationships are stored as [{ Name: "text" }, ...]
  function relationsOf(chara) {
    return (local(chara, "relationships") || []).map((obj) => {
      const who = Object.keys(obj)[0];
      return { who, text: clean(obj[who]) };
    });
  }

  // variants are stored as [{ id: "label" }, ...]
  function variantsOf(chara) {
    return (local(chara, "variant") || []).map((obj) => {
      const id = Object.keys(obj)[0];
      return { id, label: clean(obj[id]) };
    });
  }

  function relHtml(rel) {
    const other = charaOf(rel.who);
    const name = charaName(rel.who);
    const swatch = other
      ? `<button type="button" class="splat-rel-swatch" style="--rel:${other.color}" data-goto="${escapeHtml(rel.who)}" aria-label="${escapeHtml(siteText("modal.open", { name }))}">${escapeHtml(name[0])}</button>`
      : `<span class="splat-rel-swatch">${escapeHtml(name[0])}</span>`;
    return `
      <div class="splat-rel">
        ${swatch}
        <div>
          <span class="splat-rel-who">${escapeHtml(name)}</span>
          <p>${linkLore(escapeHtml(rel.text))}</p>
        </div>
      </div>
    `;
  }

  // the big portrait. With variants it shows the variant's image, or a
  // striped placeholder if the file isn't there yet
  function portraitHtml(name, chara, variant) {
    if (!variant) return thumbHtml(name, "splat-modal-thumb");
    return `
      <div class="splat-thumb splat-modal-thumb splat-modal-portrait" style="--chara:${chara.color}">
        <!-- placeholder, shown until the image below loads -->
        <div class="splat-portrait-placeholder">
          <span class="splat-thumb-initial">${escapeHtml(name[0])}</span>
        </div>
        <img src="${escapeHtml(splatVariantSrc(name, variant.id))}" alt="${escapeHtml(charaName(name))} — ${escapeHtml(variant.label)}"
             onload="this.parentNode.classList.add('has-img')" onerror="this.remove()">
      </div>
    `;
  }

  function variantButtonsHtml(variants, activeId) {
    if (variants.length < 2) return "";
    return `
      <div class="splat-variants" role="group" aria-label="${escapeHtml(siteText("modal.variants"))}">
        ${variants.map((v) => `
          <button type="button" class="splat-variant-btn" data-variant="${escapeHtml(v.id)}" aria-pressed="${v.id === activeId}">${escapeHtml(v.label || v.id)}</button>
        `).join("")}
      </div>
    `;
  }

  function modalContentHtml(name, chara) {
    // summary is your own text and may contain <br> or <p>, so it goes in
    // as HTML — inside a <div>, because a <p> can't sit inside another <p>
    const summaryText = local(chara, "summary");
    const summary = hasText(summaryText)
      ? `<div class="splat-modal-summary">${paragraphsHtml(summaryText)}</div>`
      : `<p class="splat-modal-empty">${escapeHtml(siteText("modal.noSummary"))}</p>`;

    // notes can be folded away; they start open, and fitNotes() folds them
    // if the profile is too long to fit without scrolling
    const notesList = local(chara, "notes") || [];
    const notes = notesList.length ? `
      <section class="splat-modal-notes">
        <h4 class="splat-modal-label">
          <button type="button" class="splat-notes-toggle" aria-expanded="true">
            <span class="splat-notes-chev" aria-hidden="true"></span>${escapeHtml(siteText("modal.notes"))}<span class="splat-notes-count">${notesList.length}</span>
          </button>
        </h4>
        <div class="splat-notes-body"><div class="splat-notes-inner">
          <ul>${notesList.map((n) => `<li>${linkLore(escapeHtml(clean(n)))}</li>`).join("")}</ul>
        </div></div>
      </section>` : "";

    const rels = relationsOf(chara);
    const variants = variantsOf(chara);
    const first = variants[0];
    const sub = charaSubName(name);

    // tabs only appear when there are relationships to show
    const tabs = rels.length ? `
      <div class="splat-tabs" role="tablist">
        <button type="button" class="splat-tab" role="tab" data-tab="intro" aria-selected="true">${escapeHtml(siteText("modal.tab.intro"))}</button>
        <button type="button" class="splat-tab" role="tab" data-tab="rel" aria-selected="false">${escapeHtml(siteText("modal.tab.rel"))}<span class="splat-tab-count">${rels.length}</span></button>
      </div>` : "";

    const relPanel = rels.length ? `
      <div class="splat-tab-panel" data-panel="rel" role="tabpanel" hidden>
        <div class="splat-rel-list">${rels.map(relHtml).join("")}</div>
      </div>` : "";

    return `
      <div class="splat-modal-hero">
        <div class="splat-modal-side">
          <div class="splat-portrait-slot">${portraitHtml(name, chara, first)}</div>
          ${variantButtonsHtml(variants, first && first.id)}
        </div>
        <div class="splat-modal-hero-text">
          <div class="splat-modal-head">
            <h3 class="splat-modal-name">${escapeHtml(charaName(name))}${sub ? `<small>${escapeHtml(sub)}</small>` : ""}</h3>
            ${tabs}
          </div>
          <div class="splat-tab-panel" data-panel="intro" role="tabpanel">
            ${summary}
            ${notes}
          </div>
          ${relPanel}
        </div>
      </div>
    `;
  }

  // ---------------- notes folding ----------------
  function setNotesFolded(section, folded) {
    section.classList.toggle("is-folded", folded);
    const btn = section.querySelector(".splat-notes-toggle");
    if (btn) btn.setAttribute("aria-expanded", String(!folded));
  }
  // after a profile is on screen: fold its notes if the profile scrolls
  // (no slide animation for this first fold). Not on phones — the profile
  // always scrolls there anyway, so folding wouldn't help.
  const PHONE_LAYOUT = window.matchMedia("(max-width: 680px)"); // same width as the CSS phone layout
  function fitNotes(scroller) {
    if (PHONE_LAYOUT.matches) return;
    const section = scroller.querySelector(".splat-modal-notes");
    if (!section || scroller.scrollHeight <= scroller.clientHeight) return;
    section.classList.add("no-anim");
    setNotesFolded(section, true);
    requestAnimationFrame(() => section.classList.remove("no-anim"));
  }

  // ---------------- modal ----------------

  // set while a modal is open, so a language switch can refresh it
  let refreshOpenModal = null;
  // set while a character modal is open, so a lore modal can switch it
  let openChara = null;

  // true if this backdrop is the top-most open modal (Esc closes only that one)
  function isTopModal(backdrop) {
    const open = document.querySelectorAll(".splat-modal-backdrop:not(.is-closing)");
    return open[open.length - 1] === backdrop;
  }

  // sourceCard = the grid card that was clicked; it keeps its ink
  // filled (.is-open in CSS) until this modal closes
  function openCharaModal(name, sourceCard) {
    if (!SPLAT_CHARA_COMMON_DATA[name]) return;
    if (sourceCard) sourceCard.classList.add("is-open");

    const backdrop = document.createElement("div");
    backdrop.className = "splat-modal-backdrop";
    backdrop.innerHTML = `
      <div class="splat-modal" role="dialog" aria-modal="true">
        <button class="splat-modal-close" type="button">&times;</button>
        <div class="splat-modal-scroll"></div>
      </div>
    `;
    const modal = backdrop.querySelector(".splat-modal");
    const scroller = backdrop.querySelector(".splat-modal-scroll");
    const closeBtn = backdrop.querySelector(".splat-modal-close");
    let currentId = name;

    // fill (or refill) the modal with a character — used again when a
    // relationship square is clicked, to jump to that character
    function show(id) {
      const c = charaOf(id);
      if (!c) return;
      currentId = id;
      modal.className = `splat-modal${c.type ? ` splat-modal--${c.type}` : ""}`;
      modal.style.setProperty("--chara", c.color);
      modal.dataset.id = id;
      // collab / npc ribbon text for the modal's corner (see CSS)
      if (c.type) modal.dataset.ribbon = siteText("ribbon." + c.type);
      else delete modal.dataset.ribbon;
      modal.setAttribute("aria-label", charaName(id));
      closeBtn.setAttribute("aria-label", siteText("modal.close"));
      scroller.innerHTML = modalContentHtml(id, c);
      scroller.scrollTop = 0;
      requestAnimationFrame(() => fitNotes(scroller));
    }

    // play the closing animation (.is-closing in CSS), then remove
    let closing = false;
    function close() {
      if (closing) return;
      closing = true;
      refreshOpenModal = null;
      openChara = null;
      if (sourceCard) sourceCard.classList.remove("is-open"); // ink drains as the modal fades
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
      if (e.key === "Escape" && isTopModal(backdrop)) close();
    }

    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) return close();

      // notes header -> fold / unfold the notes
      const notesBtn = e.target.closest(".splat-notes-toggle");
      if (notesBtn) {
        const section = notesBtn.closest(".splat-modal-notes");
        return setNotesFolded(section, !section.classList.contains("is-folded"));
      }

      // lore link in the text -> open the lore modal on top
      const lore = e.target.closest("[data-lore]");
      if (lore) return openLoreModal(lore.dataset.lore, lore);

      // relationship square -> jump to that character
      const goto = e.target.closest("[data-goto]");
      if (goto) return show(goto.dataset.goto);

      // tab switch
      const tab = e.target.closest(".splat-tab");
      if (tab) {
        modal.querySelectorAll(".splat-tab").forEach((t) => t.setAttribute("aria-selected", t === tab));
        modal.querySelectorAll("[data-panel]").forEach((p) => { p.hidden = p.dataset.panel !== tab.dataset.tab; });
        return;
      }

      // variant switch -> swap the portrait
      const vbtn = e.target.closest(".splat-variant-btn");
      if (vbtn) {
        const id = modal.dataset.id;
        const chara = charaOf(id);
        const variant = variantsOf(chara).find((v) => v.id === vbtn.dataset.variant);
        modal.querySelector(".splat-portrait-slot").innerHTML = portraitHtml(id, chara, variant);
        modal.querySelectorAll(".splat-variant-btn").forEach((b) => b.setAttribute("aria-pressed", b === vbtn));
      }
    });
    closeBtn.addEventListener("click", close);
    document.addEventListener("keydown", onKey);

    refreshOpenModal = () => show(currentId);
    openChara = { show };
    show(name);
    lockScroll();
    document.body.appendChild(backdrop);
    closeBtn.focus();
  }

  // ---------------- lore modal ----------------

  let refreshLoreModal = null;

  // source = the link or group title that was clicked; it keeps its
  // hover look (.is-open in CSS) until this lore modal closes
  function openLoreModal(ref, source) {
    const firstKey = findLoreKey(ref);
    if (!firstKey) return;
    if (source) source.classList.add("is-open");

    const backdrop = document.createElement("div");
    backdrop.className = "splat-modal-backdrop splat-lore-backdrop";
    backdrop.innerHTML = `
      <div class="splat-modal splat-lore" role="dialog" aria-modal="true">
        <button class="splat-modal-close" type="button">&times;</button>
        <div class="splat-modal-scroll"></div>
      </div>
    `;
    const modal = backdrop.querySelector(".splat-lore");
    const scroller = backdrop.querySelector(".splat-modal-scroll");
    const closeBtn = backdrop.querySelector(".splat-modal-close");
    let currentKey = firstKey;

    function show(key) {
      const entry = loreOf(key);
      if (!entry) return;
      currentKey = key;
      modal.style.setProperty("--lore", entry.color || "#7c9473");
      modal.setAttribute("aria-label", loreName(key));
      modal.dataset.tab = siteText("lore.label"); // the folder tab (CSS reads data-tab)
      closeBtn.setAttribute("aria-label", siteText("modal.close"));
      scroller.innerHTML = loreContentHtml(key, entry);
      scroller.scrollTop = 0;
    }

    let closing = false;
    function close() {
      if (closing) return;
      closing = true;
      refreshLoreModal = null;
      if (source) source.classList.remove("is-open"); // un-highlight as the lore closes
      document.removeEventListener("keydown", onKey);
      unlockScroll();
      backdrop.classList.add("is-closing");
      const remove = () => backdrop.remove();
      backdrop.addEventListener("animationend", (e) => { if (e.target === backdrop) remove(); });
      window.setTimeout(remove, 400);
    }
    function onKey(e) {
      if (e.key === "Escape" && isTopModal(backdrop)) close();
    }

    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) return close();

      // a lore link inside lore text -> switch to that entry
      const lore = e.target.closest("[data-lore]");
      if (lore) return show(findLoreKey(lore.dataset.lore) || currentKey);

      // a member chip -> show that character (in the open character
      // modal if there is one, otherwise open a new one)
      const member = e.target.closest("[data-member]");
      if (member) {
        const name = member.dataset.member;
        close();
        if (openChara) openChara.show(name);
        else openCharaModal(name);
      }
    });
    closeBtn.addEventListener("click", close);
    document.addEventListener("keydown", onKey);

    refreshLoreModal = () => show(currentKey);
    show(firstKey);
    lockScroll();
    document.body.appendChild(backdrop);
    closeBtn.focus();
  }

  function loreContentHtml(key, entry) {
    const sub = loreSubName(key);
    const summaryText = local(entry, "summary");
    const summary = hasText(summaryText)
      ? `<div class="splat-lore-body">${paragraphsHtml(summaryText)}</div>`
      : `<p class="splat-modal-empty">${escapeHtml(siteText("lore.empty"))}</p>`;

    // groups that point at this entry -> list their members
    const members = [];
    let grp = null;   // the group this entry belongs to (for its label and roles)
    Object.keys(SPLAT_GROUP).forEach((gk) => {
      if (groupLoreKey(SPLAT_GROUP[gk]) !== key) return;
      if (!grp) grp = SPLAT_GROUP[gk];
      membersOf(gk).forEach((n) => { if (n && !members.includes(n)) members.push(n); });
    });
    const label = siteText(grp && grp.large_group ? "lore.membersInclude" : "lore.members"); // large_group: true -> 包含成員
    // role keys -> words in the current language ("captain" -> Captain / 隊長).
    // A key that isn't in data/lang.js is shown exactly as written.
    const roleWord = (k) => { const w = siteText("role." + k); return w === "role." + k ? k : w; };
    const roleOf = (n) => {
      const r = (grp && grp.roles && grp.roles[n]) || (grp && grp.defaultRole) || "member";
      return [].concat(r).map(roleWord).join(siteText("role.and"));
    };
    const memberHtml = members.length ? `
      <section>
        <h4 class="splat-modal-label">${escapeHtml(label)}</h4>
        <div class="splat-lore-members">
          ${members.map((n) => `
            <button type="button" class="splat-lore-member" data-member="${escapeHtml(n)}" style="--rel:${SPLAT_CHARA_COMMON_DATA[n].color}">
              <span class="splat-lore-member-dot" aria-hidden="true"></span>
              <span class="splat-lore-member-name">${escapeHtml(charaName(n))}</span>
              <span class="splat-lore-role">${escapeHtml(roleOf(n))}</span>
            </button>`).join("")}
        </div>
      </section>` : "";

    return `
      <header class="splat-lore-head">
        <h3 class="splat-lore-title">${escapeHtml(loreName(key))}</h3>
        <span class="splat-lore-eyebrow">${escapeHtml(local(entry, "type") || siteText("lore.label"))}</span>
        ${sub && sub !== loreName(key) ? `<p class="splat-lore-sub">${escapeHtml(sub)}</p>` : ""}
      </header>
      ${summary}
      ${memberHtml}
    `;
  }

  // ---------------- language switch ----------------

  function refreshText() {
    document.title = siteText("splat.pageTitle");
  }

  document.addEventListener("sitelangchange", () => {
    refreshText();
    setView(currentView, false);
    if (refreshOpenModal) refreshOpenModal();
    if (refreshLoreModal) refreshLoreModal();
  });

  refreshText();
  setView("group");
});
