// ===========================================================
// page-1 app logic. Everything renders from AU_DATA (data.js) —
// there's no per-AU markup baked into the HTML, so adding a new
// AU or section is a data.js edit only.
// ===========================================================

document.addEventListener("DOMContentLoaded", () => {
  const menuList = document.getElementById("au-ticket-list");
  const mainPanel = document.getElementById("au-main");

  const OVERVIEW_ID = "overview";

  let activeId = OVERVIEW_ID;
  let menuWasDragging = false;

  // ---------------- shared helpers ----------------

  function characterCount(au) {
    const charSection = au.sections.find((s) => s.type === "characters");
    return charSection ? charSection.items.length : 0;
  }

  // every unique character across all AUs, with the list of AUs
  // (and their role/bio in that AU) they appear in
  function getAllCharacters() {
    const map = new Map();
    AU_DATA.forEach((au) => {
      const charSection = au.sections.find((s) => s.type === "characters");
      if (!charSection) return;
      charSection.items.forEach((char) => {
        if (!map.has(char.name)) map.set(char.name, []);
        map.get(char.name).push({
          auId: au.id,
          auLabel: au.menuLabel,
          accent: au.accent,
          role: char.role,
          bio: char.bio,
        });
      });
    });
    return Array.from(map.entries()).map(([name, appearances]) => ({ name, appearances }));
  }

  // ---------------- menu rendering ----------------

  function buildTicketEl({ id, menuLabel, subtitle, accent, count, countLabel, extraClass }) {
    const ticket = document.createElement("button");
    ticket.className = "au-ticket" + (extraClass ? " " + extraClass : "") + (id === activeId ? " active" : "");
    ticket.style.setProperty("--accent", accent);
    ticket.dataset.auId = id;

    ticket.innerHTML = `
      <span class="au-ticket-notch-top"></span>
      <span class="au-ticket-notch-bottom"></span>
      <span class="au-ticket-main">
        <span class="au-ticket-name">${menuLabel}</span>
        <span class="au-ticket-subtitle">${subtitle || ""}</span>
      </span>
      <span class="au-ticket-stub">
        <span class="au-ticket-stub-count">${count}</span>
        <span class="au-ticket-stub-label">${countLabel || "OCs"}</span>
      </span>
    `;

    ticket.addEventListener("click", () => {
      if (menuWasDragging) return; // ignore the click that fires right after a drag
      selectAU(id);
    });

    return ticket;
  }

  function renderMenu() {
    menuList.innerHTML = "";

    menuList.appendChild(
      buildTicketEl({
        id: OVERVIEW_ID,
        menuLabel: "全角色總覽",
        subtitle: "All Characters",
        accent: "var(--ink-soft)",
        count: getAllCharacters().length,
        countLabel: "Total",
        extraClass: "au-ticket-overview",
      })
    );

    const divider = document.createElement("div");
    divider.className = "au-menu-divider";
    menuList.appendChild(divider);

    AU_DATA.forEach((au) => {
      menuList.appendChild(
        buildTicketEl({
          id: au.id,
          menuLabel: au.menuLabel,
          subtitle: au.subtitle,
          accent: au.accent,
          count: characterCount(au),
        })
      );
    });
  }

  function selectAU(id) {
    if (id === activeId) return;
    activeId = id;
    menuList.querySelectorAll(".au-ticket").forEach((el) => {
      el.classList.toggle("active", el.dataset.auId === id);
    });
    renderMain(id);
  }

  // ---------------- main panel rendering ----------------

  const SECTION_RENDERERS = {
    summary: renderSummarySection,
    characters: renderCharactersSection,
    artworks: renderArtworksSection,
    storyBits: renderStoryBitsSection,
    generic: renderGenericSection,
  };

  function renderMain(id) {
    mainPanel.innerHTML = "";

    if (id === OVERVIEW_ID) {
      mainPanel.style.setProperty("--au-accent", "var(--ink-soft)");

      const wrap = document.createElement("section");
      wrap.className = "au-section";
      wrap.style.animationDelay = "0s";

      const grid = document.createElement("div");
      grid.className = "au-character-grid";

      getAllCharacters().forEach((charObj) => {
        const card = document.createElement("button");
        card.className = "au-character-card";
        card.innerHTML = `
          <span class="au-character-avatar">${charObj.name[0]}</span>
          <span class="au-character-info">
            <span class="au-character-name">${charObj.name}</span>
          </span>
        `;
        card.addEventListener("click", () => openOverviewModal(charObj));
        grid.appendChild(card);
      });

      wrap.appendChild(grid);
      mainPanel.appendChild(wrap);
      mainPanel.scrollTop = 0;
      return;
    }

    const au = AU_DATA.find((a) => a.id === id);
    if (!au) return;

    mainPanel.style.setProperty("--au-accent", au.accent);

    au.sections.forEach((section, i) => {
      const renderFn = SECTION_RENDERERS[section.type] || renderGenericSection;
      const el = renderFn(section, au);
      el.style.animationDelay = `${Math.min(i, 6) * 0.06}s`;
      mainPanel.appendChild(el);
    });

    mainPanel.scrollTop = 0;
  }

  function sectionWrapper(title) {
    const wrap = document.createElement("section");
    wrap.className = "au-section";
    if (title) {
      const h = document.createElement("h3");
      h.className = "au-section-title";
      h.textContent = title;
      wrap.appendChild(h);
    }
    return wrap;
  }

  function renderSummarySection(section) {
    const wrap = sectionWrapper(section.title);
    const panel = document.createElement("div");
    panel.className = "au-summary-panel";
    panel.innerHTML = `<p>${section.text || ""}</p>`;
    wrap.appendChild(panel);
    return wrap;
  }

  function renderCharactersSection(section, au) {
    const wrap = sectionWrapper(section.title);
    const grid = document.createElement("div");
    grid.className = "au-character-grid";

    section.items.forEach((char) => {
      const card = document.createElement("button");
      card.className = "au-character-card";
      card.innerHTML = `
        <span class="au-character-avatar">${(char.name || "?")[0]}</span>
        <span class="au-character-info">
          <span class="au-character-name">${char.name}</span>
        </span>
      `;
      card.addEventListener("click", () => openCharacterModal(char, au));
      grid.appendChild(card);
    });

    wrap.appendChild(grid);
    return wrap;
  }

  function renderArtworksSection(section) {
    const wrap = sectionWrapper(section.title);
    const grid = document.createElement("div");
    grid.className = "au-artwork-grid";

    section.items.forEach((art) => {
      const tile = document.createElement("div");
      tile.className = "au-artwork-tile";
      tile.innerHTML = `<span class="au-artwork-caption">${art.caption || ""}</span>`;
      grid.appendChild(tile);
    });

    wrap.appendChild(grid);
    return wrap;
  }

  function renderStoryBitsSection(section, au) {
    const wrap = sectionWrapper(section.title);
    const grid = document.createElement("div");
    grid.className = "au-card-list";

    section.items.forEach((bit) => {
      const card = document.createElement("button");
      card.className = "au-story-card";
      card.innerHTML = `
        ${bit.image ? `<span class="au-story-thumb"></span>` : ""}
        <span class="au-story-content">
          <span class="au-story-heading">${bit.heading || ""}</span>
          <span class="au-story-text">${bit.text || ""}</span>
        </span>
      `;
      card.addEventListener("click", () => openStoryBitModal(bit, au));
      grid.appendChild(card);
    });

    wrap.appendChild(grid);
    return wrap;
  }

  // fallback for any section type not registered above — lets you
  // add new kinds of sections in data.js with zero JS changes
  function renderGenericSection(section, au) {
    return renderStoryBitsSection(section, au);
  }

  // ---------------- character modal ----------------

  function openCharacterModal(char, au) {
    const backdrop = document.createElement("div");
    backdrop.className = "au-modal-backdrop";
    backdrop.innerHTML = `
      <div class="au-modal" style="--au-accent:${au.accent}">
        <button class="au-modal-close" aria-label="Close">&times;</button>
        <div class="au-modal-avatar">${(char.name || "?")[0]}</div>
        <div class="au-modal-body">
          <div class="au-modal-name">${char.name}</div>
          <div class="au-modal-role">${au.menuLabel}</div>
          <p class="au-modal-bio">${char.bio || "No bio yet."}</p>
        </div>
      </div>
    `;

    function close() {
      backdrop.remove();
      document.removeEventListener("keydown", onKey);
    }
    function onKey(e) {
      if (e.key === "Escape") close();
    }

    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) close();
    });
    backdrop.querySelector(".au-modal-close").addEventListener("click", close);
    document.addEventListener("keydown", onKey);

    document.body.appendChild(backdrop);
  }

  function openOverviewModal(charObj) {
    const backdrop = document.createElement("div");
    backdrop.className = "au-modal-backdrop";

    const appearancesHtml = charObj.appearances
      .map(
        (a) => `
        <div class="au-modal-appearance" style="--au-accent:${a.accent}">
          <span class="au-modal-appearance-au">${a.auLabel}</span>
          ${a.bio ? `<p>${a.bio}</p>` : ""}
        </div>
      `
      )
      .join("");

    backdrop.innerHTML = `
      <div class="au-modal" style="--au-accent: var(--ink-soft)">
        <button class="au-modal-close" aria-label="Close">&times;</button>
        <div class="au-modal-avatar">${charObj.name[0]}</div>
        <div class="au-modal-body">
          <div class="au-modal-name">${charObj.name}</div>
          <div class="au-modal-role">Appears in ${charObj.appearances.length} AU${charObj.appearances.length > 1 ? "s" : ""}</div>
          <div class="au-modal-appearances">${appearancesHtml}</div>
        </div>
      </div>
    `;

    function close() {
      backdrop.remove();
      document.removeEventListener("keydown", onKey);
    }
    function onKey(e) {
      if (e.key === "Escape") close();
    }

    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) close();
    });
    backdrop.querySelector(".au-modal-close").addEventListener("click", close);
    document.addEventListener("keydown", onKey);

    document.body.appendChild(backdrop);
  }

  function openStoryBitModal(bit, au) {
    const backdrop = document.createElement("div");
    backdrop.className = "au-modal-backdrop";
    const accent = au ? au.accent : "var(--c1)";

    backdrop.innerHTML = `
      <div class="au-modal" style="--au-accent:${accent}">
        <button class="au-modal-close" aria-label="Close">&times;</button>
        ${bit.image ? `<div class="au-modal-avatar au-modal-thumb-large"></div>` : ""}
        <div class="au-modal-body">
          <div class="au-modal-name">${bit.heading || ""}</div>
          ${au ? `<div class="au-modal-role">${au.menuLabel}</div>` : ""}
          <p class="au-modal-bio">${bit.detail || bit.text || ""}</p>
        </div>
      </div>
    `;

    function close() {
      backdrop.remove();
      document.removeEventListener("keydown", onKey);
    }
    function onKey(e) {
      if (e.key === "Escape") close();
    }

    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) close();
    });
    backdrop.querySelector(".au-modal-close").addEventListener("click", close);
    document.addEventListener("keydown", onKey);

    document.body.appendChild(backdrop);
  }

  (function enableDragScroll(container) {
    let isDown = false;
    let startY = 0;
    let startScrollTop = 0;
    let moved = false;
    let capturedPointerId = null;

    container.addEventListener("pointerdown", (e) => {
      isDown = true;
      moved = false;
      startY = e.clientY;
      startScrollTop = container.scrollTop;
      // deliberately NOT capturing the pointer yet — capturing here would
      // reroute the eventual click event to this container instead of the
      // ticket button underneath, silently breaking every ticket click.
    });

    container.addEventListener("pointermove", (e) => {
      if (!isDown) return;
      const dy = e.clientY - startY;

      if (!moved && Math.abs(dy) > 4) {
        moved = true;
        container.classList.add("dragging");
        // only now, once we know this is a real drag and not a click,
        // capture the pointer so dragging stays smooth even if the
        // cursor leaves the container.
        capturedPointerId = e.pointerId;
        container.setPointerCapture(capturedPointerId);
      }

      if (moved) {
        container.scrollTop = startScrollTop - dy;
      }
    });

    function endDrag() {
      if (!isDown) return;
      isDown = false;
      container.classList.remove("dragging");
      if (capturedPointerId !== null) {
        try { container.releasePointerCapture(capturedPointerId); } catch (err) {}
        capturedPointerId = null;
      }
      // let the click handler know a real drag happened, so it can
      // ignore the click that fires right after releasing the mouse
      menuWasDragging = moved;
      window.setTimeout(() => {
        menuWasDragging = false;
      }, 0);
    }

    container.addEventListener("pointerup", endDrag);
    container.addEventListener("pointercancel", endDrag);
    container.addEventListener("pointerleave", () => {
      if (isDown && !moved) endDrag();
    });
  })(menuList.closest(".au-menu"));

  // ---------------- init ----------------

  renderMenu();
  renderMain(activeId);
});
