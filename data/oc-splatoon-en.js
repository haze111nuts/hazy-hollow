// ===========================================================
// Splatoon OC data — English
//
// One entry per character, keyed by the character id from
// data/oc-splatoon-common.js (color and type live there).
//
//   "Blade" : {
//       name: "Blade",
//       summary: ["paragraph one…", "paragraph two…"],
//       notes: ["…"],
//       relationships: [ {Axel: "…"} ],
//       variant: [ {casual: "…"} ]
//   }
//
// SUMMARIES are a list: each item is one paragraph. Paragraph
// spacing is added automatically — no <br> or <p> needed.
// (A single plain "text" summary still works too.)
//
// Relationship and variant ids stay the same in every language —
// only the text after the colon changes.
//
// FALLBACK: any field (or whole character) left out here is
// shown from data/oc-splatoon-zhtw.js instead.
// ===========================================================

const SPLAT_CHARA_DATA_EN = {
    "Blade": {
        name: "Blade",
        summary: [
            "The protagonist of the main story in Splatoon 1. He moved to [[Inkopolis|Inkopolis City]] to live with his dad and sister due to family reasons. He was socially awkward and not very athletic, so he wasn't good at [[Splat Battle|splat games]] and never really fit in. The local teens saw him as the loser kid from out of town and often made fun of him by turning him into online memes. When Captain Cuttlefish secretly put him to the test, he showed quick thinking and resourcefulness and was chosen to become Agent 3 of the [[New Squidbeak Splatoon]]. He then got caught up in conflicts involving the [[Octarian Army]]. By the end of the adventure, he gained confidence and understood his own strengths. Later, he formed the splat team [[BBB]] with a few friends. And thanks to his success as an agent, he became an honorary member of [[OCTA]], and he often works with them as a volunteer.",
            "He gets nervous easily and isn't very brave, but he is a great leader with strong sense of justice. Overall, he's a pretty ordinary teenage boy. He's thoughtful and kind, and usually ends up being the peacemaker and the one who does all the hard work. He tends to have bad luck, so he's often seen facepalming or giving a \"why me\" look. After everything he's been through, he really values his friends and family. He apparently knows how to play a little guitar."
        ],
        notes: [
            "He represents the B button, which is why his name starts with B.",
            "He's about 14 y/o at the start of the Splatoon 1 main story (ME2015).",
            "His name was originally Brandon (from \"branch\"), meant to pair with his sister Hannah (from the Japanese \"hana\", meaning flower) because in Chinese, 花 (flower) + 枝 (branch) makes 花枝(squid). Later it was swapped for a name that felt more iconic.",
            "His first design was created in 2015 after Splatoon 1 was released. Back then, he was an edgy kid who tried very hard to act cool."
        ],
        relationships: [
            { Axel: "They met during the events in Splatoon 2, where a misunderstanding made them rivals for a while. They made up in the end and quickly became close friends." },
            { Edd: "They met during the conflict in the Deepsea Metro. Edd has never been very friendly and is hard to talk to, but they still help each other out, and Blade has always seen him as a friend." },
            { Yoni: "One of the few good friends he made around the time of Splatoon 1. Unlike most kids back then, Yoni never made fun of him. They get along really well and often hang out together." },
            { Xiu: "They met because of Axel. At first Blade wasn't used to how outgoing Xiu was, but they later became close friends. He often helps Xiu and Axel patch things up." },
            { Hannah: "His older sister. Since they lived apart for many years, he doesn't know her very well, and she seems to despise him for various reasons. He's never really known how to get along with her." },
            { Lance: "They met once when Lance came over to see Hannah, but didn't interact much. After seeing Lance play in matches, Blade came to really look up to him, and gets so nervous around him that he can't talk normally." },
            { Noir: "A boy he met while helping [[Octarians]] escape from underground. Seeing that Noir was very wary and had nowhere to go, Blade took him in and helped him adjust to life on the surface. They became good friends and are like family now, though Blade sometimes accidentally treats him like a pet." },
            { "Captain Cuttlefish": "At first Blade thought he was a weird old geezer with strange behavior, but after a few years of agent work, he slowly realized the Captain had been helping him grow the whole time. He cares about him a lot and sees him as family." }
        ],
        variant: [
            { casual: "Casual" },
            { agent3: "Agent 3" },
            { captain: "Captain" }
        ]
    },
    "Axel": {
        name: "Axel",
        summary: [
            "The protagonist of the main story in Splatoon 2. At the beginning, he was hanging out with the wrong crowd, and things got tense between him and his family. After a certain chain of events, he saw Blade as an enemy and chased after him and even agreed to work as Agent 4 of the [[New Squidbeak Splatoon]] just to catch him. Along the way, he got caught up in the conflict with the [[Octarian Army]]. The journey eventually made him rethink the way he had been acting. In the end, he cut ties with his previous friends, cleared things up with Blade, and made peace with his family. Later, he formed the team [[BBB]] with Blade and a few other friends. His family runs a Hawaiian-style restaurant. He helps out sometimes, but usually tries to sneak off.",
            "He's a loud, rowdy punk who's hot-headed and simple-minded. He gets into fights over the smallest things, so he usually has a bruise or two on his face. Still, he's loyal to his friends, always plays fair, and hates dirty tricks. Deep down, he's a good kid and he especially cares about his grandma. Whenever he gets hurt in a fight, he stays at a friend's place so his grandma doesn't have to see his injuries."
        ],
        notes: [
            "He represents the A button, which is why his name starts with A.",
            "He's about 15 y/o at the start of the Splatoon 2 main story (ME2017).",
            "His family is loosely based on Hawaiian culture, and conceptually, he is part Asian."
        ],
        relationships: [
            { Blade: "They met during the events in Splatoon 2, where a misunderstanding made them rivals for a while. They made up in the end and quickly became close friends. Axel often calls him 'B'." },
            { Xiu: "One of the bad friends who led Axel down the wrong path. Xiu has apologized, but Axel has never fully forgiven him, so things between them are still a bit awkward." },
            { Edd: "Axel barely counts him as a friend. Their personalities clash, so they butt heads a lot, and Axel especially hates how rude Edd is to Blade." },
            { Viper: "They met as enemies during the events in Splatoon 2. Both are stubborn and hate losing, so they argue nonstop whenever they run into each other. Axel thinks Viper is just a loudmouthed [[Octarian Army|Octarian]] who needs his ass kicked." },
            { Elise: "His younger sister. They grew up together and bicker all the time. She's always nagging him and smacking him on the head but they care about each other a lot." },
            { Marie: "They met during the events in Splatoon 2. He found her bossy, naggy and annoying, but they slowly became friends. He often calls her \"granny\" and has taken plenty of hits from her wagasa parasol for it." }
        ],
        variant: [
            { casual: "Casual" },
            { agent4: "Agent 4" }
        ]
    },
    "Yoni": {
        name: "Yoni",
        summary: [
            "First appeared in the main story of Splatoon 1. He was the only friend Blade had around that time, and he is always excited to hang out with Blade. When Blade lost his morale due to the hardship he faced in agent work, Yoni tried to cheer him up by showing him around the city. Yoni seems to know all the best places in [[Inkopolis Plaza|Inkopolis]]. He got a job at [[Bar‘N’Arcades]] during the events of Splatoon 1.",
            "He is an outgoing and chaotic guy, always goofing around without a care in the world. He is constantly looking for fun and seems to have trouble sitting still. He is usually the comic relief of the group, often blurting out random jokes or memes that no one gets. He often speaks without thinking and will burst out laughing even at the most inappropriate moments.",
            "Apparently, he comes from a big family with lots of cousins."
        ],
        notes: [
            "He represents the Y button, which is why his name starts with Y.",
            "He's the same age as Blade.",
            "Conceptually, he is Latino."
        ],
        relationships: [
            { Blade: "They met during the main story in Splatoon 1. Yoni thought the new kid needed some fun, so he showed him around [[Inkopolis|Inkopolis City]]. Ever since they became friends, he tags along with Blade everywhere." },
            { Lance: "His older brother, who always looked out for him growing up. They seemed close, but something later came between them." },
            { Paul: "They met during an incident at [[Bar‘N’Arcades]]. They're both money-hungry dudes, so they get along great. Yoni loves hanging out at his pawnshop." }
        ]
    },
        "Xiu" : { 
            name: "Xiu",
            summary: [
                "First appeared in the main story of Splatoon 2. He has known Axel for a long time, and back then, he was one of the bad kids who led Axel down the wrong path. After Axel cut ties with the group, Xiu left too, just so he could make up with him. He eventually managed to squeeze his way into Axel's new circle of friends.",
                "He's an attention-seeking social butterfly who's never afraid to show himself off. He tends to like high-class and fancy things, but he's really just a regular teenager who wants to impress the cool kids. He's a bit of a drama queen and can be pretty flirtatious. He's also extremely online. He's very active on social media and will jump on every trend for attention, he even managed to injure his own eye in one of the livestream challenges. He lives close to [[Inkopolis Square]] and works part-time at a beauty store in Arowana Mall, and he seems to have a knack for makeup and fashion.",
                "His favorite food is tiramisu."
            ],
            notes: [
                "He represents the X button, which is why his name starts with X.",
                "He's a year older than Blade.",
                "Conceptually, he is somewhat of a New Yorker."
            ],
            relationships: [
                { Axel: "They used to be close but Xiu and some others led Axel down the wrong path, and they nearly fell out for good. Xiu has been trying to make up with him ever since, but Axel has never fully forgiven him, so things between them are still a bit awkward." },
                { Elise: "He met Elise while hanging out with her brother Axel, they became good friends and they would text each other often, usually talking about Axel." },
                { Blade: "At first, he got close to Blade just to have more chances to be around Axel, but over time they became real friends." }
            ],
            variant: []
        },
        "Edd" : { 
            name: "Edd",
            summary: [
                "The protagonist of the Deepsea Metro side story. He used to be a member of the [[Octarian Army]]. Growing up there gave him a solid background in mechanical engineering, and he specialized in vehicle-related technology. He never aligned with the Army's ideals, and while at the Octarian Army Academy, he secretly worked with a group of students who wanted change. Just before he could leave the underground, he got caught up in the [[Deepsea Metro Testing Procedure]] and lost his memory. In the end, he  remembered his past and escaped to the surface. To repay the [[New Squidbeak Splatoon]] for their help, he joined them as Agent 8.",
                "He is a proud, edgy loner who always looks unfriendly and skeptical. He's stubborn and never shows how he really feels. Even when he wants to help, he won't say it out loud, which makes him hard to get along with. He seems to have some trust issue and tends to keep his distance from others, but his old comrades from the Army say that \"he wasn't always like this\".",
                "He seems to like the scenery on the surface."
            ],
            notes: [
                "He represents the + button, and his name is derived from ‘Add’.",
                "His name also comes from \"Eight\".",
                "He's about 18 y/o at the start of the Splatoon 2 main story (ME2017)."
            ],
            relationships: [
                { Minerva: "His twin sister. They have opposite views and beliefs, but they got along fine back in the [[Octarian Army|Army]]. A chain of events later left Edd with a lot of resentment toward her. There seems to be a misunderstanding between them that has yet to be cleared up." },
                { Blade: "Back in the Army, Edd was aware of Agent 3's infiltration and was skeptical of his skills and motives. During the events in the Deepsea Metro, Edd's memory loss caused more conflict between them, but they made peace in the end. He isn't very friendly to Blade but he does stick around with Blade's team and help him out from time to time." },
                { Axel: "Their personalities clash, so they butt heads a lot. Edd thinks Axel is a naive Inkling brat who's never experienced hardships." },
                { Dorothy: "They met because of [[OCTA]]. Edd thinks she is a brilliant woman, and she is particularly caring for him." },
                { Marina: "They met during the events in the Deepsea Metro. Both are former [[Octarians]] with an engineering background, so they get along fairly well. He's grateful for all the help she offered him, but he really doesn't want to keep owing her favors." }
            ],
            variant: [
                { agent8: "Agent 8" },
                { casual: "Casual" }
            ]
        },
        "Wade" : { 
            name: "Wade",
            summary: [
                "The protagonist of the main story in Splatoon 3, who grew up in [[Splatsville]]. He's socially awkward and doesn't have any real talents, which made him a laughingstock among the local teens. He started avoiding splat battles and spent most of his time at home playing video games. One day, he came across [[Wade's Smallfry|a starving Smallfry]] and took it in, which started a chain of events related to the research of Alterna. This ultimately made him join the [[New Squidbeak Splatoon]] as the new Agent 3.",
                "He's timid but kind-hearted. He may hesitate when he sees someone in trouble, but he always ends up helping in the end. He can be pretty lazy and whiny sometimes, especially when things don't go his way. The only thing he seems to be good at is video games, and he occasionally livestreams on his channel, even though it doesn't have many subscribers.",
                "-- Wade's bio is currently WIP, more details coming soon --"
            ],
            notes: [
                "He represents the ◀ button, and his name is derived from \"West\"."
            ],
            relationships: [
                { Blade: "They met because of the [[New Squidbeak Splatoon]]. Wade thinks he is a capable and experienced agent and looks up to him." },
                { Susie: "They met because of his [[Wade's Smallfry|Smallfry]]. He thinks of her as a strong-willed, dependable little girl who is good at everything. He finds her annoying sometimes, but they actually get along pretty well." }
            ],
            variant: [
                { casual: "Casual" },
                { agent3: "Agent 3" }
            ]                 
        },
        "Hannah" : { 
            name: "Hannah",
            summary: [
                "Soon after [[Inkopolis Tower]] opened for [[Splat Battle|splat battles]], she became a well-known top-ranked player with a violent close-range playstyle. She was then scouted by a shady duo to fight against the [[Octarians]], she carried out one mission for them then quit right after to focus on competitive games. As ordinary battles eventually stopped being enough for her, she later accepted a fan's offer to help her put [[Royal Flush|a team]] together. This allowed her to play in many official tournaments, crushing opponents one after another with her team. Late in the story, she went missing, apparently fighting in some kind of illegal underground matches.",
                "She is a tough, grumpy and aggressive individual who has a harsh attitude toward everything. She always looks unimpressed and annoyed. The only thing that will get her fired up or make her feel any sort of enjoyment is splat battles. She has a sharp tongue and a mean mouth. She is never friendly to anyone and she especially cannot stand wimps or anything remotely sentimental. She also seems to have trouble saying simple things like \"thanks\".",
                "She chugs down several cans of energy drinks on a daily basis."
            ],
            notes: [
                "She represents the HOME button, which is why her name starts with H.",
                "In Royal Flush, she represents the Ace.",
                "She's two years older than Blade.",
                "Her name comes from the Japanese \"hana\", meaning flower. It was meant to pair with her brother Blade's original name, Brandon (from \"branch\"), because in Chinese, 花 (flower) + 枝 (branch) makes 花枝 (squid).",
                "Her name was originally going to be something like Homura (ホムラ) to match the HOME button, but the idea was dropped."
            ],
            relationships: [
                { Lance: "They've known each other for a long time and often teamed up in pair League Battles before [[Royal Flush]] was formed. Their conversations are usually short, but she trusts him a lot. There's an unspoken understanding between them." },
                { Minerva: "They met during Hannah's one and only agent mission. Hannah thought she was a fair opponent and acknowledged her skills. After Minerva joined Royal Flush, they became teammates and friends, and they're also roommates." },
                { Amy: "She sees Amy as a wimpy manager and a fangirl. She isn't too mean to her, but she does tend to dump all the team-related chores on her." },                
                { Roy: "To Hannah he is someone Lance and Amy picked for the team. She has no problem with his skills, but she finds him difficult to work with, and never knows what to do with him. She will not talk to him unless she has to." },
                { Blade: "Her younger brother. They lived apart for many years, and because of their personalities and family reasons, she despises him. She has no interest in getting along with him and can't stand being in the same room with him." }
            ],
            variant: [
                { casual: "Casual" },
                { casual2: "Mission Zero" }
            ]         
        },
        "Lance" : { 
            name: "Lance",
            summary: [
                "A longtime friend of Hannah's. Like her, he became a well-known top-ranked player soon after [[Inkopolis Tower]] opened for [[Splat Battle|splat battles]]. After [[Royal Flush]] was formed, he became one of the team's key players. He went to the police academy a few years later. He appears as a police officer later in the story and seems to be very busy on a big case.",
                "He is a brave, honest and noble guy of few words. He always looks serious and never shows much emotion, but he is very kind and will always be there when help is needed. He is very well-built, and lifting a person is no big deal for him, so he's often the one to step in when things get out of hand. Troublemakers often turn around to find him suddenly standing right behind them. He also has an exceptionally sharp eye for detail and tends to pick up on things no one else notices.",
                "Apparently, he comes from a big family with lots of cousins."
            ],
            notes: [
                "He represents the L button, which is why his name starts with L.",
                "In Royal Flush, he represents the King.",
                "He's a year older than Hannah.",
                "Conceptually, he is Latino."
            ],
            relationships: [
                { Yoni: "His younger brother. Yoni was always full of energy as a kid, so Lance often had to keep an eye on him. He has always cared about Yoni, and they seemed close, but something later came between them." },
                { Hannah: "They've known each other for a long time and often teamed up in pair League Battles. There's an unspoken understanding between them." },
                { Amy: "They met when [[Royal Flush]] was formed, and she's the team's manager. Something about her keeps catching his attention, whether it's small details that don't quite add up or the way she always seems to be working hard all by herself. He tends to look out for her more than anyone else." },
                { Roy: "They met when Royal Flush was formed. He isn't sure why Roy keeps picking on him, but he still sees him as a teammate and a friend. He's often the one who has to hold Roy back when he gets too worked up." },
                { Minerva: "They met when Royal Flush was formed, and they work really well together in battle. Late in the story, they became fellow police officers." }
            ],
            variant: [
                { casual: "Casual" },
                { hatoff: "w/o Hat" }
            ]              
        },
        "Minerva" : { 
            name: "Minerva",
            summary: [
                "Edd's twin sister, and once an [[Elite Octoling Soldier]] in the [[Octarian Army]]. She was the top of her class and a classic model student, loyal to the Army and hoping to serve for life. When Hannah infiltrated the Army while briefly acting as Agent 3, she defeated Minerva and told her she was \"wasting talent in a shitty place\". Minerva did not take the loss well, and with her brother's influence, she finally decided to join the wave of [[Octarians]] leaving the Army after DJ Octavio was defeated. After moving to the surface, she tracked down Hannah for a rematch, and later joined [[Royal Flush|her team]].",
                "She is a hardworking, disciplined and very by-the-book girl. She is not very outspoken and tends to keep complaints to herself. She thinks about life in the Army a lot, but the surface still amazes her, and every now and then her girly, starry-eyed side comes out, especially when she sees something cute or dashing. She has great focus, and once she gets in the zone on the battlefield, she's very hard to defeat.", 
                "She is very fond of sparkling drinks."
            ],
            notes: [
                "She represents the - button, and her name is derived from ‘Minus’.",
                "In Royal Flush, she represents the Queen."
            ],
            relationships: [
                { Edd: "Her twin brother. They have opposite views and beliefs, but they got along fine back in the [[Octarian Army|Army]]. She was shocked when he suddenly started lashing out at her and pushing her away. There seems to be a misunderstanding between them that has yet to be cleared up." },
                { Hannah: "They met when Hannah infiltrated the Army as Agent 3. Losing to her stuck with Minerva for a long time, so after leaving the underground, she challenged Hannah to a rematch. They later became teammates, friends, and even roommates. She cares about Hannah a lot and always looks after her." },
                { Amy: "They met when [[Royal Flush]] was formed, and Amy is the team's manager. Minerva thinks she's very sweet, and can't help going into snuggly mode when Amy is around." },
                { Lance: "They met as teammates in Royal Flush and work really well together in battle. She admires him and wants to be friends, but she always struggles to find something to talk about. Late in the story, they became fellow police officers." },
                { Roy: "They met as teammates in Royal Flush. Despite struggling to get along with him, she continues to try to understand him and become his friend. So far, her efforts haven't gotten her very far." },
                { Dorothy: "They met because of [[OCTA]], and Dorothy takes good care of her. Minerva really enjoys her company and always ends up spending a lot of time with her whenever she visits the OCTA HQ." }
            ],
            variant: [
                { casual: "Casual" },
                { octarian: "Octarian" }
            ]
        },
        "Roy" : { 
            name: "Roy",
            summary: [
                "A boy who occasionally showed up on the [[Inkopolis Tower]] leaderboard. One day, he appeared on the street and started harassing Amy, which led to a clash between him and Lance. The two agreed to settle it with a few rounds of splat battles, and Roy's skills shown in the games earned him a spot in [[Royal Flush]]. As the team's long-range player, he has an aim so cold and precise that it can be a little unsettling to watch. He often skips practice without telling anyone.",
                "He barely talks or shows any expression, and he always looks uninterested at team get-togethers. Whenever he does speak, it's usually something very rude and offensive. Other people's feelings mean very little to him, and he constantly looks like he is going to throw a punch or draw a knife at anyone who attempts to mess with him. Apparently, he has a sweet tooth and is often seen snacking or drinking something sugary. He seems to work part-time at a pawnshop in [[Inkopolis|Inkopolis City]], where he helps with repairs in the used weapons section."
            ],
            notes: [
                "He represents the R button, which is why his name starts with R.",
                "In Royal Flush, he represents the Jack.",
                "He's two years younger than Lance and Amy.",
                "The white patches on his skin are caused by vitiligo."
            ],
            relationships: [
                { Amy: "They didn't seem to know each other before [[Royal Flush]] was formed. For some reason, he won't stop making snide remarks about her, and yet he will do whatever she says without putting up much of a fight." },
                { Lance: "Picking a fight with Lance is how Roy ended up in [[Royal Flush]]. He's always messing with Lance, turning everything into a competition between them, and he seems to be enjoying it a little too much."},
                { Paul: "The owner of the pawnshop and his boss. Roy mostly just does whatever Paul asks, but he finds it annoying when Paul acts all buddy-buddy with him like ruffling his hair every time he comes in to work." }
            ],
            variant:[
                { casual: "Casual" },
                { shop: "Pawnshop Job" }
            ]            
        },
        "Amy" : { 
            name: "Amy",
            summary: [
                "The manager of [[Royal Flush]]. She seems to be a longtime fan of Hannah and Lance, she showed up one day and offered to help them build a team; she is also the one who came up with its name. As the team's manager, she handles all the important work, from schedules to tournament sign-ups, and she's surprisingly good at it for someone who seems so timid and clumsy. She states she has no talent for splat battles and has never played much, though she once reacted faster than any ordinary person could…",
                "She is a shy and timid nerdy girl. She is gentle, humble and soft-spoken. She is also rather introverted and tends to do things alone, but she is very sweet and attentive to the members of [[Royal Flush]]. She's always busy with the team-related chores Hannah shoves onto her. Her taste can be a little unusual, she's got quite a collection of books, t-shirts, and merch that are dark and creepy. She can often be seen working at an old-fashioned used bookstore in [[Inkopolis|Inkopolis City]]."
            ],
            notes: [
                "She represents the volume down button. The A in her name can be flipped upside down to become a V (for volume) and a ‘-’.",
                "In Royal Flush, she represents the 10.",
                "She's the same age as Lance.",
                "One day, she suddenly showed up with a bandage on her neck."
            ],
            relationships: [
                { Hannah: "Amy knows her strength very well and seems to be a big fan of hers. She doesn't really mind being bossed around by Hannah." },
                { Lance: "Amy knows his strength very well and seems to be a big fan of his. She's never quite sure what to make of all the attention he pays to her." },
                { Minerva: "She sees Minerva as a reliable teammate and doesn't mind her snuggles." },
                { Roy: "They didn't seem to know each other before [[Royal Flush]] was formed. She finds his constant snide remarks a bit troublesome." }
            ],
            variant:[
                {casual: "Casual"},
                {glassesoff: "w/o Glasses"}
            ]            
        },
        "Elise" : { 
            name: "Elise",
            summary: [
                "Axel's younger sister. They grew up together, and she's very close with her family. She got into [[Splat Battle|splat battles]] because everyone around her was playing, and she loves taking part in Splatfests. She has always been a little jealous that her brother has a regular [[BBB|team]] to hang out with. One day, she accidentally found out that Axel was working for [[New Squidbeak Splatoon]] and ended up getting involved too. Now she sometimes fills in for him as Agent 4.  Her family runs a Hawaiian-style restaurant, and she can often be found helping out there.",
                "She's a cheerful, energetic tomboy who gets along with just about anyone. She's attentive to her friends and never hesitates to speak up when something isn't right. Like Axel, she's very loyal to people she cares about. She's also a bit nosy and loves a good piece of gossip, so she's not the best person to tell a secret to."
            ],
            notes: [
                "She represents the ▶ button, and her name is derived from \"East\".",
                "She's one year younger than Axel.",
                "Her family is loosely based on Hawaiian culture, and conceptually, she is part Asian."
            ],
            relationships: [
                { Axel: "Her older brother. They grew up playing together and bicker all the time, and she's always nagging him and smacking him on the head. Still, they're very close. She worries about him a lot and gets anxious whenever she can't reach him." },
                { Xiu: "She met Xiu while he was hanging out with Axel, they became good friends and they would text each other often, usually talking about Axel.." },
                { Blade: "They met after Axel formed [[BBB]]. She thinks he's a great guy. She looks up to him and will get a little nervous whenever they get to hang out together." }
            ],
            variant: [
                { casual: "Casual" },
                { agent4: "Agent 4" }
            ]                   
        },
        "Viper" : { 
            name: "Viper",
            summary: [
                "A recurring enemy in the main stories of Splatoon 1 and 2. Born and raised in the [[Octarian Army]], he was a robotics prodigy who was already building his own drones as a kid. He later became DJ Octavio's personal engineer and designed many of the weapons specifically for him. He was even given his own lab to develop his machinery. In the main stories, he kept showing up with his latest creations to get in the heroes' way. After the Army fell apart, he got to join [[Vector 8 Research Institute]] with a few other engineers and researchers in the Army, and he is now the lead developer of the Mechanical Engineering Department.",
                "He is a cocky, arrogant octoling who is extremely proud of his robots and weapons, and he loves to brag about them. He likes to work alone and rarely leaves his personal lab. He almost never teams up with anyone, since he'd much rather spend his time with his robots. He's also incredibly stubborn and never knows when to quit. When his plans fail, he always comes back with more. He is convinced that there's no hero he can't beat and no bug he can't fix."
            ],
            notes: [
                "He represents the volume up button. The V in his name stands for volume, and the p stands for plus.",
                "He's the same age as Blade.",
                "His personality was inspired by Jack Spicer from Xiaolin Showdown, Dr. Doofenshmirtz from Phineas and Ferb, and Dr. Eggman from the Sonic series."
            ],
            relationships: [
                { "DJ Octavio": "His boss and his role model in both work and life. Viper has idolized him since he was a kid and follows his orders without a second thought. Ever since becoming his personal engineer, he's always trying to impress him." },
                { Blade: "They met as enemies during the main story in Splatoon 1. Blade never seemed that strong, yet Viper could never beat him, feeling salty about this, he declared Blade his lifelong rival. After facing each other so many times, they've developed an odd kind of friendship, though Viper would never admit to it." },
                { Axel: "They met as enemies during the main story in Splatoon 2. Both are stubborn and hate losing, so they argue nonstop whenever they run into each other. Viper thinks of him as a cheap knockoff of Agent 3." },
                { Tighe: "They've known each other since their [[Octarian Army|Army]] days and now work in different departments at [[Vector 8 Research Institute|V8]], so they often end up in the same meetings. Maybe it's because they're both elite engineers, they get along surprisingly well." }
            ],
            variant: [
                { v8: "V8 Uniform" },
                { octarian: "Octarian" }
            ]
        },
        "Tighe" : { 
            name: "Tighe",
            summary: [
                "在秩序計畫支線中登場的角色。於章魚軍團出生所以從小接受軍團的教育與訓練，在數據與工程方面表現非常傑出，後來被提拔進委員會，是委員會中最年輕的一員，比起其他人似乎對於新的事物跟觀念抱持著比較開放的態度。在軍團瓦解後跟幾個軍團研究員一起建立V8科研中心，他原本是琉璃博士領導的團隊的組員之一，在人工智能與數據建模部門設立後被指派到該部門作為首席開發員與顧問。另外，他也密切參與了秩序計畫虛擬宇宙的開發。",
                "是個精明可靠的軟體工程師，精通各種新舊世代的程式語言，工作俐落，除錯迅速，解決問題的能力極佳，是邏輯天才。他的口齒清晰且表達能力很好，講話很有魅力，是那種總是可以輕易說服投資者的類型。是個不太謙虛的人，有點太過崇尚資本主義。很有紳士風度，總是面帶微笑。"
            ],
            notes: [
                "名字參考Tegra，來自任天堂Swtich內部處理器的單晶片系統Nvidia Tegra X1",
                "他戴的眼鏡是藍光眼鏡",
                "設定中有稍微加入類似矽谷科技企業家的概念",
                "他的名字還有另一個彩蛋"
            ],
            relationships: [
                {Maxwell: "在軍團時期就認識，後來成為V8不同部門的同事，是很熟絡的朋友，在公司經常一起吃午飯，經常勸他多放鬆，週末會找他出去。"},
                {Viper: "在軍團時期就認識，後來成為V8不同部門的同事，經常會在部門合作時一起開會。或許是因為同為菁英工程師，兩人意外的還挺和的來。"},
                {Candice: "因在V8工作而認識，覺得對方很好相處，算是朋友，偶爾會拉上他跟麥克斯一起吃午飯。"},
                {"Dr. Lapis": "在軍團時期就認識，算是恩師的存在，很被對方看好才華。後來一起建立V8。雖然平常總被她像親戚一樣調侃但還是很敬重對方。"}
            ],
            variant:[
                {v8: "V8工作服"},
                {committee: "軍團委員會"}
            ]
        },
        "Candice" : { 
            name: "Candice",
            summary: [
                "在一代主線以及秩序計畫支線中登場的角色。於章魚軍團出生所以從小接受軍團的教育與訓練，因為覺得軍團很無趣，在學生時期跟一夥人一起進行跟改革有關的秘密活動。她作為女兵的戰力水準普普，但對軟體工程很興趣，尤其是對古代人類遺留在章魚基地中的娛樂電子器材特別熱衷。在軍團瓦解之後她轉移到了V8科研中心工作，是虛擬實境和數位娛樂部門的首席開發員，致力於開發遊戲還有研發虛擬實境技術。密切參與了秩序計畫虛擬宇宙的開發。",
                "個性明亮﹑開朗外向﹑講話率直毫無顧忌，有點古怪又亂來。她的精力很旺盛總是蹦蹦跳跳，給人一種野丫頭的感覺。是電子遊戲萬事通，言為舉止總會參雜各種遊戲迷因。她常常會忘了把身上動作捕捉用的x marker拿下來就跑去開會。"
            ],
            notes: [
                "名字寫成中文是坎蒂絲，糖糖（Candy）則是小名",
                "名字參考card跟cartridge，來自任天堂Swtich使用的卡帶"
            ],
            relationships: [
                {Edd: "在軍團時期就認識，曾經是同學，覺得他做的事情很偉大，會稱呼他「師傅」或「師兄」，很愛黏在他後面。後來因深海地鐵事件和他失聯，再度見面時發現被他討厭了很錯愕。"},
                {Viper: "知道他是DJ將軍的專屬工程師，對他很是欽佩，經常想跟他討論機器人，但總是被對方拒之門外，即使如此還是持續嘗試。自己的遺願清單有一項是跟他合作出一款遊戲。"},
                {Maxwell: "軍團時期有看過對方但交集不多，後來成為V8不同部門的同事，覺得他負責的工作很厲害所以想當朋友，經常去搭話跟打招呼。稱呼他為「阿麥」。"},
                {Tighe: "在軍團時期聽過他，到V8工作後才認識，在部門落成後變成朋友，經常參與他和麥克斯的談話或是聯誼。認為他是公司最強章魚。"}
            ],
            variant:[
                {v8: "V8工作服"},
                {octarian: "軍團時期"}
            ]
        },
        "Maxwell" : { 
            name: "Maxwell",
            summary: [
                "在秩序計畫支線中登場的角色。於章魚軍團出生所以從小接受軍團的教育與訓練，科技技能成績普通所以被安排到保安類職，後來看到曾經認識的人被深海地鐵測驗程序消毒跟滅殺的慘狀而受到一些打擊，之後便下定決心要找出治療這些人的辦法而開始專攻化學醫療方面的知識，在軍團瓦解後轉移到V8科研中心繼續學業事業，成為了護理與化學治療研究部門的首席研究員，一直帶領著部門在處理深海地鐵程序殘留下的環境影響。",
                "個性冷靜嚴肅，是個沉默的人，不善表達情感，但心地善良很有道德意識，也對工作非常認真負責，有點工作狂傾向，經常主動加班到很晚。"
            ],
            notes: [
                "他的完整名字翻成中文是麥克斯威爾，麥克斯則是小名（英文寫作Max）",
                "名字來自任天堂Swtich圖形處理器核心Maxwell微架構"
            ],
            relationships: [
                {Tighe: "在軍團時期就認識，後來成為V8不同部門的同事，常在公司一起吃午飯。很重視這個朋友，有他的支持生活才沒那麼沉重。"},
                {Candice: "軍團時期有看過對方但交集不多，後來成為V8不同部門的同事。經常被對方搭話，每次都很好奇她的活力都是從哪裡來的。"},
                {"Dr. Lapis": "曾是師生關係，在研讀化學跟醫療知識時看了很多她的書和研究報告，也受了她很多指導跟幫助，對她非常尊敬與感謝。"}
            ]      
        },
        "Dr. Lapis" : { 
            name: "Dr. Lapis",
            summary: [
                "在秩序計畫支線中登場，V8科研中心創辦人之一。全名四宮黛芬。於章魚軍團出生所以從小接受軍團的教育與訓練，因為理科成績每項都非常傑出所以沒有像其他女孩一樣被分去當女兵，她特別精通生物、化學跟醫學相關領域。她在畢業後一邊進行研究一邊任職軍團理科教師，軍團裡不少課本跟教科書是她寫的。在軍團瓦解的那段時間領著幾個人創立了V8，是神經心理學與記憶處理部門的首席研究員，在練魚公司瓦解後她領導過一個名為『[[瑠璃企劃]]』研究項目，此項目的成功讓她在公司內小有名氣，有些員工開始暱稱她為琉璃博士，她本人似乎也挺喜歡這個叫法。她也密切參與了秩序計畫虛擬宇宙的開發。",
                "看上去是個知性淑女，行為舉止卻時常流露出調皮跟童趣，愛說笑還常常搞一些莫名其妙的小花招捉弄同事，跟人聊天起來像個路邊的太太。個性很爽朗，會熱心的指導學生，且總是可以讓談話氣氛變得很輕鬆，是個親切的女子。"
            ],
            notes: [
                "全名的拼法是Shinomiya Delphine，日文寫作シノミヤ＝デルフィーヌ，跟飯田和水田類似",
                "名字來自任天堂Swtich內的記憶體LPDDR4。可以重組成DRLP（Dr. Lapis）跟4D（四宮黛芬）並且對應她研究記憶的職業"
            ],
            relationships: [
                {Betty: "在軍團時期就同樣是研究員，兩人互相熟識很久，是感情非常深厚的好姊妹，經常在公司的走廊或茶水間閒話家常。"},
                {Tighe: "在軍團時期就很看好這個年輕人的才華跟想法，想盡辦法給他資源跟機會讓他能好好發展，後來拉上他創立了V8科研中心。"},
                {Maxwell: "在軍團後期接觸的學生，看對方很認真想學習醫學知識就撥了很多時間專門指導他，認為對方是很勤奮的好孩子。"},
                {Ollie: "直到V8工作後才熟絡起來，雖然都只是跟工作無關的閒聊但兩人說話彷彿沒有年齡差距，有點像閨密一樣，總是在互相發牢騷或是討人情。"},
                {Marina: "自己提拔的學生之一，很支持對方的音樂事業。兩人電波很和，就算是跟工作無關的話題也可以聊很久，每次通電話都會講上好幾個小時。"},
                {Mei: "V8成立後招募到的實習生，看出了她的學習潛力所以後來將她調到身邊當助手，對她很是寵愛，也不忘記對她各種捉弄。"},
                {"Father Chelon": "因為對方是V8科研中心的最大投資人所以會戲稱他為金主爸爸。對他很歡迎，交情似乎不錯，會互相邀請參加GALA。"}
            ]      
        },
        "Betty" : { 
            name: "Betty",
            summary: [
                "三代主線中登場，V8科研中心的創辦人兼首席研究員之一。於章魚軍團出生所以從小接受軍團的教育與訓練，從以前就專攻軍團的能量科技領域，幫忙研究、設計以及管理章魚軍團中能量相關的設施跟裝置，在軍團瓦解的那段時間跟好友和其他幾個人創立了V8科研中心，隸屬於能源發展部門，她常常會徒手抓會放電生物，搞的下屬們很緊張。",
                "個性隨和，溫柔，和藹可親。有種鄰家媽媽的感覺，是那種經常會說「唉呀呀～」的女士。雖然很友好但她也很注重秩序，進入她的部門就得遵守她列的規則，違規的人會被她叨念一番。很喜歡向日葵，辦公室跟家裡都可以看到各種向日葵花樣的物品。",
                "——三代設定還沒安排完，以上待補——"
            ],
            notes: [
                "名字來自電池（Battery），也是任天堂Switch的內部零件之一"
            ],
            relationships: [
                {"Dr. Lapis": "在軍團時期就同樣是研究員，兩人互相熟識很久，是感情非常深厚的好姊妹，經常在公司的走廊或茶水間閒話家常。"},
                {Zoelle: "一次協助考古部門出任務時認識，看見對方的上進心後對她很是欽佩，在聽到她的家境有些困難時決定收容她讓她跟自己一起住。把他當成親女兒一樣照料。"},
                {Ollie: "在V8工作而認識，還挺喜歡和他聊天，有種和兒子談心的感覺，偶爾路過聽到他在談八卦總是會不小心聽的很入神。"}
            ]
        },
        "Ollie" : { 
            name: "Ollie",
            summary: [
                "V8科研中心的一員。於章魚軍團出生所以從小接受軍團的教育與訓練，但他沒有運動神經也不喜歡鑽研知識，會盡量花最少的能量做最少的工作。後來進入V8科研中心的資源管理部門，專門處理人事相關的事務。經常可以在V8大樓的前門櫃臺看到他生無可戀的接電話跟打電話。雖然工作態度毫無熱情但他似乎完全不怕自己會丟工作，因為他知道這個部門很缺人。",
                "個性超隨便，態度散漫，總是一臉無聊的樣子，講話還很毒舌。只有聽到八卦時會很有幹勁。對人有驚人的洞察力，不知何時已經對科研中心裡每個人的感情狀態瞭如指掌，可以說是一個行走的人際關係電話簿。講話方式有點像女高中生。"
            ],
            notes: [
                "名字來自OLED版任天堂Swtich的OLED螢幕",
                "原本打算給他的名字是Oleander，可以配合到OLED四個英文字，也有夾竹桃的意思，但這個名字實在太彆扭了最後還是採用簡短版",
                "這個角色的氣質參考了《荒唐分局》的吉娜"
            ],
            relationships: [
                {"Dr. Lapis": "直到V8工作後才熟絡起來，雖然都只是跟工作無關的閒聊但兩人說話彷彿沒有年齡差距，有點像閨密一樣，總是在互相發牢騷或是討人情。"},
                {Betty: "在V8工作而認識，看她想聊就會一直聊，把對方當成像自己家阿姨一樣的存在。"}
            ]
        },
        "Angelica" : { 
            name: "Angelica",
            summary: [
                "教父先生的親信手下之一，在高領地區活動。出生於深海地區某宗教族群中，在鎮內發生一場慘劇後被教父先生撿走並提拔與訓練多年。認為自己的命運有幸被改寫所以很重視新的生活跟職責。後來她終於被教父先生任命為隊長，領著其他幾個手下幫他控管他在高領地區的勢力。",
                "經常使用的武器從針筒、復古針筒、手術刀、飛刀到鋼絲都有，也曾經用過古代刑具。擅長化學與調製藥劑，組織裡的製毒擔當，擅長用毒液體、毒墨水跟溶劑進行任務。",
                "是個看起來有點陰鬱的少女，除了皺眉以外沒有太多其他的表情。舉止俐落有氣質，心思精明，有著過人的機智。她的計畫力跟領導力也很出眾，還非常注重效率。上面不管派什麼任務都難不倒她，可以看出她對自己的工作技能有十足的自信。",
                "有很多個身分，這些身分的背景跟衣裝都是她自己一手設計的。"
            ],
            notes: [
                "她代表的按鈕是音量-鍵，將名字的A顛倒可拆成V（對應volume）跟-",
                "她的完整名字翻成中文是安潔莉卡，安潔則是小名（英文寫作Angel）",
                "她跟蘭斯同齡"
            ],
            relationships: [
                {"Father Chelon": "讓自己能獲得人生的人物，發誓永遠效忠對方，對他很欣賞也很尊敬，想要獲得他的認可。有時會對他露出撒嬌的一面。稱呼他為「父親大人」或「爸爸」"},
                {Lucian: "在一起任務衝突中相遇，差點互相置對方於死地。最後被安排到同隊，是手下也是伙伴。經常被對方用言語戲弄，會罕見的被他挑起一點情緒。"},                
                {RJ: "從小就跟對方一起在教父先生的提拔下長大，對他的所有事情瞭若指掌，是手下是伙伴也是某種程度上的家人。"},
                {Lance: "一直猜測對方是否知曉自己身分，也知道他會成為自己的敵人而一直對他很警戒，也因為臥底時的相處對他產生了會心軟的情愫而感到很困擾。"},
                {Damian: "教父先生安排給自己的新人，一直盡力指導他，確保他不會搞砸。是手下也是伙伴，有時還是不由自主地替他操心。"},
                {Leon: "因工作需要，偶爾得在賭場與他會面。起初覺得這個人很討厭，相處久了發現對方是少數能談心的對象，有時會對他露出自己比較脆弱的一面。兩人之間總是話中有話。"},
            ],
            variant:[
                {work: "常駐工作裝"}
            ]            
        },
        "Lucian" : { 
            name: "Lucian",
            summary: [
                "教父先生的親信手下之一，在高領地區活動。於章魚軍團出生所以從小接受軍團的教育與訓練，因各項能力出眾成為了軍團中少數的男性高級幹部，特別擅長通訊網路相關的工程領域。透過一通電話認識教父先生，一番交涉後變成他在軍團中的線人，秘密替對方蒐集情報跟佈設局面。在練魚公司被摧毀之後被對方接到陸上並安排到手下小隊中，至此之後在陸上活動。後來變成安潔的下屬之一。",
                "經常使用的武器從一次性手機、遙控器、原子筆、打火機到電線都有。擅長通訊設備相關的破解改造和劫持，除了探查以外還經常負責遠程遙控敵人電子設備，如關閉重生點、改寫跳躍定位或竄改監控等。戰力程度不明，但可以知道的是他曾為了讓安潔當上隊長故意放水。",
                "舉止斯文有禮貌，總是西裝筆挺，做什麼都輕鬆不費力的樣子。表情不明顯但言行舉止經常透露出一點調皮跟好奇的天性。經常用言語調戲同事，特別是對他的上司。"
            ],
            notes: [
                "他代表的按鈕是Switch2的C鍵，故名字中有c並且對應他的通訊相關專長",
                "設計初期的代號是「電話男」，因為所有他相關的橋段他都在跟教父講電話",
                "設定上有加入英國人的概念，而且有蘇格蘭口音，但不確定要怎麼合理解釋所以先當作隱藏設定…"
            ],
            relationships: [
                {Angelica: "在一起任務衝突中相遇，差點互相置對方於死地。最後被安排到同隊，是自己的上司。經常不停地用言語戲弄對方，但又會很忠心的遵守所有吩咐。"},/*對她的能力很欣賞，會忠心的遵守所有吩咐。經常不停地用言語戲弄對方，可見對她很是喜愛。稱呼她為「大小姐」或「我的小姐」*/
                {"Father Chelon": "上司的上司，算是利益關係，認為他是很有趣的大人物。不知道是被他的控權的能力還是談判的技術所吸引，總之很樂意為他效勞。"},/*路西恩是少數敢和對方開玩笑跟回嘴的人。*/
                {RJ: "教父先生安排給自己的伙伴之一。認為跟對方合作起來很輕鬆。看他跟安潔關係親近而更想多多認識。有時會追著他問各種問題，差點沒把對方給煩死。"},
                {Damian: "教父先生安排給自己的伙伴之一。早在以前在軍團時就一直因為工作需要而觀察對方，所以比大部分的人都還瞭解他。也是路西恩經常調戲的對象之一。"}
            ],
            variant:[
                {work: "常駐工作裝"}
            ]            
        },        
        "RJ" : { 
            name: "RJ",
            summary: [
                "教父先生的親信手下之一，在高領地區活動。在貧民窟出生，被教父先生撿走並提拔長大。生活沒什麼其他目標所以對執行任務跟跑業務以外的事基本無感。擅長遠距離狙擊，準度嚇死人，是總是潛伏在陰影中的類型。說話完全不看場面經常讓談判往無法控制的方向發展所以通常只被安排需要勞力的任務，是收拾善後專家，可以說是組織裡的最強清潔工兼工具人。是安潔的伙伴，後來變成其下屬之一。",
                "常用的武器除了組織改造過的古董真槍以及嵌入墨水的特製子彈以外還有剷子、榔頭跟美工刀之類的普通工具。擅長器械管理跟修復，對各種古董槍械的構造很熟悉。",
                "冷血獵犬系，話不多而且表情超少，做事果斷俐落，沒什麼同理心。直言不諱，不管對誰講話都很不客氣，有點沒耐心，似乎也不太擅長抑制衝動，談判力0。"
            ],
            notes: [
                "他代表的按鈕是R鍵，因此以R作為名字開頭",
                "他比安潔小兩歲",
                "他的皮膚紋路是由白蝕症造成的"
            ],
            relationships: [
                {"Father Chelon": "讓自己能獲得人生的人物，非常效忠對方。會全力完成他吩咐的事項。"},
                {Angelica: "從小就跟對方一起在教父先生的提拔下長大，是伙伴也是某種程度上的家人。後來被安排成其下屬。即便一副不耐煩的樣子還是會聽命一切吩咐。"},                
                {Lucian: "突然就被安排到同組一起工作，知道他很有本事但實在沒有很喜歡，有時候真想扁下去。"},
                {Damian: "不靠譜的新人，感覺不適合作這一行。認為要配合他很麻煩。"}
            ],
            variant:[
                {work: "常駐工作裝"},
                {knight: "工作裝2"}
            ]
        },
        "Damian" : { 
            name: "Damian",
            summary: [
                "因為某起涉及家人的案件而被嚴重影響原本的生活，無路可走的狀態下只能投靠教父先生的勢力，正式變成他親信手下團的成員之一。是組內的新人，還在花時間習慣工作內容。他脫離了原本的朋友圈並住在一個房車中，有一台重型機車。似乎一直都還在獨自調查那起案件。",
                "孤狼一匹，個性固執又孤僻，總是眼神兇惡一臉不滿的樣子，老是在想著調查的事情。"
            ],
            notes: [
                "他的名字是安潔給的",
                "他比安潔小兩歲",
            ],
            relationships: [
                {Angelica: "是上司，會聽從她的命令跟指導。每次都可以被她的身手跟表現震驚到。"},
                {Lucian: "手下同事，有認出他是軍團裡的人。感覺他有點討人厭。"},
                {RJ: "手下同事，並沒有很和的來，除了工作需要以外不會互動。"},
                {"Father Chelon": "為了調查才協助，除此以外沒有並沒有想要替他賣命的意願。寧願替安潔工作也不想替他工作。"},
            ],
            variant:[
                {work: "常駐工作裝"},
                {rider: "重機騎士"}
            ]
        },
        "Susie" : { 
            name: "Susie",
            summary: [
                "First appeared in the main story of Splatoon 3. She got caught up in a chain of events related to the research of Alterna along with Wade. Young as she is, Susie is a real go-getter, and her calendar is packed with outdoor activities and volunteer work every single week. As a star patrol leader in the Seagrove Scouts, she's very active and has no problem staying in the wild alone. She has also won the Squid Roll obstacle course championship more than once.",
                "She is brave, cheerful and full of energy, and she's always eager to help others. She never backs down from a challenge and isn't afraid of people or animals much bigger than her. She loves any creature and is especially close with [[Wade's Smallfry|Wade's pet Smallfry]]. She cares a lot about protecting nature and wildlife, and she often shares nature facts with the people around her.",
                "-- Susie's bio is currently WIP, more details coming soon --"
            ],
            notes: [
                "She represents the ▼ button, and her name is derived from \"South\".",
                "The salmon accessory she wears is a handmade item from a charity sale hosted by the Seagrove Scouts. NOT A GRIZZCO MERCH!! Susie adviced everyone to standup against companies like Grizzco and never give them a single penny!"
            ],
            relationships: [
                { Wade: "They met because of his [[Wade's Smallfry|Smallfry]]. She's very curious about him, and since he can be a bit clumsy, she's always eager to help him out. They seem to get along pretty well." },
                { Scott: "Her older brother. She looks up to him a lot, though she sometimes thinks he's too uptight. They still get along well." },
                { Zoelle: "They met in the Seagrove Scouts, and Susie sees her as her biggest rival. They're always trying to outdo each other in scout activities." }
            ],
            variant: [
                { casual: "Casual" },
                { agent3: "Agent 3" },
                { scout: "Scout" }
            ]                                
        },
        "Scott" : { 
            name: "Scott",
            summary: [
                "三代主線中登場，蘇西的哥哥，協助了蘇西和偉德參與的古代調查事件。",
                "是個頭腦清晰、思考縝密的人。對人態度輕蔑，言行舉止總是有種在嫌棄別人或嘲笑別人的味道，經常話中有話。偶爾可以從他身上察覺到一點貴族的氣質。",
                "似乎在一家電視台做著記者的工作。",
                "——三代設定還沒安排完，以上待補——"
            ],
            notes: [
                "他代表的按鈕是截圖鍵，因此以Sc作為名字開頭（對應Sreen Capture）"
            ],
            relationships: [
                {Susie: "親妹妹，雖然不常對她直接表達關心，但互動中透露出一種寵愛，會放任她到處跑也會默默守護。平時也少不了酸她幾句。" },                
                {Wade: "在調查事件中認識，平時幾乎都在挖苦對方，但在對方需要幫忙時還是會出手相助。知道對方家庭的秘密，一直在默默觀察他。"}
            ]            
        },        
        "Zoelle" : { 
            name: "Zoelle",
            summary: [
                "三代主線中登場。在[[蠻殼鎮]]長大，是蘇西在海林童子軍團中的勁敵，跟蘇西一樣是個非常傑出的童子軍小隊長。對於考古學抱有熱情，喜歡收集各種人類相關的歷史文物。在三代主線附近的時間點遇到了V8科研中心的研究員貝蒂並被其收容，後來她被招進了V8科研中心，在考古學與人類科技修復部門實習。",
                "個性沉穩、自立、堅忍不拔，話不多，習慣自己一個人默默學習。專注力很強。總是把情緒藏在內心深處。",
                "她似乎是裁判貓的忠實粉絲。",
                "——三代設定還沒安排完，以上待補——"
            ],
            notes: [
                "她的完整名字翻成中文是佐薇爾，佐伊則是小名（英文寫作Zoey）",
                "她代表的按鈕是ZL鍵，所以名字中含有這兩個字母"
            ],
            relationships: [
                {Susie: "在童子軍團中認識，認為對方是個很有實力的人，兩人經常透過童軍活動來競爭。"},
                {Zarah: "親姐姐，知道對方很辛苦但還是不喜歡她的生活選擇，就算擔心她也不知道要怎麼表達。" },
                {Betty: "是幫助自己並提供住所的好心女士，多虧他才能進入V8鑽研考古，一直很感謝她，願意為她做所有的家事。"},
            ],
            variant:[
                {v8: "V8工作服"},
                {casual: "日常"},
                {scout: "海林童子軍服"},
            ]    
        },
        "Zarah" : { 
            name: "Zarah",
            summary: [
                "佐伊的姐姐，在[[蠻殼鎮]]長大。因為母親生活方式很糟糕，加上家裡很窮，從小就經常被晾在一邊。對生活一直很不滿意，獲得自由後經常用招搖撞騙的方式獲取錢財，擅長編織謊言，詐騙技術高超。她後來替教父先生工作。",
                "個性叛逆，自私利己，有點厭世，覺得自己都管不好自己了實在懶得管別人。是個想幹嘛就幹嘛而且一點都不後悔的人。會用光鮮亮麗的物質生活彌補心理的空缺。",
                "——相關的設定還沒有安排完，以上待補——"
            ],
            notes:[
                "她代表的按鈕是ZR鍵，所以名字中含有這兩個字母"
            ],
            relationships: [
                {"Father Chelon": "上司，給了自己工作。"},
                {Zoelle: "年紀相差很多的妹妹，有想好好照顧她的念頭，可惜對方看起來並不領情。"}
            ]            
        },
        "Paul" : { 
            name: "Paul",
            summary: [
                "在一代主線時間點登場。是高領市一家當鋪的老闆。一次負責給電動遊樂場提供獎品，結果獎品出現問題而向小布尋求幫助。在事情解決後為了感謝對方而經常邀請對方來店裡，特地在當鋪中整理出一個角落給BBB開聚會或作戰會議。",
                "是個友善又風趣的商人大叔，喜歡分享知識、偶爾還會出一些謎題跟知識小問題給店裡的年輕人猜，還是那種經常講老爸笑話的人，偶爾會遭附近的年輕人批評說「很尬」，即使如此還是一直努力在學習年輕人之間流行的事物。很支持大家多玩射擊運動（這樣他的二手武器才有賣頭！）。算是個豪邁的人，但他有時也會露出小氣鬼的一面。"
            ],
            notes: [
                "他代表的按鈕是電源鍵，名字來自Power（電源）"
            ],
            relationships: [
                {Yoni: "在電子遊樂場事件相識。可能因為都是見錢眼開的類型而很合得來，每次對方來店裡時都會拿出一堆當鋪裡的寶物向他炫耀。"},
                {Roy: "當鋪的打工少年，對他很是照顧，看他很喜歡古董武器所以經常傳授他一些古董機械知識跟鑑定技巧。"},
                {Leon: "對方來店裡當東西的時候認識，不知道是不是因為都很勢力眼所以兩人熟的很快，每次對話都在瘋狂挖苦對方互相打嘴炮。"}
            ]                         
        },
        "Leon" : { 
            name: "Leon",
            summary: [
                "某家賭場的人員，精通多種賭桌遊戲還很會應付客人所以是個萬用員工，除了擔任荷官以外有時在賭場的休閒酒吧兼職。非常喜歡打撞球，可以經常看到他在酒吧附設的撞球台一邊聊天一邊陪客人打。",
                "個性輕浮，總是一副無憂無慮﹑老神在在的樣子。很會和人攀談、搭訕跟拍馬屁，總是可以很輕易的把客人的情報問到手。因為個性很有魅力，是賭場裡的萬人迷。",
                "有吸煙的習慣，似乎一直改不掉。"
            ],
            notes: [
                "設定上有加入英國人的概念，而且有蘇格蘭口音，但不確定要怎麼合理解釋所以先當作隱藏設定"
            ],
            relationships: [
                {Paul: "去當鋪當東西的時候認識，不知道是不是因為都很愛錢所以兩人熟的很快，每次對話都在瘋狂挖苦對方互相打嘴炮。"},
                {Angelica: "因工作需要，偶爾得在賭場與她會面。可以看穿她的心思，一直在想辦法讓她放鬆或讓她開心點。對待她特別用心，會稱呼她為「大小姐」「我的小姐」或「我的女神」"},
                {Dorothy: "在章魚軍團學院時期被對方照料過，一次偶然被對方認出來，後來一直保持聯絡，兩人似乎很和的來。某種程度上是啟發自己的人。"}
            ],            
        },        
        "Alan" : { 
            name: "Alan",
            summary: [
                "某家賭場的人員。"
            ],
            notes: [
                "他代表的按鈕是音量-鍵，將名字的A顛倒可拆成V（對應volume）跟-",
            ],
            relationships: [
                {Leon: "同事，成天罵。"}
            ],            
        },
        "Dorothy" : { 
            name: "Dorothy",
            summary: [
                "OCTA的創辦人之一。於章魚軍團出生所以從小接受軍團的教育與訓練並變成章魚女兵。因為無法接受軍團的某條命令進行了反抗，這個行為讓她被放逐到章魚平民農村，她在那裡撿到一隻被當地幫派衝突波及的年幼章魚，也在那結交到不少其他對軍團抱有不滿的居民，他們一直私下互相幫助，一直在等待能從軍團的嚴苛社會中脫逃的機會。在３號擊敗將軍之後趁著騷動一起和同夥離開了[[蛸壺山谷]]，在軟體山上拓荒紮營，正式和同伴們組成了OCTA—章魚自助協會，給其他想離開軍團的章魚開拓了一條上岸的路。之後一直致力於OCTA的指揮與經營，她成功的在軟體山上成立了一家旅館作為OCTA的大本營，之後一直都在那活動。",
                "個性豪爽﹑勇敢又熱心，勤勞又樂觀向上，可以把悲憤化為動力，是個固執不輕易退縮的人，還很會幫人討公道。經常在鼓勵與幫助身邊的人。特別照顧與關注所有從軍團逃出的年輕人，總會特別留意其中幾個。"
            ],
            notes: [
                "她的名字來自Dock，任天堂Switch的底座",
                "她的名字也參考了非裔女科學家Dorothy Vaughan"
            ],
            relationships: [
                {Moyer: "自己的養子，在被放逐到章魚平民農村時撿到。當成親兒子照顧，對他很珍愛也常為他操心，是心上的一塊肉。"},
                {Ada: "是好朋友也是OCTA的同事，看她很努力卻總是看不起自己所以很心疼他。各方面都會拉上她一把，還傳授她很多育兒的知識。"},
                {Minerva: "因為對方來協助OCTA而相識，對她很是喜歡。知道她勤奮又表現優良也很以此為傲。似乎特別關注她的生活近況。"},
                {Edd: "因為對方來協助OCTA而相識，對他很是喜歡。可以看出對方孤高的外表下有顆堅強正直的心。似乎特別關注他的生活近況。"},
                {Blade: "間接促成了OCTA的成立的孩子，認為對方是個閃耀著光輝的小英雄，很感謝他一直以來的幫忙，會默默的守望他。"},
                {Leon: "認出對方是自己年輕時在軍團裡照料過的孩子，從以前就對他特別喜愛，兩人似乎很和的來。"}
            ],
            variant:[
                {octa: "日常"},
                {farm: "軍團時期"}
            ]                                 
        },
        "Ada" : { 
            name: "Ada",
            summary: [
                "全名是淺井愛妲，於章魚軍團出生所以從小接受軍團的教育與訓練，在部隊中工作時認識了一個女孩並和她變成一生的摯友，之後卻在一場章魚軍團的實驗室悲劇中失去了對方。她後來找到對方在這個意外中留下的孩子，致力於要給她更好的生活而自願被調派到平民區，積極參加那時的秘密逃脫組織，在同夥的協助下最後終於成功到了陸上展開新生活，參與了OCTA組織的建成，後來在那邊的收容所長期任職育幼員。",
                "個性悲觀，內向又膽小，還很優柔寡斷，總是把事情往最壞的方向想，在軍隊中也是因為能力在水平以下而總是戰戰兢兢的，是在摯友的陪伴下才終於初次感覺到幸福。在失去摯友之後可能是打擊太大經常會失神或是精神渙散，在養女的多年的陪伴下才逐漸恢復元氣。是個工作勤勞的人，但經常因為態度不夠強硬而被收容所的小章魚們淹沒。"
            ],
            notes: [
                "全名的拼法是Asai Ada，日文寫作アサイ＝エイダ，跟飯田和水田類似",
                "名字Ada來自於Switch的充電器（Adapter）",
                "姓氏的由來是巴西莓（Açaí berry）"
            ],
            relationships: [
                {Mei: "摯友的女兒也是自己的養女，發誓一定要給她最好的生活。看到她笑就覺得一切都值得了，希望她可以平安又永遠開開心心的。"},
                {Freya: "摯友的女兒也是自己的養女，雖然比較晚相認但一樣把對方當親女兒對待，希望她可以永平安又遠開開心心的。因為長的很像自己失去的摯友所以有時看到她會不禁就感傷起來。"},
                {Dorothy: "是朋友也是OCTA的同事，像是師姐一樣的存在，總是被她的勇敢跟堅強打動，一直把她當成榜樣。生活跟心理方面都收到對方的各種支持，很多育兒知識也是從她那裡學的，是少數敢談心的對象。"}
            ],
            variant:[
                {teacher: "幼教老師"},
                {octarian: "軍團時期"}
            ]
        },
        "Father Chelon" : { 
            name: "Father Chelon",
            summary: [
                "安潔、路西恩、RJ的最高級上司，也是給他們分配任務跟下指令的人。他的權力跟影響似乎早在章魚軍團開始活動前就已經滲透到各處。",
                "真實身分不明，總是透過一個海龜雕像外觀的對講機系統給他的手下們傳達訊息。"
            ]
        },
        "Noir" : { 
            name: "Noir",
            summary: [
                "出生於地下章魚社會，被迫替那裡的幫派工作，在一次衝突中逃出後碰巧遇見了在幫忙處理章魚事務的小布，在對方的幫助之下第一次離開地下，得到了在陸上世界生活的機會。沒地方去的他住進小布的家，一邊探索一邊適應新的社會。",
                "是個性格單純、毫無心機的少年，總是憑直覺或本能行動，也因為這樣在戰鬥與運動反應力上有強烈的天賦，在戰場上可以毫不猶豫的做出判斷，是個極為優秀的前鋒戰力。因為成長環境的緣故，他的行為舉止有點像野生動物，還特別喜歡用章魚的姿態行動。社會化程度有些不足，不太理解社會慣常的人際互動模式，陸上語也有點差強人意所以經常出現溝通困難的狀況，但是他的感情很豐沛，對陸上的世界充滿了好奇心。"
            ],
            notes: [
                "這個角色為合作角色，屬於友人@PAI"
            ],
            relationships: [
                {Blade: "朋友"}
            ]   
        },        
        "Moyer" : { 
            name: "Moyer",
            summary: [
                "多蘿希的養子。在地下章魚社會的幫派爭鬥中出生，從一場衝突中倖存的他遇到了剛被章魚軍團放逐到農村的多蘿希，後被對方收養並帶大，母子也在這段期間結識許多想出走的居民，最後他成功和這個團體一起脫離地下，到陸上展開新生活。他是見證OCTA建成的小孩子之一，也被一些元老成員認為是這個自助組織的幸運符。"
            ],
            notes: [
                "這個角色為合作角色，屬於友人@PAI"
            ],
            relationships: [
                {Dorothy: "養母"}
            ]             
        },
        "Mei" : { 
            name: "Mei",
            summary:[
                "愛妲的養女，小名是小莓。在某名研究員秘密主導的基因遺傳實驗中誕生，後來在一場實驗室意外中被愛妲給撿到，之後在愛妲的藏匿之下她們一起到了地下章魚社會的平民農村區域避風頭，在那邊受到了秘密脫逃團體的幫助和扶養，之後在同夥的協助下終於成功到了陸上展開新生活。她是見證OCTA建成的小孩子之一。後來她進入了V8科研中心作實習生，還被瑠璃博士安排成助手。",
                "個性內向容易害羞，是個乖巧也很溫馴的女孩子。同時好奇心很重，對學習特別有天分也很上進。她有驚人的圖像記憶力，能記住所有看過的人事物。"
            ],
            notes: [
                "這個角色為合作角色，屬於友人@奈奈"
            ],
            relationships: [
                {Ada: "養母，被撫養長大並帶到陸地上。起初因爲不太熟悉所以有些距離感，但是在長時間的相處之後發現愛妲是真的關心自己。之後也敞開心胸叫她媽媽。"},
                {Freya: "在陸地上生活一段時間後才相認的姐姐。經常被她拉出門外逛街玩耍，是藍莓的第一個好朋友。 "},
                {"Dr. Lapis":"在V8科研中心實習的上司。雖然會偶爾對自己惡作劇稍微有點困擾，但是從她身上確實學到了許多知識。還是會希望她不要把太多雜務交給自己做（？）"}
            ] 
        },
        "Freya" : { 
            name: "Freya",
            summary: [
                "小莓的姐姐。她剛被生下來時，她的生母為了不讓她捲入某名研究員的研究計畫而向軍團隱瞞了父方的身分，她後來就像其他章魚女兵一樣從小接受軍團的教育與訓練長大，對雙親的發展毫不知情。她在軍團學院中很受歡迎，很多同期的人都認為她是校花。在軍團學院時期擔任過廣播員。她在軍團逐漸瓦解的那段時間成功離開地下，於陸上展開新生活。",
                "是個開朗又充滿元氣的女孩。即使身處於紀律嚴苛的軍團，她臉上的笑容也從沒少過，總能為身邊的人帶來活力。是那種被教官唸過後會俏皮的吐舌頭而讓大家印象深刻的女生。個性單純率直，是把情緒都寫在臉上的類型。充滿少女心、愛漂亮，也喜歡收集可愛的飾品，尤其是兔子相關的周邊。最近似乎對攝影拍照也有點興趣，會拉著妹妹一起出去遊玩拍照。"
            ],
            notes: [
                "這個角色為合作角色，屬於友人@奈奈"
            ],
            relationships:[
                {Mei: "抵達陸上後才相認的妹妹。雖然沒有一起成長，但很快就接受了這個家人，兩人相處很融洽，每次看到對方宅在家裡看書都會想拉著她出門玩。"},
                {Ada: "抵達陸上後相見的養母，一直很疑惑為何她看自己的眼神總是複雜。很感謝她願意撫養自己跟妹妹，常常覺得她的臉色太陰沉所以會策劃各種奇奇怪怪的點子讓她打起精神。"},
            ]
        },
        "Callie" : { 
            name: "Callie",
            summary: [
                "A member of the [[Squid Sisters]], the popular idol duo from [[Inkopolis|Inkopolis City]], and Agent 1 of the [[New Squidbeak Splatoon]]. In the main story of Splatoon 1, she was one of the agents who helped Blade on his missions as Agent 3. Around the time of Splatoon 2, she went missing after getting mixed up with the [[Octarian Army]]. Once things were resolved, she resumed her idol career and continued her agent work with the New Squidbeak Splatoon."
            ]
        },
        "Marie" : { 
            name: "Marie",
            summary: [
                "A member of the [[Squid Sisters]], the popular idol duo from [[Inkopolis|Inkopolis City]], and Agent 2 of the [[New Squidbeak Splatoon]]. In the main story of Splatoon 1, she was one of the agents who helped Blade on his missions as Agent 3. Around the time of Splatoon 2, she put her idol career on hold to search for the missing Callie, and recruited Axel as Agent 4 to investigate in [[Octo Canyon]]. Once things were resolved, she resumed her idol career and continued her agent work with the New Squidbeak Splatoon."
            ]
        },
        "Captain Cuttlefish" : { 
            name: "Captain Cuttlefish",
            summary: [
                "The captain of the [[New Squidbeak Splatoon]]. As a veteran of the Great Turf War, he has been keeping a close eye on what the [[Octarian Army]] is up to. As soon as he caught wind of their new scheme, he formed the New Squidbeak Splatoon with his [[Squid Sisters|two granddaughters]], hoping to stop the [[Octarians]] before they could cause any trouble. He comes across as a twitchy, rather suspicious old man, and it seems that most people don't take him seriously, his granddaughters included.",
                "Around the time of Splatoon 1, he saw potential in Blade and decided to train him as Agent 3. Later, he got trapped in the Deepsea Metro along with Edd, but they managed to escape with the others in the end. Around the time of Splatoon 3, he retired and handed his role as captain over to Blade, but he is still closely involved with the New Squidbeak Splatoon."
            ]
        },
        "DJ Octavio" : { 
            name: "DJ Octavio",
            summary: [
                "章魚軍團的領導人，自從多年前章魚戰敗後就一直計畫著入侵陸上，因此三番兩次計畫擄走電池鯰魚用來當兵器能源。看起來是個嚴苛又兇狠的軍人老頭，實際上他非常在乎自己的人民。"
            ]
        },
        "Marina" : { 
            name: "Marina",
            summary: [
                "曾是章魚軍團的菁英章魚女兵，是在３號擊敗將軍後出走的眾多章魚之一。在陸上遇到小姬後與其組成偶像團體觸手酷妹，一直都在積極的協助上陸的章魚讓他們能有安穩的生活，很熱衷參與OCTA的各種義工活動。在深海地鐵支線中曾經協助過8號對抗威脅。另外她也是V8科研中心的特殊顧問，她與V8的多個部門一起密切參與了秩序計畫虛擬宇宙的開發。"
            ]
        },
        "Pearl" : { 
            name: "Pearl",
            summary: [
                "高領地區有錢人家的千金。遇到飯田後與其組成偶像團體觸手酷妹。因為常常去軟體山練聲而得知OCTA的存在，曾向媒體表示「OCTA真是有夠讚！」，似乎經常給他們提供金錢或物資上的援助，每次隨手捐贈都是一山的東西，搞的大家很傻眼。在深海地鐵支線中曾經協助過8號對抗威脅。後來在秩序計畫支線中跟著8號一起協助V8科研公司調查遊戲中的異常。"
            ]
        }
    };


