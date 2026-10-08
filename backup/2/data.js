// ===========================================================
// AU_DATA — everything the page-1 AU browser renders comes from
// this one object. To add a new AU, copy an existing block and
// change the values. To add a new section to an AU, push a new
// object into that AU's `sections` array — see the guide below.
//
// ---- AU shape ----
// {
//   id:        "unique-slug",       // used internally, keep it url-safe
//   menuLabel: "Name shown in the left ticket menu",
//   subtitle:  "Short tag under the name on the ticket",
//   accent:    "var(--c1)",         // any CSS color, drives the whole AU's theme
//   sections: [ ...see below... ]
// }
//
// ---- section types ----
// Every AU should start with a "summary" section and a
// "characters" section — everything after that is optional and
// can be any of the types below, in any order, repeated if you like.
//
//   { type: "summary", title: "...", text: "..." }
//
//   { type: "characters", title: "...", items: [
//       { name, role, bio }, ...
//   ]}
//
//   { type: "artworks", title: "...", items: [
//       { caption }, ...   // placeholder tiles for now — swap in real art later
//   ]}
//
//   { type: "storyBits", title: "...", items: [
//       { heading, text, detail, image }, ...
//   ]}
//   ^ `text` is the short teaser shown on the card. `detail` is the
//     longer lore shown when the card is clicked (falls back to
//     `text` if omitted). Set `image: true` to show a thumbnail box
//     on the card — swap in a real image later.
//
//   { type: "generic", title: "...", items: [
//       { heading, text, detail, image }, ...
//   ]}
//   ^ use "generic" for any section type that doesn't exist yet
//     (locations, relationships, timeline, whatever) — it renders
//     exactly like storyBits (clickable cards, optional thumbnail)
//     with zero extra code needed.
// ===========================================================

