// ===========================================================
// Splatoon OC data — COMMON (shared by every language)
//
// This list is the master roster: a character must be here to
// show up on the page, and the order here is the order of the
// "All" view.
//
//   color   the character's theme color
//   type    optional — "collab" (a friend's character) or
//           "npc" (canon character). Leave it out for your own OCs.
//
// The key ("Blade") is the character id. It is the same in every
// file: data/oc-splatoon-zhtw.js, data/oc-splatoon-en.js, group
// member lists, relationships, and image file names.
// ===========================================================

const SPLAT_CHARA_COMMON_DATA = {
    "Blade"              : { color: "#79db37" },
    "Axel"               : { color: "#ec8f24" },
    "Yoni"               : { color: "#dae723" },
    "Xiu"                : { color: "#0ab6eb" },
    "Edd"                : { color: "#ad3b3b" },
    "Wade"               : { color: "#6135b3" },
    "Hannah"             : { color: "#2528eb" },
    "Lance"              : { color: "#8622c9" },
    "Minerva"            : { color: "#6d211c" },
    "Roy"                : { color: "#56a6a8" },
    "Amy"                : { color: "#5db685" },
    "Elise"              : { color: "#11853d" },
    "Viper"              : { color: "#d44ec9" },
    "Tighe"              : { color: "#10be53" },
    "Candice"            : { color: "#9d73b6" },
    "Maxwell"            : { color: "#96233f" },
    "Dr. Lapis"          : { color: "#180f91" },
    "Betty"              : { color: "#f0d043" },
    "Ollie"              : { color: "#d384c2" },
    "Angelica"           : { color: "#6ec579" },
    "Lucian"             : { color: "#aab41f" },
    "RJ"                 : { color: "#56a6a8" },
    "Damian"             : { color: "#ad3b3b" },
    "Susie"              : { color: "#cacf78" },
    "Scott"              : { color: "#9b9c60" },
    "Zoelle"             : { color: "#303053" },
    "Zarah"              : { color: "#595f1d" },
    "Paul"               : { color: "#1b2e23" },
    "Leon"               : { color: "#aab41f" },
    "Alan"               : { color: "#4ea8a1" },
    "Dorothy"            : { color: "#7e342f" },
    "Ada"                : { color: "#724361" },
    "Father Chelon"      : { color: "#887e23" },
    "Noir"               : { color: "#a8a8a8", type: "collab" },
    "Moyer"              : { color: "#79c2d4", type: "collab" },
    "Mei"                : { color: "#67528a", type: "collab" },
    "Freya"              : { color: "#c75564", type: "collab" },
    "Callie"             : { color: "#e944cd", type: "npc" },
    "Marie"              : { color: "#9ddd4a", type: "npc" },
    "Captain Cuttlefish" : { color: "#b8a378", type: "npc" },
    "DJ Octavio"         : { color: "#9c1b62", type: "npc" },
    "Marina"             : { color: "#29ca87", type: "npc" },
    "Pearl"              : { color: "#e0599a", type: "npc" }
};


// ===========================================================
// GROUPS
//
// Group names: groupName_en (English) / groupName_ch (Chinese).
// A group heading opens a lore page when the group has
// lore: "<lore id>", or when its groupName_en matches a lore id.
//
// GROUP MEMBER LIST (shown in the group's lore modal) — all optional:
//   large_group: true     heading says 包含成員 / Members include
//                (leave it out for 成員 / Members)
//   roles: { "Hannah": "captain", "Amy": "manager" }
//                Role keys come from data/lang.js ("role.captain"…).
//                Two roles: ["leader", "funder"] → Leader & Funder.
//                A key that isn't in lang.js is shown as written.
//   defaultRole: "staff"   role for everyone not listed in roles
//                (leave it out for 成員 / Member)
// Blank names ("") are reserved slots for characters not designed yet.
// ===========================================================