// ===========================================================
// LORE — English
//
// One entry per lore page, keyed by the lore id from
// data/oc-splatoon-common.js (color lives there).
//
//   title      the big title
//   subtitle   optional — small line under the title
//              (leave it out to hide it in this language)
//   type       small label above the title ("Team", "Organization"…)
//   summary    list of paragraphs, same as character summaries
//
// Link to a lore page from any text with [[OCTA]], [[深海地鐵測驗程序]]
// (any language's title works) or [[Royal Flush|RF]] (custom label).
//
// ORDER: keep entries grouped by type, in this order —
//   1. Team  2. Organization  3. Idol Group  4. Creature
//   5. Location  6. Notes
// Use the same order in oc-splatoon-zhtw.js, oc-splatoon-en.js
// and oc-splatoon-common.js. A new entry goes at the end of its
// type's group.
// ===========================================================

const SPLAT_LORE_DATA_EN = {
    "BBB" : {
        title: "BBB",
        subtitle: "Button Bashing Boys",
        type: "Team",
        summary : [
            "由一群青少年男孩組成的漆彈賽隊伍，主要活動於高領市。隊伍全名為Button Bashing Boys，簡稱BBB。於ME2017中旬組成。",
            "成立的契機來自隊長小布，他原先很排斥漆彈運動也不願意社交，對組隊的事情想都沒想過，是在後來因為參與了一些和地下章魚有關的防衛活動後才開始願意接觸對戰，因此邂逅了亞克，兩人在經歷一番衝突後變成了朋友，他們兩個去魷空塔玩漆彈時經常會帶上好友尤尼，再加上亞克的舊識修經常會吵著要加入，久而久之四個人就玩在了一起並組了名為按鈕少年隊的隊伍。他們是比較休閒的親友團隊伍，偶爾會參加一點比賽。小布後來認識了埃德並邀請他進了隊伍，他有時會作為第五名成員替補其他成員的空缺。",
            "在中後期的時間點，某名成員經常做出會讓成員困擾的行為，最終因為演變得無法收拾而導致隊伍停止活動。"
        ]
    },
    "Royal Flush" : {
        title: "Royal Flush",
        type: "Team",
        summary : [
            "高領市的一支職業漆彈賽隊伍，簡稱RF。於ME2015年底組成。",
            "成立的契機來自隊長黑娜，她於魷空塔開放第一年就一直在TOP榜上常駐，因為逐漸無法從水平較低的單人或雙人排位戰得到滿足，她便接受了粉絲艾咪的提議，讓其以經紀人的身分幫自己組一個隊伍。在成員找齊後，這支隊伍很快在魷空塔的一週年紀念盃中拿下了第一名，就此打響了隊伍的名號，並在那之後用壓倒性的表現和勝率接連參加了各種漆彈競賽，很快的就變成高領地區漆彈聯盟賽中令人聞風喪膽的惡夢。優良的賽績讓這隻隊伍不只賺了許多比賽獎金，似乎也收了不少贊助商的資助。",
            "隊名『皇家同花順』是艾咪以隊裡的成員為靈感想的，黑娜代表Ace、蘭斯代表King、米奈瓦代表Queen、羅伊代表Jack、艾咪則是10。",
            "在後期劇情中似乎因為不可抗力的因素而解散。"
        ]
    },
    "New Squidbeak Splatoon" : {
        title: "New Squidbeak Splatoon",
        type: "Team",
        summary : []
    },
    "OCTA" : {
        title: "OCTA",
        subtitle: "Octarian Community Transition Association",
        type: "Organization",
        summary : [
            "全名為地下章魚過渡自助會。起初只是一小批因為各自的原因想離開軍團社會的章魚團隊，他們趁著３號給軍團造成巨大動盪的時期抓到機會脫逃。為了準備搬去高領市長期生活，他們在位於蛸壺山谷和高領市之間的軟體山上的荒廢軍營中暫時住下。這段時間成員們之間出現了意見分歧，一部份的人認為比起離開，他們更想留下來繼續打造營地以便協助其他仍未能從軍團脫逃出的人；另一部份的成員則認為手上資源不足而堅持盡快下山，兩方因這件事僵持不下，慶幸的是這個紛爭因一位貴人的出現而獲得平緩，她就是常常一人去軟體山上做發聲練習的小姬，她在得知營地的存在後對這個團隊非常欽佩，立刻給他們資助了大量的金錢跟物資，她這時也和住在營地裡的飯田成為了朋友。取得足夠資源後始祖成員們得以在山上建立一個旅館，非營利組織OCTA也是在此時正式成立。很快的這個旅館就變成上陸章魚的中繼站，許多離開軍團的章魚都在這裡為了準備融入陸上生活而住了一小段時間。",
            "後來那些想要離開營地的始祖成員也如願搬去高領市，他們為後期的OCTA擴大了據點和處理的事項範圍，現在隸屬於這個自助會下的建築除了章魚青年公寓以外，也有小章魚收容所，專門收留從軍團的幼稚園和小學帶出來的小章魚，又或是能幫助章魚順利融入陸上的魷魚語補習班，甚至也有一些與互助會合作的診所。"
        ]
    },
    "Octarian Army" : {
        title: "Octarian Army",
        type: "Organization",
        summary : []
    },
    "Vector 8 Research Institute" : {
        title: "Vector 8 Research Institute",
        type: "Organization",
        summary : [
            "一個由前章魚軍團的研究員們聯合創立的研究機構，全名為向量8科研中心，有時會簡稱V8或V8科研中心。",
            "在練魚公司因為CEO的消失和公司的重要設施NILS像被摧毀等種種原因而破產的消息傳出來後，一組菁英章魚工程師認為這是個復興衰退章魚社會的契機。在得到了軍團領導人的同意和資助之後，他們買下練魚公司的資產，在練魚公司的殘骸上建起了這個新的科技中心。",
            "象徵著「給章魚的無限潛能一個方向」，向量８科研中心是一個為了應對章魚社會面臨的當前問題而特別設立的研究機構。在經過數次人力整頓後，現在的V8分成了八個部門—能源部、考古部、機械部、人事部、記憶部、醫療部、人工智能部、虛擬實境部。其中後四個部門是為了對當初練魚公司的深海地鐵測驗程序進行逆向工程而設立的。",
            "後來的秩序計畫虛擬宇宙正是由他們與飯田聯合開發。"
        ]
    },
    "Squid Sisters": {
        title: "Squid Sisters",
        type: "Idol Group",
        summary: []
    },
    "Wade's Smallfry" : {
        title: "Wade's Smallfry",
        type: "Creature",
        summary : [
            "在第三代主線的時間點登場的小生物，在被偉德撿到後和他一起被捲入一場古代調查相關的大冒險。",
            "他因為很會大便所以偉德總是在幫牠換褲子，因此被取名便便王。偉德也會暱稱牠「便便」或「尿布」，似乎沒有一個固定的名字。"
        ]
    },
    "Inkopolis" : {
        title: "Inkopolis",
        type: "Location",
        summary : [
            "在高領地區中心的大都會，最著名的景點是高領市中心和高領廣場。",
            "又稱尚興市。"
        ]
    },
    "Inkadia" : {
        title: "Greater Inkopolis",
        type: "Location",
        summary : [
            "跟蠻殼地區和鹽辛地區比起來相對比較現代化的地區。高領市以外，軟體山和章魚軍團管轄的山谷都在高領地區的範疇以內，在水下也有深海村鎮。"
        ]
    },
    "Inkopolis Plaza" : {
        title: "Inkopolis Plaza",
        type: "Location",
        summary : [
            "高領市的樞紐，以海龍王百貨和魷空塔聞名。自從魷空塔在ME2015年開放後因為聚集了許多前來比賽的魷魚而變得更加繁忙，一度還造成人潮擁擠，間接加速了高領廣場的改建計畫。"
        ]
    },
    "Inkopolis Square": {
        title: "Inkopolis Square",
        type: "Location",
        summary: [
            "高領市的一處街區。原先這裡是治安有些問題的區域，但在高領市政府在實施改建計畫、並在ME2017年完成十代塔的翻修、以其作為第二個辦理漆彈賽的地方以後，變成了另一個年輕魷魚聚集的場所。"
        ]
    },
    "Inkopolis Tower": {
        title: "Inkopolis Tower",
        type: "Location",
        summary: []
    },
    "Bar‘N’Arcades": {
        title: "Bar‘N’Arcades",
        type: "Location",
        summary: []
    },
    "Splatsville": {
        title: "Splatsville",
        type: "Location",
        summary: []
    },
    "Octo Valley": {
        title: "Octo Valley",
        type: "Location",
        summary: []
    },
    "Octo Canyon": {
        title: "Octo Canyon",
        type: "Location",
        summary: []
    },
    "Deepsea Metro" : {
        title: "Deepsea Metro",
        type: "Location",
        summary : []
    },
    "Splat Battle": {
        title: "Splat Battle",
        type: "Notes",
        summary: [
            "以魷魚和章魚天生就可以噴墨和躲藏在墨水裡的特性所設計的墨水運動。在軟體世紀初（距離海產現代2000年前）就有文獻紀載基本規則與器材的需求，是一項歷史悠久的競技運動。",
            "最原始的漆彈賽由兩隊各四名的運動員在事先劃好範圍的場地較量。兩方事先需換成不同顏色的墨水，接上場地內兩側的重生裝置，且每位隊員需各持有能夠潑灑墨水的武器，基本的規則為在三分鐘的時限內用墨水互相對抗並噴灑對手與場地，由最後墨水面積比較大的隊獲勝。近年來的國際漆彈協會更是批准了新的漆彈賽規則，衍生出了搶地、搶塔、搶魚和搶蛤的形式。",
            "對於近代的年輕魷魚來說，漆彈是多數運動項目的其中一種最為刺激的項目。在一般的學校中，雖然也有各種不同的球類運動校隊，但年度的國高中漆彈聯賽仍是各間學校最受矚目的賽事。即使如此，由於被墨水噴灑而重生的痛感並不是一般大眾可以輕易承受的負擔，所以許多人最多也只會觀看比賽，而不會真的參與其中。直到2000年初無痛重生裝置被研發出來之前，漆彈都還是一種只有少數魷魚才會參與的運動。"
        ]
    },
    "Humanoid Cephalopod": {
        title: "Humanoid Cephalopod",
        type: "Notes",
        summary: [
            "魷魚和章魚的通稱。這兩個種族在演化出了獨特的身體構造－他們的身體構造大部分是以墨水組成。他們的身體在沾上太多不同顏色的墨水或是過量的水時，就會因為身體無法保持形狀而溶解身亡。（待補）"
        ]
    },
    "Octarians" : {
        title: "Octarians",
        type: "Notes",
        summary : []
    },    
    "Elite Octoling Soldier" : {
        title: "Elite Octoling Soldier",
        type: "Notes",
        summary : []
    },
    "Deepsea Metro Testing Procedure" : {
        title: "Deepsea Metro Testing Procedure",
        type: "Notes",
        summary : []
    },
    "Project Lapis Lazuli" : {
        title: "Project Lapis Lazuli",
        subtitle: "Vector 8 Research Institute",
        type: "Notes",
        summary : [
            "由來自軍團的研究員主導，將練魚公司廢棄倉庫中找到的「已經互相汙染」的記憶魚板進行分解與數據化等逆向工程。企劃名稱的由來是因為主導企畫的研究員四宮黛芬認為這些被污染的記憶魚板類似變質岩。"
        ]
    }
};
