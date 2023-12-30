const keywordList = [
  { id: 1, label: "만남/관계" },
  { id: 2, label: "만남/관계" },
  { id: 3, label: "만남/관계" },
  { id: 4, label: "만남/관계" },
  { id: 5, label: "만남/관계" },
  { id: 6, label: "만남/관계" },
  { id: 7, label: "만남/관계" },
  { id: 8, label: "만남/관계" },
  { id: 9, label: "만남/관계" },
  { id: 10, label: "만남/관계" },
  { id: 11, label: "만남/관계" },
  { id: 12, label: "만남/관계" },
  { id: 13, label: "만남/관계" },
  { id: 14, label: "만남/관계" },
  { id: 15, label: "만남/관계" },
  { id: 16, label: "만남/관계" },
  { id: 17, label: "만남/관계" },
  { id: 18, label: "만남/관계" },
  { id: 19, label: "만남/관계" },
  { id: 20, label: "만남/관계" },
  { id: 21, label: "만남/관계" },
  { id: 22, label: "만남/관계" },
  { id: 23, label: "만남/관계" },
  { id: 24, label: "만남/관계" },
];

const wishList = [
  { id: 1, label: "신앙의 훈련과 성장" },
  { id: 2, label: "가정의 평화와 행복" },
  { id: 3, label: "일터의 축복" },
  { id: 4, label: "인간관계의 축복" },
  { id: 5, label: "공부/학업의 지혜" },
  { id: 6, label: "경제적 축복" },
  { id: 7, label: "인생의 비전 발견" },
  { id: 8, label: "양육/교육의 은혜" },
  { id: 9, label: "일상의 기쁨과 평안" },
  { id: 10, label: "건강의 치유와 회복" },
  { id: 11, label: "마음의 평안과 휴식" },
  { id: 12, label: "연애/결혼의 축복" },
];

