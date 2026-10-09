
const SPLAT_CHARA_ROSTER = {
        "Blade" : {
            name_ch: "小布",
            color: "#79db37"
        },
        "Axel" : { 
            name_ch: "亞克",
            color: "#ec8f24"
        },
        "Yoni" : { 
            name_ch: "尤尼",
            color: "#dae723"
        },
        "Xiu" : { 
            name_ch: "修",
            color: "#0ab6eb"
        },
        "Edd" : { 
            name_ch: "愛德",
            color: "#ad3b3b"
        },
        "Wade" : { 
            name_ch: "偉德",
            color: "#6135b3"
        },
        "Hannah" : { 
            name_ch: "黑娜",
            color: "#2528eb"
        },
        "Lance" : { 
            name_ch: "蘭斯",
            color: "#8622c9"
        },
        "Minerva" : { 
            name_ch: "米奈瓦",
            color: "#6d211c"
        },
        "Roy" : { 
            name_ch: "羅伊",
            color: "#5fb2b8"
        },
        "Amy" : { 
            name_ch: "艾咪",
            color: "#208f64"
        },
        "Elise" : { 
            name_ch: "伊莉",
            color: "#11853d"
        },
        "Susie" : { 
            name_ch: "蘇西",
            color: "#cacf78"
        },
        "Scott" : { 
            name_ch: "斯科特",
            color: "#9b9c60"
        },        
        "Zoelle" : { 
            name_ch: "佐伊",
            color: "#303053"
        },        
        "Viper" : { 
            name_ch: "毒牙",
            color: "#d44ec9"
        },
        "Tighe" : { 
            name_ch: "泰",
            color: "#10be53"
        },
        "Cathy" : { 
            name_ch: "卡特琳",
            color: "#9d73b6"
        },
        "Max" : { 
            name_ch: "麥克斯",
            color: "#96233f"
        },
        "Dr. Lapis" : { 
            name_ch: "瑠璃博士",
            color: "#180f91"
        },
        "Beth" : { 
            name_ch: "貝絲",
            color: "#f0d043"
        },
        "Ollie" : { 
            name_ch: "竹籐",
            color: "#d384c2"
        },
        "Zarah" : { 
            name_ch: "薩拉",
            color: "#595f1d"
        },
        "Angel" : { 
            name_ch: "安潔",
            color: "#7c7c7c"
        },
        "RJ" : { 
            name_ch: "RJ",
            color: "#5fb2b8"
        },
        "Lucian" : { 
            name_ch: "路西恩",
            color: "#99b41f"
        },
        "Damian" : { 
            name_ch: "達米",
            color: "#ad3b3b"
        },
        "Paul" : { 
            name_ch: "保羅",
            color: "#325340"
        },
        "Leon" : { 
            name_ch: "里昂",
            color: "#bcc726"
        },        
        "Scratch" : { 
            name_ch: "小刻",
            color: "#79db37"
        },
        "Dorothy" : { 
            name_ch: "多蘿西",
            color: "#7e342f"
        },
        "Ada" : { 
            name_ch: "艾妲",
            color: "#724361"
        },
        "Father Chelon" : { 
            name_ch: "龜教父",
            color: "#887e23"
        },
        "Moyer" : { 
            name_ch: "小莫",
            color: "#79c2d4",
            type: "collab"
        },
        "Mei" : { 
            name_ch: "小莓",
            color: "#774599",
            type: "collab"
        },
        "Callie" : { 
            name_ch: "小擬",
            color: "#e944cd",
            type: "npc"
        },
        "Marie" : { 
            name_ch: "螢",
            color: "#9ddd4a",
            type: "npc"
        },
        "Captain Cuttlefish" : { 
            name_ch: "魚乾爺爺",
            color: "#b8a378",
            type: "npc"
        },
        "DJ Octavio" : { 
            name_ch: "DJ芥末章魚將軍",
            color: "#9c1b62",
            type: "npc"
        },
        "Marina" : { 
            name_ch: "飯田",
            color: "#29ca87",
            type: "npc"
        }
    };


const SPLATEAM = {
        "BBB" : {
            teamName: "BBB",
            teamName_ch: "按鈕少年隊",
            members: [
                "Blade","Axel","Yoni","Xiu","Edd","Wade"
            ]
        },
        "RF" : { 
            teamName: "Royal Flush",
            teamName_ch: "皇家同花順",
            members: [
                "Hannah","Lance","Minerva","Roy","Amy"
            ]            
        },
        "New Squidbeak Splatoon" : { 
            teamName: "New Squidbeak Splatoon",
            teamName_ch: "新噴嘴小隊",
            members: [
                "Captain Cuttlefish","Callie","Marie","Blade","Axel","Edd","Wade"
            ]
        },
        "Splatter Club" : { 
            teamName: "Splatter Club",
            teamName_ch: "飛濺俱樂部",
            members: [
                "Yoni", "Zarah", "Hannah", "Scratch", ""
            ]            
        },
        "The Acolytes" : { 
            teamName: "The Acolytes",
            teamName_ch: "親信使者",
            members: [
                "Angel", "Lucian", "RJ", "Damian"
            ]            
        },        
        "OCTA" : { 
            teamName: "OCTA",
            teamName_ch: "章魚自助協會",
            members: [
                "Dorothy","Moyer","Ada","Minerva","Edd","",""
            ]
        },
        "Vector 8​" : { 
            teamName: "Vector 8​",
            teamName_ch: "向量8科研中心",
            members: [
                "Viper","Tighe","Cathy","Max","Dr. Lapis","Beth","Ollie","Zoelle","Marina","Mei"
            ]                        
        },
        "Seagrove Scouts" : { 
            teamName: "Seagrove Scouts",
            teamName_ch: "海林童子軍團",
            members: [
                "Susie","Zoelle",""
            ]
        },
        "IKPD" : { 
            teamName: "Inkopolis Police Department",
            teamName_ch: "IKPD",
            members: [
                "Lance","Minerva"
            ]
        }
    };