const AU_DATA = [
  {
    id: "modern-mafia",
    menuLabel: "現代＋Mafia",
    subtitle: "Modern AU",
    accent: "var(--c1)",
    sections: [
      {
        type: "summary",
        title: "AU Summary",
        text: "A present-day crime-family AU. Power, loyalty, and old grudges run the show — replace this with your real premise, tone, and any ground rules for the universe."
      },
      {
        type: "characters",
        title: "Characters",
        items: [
          { name: "Damien", role: "Don", bio: "Head of the family. Calm in a room full of shouting, which is exactly why people listen." },
          { name: "Viktor", role: "Enforcer", bio: "Handles the parts of the business nobody wants written down." },
          { name: "Reynold", role: "Family Lawyer", bio: "Keeps everything technically legal. Mostly." },
          { name: "Angelica", role: "Informant", bio: "Works both sides of the street and hasn't picked a favorite yet." },
          { name: "Camille", role: "Heir", bio: "Being groomed for the top job. Not sure she wants it." }
        ]
      },
      {
        type: "artworks",
        title: "Artwork",
        items: [
          { caption: "Family dinner, tension included" },
          { caption: "Damien — formal portrait" },
          { caption: "Rooftop meeting, night" },
          { caption: "Camille, off-duty" }
        ]
      },
      {
        type: "storyBits",
        title: "Story Bits",
        items: [
          {
            heading: "The Ledger",
            text: "Somewhere in the house is a second set of books. Only two people know where.",
            detail: "Somewhere in the house is a second set of books. Only two people know where. Damien keeps the real numbers off any system that could be subpoenaed — no laptop, no cloud, just a hand-written ledger that's been rewritten and hidden a dozen times over the years. The last person who tried to find it disappeared for a week, then came back with a very different attitude about asking questions.",
            image: true
          },
          { heading: "Old Rule", text: "Family dinner on Sundays, no exceptions, no business talk until dessert." }
        ]
      }
    ]
  },

  {
    id: "pokemon-trainer",
    menuLabel: "寶可夢訓練家",
    subtitle: "Pokémon AU",
    accent: "var(--c2)",
    sections: [
      {
        type: "summary",
        title: "AU Summary",
        text: "A classic trainer-journey AU — gyms, rivals, and a region worth exploring. Swap this in for your actual region, rules, and stakes."
      },
      {
        type: "characters",
        title: "Characters",
        items: [
          { name: "Leon", role: "Trainer", bio: "Left home with one partner and a bad map. Somehow still on schedule." },
          { name: "Sophie", role: "Rival", bio: "Always one gym badge ahead, and will absolutely mention it." },
          { name: "Zack", role: "Gym Leader", bio: "Runs the third gym. Takes losing worse than winning." },
          { name: "Molly", role: "Champion", bio: "Undefeated so far. Quietly worried that's about to change." }
        ]
      },
      {
        type: "artworks",
        title: "Artwork",
        items: [
          { caption: "Leon and partner, route 1" },
          { caption: "Gym battle, wide shot" },
          { caption: "Molly's champion portrait" }
        ]
      }
    ]
  },

  {
    id: "pokemon-detective",
    menuLabel: "寶可夢警探隊",
    subtitle: "Pokémon AU",
    accent: "var(--c3)",
    sections: [
      {
        type: "summary",
        title: "AU Summary",
        text: "A detective-duo spin on the Pokémon world — small-town cases, bigger conspiracy underneath. Fill in the actual case that kicks things off."
      },
      {
        type: "characters",
        title: "Characters",
        items: [
          { name: "Gerald", role: "Detective", bio: "By-the-book, mostly. The exceptions are where the story happens." },
          { name: "Edwin", role: "Partner", bio: "Handles the half of the job that isn't paperwork." }
        ]
      }
    ]
  },

  {
    id: "pokemon-ranch",
    menuLabel: "寶可夢牧場",
    subtitle: "Pokémon AU",
    accent: "var(--c4)",
    sections: [
      {
        type: "summary",
        title: "AU Summary",
        text: "A slower-paced AU set on a ranch — daily chores, seasonal life, and the Pokémon that call it home. Good place for softer, low-stakes stories."
      },
      {
        type: "characters",
        title: "Characters",
        items: [
          { name: "Sally", role: "Rancher", bio: "Inherited the place and never left. Knows every animal by name." },
          { name: "Molly", role: "Breeder", bio: "Visits every season for the hatching. Has opinions about egg groups." },
          { name: "Yvonne", role: "Vet", bio: "Drives out from town twice a week, more if someone's foaling." }
        ]
      },
      {
        type: "storyBits",
        title: "Story Bits",
        items: [
          { heading: "The Old Barn", text: "Condemned twice, rebuilt twice. Sally refuses to explain why it matters so much." }
        ]
      }
    ]
  },

  {
    id: "ace-attorney",
    menuLabel: "逆轉裁判",
    subtitle: "Courtroom AU",
    accent: "var(--c5)",
    sections: [
      {
        type: "summary",
        title: "AU Summary",
        text: "A courtroom-drama AU in the Ace Attorney mold — objections, contradictions, and a verdict on the line. Set your case, your stakes, your twist."
      },
      {
        type: "characters",
        title: "Characters",
        items: [
          { name: "Camille", role: "Defense Attorney", bio: "Loses sleep, not cases. So far." },
          { name: "Naoki", role: "Prosecutor", bio: "Camille's opposite number and, off the clock, her oldest friend." },
          { name: "Lucas", role: "Detective", bio: "Does the legwork the lawyers take credit for." },
          { name: "Gerald", role: "Judge", bio: "Has heard every excuse in the book and remains unimpressed by all of them." }
        ]
      },
      {
        type: "artworks",
        title: "Artwork",
        items: [
          { caption: "Camille, mid-objection" },
          { caption: "Courtroom, wide shot" }
        ]
      },
      {
        type: "storyBits",
        title: "Story Bits",
        items: [
          {
            heading: "The First Case",
            text: "Camille and Naoki met as opposing counsel on their very first trial. Neither remembers who won.",
            detail: "Camille and Naoki met as opposing counsel on their very first trial. Neither remembers who won — the case file's been sealed for years, and both of them tell a slightly different story about that verdict whenever it comes up. What's not in dispute: they've been unable to stop needling each other about it ever since.",
            image: true
          }
        ]
      }
    ]
  },

  {
    id: "isekai-reincarnation",
    menuLabel: "異世界轉生",
    subtitle: "Isekai AU",
    accent: "var(--c6)",
    sections: [
      {
        type: "summary",
        title: "AU Summary",
        text: "A reincarnated-into-another-world AU. Define the rules of the new world here — magic system, why they were sent, what they remember."
      },
      {
        type: "characters",
        title: "Characters",
        items: [
          { name: "Madlyn", role: "Reincarnated Hero", bio: "Died once already. Trying very hard not to make it a habit." },
          { name: "Scratch", role: "Demon Lord", bio: "Everyone assumes the worst. Madlyn isn't so sure anymore." },
          { name: "Viktor", role: "Sage", bio: "Has lived in this world for three hundred years and counting." }
        ]
      },
      {
        type: "storyBits",
        title: "Story Bits",
        items: [
          { heading: "The Summoning", text: "Madlyn wasn't supposed to be the one who came through the circle." },
          { heading: "Old Magic", text: "Scratch's power runs on something older than the kingdom's records explain." }
        ]
      }
    ]
  },

  {
    id: "parasitic-aristocrat",
    menuLabel: "寄生貴族",
    subtitle: "Fantasy AU",
    accent: "var(--c7)",
    sections: [
      {
        type: "summary",
        title: "AU Summary",
        text: "A body-sharing, parasite-and-host fantasy AU set among nobility. Establish the terms of the arrangement here — willing, forced, or somewhere messier."
      },
      {
        type: "characters",
        title: "Characters",
        items: [
          { name: "Yvonne", role: "Host Noble", bio: "Inherited the title. Didn't know what came with it." },
          { name: "Gloria", role: "Parasite", bio: "Older than the house Yvonne was born into. Not that anyone else knows." }
        ]
      }
    ]
  },

  {
    id: "chess-player",
    menuLabel: "西洋棋手",
    subtitle: "Competition AU",
    accent: "var(--c8)",
    sections: [
      {
        type: "summary",
        title: "AU Summary",
        text: "A competitive chess-world AU — tournaments, rivalries, and the kind of quiet tension that only exists across a board. Fill in the circuit and the stakes."
      },
      {
        type: "characters",
        title: "Characters",
        items: [
          { name: "Edwin", role: "Grandmaster", bio: "Hasn't lost a tournament in two years. Losing sleep over the one still to come." },
          { name: "Sophie", role: "Rising Star", bio: "Nineteen and already ranked above people twice her age." },
          { name: "Reynold", role: "Coach", bio: "Used to play. Says he doesn't miss it. Everyone knows that's a lie." }
        ]
      },
      {
        type: "artworks",
        title: "Artwork",
        items: [
          { caption: "Edwin, mid-match" },
          { caption: "Tournament hall, overhead" }
        ]
      }
    ]
  },

  {
    id: "dragon-guild",
    menuLabel: "龍公會",
    subtitle: "Fantasy AU",
    accent: "var(--c9)",
    sections: [
      {
        type: "summary",
        title: "AU Summary",
        text: "A guild-based high-fantasy AU built around dragons — contracts, territory, and the politics of who gets to bond with what. Set your world's rules here."
      },
      {
        type: "characters",
        title: "Characters",
        items: [
          { name: "Lucas", role: "Guild Master", bio: "Runs the guild like a business, mostly because the alternative is chaos." },
          { name: "Zack", role: "Dragon Knight", bio: "Bonded young. His dragon is older than the guild itself." },
          { name: "Damien", role: "Scholar", bio: "Catalogues every contract the guild has ever signed. Trusts none of them." },
          { name: "Naoki", role: "Tamer", bio: "Handles the ones nobody else wants to get close to." }
        ]
      },
      {
        type: "artworks",
        title: "Artwork",
        items: [
          { caption: "Guild hall exterior" },
          { caption: "Zack and partner in flight" },
          { caption: "Contract-signing ceremony" }
        ]
      },
      {
        type: "storyBits",
        title: "Story Bits",
        items: [
          { heading: "The Founding Contract", text: "The guild's very first dragon-bond is still on record. Nobody's allowed to read it." }
        ]
      },
      {
        type: "generic",
        title: "Territories",
        items: [
          { heading: "The Spine", text: "Mountain range along the northern border. Contested hunting rights, minimal oversight." },
          { heading: "Lowmarch", text: "The guild's home territory. Safest place to bond a hatchling." }
        ]
      }
    ]
  },

  {
    id: "secret-agent",
    menuLabel: "特務",
    subtitle: "Spy AU",
    accent: "var(--c10)",
    sections: [
      {
        type: "summary",
        title: "AU Summary",
        text: "An espionage AU — handlers, field agents, and missions that don't officially exist. Fill in the agency, the mission, and who's actually trustworthy."
      },
      {
        type: "characters",
        title: "Characters",
        items: [
          { name: "Angelica", role: "Handler", bio: "Runs three agents at once and remembers all their cover stories perfectly." },
          { name: "Gloria", role: "Field Agent", bio: "Officially retired. Unofficially still gets calls." }
        ]
      },
      {
        type: "storyBits",
        title: "Story Bits",
        items: [
          { heading: "The Last Mission", text: "Gloria's official file ends three years ago. Angelica knows why. She's not telling." }
        ]
      }
    ]
  }
];