const letterList: {
  [key: number]: {
    ko: { text: string; info: string };
    en: { text: string; info: string };
  }[];
} = {
  1: [
    {
      ko: {
        text: "또 무리에게 이르시되\n아무든지 나를 따라오려거든\n자기를 부인하고 날마다\n제 십자가를 지고 나를\n따를 것이니라.",
        info: "누가복음 9:23",
      },
      en: {
        text: `'Then he said to them all: \n"If anyone would come after me, he \nmust deny himself and take up his\ncross daily and follow me."`,
        info: "Luke 9:23",
      },
    },
    {
      ko: {
        text: "그런즉 너희는 먼저 \n그의 나라와 그의 의를 구하라\n그리하면 이 모든 것을\n너희에게 더하시리라.",
        info: "마태복음6:33 ",
      },
      en: {
        text: "'But seek first his kingdom \nand his righteousness, \nand all these things will be given to\nyou as well.",
        info: "Matthew 6:33",
      },
    },
    {
      ko: {
        text: "이 세상이나 세상에 있는 \n것들을 사랑하지 말라 \n누구든지 세상을 사랑하면 \n아버지의 사랑이\n그 안에 있지 아니하니.",
        info: "요한일서 2:15",
      },
      en: {
        text: "'Do not love the world or anything in\nthe world. If anyone loves the world,\nthe love of the Father is not in him.",
        info: "John 2:15",
      },
    },
    {
      ko: {
        text: "오직 사랑 안에서 참된 것을\n하여 범사에 그에게까지 \n자랄지라 그는 머리니\n곧 그리스도라.",
        info: "에베소서 4:15",
      },
      en: {
        text: "Instead, speaking the truth in love,\nwe will in all things grow up into him\nwho is the Head, that is, Christ.",
        info: "Ephesians 4:15",
      },
    },
    {
      ko: {
        text: "우리가 선을 행하되\n낙심하지 말지니\n포기하지 아니하면\n때가 이르매 거두리라.",
        info: "갈라디아서 6:9",
      },
      en: {
        text: "Let us not become weary in doing\ngood, for at the proper time we will\nreap a harvest if we do not give up.",
        info: "Galatians 6:9",
      },
    },
  ],
  2: [
    {
      ko: {
        text: "여호와를 경외하며\n그의 길을 걷는 자마다 복이\n있도다. 네가 네 손이\n수고한 대로 먹을 것이라\n네가 복되고 형통하리로다.",
        info: "시편128:1-2",
      },
      en: {
        text: "Blessed are all who fear the LORD,\nwho walk in his ways. You will eat\nthe fruit of your labor; blessings and\nprosperity will be yours.",
        info: "Psalms 128:1-2",
      },
    },
    {
      ko: {
        text: "오직 나와 내집은 여호와를\n섬기겠노라 하니.",
        info: "여호수아 24:15",
      },
      en: {
        text: "But as for me and my household,\nwe will serve the LORD.",
        info: "Joshua 24:15",
      },
    },
    {
      ko: {
        text: "여호와의 인자하심은 자기를\n경외하는 자에게 영원부터\n영원까지 이르며 그의 의는 \n자손의 자손에게 이르리니.",
        info: "시편103:17",
      },
      en: {
        text: "But from everlasting to everlasting\nthe LORD's love is with those who\nfear him, and his righteousness with\ntheir children's children",
        info: "Psalms 103:17",
      },
    },
    {
      ko: {
        text: "하나님의 나라는 먹는 것과\n마시는 것이 아니요.\n오직 성령 안에 있는\n의와 평강과 희락이라.",
        info: "로마서 14:17",
      },
      en: {
        text: "For the kingdom of God is not a\nmatter of eating and drinking, but of\nrighteousness, peace and joy in the\nHoly Spirit,",
        info: "Romans 14:17",
      },
    },
    {
      ko: {
        text: "화평하게 하는 자는 \n복이 있나니.\n그들이 하나님의 아들이라\n일컬음을 받을 것임이요.",
        info: "마태복음 5:9",
      },
      en: {
        text: "Blessed are the peacemakers, for\nthey will be called sons of God.",
        info: "Matthew 5:9",
      },
    },
  ],
  3: [
    {
      ko: {
        text: "무슨 일을 하든지 \n마음을 다하여 주께 하듯 하고\n사람에게 하듯 하지 말라.",
        info: "골로새서 3:23",
      },
      en: {
        text: "Whatever you do, work at it with all\nyour heart, as working for the Lord,\nnot for men,",
        info: "Colossians 3:23",
      },
    },
    {
      ko: {
        text: "그런즉 너희가 먹든지\n마시든지 무엇을 하든지\n다 하나님의 영광을\n위하여 하라.",
        info: "고린도전서 10:31",
      },
      en: {
        text: "So whether you eat or\ndrink or whatever you do, do it all for the\nglory of God.",
        info: "1 Corinthians 10:31",
      },
    },
    {
      ko: {
        text: "각각 자기 일을 돌볼뿐더러\n또한 각각 다른 사람들의 \n일을 돌보아 나의 기쁨을\n충만하게 하라.",
        info: "빌립보서 2:4",
      },
      en: {
        text: "Each of you should look not only to\nyour own interests, but also to the\ninterests of others.",
        info: "Philippians 2:4",
      },
    },
    {
      ko: {
        text: "주 우리 하나님의 은총을\n우리에게 내리게 하사\n우리의 손이 행한 일을\n우리에게 견고하게 하소서.",
        info: "시편 90:17",
      },
      en: {
        text: "May the favor of the Lord our God\nrest upon us; establish the work of\nour hands for us",
        info: "Psalms 90:17",
      },
    },
    {
      ko: {
        text: "너의 행사를 \n여호와께 맡기라\n그리하면 네가 경영하는 것이이루어지리라.",
        info: "잠언 16:3",
      },
      en: {
        text: "Commit to the LORD whatever you\ndo, and your plans will succeed.",
        info: "Proverbs 16:3",
      },
    },
  ],
  4: [
    {
      ko: {
        text: "서로 친절하게 하며 \n불쌍히 여기며 서로 \n용서하기를 하나님이 \n그리스도 안에서 너희를\n용서하심과 같이 하라.",
        info: "에베소서 4:32",
      },
      en: {
        text: "Be kind and compassionate to\none another, forgiving each\nother, just as in Christ God\nforgave you.",
        info: "Ephesians 4:32",
      },
    },
    {
      ko: {
        text: "아무 일에든지 다툼이나\n허영으로 하지 말고 오직\n겸손한 마음으로 각각\n자기보다 남을 낫게 여기고.",
        info: "빌립보서 2:3",
      },
      en: {
        text: "Do nothing out of selfish\nambition or vain conceit, but in\nhumility consider others better\nthan yourselves.",
        info: "Philippians 2:3",
      },
    },
    {
      ko: {
        text: "유순한 대답은 분노를\n쉬게 하여도 과격한 말은\n노를 격동하느니라.",
        info: "잠언 15:1",
      },
      en: {
        text: "A gentle answer turns away\nwrath, but a harsh word stirs\nup anger.",
        info: "Proverbs 15:1",
      },
    },

    {
      ko: {
        text: "보라 형제가 연합하여\n동거함이 어찌 그리 선하고\n아름다운고.",
        info: "시편 133:1",
      },
      en: {
        text: "How good and pleasant it is\nwhen brothers live together in\nunity!",
        info: "Psalms 133:1",
      },
    },

    {
      ko: {
        text: "형제를 사랑하여 서로\n우애하고 존경하기를\n서로 먼저 하며.",
        info: "로마서 12:10",
      },
      en: {
        text: "Be devoted to one another in\nbrotherly love. Honor one\nanother above yourselves.",
        info: "Romans 12:10",
      },
    },
  ],
  5: [
    {
      ko: {
        text: "지혜 있는 자에게 교훈을\n더하라 그가 더욱 \n지혜로워질 것이요 \n의로운 사람을 가르치라 \n그의 학식이 더하리라.",
        info: "잠언 9:9",
      },
      en: {
        text: "Instruct a wise man and he will be\nwiser still; teach a righteous man\nand he will add to his learning.",
        info: "Proverbs 9:9",
      },
    },

    {
      ko: {
        text: "여호와를 경외하는 것이\n지식의 근본이거늘 미련한\n자는 지혜와 훈계를\n멸시하느니라.",
        info: "잠언 1:7",
      },
      en: {
        text: "The fear of the LORD is the\nbeginning of knowledge, but fools\ndespise wisdom and discipline.",
        info: "Proverbs 1:7",
      },
    },

    {
      ko: {
        text: "내가 기도하노라\n너희 사랑을 지식과\n모든 총명으로 점점 더\n풍성하게 하사.",
        info: "빌립보서 1:9",
      },
      en: {
        text: "And this is my prayer: that your love\nmay abound more and more in\nknowledge and depth of insight,",
        info: "Philippians 1:9",
      },
    },
    {
      ko: {
        text: "대저 여호와는 지혜를\n주시며 지식과 명철을\n그 입에서 내심이며.",
        info: "잠언 2:6",
      },
      en: {
        text: "For the LORD gives wisdom, and\nfrom his mouth come knowledge\nand understanding.",
        info: "Proverbs 2:6",
      },
    },

    {
      ko: {
        text: "너는 마음을 다하여\n여호와를 신뢰하고\n네 명철을 의지하지 말라.",
        info: "잠언 3:5",
      },
      en: {
        text: "Trust in the LORD with all your heart\nand lean not on your own\nunderstanding",
        info: "Proverbs 3:5",
      },
    },
  ],
  6: [
    {
      ko: {
        text: "네 하나님 여호와를\n기억하라 그가 네게 재물\n얻을 능력을 주셨음이라.",
        info: "신명기 8:18",
      },
      en: {
        text: "But remember the LORD your God,\nfor it is he who gives you the ability\nto produce wealth",
        info: "Deuteronomy 8:18",
      },
    },

    {
      ko: {
        text: "주라 그리하면 너희에게\n줄 것이니 곧 후히 되어\n누르고 흔들어 넘치도록 하여\n너희에게 안겨 주리라.",
        info: "누가복음 6:38",
      },
      en: {
        text: "Give, and it will be given to you. A\ngood measure, pressed down,\nshaken together and running over,\nwill be poured into your lap.",
        info: "Luke 6:38",
      },
    },
    {
      ko: {
        text: "나의 하나님이 그리스도\n예수 안에서 영광 가운데\n그 풍성한 대로 너희 모든\n쓸 것을 채우시리라.",
        info: "빌립소서 4:19",
      },
      en: {
        text: "And my God will meet all your\nneeds according to his glorious\nriches in Christ Jesus.",
        info: "Philippians 4:19",
      },
    },

    {
      ko: {
        text: "내가 어려서부터 늙기까지\n의인이 버림을 당하거나 그의\n자손이 걸식함을 보지\n못하였도다.",
        info: "시편 37:25",
      },
      en: {
        text: "I was young and now I am old, yet I\nhave never seen the righteous\nforsaken or their children begging\nbread.",
        info: "Psalms 37:25",
      },
    },

    {
      ko: {
        text: "겸손과 여호와를 경외함의\n보상은 재물과 영광과\n생명이니라.",
        info: "잠언22:4",
      },
      en: {
        text: "Humility and the fear of the LORD\nbring wealth and honor and life.",
        info: "Proverbs 22:4",
      },
    },
  ],
  7: [
    {
      ko: {
        text: "푯대를 향하여 그리스도\n예수 안에서 하나님이\n위에서 부르신 부름의 상을\n위하여 달려가노라.",
        info: "빌립보서 3:14",
      },
      en: {
        text: "I press on toward the goal to win\nthe prize for which God has called\nme heavenward in Christ Jesus.",
        info: "Philippians 3:14",
      },
    },
    {
      ko: {
        text: "또 여호와를 기뻐하라\n그가 네 마음의 소원을\n네게 이루어 주시리로다.",
        info: "시편 37:4",
      },
      en: {
        text: "Delight yourself in the\nLORD and he will give you the desires of your\nheart.",
        info: "Psalms 37:4",
      },
    },

    {
      ko: {
        text: "너희 안에서 착한 일을\n시작하신 이가 그리스도\n예수의 날까지 이루실 줄을\n우리는 확신하노라.",
        info: "빌립소서 1:6",
      },
      en: {
        text: "being confident of this, that he who\nbegan a good work in you will carry\nit on to completion until the day of\nChrist Jesus.",
        info: "Philippians 1:6",
      },
    },

    {
      ko: {
        text: "우리는 그가 만드신 바라\n그리스도 예수 안에서 \n선한 일을 위하여 \n지으심을 받은 자니.",
        info: "에베소서 2:10",
      },
      en: {
        text: "For we are God's workmanship,\ncreated in Christ Jesus to do good\nworks",
        info: "Ephesians 2:10",
      },
    },
    {
      ko: {
        text: "너희 안에서 행하시는 이는\n하나님이시니 자기의 기쁘신\n뜻을 위하여 너희에게 소원을\n두고 행하게 하시나니.",
        info: "빌립보서 2:13",
      },
      en: {
        text: "for it is God who works in you to will\nand to act according to his good\npurpose.",
        info: "Philippians 2:13",
      },
    },
  ],
  8: [
    {
      ko: {
        text: "너는 마음을 다하고 뜻을\n다하고 힘을 다하여 네 하나님\n여호와를 사랑하라.",
        info: "신명기 6:5",
      },
      en: {
        text: "Love the LORD your God with all\nyour heart and with all your soul\nand with all your strength.",
        info: "Deuteronomy 6:5",
      },
    },
    {
      ko: {
        text: "아버지가 자식을 긍휼히\n여김 같이 여호와께서는\n자기를 경외하는 자를\n긍휼히 여기시나니.",
        info: "시편 103:13",
      },
      en: {
        text: "As a father has compassion on his\nchildren, so the LORD has\ncompassion on those who fear him",
        info: "Psalms 103:13",
      },
    },

    {
      ko: {
        text: "또 아비들아 너희 자녀를\n노엽게 하지 말고 오직 주의\n교훈과 훈계로 양육하라.",
        info: "에베소서6:4",
      },
      en: {
        text: "Fathers, do not exasperate your\nchildren; instead, bring them up in\nthe training and instruction of the\nLord.",
        info: "Ephesians 6:4",
      },
    },
    {
      ko: {
        text: "네 자식을 징계하라 \n그리하면 그가 너를 평안하게 하겠고 또 네 마음에\n기쁨을 주리라.",
        info: "잠언 29:17",
      },
      en: {
        text: "Discipline your son, and he will give\nyou peace; he will bring delight to\nyour soul.",
        info: "Proverbs 29:17",
      },
    },

    {
      ko: {
        text: "대저 여호와께서 그\n사랑하시는 자를 징계\n하시기를 마치 아비가\n그 기뻐하는 아들을 징계함\n같이 하시느니라",
        info: "잠언 3:12",
      },
      en: {
        text: "because the LORD disciplines those\nhe loves, as a father the son he\ndelights in.",
        info: "Proverbs 3:12",
      },
    },
  ],
  9: [
    {
      ko: {
        text: "주의 법을 사랑하는\n자에게는 큰 평안이 있으니\n그들에게 장애물이\n없으리이다.",
        info: "시편 119:165",
      },
      en: {
        text: "'Great peace have they who love\nyour law, and nothing can make\nthem stumble.",
        info: "Psalms 119:165",
      },
    },

    {
      ko: {
        text: "평안을 너희에게 끼치노니\n곧 나의 평안을 너희에게\n주노라 내가 너희에게\n주는 것은 세상이 주는 것과\n같지 아니하니라.",
        info: "요한복음 14:27",
      },
      en: {
        text: "Peace I leave with you; my peace I\ngive you. I do not give to you as the\nworld gives.",
        info: "John 14:27",
      },
    },
    {
      ko: {
        text: "여호와께서 자기 백성에게\n힘을 주심이여 여호와께서\n자기 백성에게 평강의\n복을 주시리로다.",
        info: "시편 29:11",
      },
      en: {
        text: "The LORD gives strength to his\npeople; the LORD blesses his\npeople with peace.",
        info: "Psalms 29:11",
      },
    },

    {
      ko: {
        text: "마음의 즐거움은 얼굴을\n빛나게 하여도 마음의 근심은\n심령을 상하게 하느니라.",
        info: "잠언 15:13",
      },
      en: {
        text: "A happy heart makes the face\ncheerful, but heartache crushes the\nspirit.",
        info: "Proverbs 15:13",
      },
    },

    {
      ko: {
        text: "주께서 생명의 길을 내게\n보이시리니 주의 앞에는\n충만한 기쁨이 있고 주의\n오른쪽에는 영원한\n즐거움이 있나이다.",
        info: "시편 16:11",
      },
      en: {
        text: "You have made known to me the\npath of life; you will fill me with joy in\nyour presence, with eternal\npleasures at your right hand.",
        info: "Psalms 16:11",
      },
    },
  ],
  10: [
    {
      ko: {
        text: "상심한 자들을 고치시며\n그들의 상처를 싸매시는도다.",
        info: "시편147:3",
      },
      en: {
        text: "He heals the brokenhearted and\nbinds up their wounds.",
        info: "Psalm 147:3",
      },
    },

    {
      ko: {
        text: "네 하나님 여호와를 섬기라\n그리하면 여호와가 너희의\n양식과 물에 복을 내리고\n너희 중에서 병을 제하리니.",
        info: "출애굽기23:25 ",
      },
      en: {
        text: "Worship the LORD your God, and\nhis blessing will be on your food\nand water. I will take away sickness\nfrom among you,",
        info: "Exodus 23:25",
      },
    },
    {
      ko: {
        text: "이는 선지자 이사야를\n통하여 하신 말씀에 우리의\n연약한 것을 친히 담당하시고\n병을 짊어지셨도다 함을 \n이루려 하심이더라.",
        info: "마태복음 8:17",
      },
      en: {
        text: "This was to fulfill what was spoken\nthrough the prophet Isaiah: 'He\ntook up our infirmities and carried\nour diseases.'",
        info: "Matthew 8:17",
      },
    },

    {
      ko: {
        text: "이에 그들이 그들의 고통\n때문에 여호와께 부르짖으매\n그가 그들의 고통에서 그들을\n구원하시되.",
        info: "시편107:19",
      },
      en: {
        text: "Then they cried to the LORD in their\ntrouble, and he saved them from\ntheir distress.",
        info: "Psalms 107:19",
      },
    },

    {
      ko: {
        text: "내 영혼아\n여호와를 송축하며\n그의 모든 은택을 잊지 말라\n그가 네 모든 죄를 사하시고\n네 모든 병을 고치시며.",
        info: "시편 103:2-3",
      },
      en: {
        text: "Praise the LORD, O my soul, and\nforget not all his benefits . who\nforgives all your sins and heals all\nyour diseases",
        info: "Psalms 103:2-3",
      },
    },
  ],
  11: [
    {
      ko: {
        text: "나는 마음이 온유하고 \n겸손하니 나의 멍에를 메고\n내게 배우라 그리하면\n너희 마음이 쉼을 얻으리니.",
        info: "마태복음 11:29",
      },
      en: {
        text: "Take my yoke upon you and learn\nfrom me, for I am gentle and humble\nin heart, and you will find rest for\nyour souls.",
        info: "Matthew 11:29",
      },
    },

    {
      ko: {
        text: "평안을 너희에게 끼치노니\n곧 나의 평안을 너희에게\n주노라 내가 너희에게 주는\n것은 세상이 주는 것과\n같지 아니하니라.",
        info: "요한복음 14:27",
      },
      en: {
        text: "Peace I leave with you; my peace I\ngive you. I do not give to you as the\nworld gives.",
        info: "John 14:27",
      },
    },

    {
      ko: {
        text: "여호와께서 자기 백성에게\n힘을 주심이여 여호와께서\n자기 백성에게 평강의 복을\n주시리로다.",
        info: "시편29:11",
      },
      en: {
        text: "The LORD gives strength to his\npeople; the LORD blesses his\npeople with peace.",
        info: "Psalms 29:11",
      },
    },

    {
      ko: {
        text: "주의 법을 사랑하는\n자에게는 큰 평안이 있으니\n그들에게 장애물이 \n없으리이다.",
        info: "시편 119:165",
      },
      en: {
        text: "Great peace have they who love\nyour law, and nothing can make\nthem stumble..",
        info: "Psalms 119:165 ",
      },
    },

    {
      ko: {
        text: "주께서 심지가 견고한 자를\n평강하고 평강하도록\n지키시리니 이는 그가 주를\n신뢰함이니이다.",
        info: "이사야 26:3",
      },
      en: {
        text: "You will keep in perfect peace him\nwhose mind is steadfast, because\nhe trusts in you.",
        info: "Isaiah 26:3",
      },
    },
  ],
  12: [
    {
      ko: {
        text: "집과 재물은\n조상에게서 상속하거니와\n슬기로운 아내는\n여호와께로서 말미암느니라.",
        info: "잠언 19:14",
      },
      en: {
        text: "Houses and wealth are inherited\nfrom parents, but a prudent wife is\nfrom the LORD.",
        info: "Proverbs 19:14",
      },
    },

    {
      ko: {
        text: "네 집 안방에 있는 네 아내는\n결실한 포도나무 같으며\n네 식탁에 둘러 앉은 자식들은\n어린 감람나무 같으리로다.",
        info: "시편 128:3",
      },
      en: {
        text: "Your wife will be like a fruitful vine\nwithin your house; your sons will be\nlike olive shoots around your table.",
        info: "Psalms 128:3",
      },
    },

    {
      ko: {
        text: "청년이 무엇으로 그의 \n행실을 깨끗하게 하리이까\n주의 말씀만 지킬 \n따름이니이다.",
        info: "시편 119:9",
      },
      en: {
        text: "How can a young man keep his way\npure? By living according to your\nword.",
        info: "Psalms 119:9",
      },
    },

    {
      ko: {
        text: "또한 너는 청년의\n정욕을 피하고 주를 깨끗한\n마음으로 부르는 자들과\n함께 의와 믿음과 사랑과\n화평을 따르라.",
        info: "디모데후서 2:22",
      },
      en: {
        text: "Flee the evil desires of youth, and\npursue righteousness, faith, love\nand peace, along with those who\ncall on the Lord out of a pure heart.",
        info: "2 Timothy 2:22",
      },
    },
    {
      ko: {
        text: "두 사람이 한 사람보다\n나음은 그들이 수고함으로\n좋은 상을 얻을 것임이라.",
        info: "전도서 4:9",
      },
      en: {
        text: "Two are better than one, because\nthey have a good return for their\nwork:",
        info: "Ecclesiastes 4:9 ",
      },
    },
  ],
};

export const KeywordRepository = {
  getKeywordList: () => {
    return keywordList;
  },
  getWishList: () => {
    return wishList;
  },
  getLetter: (id: number) => {
    return letterList[id];
  },
};