const SPLAT_GROUP = {
        "BBB" : {
            groupName_en: "BBB",
            groupName_ch: "按鈕少年隊",
            members: [
                "Blade","Axel","Yoni","Xiu","Edd"
            ],
            roles: { "Blade": "captain" }
        },
        "RF" : { 
            groupName_en: "Royal Flush",
            groupName_ch: "皇家同花順",
            members: [
                "Hannah","Lance","Minerva","Roy","Amy"
            ],
            roles: { "Hannah": "captain", "Amy": "manager" }
        },
        "New Squidbeak Splatoon" : { 
            groupName_en: "New Squidbeak Splatoon",
            groupName_ch: "新噴嘴小隊",
            members: [
                "Captain Cuttlefish","Callie","Marie","Blade","Axel","Edd","Wade","Elise","Susie"
            ]
        },        
        "OCTA" : { 
            groupName_en: "OCTA",
            groupName_ch: "OCTA",
            members: [
                "Dorothy","Moyer","","","Ada","Mei","Blade","Minerva","Edd","Freya","Pearl"
            ],
            large_group: true,
            roles: { "Dorothy": ["founder"], "Minerva": ["volunteer"], "Edd": ["volunteer"], "Blade": ["volunteer"], "Freya": ["volunteer"], "Pearl": ["benefactor"] }
        },
        "Vector 8 Research Institute" : { 
            groupName_en: "Vector 8 Research Institute",
            groupName_ch: "V8科研中心",
            members: [
                "Viper","Tighe","Candice","Maxwell","Dr. Lapis","Betty","Ollie","Marina","Zoelle","Mei"
            ],
            large_group: true,
            defaultRole: "researcher",
            roles: { "Zoelle": ["intern"], "Mei": ["intern"], "Marina":["stakeholder"] }   
        },
        "Seagrove Scouts" : { 
            groupName_en: "Seagrove Scouts",
            groupName_ch: "海林童子軍團",
            members: [
                "Susie","Zoelle",""
            ]
        },
        "Brine Pool Hotel & Casino" : {
            groupName_en: "Brine Pool Hotel & Casino",
            groupName_ch: "鹽水池賭場酒店",
            members: [
                "Father Chelon", "Leon", "Alan", ""
            ],
            large_group: true,
            defaultRole: "staff",
            roles: { "Father Chelon": "boss" }            
        },        
        "The Acolytes" : { 
            groupName_en: "The Acolytes",
            groupName_ch: "親信使者",
            members: [
                "Angelica", "Lucian", "RJ", "Damian"
            ]            
        },
        "Splatter Club" : { 
            groupName_en: "Splatter Club",
            groupName_ch: "飛濺俱樂部",
            members: [
                "", "Zarah", "Hannah", ""
            ]            
        },
        "EX-Octarians" : { 
            groupName_en: "Ex-Octarians",
            groupName_ch: "前章魚軍團成員",
            members: [
                "DJ Octavio","Marina","Viper","Minerva","Edd","Tighe","Candice","Maxwell","Dr. Lapis","Betty","Ollie","Dorothy","Ada","Lucian","Freya"
            ]
        }
        //,
        // "IKPD" : { 
        //     groupName: "Inkopolis Police Department",
        //     groupName_ch: "IKPD",
        //     members: [
        //         "Lance","Minerva", ""
        //     ]
        // },        
        // "Shopping District" : { 
        //     groupName: "Shopping District",
        //     groupName_ch: "商店街打工仔",
        //     members: [
        //         "Paul","Yoni","Roy","Amy","Leon","Zarah","Scott"
        //     ]
        // }
    };

// ===========================================================
// LORE (shared by every language)
//
// Master list of lore pages: the id (key) is used for [[links]]
// and must match the keys in SPLAT_LORE_DATA_ZHTW / _EN.
//   color   the lore page's theme color
// ===========================================================

const SPLAT_LORE_COMMON_DATA = {
    "BBB"                             : { color: "#79db37" },
    "Royal Flush"                     : { color: "#2528eb" },
    "OCTA"                            : { color: "#633030" },
    "Deepsea Metro Testing Procedure" : { color: "#18b989" },
    "Vector 8 Research Institute"     : { color: "#78998e" },
    "Project Lapis Lazuli"            : { color: "#180f91" },
    "Elite Octoling Soldier"          : { color: "#c23b6e" },
    "Wade's Smallfry"                 : { color: "#40693a" },
    "Inkopolis"                       : { color: "#2e4cf1" },
    "Inkadia"                         : { color: "#f59518" },
    "Inkopolis Plaza"                 : { color: "#58b818" },
    "Inkopolis Square"                : { color: "#d431b1" },
    "Splat Battle"                    : { color: "#00b4cc" },
    "Humanoid Cephalopod"             : { color: "#a4e2d3" }
};
