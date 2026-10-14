// ===========================================================
// Site language — interface text for every language.
//
// SITE-LEVEL text only (buttons, tabs, headings, labels...).
// Character content (summaries, notes, relationships) lives in
// each character's data file instead — see data/oc-splatoon.js.
//
// HOW TO USE
//   • In HTML:  <span data-i18n="view.group"></span>
//               (the text is filled in automatically)
//   • In JS:    siteText("view.group")
//
// ADD A NEW STRING:   add the same key to every language below.
//                     If a key is missing in one language, the
//                     default language's text is used instead.
// ADD A NEW LANGUAGE: add it to SITE_LANGS, then add a block
//                     to SITE_STRINGS with the same keys.
// ===========================================================

// languages shown in the switcher, in this order (code: button label)
const SITE_LANGS = {
  en: "EN",
  zh: "中文"
};

// used when nothing has been chosen yet and the visitor's browser
// isn't set to one of the languages above
const SITE_DEFAULT_LANG = "en";

const SITE_STRINGS = {
  en: {
    // shared
    "nav.back":            "← back to index",
    "lang.label":          "Language",

    // Splatoon page
    "splat.pageTitle":     "Hazy's Splatverse Stuff (WIP)",
    "splat.title":         "Hazy's Splatverse Stuff (WIP)",
    "view.label":          "View",
    "view.group":           "By group",
    "view.all":            "All",
    "group.unaffiliated":   "Other",
    "group.all":            "All Characters",
    "card.reserved":       "TBD",
    "card.reservedLabel":  "Reserved slot",
    "ribbon.collab":       "Collab",
    "ribbon.npc":          "NPC",

    // character modal
    "modal.close":         "Close",
    "modal.tab.intro":     "Profile",
    "modal.tab.rel":       "Relationships",
    "modal.notes":         "Notes",
    "modal.variants":      "Looks",
    "modal.noSummary":     "No profile yet.",
    "modal.open":          "Open {name}"
  },

  zh: {
    // shared
    "nav.back":            "← 回到首頁",
    "lang.label":          "語言",

    // Splatoon page
    "splat.pageTitle":     "Hazy海產屋（施工中）",
    "splat.title":         "Hazy海產屋（施工中）",
    "view.label":          "檢視",
    "view.group":           "依分組",
    "view.all":            "全部",
    "group.unaffiliated":   "未分類",
    "group.all":            "所有角色",
    "card.reserved":       "待補",
    "card.reservedLabel":  "保留位置",
    "ribbon.collab":       "Collab",
    "ribbon.npc":          "NPC",

    // character modal
    "modal.close":         "關閉",
    "modal.tab.intro":     "介紹",
    "modal.tab.rel":       "關係",
    "modal.notes":         "追加筆記",
    "modal.variants":      "造型",
    "modal.noSummary":     "介紹還在施工中…",
    "modal.open":          "開啟{name}"
  }
};
