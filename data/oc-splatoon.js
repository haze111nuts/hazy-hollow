// ===========================================================
// Splatoon OC data
//
// LANGUAGES
// Write each character's content once at the top level (Chinese for
// now). That text is used for every language until you add a
// translation. To add English, give the character an `en` block with
// only the fields you've translated; anything missing falls back to
// the top-level text:
//
//   "Blade": {
//       name_ch: "小布",
//       color: "#79db37",
//       summary: "中文介紹…",
//       notes: ["中文筆記…"],
//       relationships: [ {Axel: "中文…"} ],
//       variant: [ {casual: "日常"} ],
//       en: {
//           summary: "English profile…",
//           notes: ["English note…"],
//           relationships: [ {Axel: "English…"} ],
//           variant: [ {casual: "Casual"} ]
//       }
//   }
//
// Names: the key ("Blade") is the English name, name_ch is the
// Chinese name. Relationship and variant ids stay the same in every
// language — only the text after the colon is translated.
// Team names: teamName (English) / teamName_ch (Chinese).
// Interface text (tabs, buttons…) lives in data/lang.js instead.
// ===========================================================

const SPLAT_CHARA_ROSTER = {
        "Blade" : {
            name_ch: "小布",
            color: "#79db37",
            summary: "一​代​時間線的​主角，​因為​家庭​因​素從外​地​搬​回到​高領市​跟​爸爸​和​姐姐​一起​住。​起初​由​於社​恐講話笨​拙加上​運動神經​不​是​很​好​所以​射擊​比賽​玩​得​很​差，​無法​融入​當​地​青少年​圈圈，​還經​常​出糗​被​做成​迷因。​一​次​在​魚乾​爺爺​的​考驗​中展​現出​聰明​才​智​和​障礙​克服​能力​而​被選為新噴嘴小隊的​3號成員，​也​因此​在​後來​精進​了​體​能​跟​技術，​也​被​捲進​不​少​章魚​軍團​相關​的​衝突​中。在經歷各種成長後特別​珍惜​自己​的​朋友​跟​家​人們。​<br>個性有點神經質，經常為一點小事緊張，膽子​不​大但​有​正​義感，也​意外​的​很​有​領導​氣質，整體是​個相對​平凡​的​少年，​心思細膩，是和​事佬​＆​苦​勞役。運氣總是不太好，​經常​可以看到他露出哭笑​不得​的​表情。​<br>好像會彈一點吉他。​",
            notes: [
                "他喜歡的食物是水果塔",
                "小布代表​的按鈕​是​B鍵​",
                "一代劇情剛​開始時（M​E2015）​他​約14歲",
                "名字直接翻成​中文應​是​布雷德，​太長不​順口​只​好​簡稱​小​布",
                "​名​字​原本​是​Brandon（來自Branch​-枝）原是​想​跟姐姐​黑娜湊「​花+枝」​但​後來​覺​得​布蘭​登這​名字太歐美現實又有點彆扭就換掉了",
                "在2015玩一代時就有畫出雛形的角色，那時的設定是愛裝酷的中二小男生"
            ],
            relationships: [
                {Axel: "在二​代故事開頭兩人​之間出現​一些​誤解因此​當​了​一​段​時間的勁敵，事件最後他們​和​好並且慢慢成​要好的親友。​"},
                {Edd: "因章魚軍​團與​深海​地鐵​的​衝突​而​相遇，​雖然​對方​敵意強​很​難交流但​小布還是​視​他​為朋友。"},
                {Yoni: "是​小布​在​一代​時間點為數​不​多​的​好​朋友，​尤尼沒​有​像​當時​其他​人​一​樣嘲笑​他，​兩人​關係​非常不錯。​"},
                {Hannah: "親​姊弟，​因為​分開​居住多​年​對​她​瞭解​不足，​好像​因為​各​種​原因​被​對方​唾棄，​一直​不​太​知道​要​怎麼​相處。​"},
                {Noir: "在​章魚​軍團​相關​事件​中​遇到​的​少年，為了幫助對方而讓他住在自己家，​是​好​朋友，​有時會不​小心​把​他​當成​寵物照顧。​"}
            ],
            variant:[
                {casual: "日常"},
                {casual2: "日常2"},
                {agent3: "特工服"},
                {captain: "司令"}
            ]
        },
        "Axel" : { 
            name_ch: "亞克",
            color: "#ec8f24",
            summary: "二代​時間線的​主角，那時他因為跟一群品行不良的青少年混在一起所以和家人關係緊張。一起事件導致他把3號視為眼中釘並對其追著跑，藉此當上新噴嘴小隊的​4號成員，中途被捲進了一些跟章魚軍團的衝突中。​在最後的任務中解開誤會並成功跟家人和解。​<br>是個衝動、頭腦簡單而且性格火爆的小混混，常常一言不合就出手，搞的身上臉上經常有小傷，不過他很重義氣且做事光明正大，討厭卑鄙手段和小花招。<br>是個很照顧奶奶的乖孫，若打架受傷會因為不想讓奶奶擔心而跑去住在朋友家。<br>家人經營一家餐廳，他偶爾會去幫忙（但大部分時間都會想辦法開溜）",
            notes: [
                "亞克代表​的按鈕​是​A鍵​",
                "二代劇情剛​開始時（ME2017）​他​約15歲",
                "經常稱呼螢為老太婆（然後就被紙傘扁）",
                "設定中有放入夏威夷人的概念​，算是有亞洲人血統",
                "名字直接翻成中文應是亞克索爾，​太長不​順口​只​好​​簡稱​亞克"
            ],
            relationships: [
                {Blade: "在二​代故事開頭兩人​之間出現​一些​誤解因此​當​了​一​段​時間的勁敵，事件最後他們​和​好並且慢慢成​要好的親友。​"},
                {Elise: "親兄妹，從小就玩在一起，經常鬥嘴，總是被對方叨唸跟打頭。"},
                {Xiu: "曾經造成亞克品行變差的爛朋友之一，雖然對方已經道歉過但亞克一直沒能徹底原諒他，兩人之間一直有點尷尬。"},
                {Edd: "勉強還當對方是朋友，因為個性不太合所以兩人之間經常火藥味滿滿，亞克尤其不爽對方對小布那個無理的態度。"},
            ],
            variant:[
                {casual: "日常"},
                {agent4: "特工服"}
            ]            
        },
        "Yoni" : { 
            name_ch: "尤尼",
            color: "#dae723",
            summary: "在一代時間線和小布成為朋友的少年，因為住所就在小布家附近所以經常找他玩。曾經在小布因為特工的事心情低落時帶著他趴趴走想要鼓勵他。<br>是個無憂無慮、神經大條的傢伙，看起來什麼都不怕，好奇心旺盛又喜歡找樂子。偶爾就會毫無理由的亂歡呼，是個娛樂效果製造機。講話常常沒頭沒腦，就連不合時宜的時候都會哈哈亂笑。",
            notes: [
                "尤尼代表​的按鈕​是​Y鍵​",
                "他喜歡的食物是玉米",
                "他跟小布同齡",
                "設定中有放入西裔的概念"
            ],
            relationships: [
                {Blade: "是​對方在​一代​時間點為數​不​多​的​好​朋友，覺得他很讚，經常跟著對方到處跑。​"},
                {Lance: "親兄弟，是很重要的大哥，從小就常被對方處處護著，兩人的感情看上去不錯。"}
            ]             
        },
        "Xiu" : { 
            name_ch: "修",
            color: "#0ab6eb",
            summary: "二代​時間線登場的少年，那時的他和亞克一起混在一群劣質青少年中，是讓亞克品行變差的爛朋友之一。跟亞克似乎很久以前就認識，很重視亞克所以事後不顧後果的脫離圈子去找他和解。<br>個性外向積極愛表現，善於社交且有點厚臉皮，經常有著不知哪來的自信，有種男公關氣質。是那種會在聚會或派對上提出奇怪團康鬼點子的人。似乎很喜歡大城市生活。<br>網路社交帳號上很活躍，常會為了博取關注參與各種流行話題，一次直播挑戰中出事搞得他右眼有點受傷。",
            notes: [
                "修代表​的按鈕​是​X鍵​",
                "他喜歡的食物是提拉米酥",
                "他大小布一歲",
                "設定中有放入紐約人的概念",
            ],
            relationships: [
                {Axel: "曾是親密的朋友，跟一些人一起帶壞亞克而差點鬧翻。修後來持續想和解但對方一直沒能徹底原諒他，兩人之間總是有點尷尬。"},
                {Elise: "跟兄妹倆很小就認識所以經常玩在一起，是好朋友，經常簡訊聊天，很常討論亞克的事情。"},
                {Blade: "起先是為了要獲得更多接觸亞克的機會才接近對方變成好友，後來慢慢成為交心。​"}
            ],
            variant:[]                        
        },
        "Edd" : { 
            name_ch: "埃德",
            color: "#ad3b3b",
            summary: "深海地鐵篇的​主角。曾經是章魚軍團的一員，那時嚮往自由的他和一夥人一直秘密策劃著脫逃，但計畫卻遭到重重阻撓，還被捲入深海地鐵事件，該測驗程序導致他失憶，他在事件最後得以逃出抵達陸上並回想起自己的過去。為了報答新噴嘴小隊在事件中對他的幫助，他姑且算是加入新噴嘴小隊成為8號成員。<br>孤狼一匹，個性固執而且有些孤僻，總是眼神兇惡一臉不滿的樣子，就是一個不好相處的傢伙，他還很不信任他人。曾經的軍團同夥卻說他原本並不是這樣的人…？<br>在章魚軍團的成長環境讓他有足夠的機械工程知識，尤其擅長交通工具相關的技術。<br>似乎挺喜歡陸上的景色。",
            notes: [
                "埃德代表​的按鈕​是+鍵​",
                "二代劇情剛​開始時（M​E2017）​他​約18歲",
                "中文翻譯曾經過一番波折：艾德→愛德→埃德"
            ],
            relationships: [
                {Minerva: "雙胞胎姐姐，兩人的觀念跟哲學雖然互相衝突但在軍團中還算相處和平，後來一連串事件導致埃德對她產生更多的不滿跟憤恨。兩人似乎有未解開的誤會。"},
                {Blade: "因章魚軍​團與​深海​地鐵​的​衝突​而​相遇。一直認為對方技術不足又沒競爭力卻可以一直突破難關很不解，對他抱持著競爭心跟嫉妒心等各種複雜感情。"},                
                {Axel: "個性不太合所以兩人之間經常火藥味滿滿，覺得對方是從小在愜意環境下長大的天真愚蠢花枝。​"}
                
            ],
            variant:[
                {casual: "日常"},
                {agent8: "深海地鐵測驗衣"},
                {octarian: "軍團"}
            ]            
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
            color: "#70cec9"
        },
        "Amy" : { 
            name_ch: "艾咪",
            color: "#59b193"
        },
        "Elise" : { 
            name_ch: "亞莉",
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
            color: "#70cec9"
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
        "Noir" : { 
            name_ch: "諾亞",
            color: "#a8a8a8",
            type: "collab"
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

const TABS = [
    {
        name: "Characters"
    },
    {
        name: "Map"
    },
    {
        name: "Timeline"
    },
    {
        name: "Playground"
    }
]

