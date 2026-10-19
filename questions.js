const QUESTIONS_POOL = [
  {
    "id": 401,
    "question": "How is man \"tempted\"?",
    "options": [
      "They will be raised to life again",
      "He is enticed by his own lust",
      "Naomi",
      "The fruit of the vine"
    ],
    "correctIndex": 1,
    "correctAnswer": "He is enticed by his own lust",
    "scriptureRef": "Jam 1:14"
  },
  {
    "id": 402,
    "question": "What natural disaster happened when Abram and Sarai arrived in the land of Canaan?",
    "options": [
      "Twin",
      "Vineyard",
      "A famine",
      "Forty years"
    ],
    "correctIndex": 2,
    "correctAnswer": "A famine",
    "scriptureRef": "Gen 12:10"
  },
  {
    "id": 403,
    "question": "Which disciple did Paul commend for having \"the same faith his mother had\"?",
    "options": [
      "32,000",
      "Timothy",
      "Archelaus",
      "They were swallowed up by the earth"
    ],
    "correctIndex": 1,
    "correctAnswer": "Timothy",
    "scriptureRef": "2 Tim 1:5"
  },
  {
    "id": 404,
    "question": "What did the shepherds do after they had visited Jesus?",
    "options": [
      "Silver",
      "Spread the news about Jesus' birth",
      "Tarsus",
      "Ten"
    ],
    "correctIndex": 1,
    "correctAnswer": "Spread the news about Jesus' birth",
    "scriptureRef": "Luke 2:17"
  },
  {
    "id": 405,
    "question": "Who went back to Jerusalem after the captivity to encourage the people to build the walls of the city again?",
    "options": [
      "Jewels and clothing",
      "Nehemiah",
      "Ammon",
      "Foolishness"
    ],
    "correctIndex": 1,
    "correctAnswer": "Nehemiah",
    "scriptureRef": "Neh 2:17"
  },
  {
    "id": 406,
    "question": "Who was the first of the apostles to perform a miracle in the name of Jesus?",
    "options": [
      "Trumpets and cymbals",
      "Blessed is the man who walks not in the",
      "Peter",
      "Myrtle"
    ],
    "correctIndex": 2,
    "correctAnswer": "Peter",
    "scriptureRef": "Acts 3:6"
  },
  {
    "id": 407,
    "question": "How did Korah and his family die after seeking priesthood duties beyond those they already had?",
    "options": [
      "It became as black as sackcloth (of hair)",
      "A shining light from heaven",
      "They were swallowed up by the earth",
      "Gihon"
    ],
    "correctIndex": 2,
    "correctAnswer": "They were swallowed up by the earth",
    "scriptureRef": "Num 16:1-35"
  },
  {
    "id": 408,
    "question": "What was the name of Isaac's wife?",
    "options": [
      "Rebekah",
      "His nephew",
      "offered. (Lev 7:15; 22:30) Zebulun",
      "yourself unspotted from the world (Jam 1:27) Midnight"
    ],
    "correctIndex": 0,
    "correctAnswer": "Rebekah",
    "scriptureRef": "Gen 24:67"
  },
  {
    "id": 409,
    "question": "How does the Bible describe the location of the Garden of Eden?",
    "options": [
      "Coriander",
      "Like a bride",
      "In the east",
      "Gihon"
    ],
    "correctIndex": 2,
    "correctAnswer": "In the east",
    "scriptureRef": "Gen 2:8"
  },
  {
    "id": 410,
    "question": "In the vision of Jesus in Revelation, what came out of Jesus' mouth?",
    "options": [
      "A sharp sword",
      "Lord (Ps 48:11; 97:8) 400",
      "She tied a red thread in the window",
      "Butler"
    ],
    "correctIndex": 0,
    "correctAnswer": "A sharp sword",
    "scriptureRef": "Rev 19:15"
  },
  {
    "id": 411,
    "question": "What was Paul's home town?",
    "options": [
      "He is enticed by his own lust",
      "Naomi",
      "Tarsus",
      "John"
    ],
    "correctIndex": 2,
    "correctAnswer": "Tarsus",
    "scriptureRef": "Acts 21:39"
  },
  {
    "id": 412,
    "question": "Which judge was betrayed to the Philistines by a woman?",
    "options": [
      "Don't fear going to Egypt, he would be made",
      "She tied a red thread in the window",
      "Samson",
      "Who is the greatest in heaven"
    ],
    "correctIndex": 2,
    "correctAnswer": "Samson",
    "scriptureRef": "Jdg 16:5-6"
  },
  {
    "id": 413,
    "question": "What happened to forty-two of the children who made fun of Elisha's baldness?",
    "options": [
      "He, his father, and the men of his city were",
      "The fruit of the vine",
      "is at hand (Matt 4:17) Pray for one another",
      "Two bears came out of the woods"
    ],
    "correctIndex": 3,
    "correctAnswer": "Two bears came out of the woods",
    "scriptureRef": ""
  },
  {
    "id": 414,
    "question": "What came out of the fire Paul made on Malta and attacked him?",
    "options": [
      "110",
      "When the plague of the death of the firstborn",
      "and killed them (2 Ki 2:24) Viper",
      "It doesn't say"
    ],
    "correctIndex": 2,
    "correctAnswer": "and killed them (2 Ki 2:24) Viper",
    "scriptureRef": "Acts 28:3"
  },
  {
    "id": 415,
    "question": "Who refused to worship Nebuchadnezzar's golden image?",
    "options": [
      "offered. (Lev 7:15; 22:30) Zebulun",
      "He who has many debts forgiven, loves the",
      "Shadrach, Meshach and Abednego",
      "Babylon"
    ],
    "correctIndex": 2,
    "correctAnswer": "Shadrach, Meshach and Abednego",
    "scriptureRef": "Dan 3:12"
  },
  {
    "id": 416,
    "question": "In the Sermon on the Mount, what did Jesus say would happen to the meek?",
    "options": [
      "Almighty God",
      "Tentmaker",
      "They will inherit the earth",
      "Two years and under"
    ],
    "correctIndex": 2,
    "correctAnswer": "They will inherit the earth",
    "scriptureRef": "Matt 5:5"
  },
  {
    "id": 417,
    "question": "Where did Moses first meet his future wife?",
    "options": [
      "Feet, hands and head",
      "A vine bringing forth grapes which are",
      "By a well in the land of Midian",
      "Cattle"
    ],
    "correctIndex": 2,
    "correctAnswer": "By a well in the land of Midian",
    "scriptureRef": "Exo 2:16-21"
  },
  {
    "id": 418,
    "question": "Out of the ten lepers Jesus healed, what nationality was the one who returned to thank him?",
    "options": [
      "Paul",
      "A scorpion",
      "Samaritan",
      "Jephunneh"
    ],
    "correctIndex": 2,
    "correctAnswer": "Samaritan",
    "scriptureRef": "Luke 17:16"
  },
  {
    "id": 419,
    "question": "Who did the men of Athens ignorantly worship?",
    "options": [
      "Trees for meat",
      "Psalm 139",
      "Judah",
      "The Unknown God"
    ],
    "correctIndex": 3,
    "correctAnswer": "The Unknown God",
    "scriptureRef": "Acts 17:22-23"
  },
  {
    "id": 420,
    "question": "What did Saul see on the road approaching Damascus?",
    "options": [
      "A shining light from heaven",
      "Mountains",
      "shepherds, which were an abomination to the Egyptians (Gen 46:34) Haggai",
      "Pulses and water"
    ],
    "correctIndex": 0,
    "correctAnswer": "A shining light from heaven",
    "scriptureRef": "Acts 9:3"
  },
  {
    "id": 421,
    "question": "How long did Jonah say it would be before Nineveh was to be overthrown?",
    "options": [
      "Levi",
      "They were swallowed up by the earth",
      "They will inherit the earth",
      "Forty days"
    ],
    "correctIndex": 3,
    "correctAnswer": "Forty days",
    "scriptureRef": "Jon 3:4"
  },
  {
    "id": 422,
    "question": "What was the name of Samson's father?",
    "options": [
      "Manoah",
      "Myrtle",
      "Thirteen years",
      "Eating some fruit"
    ],
    "correctIndex": 0,
    "correctAnswer": "Manoah",
    "scriptureRef": "Jdg 13:24"
  },
  {
    "id": 423,
    "question": "Who did Amnon love, and then hate even more than he had loved her?",
    "options": [
      "Harlot",
      "Raven",
      "Tamar",
      "Philemon"
    ],
    "correctIndex": 2,
    "correctAnswer": "Tamar",
    "scriptureRef": "2 Sam 13:15"
  },
  {
    "id": 424,
    "question": "Where were the Jews taken captive to when Jerusalem was destroyed?",
    "options": [
      "Eutychus",
      "Aquila and Priscilla",
      "Babylon",
      "She had looked after Naomi"
    ],
    "correctIndex": 2,
    "correctAnswer": "Babylon",
    "scriptureRef": "Jer 29:4"
  },
  {
    "id": 425,
    "question": "When was the festival of Passover established?",
    "options": [
      "When the plague of the death of the firstborn",
      "Elijah",
      "Lameness",
      "is at hand (Matt 4:17) Pray for one another"
    ],
    "correctIndex": 0,
    "correctAnswer": "When the plague of the death of the firstborn",
    "scriptureRef": ""
  },
  {
    "id": 426,
    "question": "What sin did Noah commit after he began to be a \"man of the soil\"?",
    "options": [
      "Psalm 117",
      "32,000",
      "was brought upon the land of Egypt (Exo 12:27) Drunkenness",
      "family gathering (1 Sam 20:6) Machpelah"
    ],
    "correctIndex": 2,
    "correctAnswer": "was brought upon the land of Egypt (Exo 12:27) Drunkenness",
    "scriptureRef": "Gen 9:20-21"
  },
  {
    "id": 427,
    "question": "Why were the Israelites afraid to enter the Promised Land?",
    "options": [
      "Benjamin",
      "Joseph (of Arimathaea)",
      "Theft",
      "The inhabitants were great and"
    ],
    "correctIndex": 3,
    "correctAnswer": "The inhabitants were great and",
    "scriptureRef": ""
  },
  {
    "id": 428,
    "question": "What did the silversmith do with Micah's silver?",
    "options": [
      "Cupbearer",
      "153",
      "tall (Num 13:33-14:4) Made it into an idol",
      "(Gen 17:5 / Strong's H87) Nineteen"
    ],
    "correctIndex": 2,
    "correctAnswer": "tall (Num 13:33-14:4) Made it into an idol",
    "scriptureRef": "Jdg 17:4"
  },
  {
    "id": 429,
    "question": "What was Paul's profession?",
    "options": [
      "Ahijah",
      "Tentmaker",
      "Cyprus",
      "Ammonites"
    ],
    "correctIndex": 1,
    "correctAnswer": "Tentmaker",
    "scriptureRef": "Acts 18:3"
  },
  {
    "id": 430,
    "question": "What was the name of Ahasuerus' new queen?",
    "options": [
      "Lord will you at this time restore again",
      "Jerusalem",
      "Thirteen years",
      "Esther"
    ],
    "correctIndex": 3,
    "correctAnswer": "Esther",
    "scriptureRef": "Est 2:17"
  },
  {
    "id": 431,
    "question": "According to the words of Jesus in the Sermon on the Mount, \"a city that is on a hill cannot be...\" what?",
    "options": [
      "wife? (Divorce) (Matt 19:3) With fear and trembling",
      "A stone hit the feet and broke",
      "Interpret his dreams",
      "Hidden"
    ],
    "correctIndex": 3,
    "correctAnswer": "Hidden",
    "scriptureRef": "Matt 5:14"
  },
  {
    "id": 432,
    "question": "What was the fate of Shechem, the prince who fell in love with Dinah, daughter of Jacob?",
    "options": [
      "Rebuilding the temple",
      "Eating some fruit",
      "He, his father, and the men of his city were",
      "Forty years"
    ],
    "correctIndex": 2,
    "correctAnswer": "He, his father, and the men of his city were",
    "scriptureRef": ""
  },
  {
    "id": 433,
    "question": "What book of the Bible follows Philemon?",
    "options": [
      "slain by Dinah's brothers (Gen 34) Hebrews",
      "Four",
      "Jesus and the disciples celebrating",
      "The Ancient of Days"
    ],
    "correctIndex": 0,
    "correctAnswer": "slain by Dinah's brothers (Gen 34) Hebrews",
    "scriptureRef": "Phm 1:25 - Heb 1:1"
  },
  {
    "id": 434,
    "question": "During Jacob's struggle with the angel, the hollow of which part of Jacob's body was touched and put out of joint?",
    "options": [
      "Hollow of thigh / Hip",
      "It will burst the bottles",
      "Eighty-six years",
      "(Gen 17:5 / Strong's H87) Nineteen"
    ],
    "correctIndex": 0,
    "correctAnswer": "Hollow of thigh / Hip",
    "scriptureRef": "Gen 32:25"
  },
  {
    "id": 435,
    "question": "Which Christian doctrine did the Sadducees reject?",
    "options": [
      "Resurrection",
      "Treasurer",
      "Hannah",
      "Hailstones"
    ],
    "correctIndex": 0,
    "correctAnswer": "Resurrection",
    "scriptureRef": "Matt 22:23"
  },
  {
    "id": 436,
    "question": "For how many years had the woman with the issue of blood suffered before she was healed by Jesus?",
    "options": [
      "inside it (1 Ki 16:18) One pence (denarius)",
      "Like a bride",
      "The coming of the Messiah",
      "Twelve years"
    ],
    "correctIndex": 3,
    "correctAnswer": "Twelve years",
    "scriptureRef": "Matt 9:20"
  },
  {
    "id": 437,
    "question": "What was the affliction of Bartimaeus?",
    "options": [
      "Jesus and the disciples celebrating",
      "the Midianites (Jdg 7:5-7) Five",
      "A Hittite",
      "Blind"
    ],
    "correctIndex": 3,
    "correctAnswer": "Blind",
    "scriptureRef": "Mark 10:46"
  },
  {
    "id": 438,
    "question": "What was the color of the robe placed on Jesus by the soldiers?",
    "options": [
      "Scarlet / Purple",
      "Isaac",
      "He wrote the greetings in his own",
      "A wall fell on them"
    ],
    "correctIndex": 0,
    "correctAnswer": "Scarlet / Purple",
    "scriptureRef": "Matt 27:28; John 19:2"
  },
  {
    "id": 439,
    "question": "How did Paul say we should let our requests be made known to God?",
    "options": [
      "Tenth",
      "In sanctification and honor",
      "By prayer and supplication with",
      "Warming himself by a fire"
    ],
    "correctIndex": 2,
    "correctAnswer": "By prayer and supplication with",
    "scriptureRef": ""
  },
  {
    "id": 440,
    "question": "In the Sermon on the Mount, what does Jesus tell us the earth is?",
    "options": [
      "To visit the fatherless and widows, and to keep",
      "Paul",
      "Lydda",
      "thanksgiving (Php 4:6) God's footstool"
    ],
    "correctIndex": 3,
    "correctAnswer": "thanksgiving (Php 4:6) God's footstool",
    "scriptureRef": "Matt 5:35"
  },
  {
    "id": 441,
    "question": "In which book of the Bible do we find \"Nebuchadnezzar's image\"?",
    "options": [
      "He is enticed by his own lust",
      "Hannah",
      "Daniel",
      "1,000"
    ],
    "correctIndex": 2,
    "correctAnswer": "Daniel",
    "scriptureRef": "Dan 2:31-36"
  },
  {
    "id": 442,
    "question": "Where was Abraham born?",
    "options": [
      "Ur",
      "The Thessalonians",
      "Wisdom and instruction",
      "Philippi"
    ],
    "correctIndex": 0,
    "correctAnswer": "Ur",
    "scriptureRef": "Gen 11:31"
  },
  {
    "id": 443,
    "question": "Who was given a son following her prayer to God in the temple, during which the priest accused her of being drunk?",
    "options": [
      "Hannah",
      "Ammonites",
      "Machpelah",
      "Levi"
    ],
    "correctIndex": 0,
    "correctAnswer": "Hannah",
    "scriptureRef": "1 Sam 1:13"
  },
  {
    "id": 444,
    "question": "Who asked for an understanding heart to judge God's people?",
    "options": [
      "Solomon",
      "Salt",
      "Jesus and the disciples celebrating",
      "Lystra"
    ],
    "correctIndex": 0,
    "correctAnswer": "Solomon",
    "scriptureRef": "1 Ki 3:9"
  },
  {
    "id": 445,
    "question": "What is \"sin\"?",
    "options": [
      "Fifty",
      "The transgression of the law",
      "Eighty-six years",
      "Elisha"
    ],
    "correctIndex": 1,
    "correctAnswer": "The transgression of the law",
    "scriptureRef": "1 Jn 3:4"
  },
  {
    "id": 446,
    "question": "For how long did David reign?",
    "options": [
      "Imagine evil",
      "Psalms",
      "and made a shelter (Jon 4:5) Simon of Cyrene",
      "Forty years"
    ],
    "correctIndex": 3,
    "correctAnswer": "Forty years",
    "scriptureRef": "2 Sam 5:4"
  },
  {
    "id": 447,
    "question": "How many Psalms are there in the Bible?",
    "options": [
      "150",
      "Blindness",
      "Beasts",
      "Three years"
    ],
    "correctIndex": 0,
    "correctAnswer": "150",
    "scriptureRef": "Ps 1:1-150:6"
  },
  {
    "id": 448,
    "question": "Jesus used a little child to show the futility of an argument among the disciples. What were they arguing about?",
    "options": [
      "City gates",
      "Ten",
      "His ring, fine linen and a gold chain",
      "Who is the greatest in heaven"
    ],
    "correctIndex": 3,
    "correctAnswer": "Who is the greatest in heaven",
    "scriptureRef": "Matt 18:1-4"
  },
  {
    "id": 449,
    "question": "Whose twelve year old daughter did Jesus raise from the dead?",
    "options": [
      "Benjamin",
      "A young goat and some unleavened bread",
      "Jairus'",
      "Blind"
    ],
    "correctIndex": 2,
    "correctAnswer": "Jairus'",
    "scriptureRef": "Luke 8:41"
  },
  {
    "id": 450,
    "question": "What was the name of Ruth's great-grandson?",
    "options": [
      "Rebekah",
      "Hitting a rock twice (instead of",
      "127 years",
      "David"
    ],
    "correctIndex": 3,
    "correctAnswer": "David",
    "scriptureRef": "Ruth 4:22"
  },
  {
    "id": 451,
    "question": "On what island was John when he was given the vision of Revelation?",
    "options": [
      "Jupiter (Zeus)",
      "12,000",
      "Philemon",
      "Patmos"
    ],
    "correctIndex": 3,
    "correctAnswer": "Patmos",
    "scriptureRef": "Rev 1:9"
  },
  {
    "id": 452,
    "question": "What happened to King Nebuchadnezzar before being restored as king?",
    "options": [
      "Scarlet / Purple",
      "100",
      "He went mad and lived as a beast",
      "32,000"
    ],
    "correctIndex": 2,
    "correctAnswer": "He went mad and lived as a beast",
    "scriptureRef": "Dan 4:33-36"
  },
  {
    "id": 453,
    "question": "Where did Jonah try to run to instead of going to Nineveh as God had commanded?",
    "options": [
      "As a virtuous (worthy) woman",
      "Sheaves of wheat bowing down to",
      "and made a shelter (Jon 4:5) Simon of Cyrene",
      "Tarshish"
    ],
    "correctIndex": 3,
    "correctAnswer": "Tarshish",
    "scriptureRef": "Jon 1:3"
  },
  {
    "id": 454,
    "question": "Who did Paul send to Rome, requesting that she was given a welcome worthy of the saints?",
    "options": [
      "Phoebe",
      "Made a whip",
      "Cyprus",
      "tall (Num 13:33-14:4) Made it into an idol"
    ],
    "correctIndex": 0,
    "correctAnswer": "Phoebe",
    "scriptureRef": "Rom 16:1-2"
  },
  {
    "id": 455,
    "question": "Whose mother took him a little coat once a year?",
    "options": [
      "Zarephath",
      "A man clothed in linen",
      "Samuel",
      "12,000"
    ],
    "correctIndex": 2,
    "correctAnswer": "Samuel",
    "scriptureRef": "1 Sam 2:19"
  },
  {
    "id": 456,
    "question": "Which judge killed Eglon, King of Moab?",
    "options": [
      "Lamech",
      "Agag",
      "Ehud",
      "Sons of Jacob"
    ],
    "correctIndex": 2,
    "correctAnswer": "Ehud",
    "scriptureRef": "Jdg 3:15-25"
  },
  {
    "id": 457,
    "question": "In a parable told by Jesus, what did the rich man do with the surplus of crops that he grew?",
    "options": [
      "Built larger barns to store them",
      "The men of Gibeah",
      "Lameness",
      "A merry heart"
    ],
    "correctIndex": 0,
    "correctAnswer": "Built larger barns to store them",
    "scriptureRef": "Luke 12:18"
  },
  {
    "id": 458,
    "question": "In the parable of the leaven, what is leaven more commonly known as?",
    "options": [
      "precious stones (1 Ki 10:10) Charge it to Paul",
      "Yeast",
      "Kept his hands held up",
      "The temptation of Jesus"
    ],
    "correctIndex": 1,
    "correctAnswer": "Yeast",
    "scriptureRef": "Matt 13:33"
  },
  {
    "id": 459,
    "question": "What bird could poor people use for sacrifices if they could not afford lambs?",
    "options": [
      "Salt",
      "Her life was sacrificed to God",
      "Turtledoves or Pigeons",
      "Rivers of water"
    ],
    "correctIndex": 2,
    "correctAnswer": "Turtledoves or Pigeons",
    "scriptureRef": "Lev 5:7"
  },
  {
    "id": 460,
    "question": "Which book of prophecy was the Ethiopian eunuch reading from?",
    "options": [
      "the kingdom to Israel? (Acts 1:6) Fish and honeycomb",
      "John",
      "Lambs",
      "Isaiah"
    ],
    "correctIndex": 3,
    "correctAnswer": "Isaiah",
    "scriptureRef": "Acts 8:30"
  },
  {
    "id": 461,
    "question": "Who said, \"When I was a child, I spake as a child, I understood as a child, I thought as a child: but when I became a man, I put away childish things\"?",
    "options": [
      "The transgression of the law",
      "Is it lawful for a man to put away his",
      "Paul",
      "Ten"
    ],
    "correctIndex": 2,
    "correctAnswer": "Paul",
    "scriptureRef": "1 Cor 13:11"
  },
  {
    "id": 462,
    "question": "What is the first line of Psalm 1?",
    "options": [
      "Blessed is the man who walks not in the",
      "Frogs",
      "Julius",
      "Samuel"
    ],
    "correctIndex": 0,
    "correctAnswer": "Blessed is the man who walks not in the",
    "scriptureRef": ""
  },
  {
    "id": 463,
    "question": "What was Peter's mother- in-law sick with?",
    "options": [
      "Feet, hands and head",
      "shepherds, which were an abomination to the Egyptians (Gen 46:34) Haggai",
      "counsel of the ungodly (Ps 1:1) A fever",
      "Spread the news about Jesus' birth"
    ],
    "correctIndex": 2,
    "correctAnswer": "counsel of the ungodly (Ps 1:1) A fever",
    "scriptureRef": "Matt 8:14"
  },
  {
    "id": 464,
    "question": "Who instructed her daughter to ask for the head of John the Baptist?",
    "options": [
      "Lords of the Philistines",
      "Who is the greatest in heaven",
      "Gardener",
      "Herodias"
    ],
    "correctIndex": 3,
    "correctAnswer": "Herodias",
    "scriptureRef": "Matt 14:8"
  },
  {
    "id": 465,
    "question": "Who decreed that a census of the entire Roman world should be taken at the time of Jesus' birth?",
    "options": [
      "A beam",
      "Horse",
      "Simon (the sorcerer)",
      "Augustus Caesar"
    ],
    "correctIndex": 3,
    "correctAnswer": "Augustus Caesar",
    "scriptureRef": "Luke 2:1"
  },
  {
    "id": 466,
    "question": "Which woman, who was \"full of good works and acts of charity\", was raised from the dead by Peter at Lydda?",
    "options": [
      "Tabitha (Dorcas)",
      "The Ancient of Days",
      "Over the hole of a snake",
      "A living dog"
    ],
    "correctIndex": 0,
    "correctAnswer": "Tabitha (Dorcas)",
    "scriptureRef": "Acts 9:40"
  },
  {
    "id": 467,
    "question": "What did Daniel do for Nebuchadnezzar that no-one else was able to do?",
    "options": [
      "Raven",
      "Interpret his dreams",
      "Beasts",
      "They must eat it on the day it is"
    ],
    "correctIndex": 1,
    "correctAnswer": "Interpret his dreams",
    "scriptureRef": "Dan 2"
  },
  {
    "id": 468,
    "question": "What was on the head of the woman \"clothed with the sun\"?",
    "options": [
      "A crown of twelve stars",
      "The poor",
      "King Solomon",
      "Seventy"
    ],
    "correctIndex": 0,
    "correctAnswer": "A crown of twelve stars",
    "scriptureRef": "Rev 12:1"
  },
  {
    "id": 469,
    "question": "How did Uriah, Bathsheba's husband, die?",
    "options": [
      "Pharisees",
      "Cut down after David instructed his men to",
      "wife? (Divorce) (Matt 19:3) With fear and trembling",
      "Samson"
    ],
    "correctIndex": 1,
    "correctAnswer": "Cut down after David instructed his men to",
    "scriptureRef": ""
  },
  {
    "id": 470,
    "question": "When Paul was shipwrecked on Malta how many people on the ship drowned?",
    "options": [
      "Rebekah",
      "abandon Uriah in battle (2 Sam 11:15) None",
      "Samaria",
      "Pulses and water"
    ],
    "correctIndex": 1,
    "correctAnswer": "abandon Uriah in battle (2 Sam 11:15) None",
    "scriptureRef": "Acts 27:22,44"
  },
  {
    "id": 471,
    "question": "How did Jesus say true worshippers should worship God when he was talking to the woman at the well?",
    "options": [
      "In spirit and truth",
      "Ecclesiastes",
      "666 talents",
      "Marah"
    ],
    "correctIndex": 0,
    "correctAnswer": "In spirit and truth",
    "scriptureRef": "John 4:23-24"
  },
  {
    "id": 472,
    "question": "Which profession does Jesus compare himself to spiritually?",
    "options": [
      "Shepherd",
      "A worm",
      "A well of Bethlehem",
      "When the plague of the death of the firstborn"
    ],
    "correctIndex": 0,
    "correctAnswer": "Shepherd",
    "scriptureRef": "John 10:14"
  },
  {
    "id": 473,
    "question": "Under the Mosaic Law, what was the punishment for someone who hit their father?",
    "options": [
      "Death",
      "Psalm 2",
      "Rebuilding the temple",
      "Third"
    ],
    "correctIndex": 0,
    "correctAnswer": "Death",
    "scriptureRef": "Exo 21:15"
  },
  {
    "id": 474,
    "question": "What presents did Pharaoh give to Joseph when he was given charge of Egypt?",
    "options": [
      "Ammonites",
      "His ring, fine linen and a gold chain",
      "Despising God",
      "Don't fear going to Egypt, he would be made"
    ],
    "correctIndex": 1,
    "correctAnswer": "His ring, fine linen and a gold chain",
    "scriptureRef": "Gen 41:42"
  },
  {
    "id": 475,
    "question": "What was taken off and handed over to signify the agreement between Boaz and the kinsman?",
    "options": [
      "Nabal",
      "Those people who hear God's word but then it's",
      "Men of Galilee (Disciples)",
      "Sandal"
    ],
    "correctIndex": 3,
    "correctAnswer": "Sandal",
    "scriptureRef": "Ruth 4:8"
  },
  {
    "id": 476,
    "question": "Peacocks were imported by which king of Israel?",
    "options": [
      "Solomon",
      "Horses",
      "one who forgave him more than he who has few debts forgiven. (Luke 7:42-43) 3,000",
      "A thirty foot flying roll"
    ],
    "correctIndex": 0,
    "correctAnswer": "Solomon",
    "scriptureRef": "1 Ki 10:22"
  },
  {
    "id": 477,
    "question": "Why did Boaz allow Ruth to glean in his field?",
    "options": [
      "A thirty foot flying roll",
      "By prayer and supplication with",
      "She had looked after Naomi",
      "…bringeth his mother to shame"
    ],
    "correctIndex": 2,
    "correctAnswer": "She had looked after Naomi",
    "scriptureRef": "Ruth 2:11"
  },
  {
    "id": 478,
    "question": "What punishment was Zacharias given for not believing the angel?",
    "options": [
      "Eighty-six years",
      "Two bears came out of the woods",
      "Annas",
      "He was made dumb"
    ],
    "correctIndex": 3,
    "correctAnswer": "He was made dumb",
    "scriptureRef": "Luke 1:20"
  },
  {
    "id": 479,
    "question": "Which direction did the scorching wind upon Jonah come from?",
    "options": [
      "Simeon",
      "Elisha",
      "East",
      "Ahijah"
    ],
    "correctIndex": 2,
    "correctAnswer": "East",
    "scriptureRef": "Jon 4:8"
  },
  {
    "id": 480,
    "question": "Why did the kinsman not want to marry Ruth?",
    "options": [
      "Bringing the ark back to Jerusalem",
      "Didn't want to spoil his inheritance",
      "Jairus'",
      "In spirit and truth"
    ],
    "correctIndex": 1,
    "correctAnswer": "Didn't want to spoil his inheritance",
    "scriptureRef": "Ruth 4:6"
  },
  {
    "id": 481,
    "question": "How many times did Samson lie about his source of strength to Delilah?",
    "options": [
      "Three",
      "Passover (Matt 26:30) Ashkelon",
      "Elisha",
      "David"
    ],
    "correctIndex": 0,
    "correctAnswer": "Three",
    "scriptureRef": "Jdg 16:15"
  },
  {
    "id": 482,
    "question": "Which book of the Bible begins with \"The book of the generation of Jesus Christ, the son of David, the son of Abraham.\"?",
    "options": [
      "Hollow of thigh / Hip",
      "City gates",
      "Naomi",
      "Matthew"
    ],
    "correctIndex": 3,
    "correctAnswer": "Matthew",
    "scriptureRef": "Matt 1:1"
  },
  {
    "id": 483,
    "question": "Jephthah made a vow to God, with what effect on his daughter?",
    "options": [
      "A thirty foot flying roll",
      "Obadiah",
      "Her life was sacrificed to God",
      "Samuel"
    ],
    "correctIndex": 2,
    "correctAnswer": "Her life was sacrificed to God",
    "scriptureRef": "Jdg 11:30-40"
  },
  {
    "id": 484,
    "question": "Who did Mary suppose Jesus to be at first after the resurrection?",
    "options": [
      "In spirit and truth",
      "Lord will you at this time restore again",
      "Julius",
      "Gardener"
    ],
    "correctIndex": 3,
    "correctAnswer": "Gardener",
    "scriptureRef": "John 20:15"
  },
  {
    "id": 485,
    "question": "How did Jesus reveal the one who would betray him?",
    "options": [
      "Psalm 58",
      "Dipped a piece of bread and passed",
      "Bezaleel",
      "precious stones (1 Ki 10:10) Charge it to Paul"
    ],
    "correctIndex": 1,
    "correctAnswer": "Dipped a piece of bread and passed",
    "scriptureRef": ""
  },
  {
    "id": 486,
    "question": "Which two Old Testament characters appeared with Jesus at the transfiguration?",
    "options": [
      "it to him (John 13:26) Elijah and Moses",
      "Calming of the storm",
      "350 years",
      "Joab"
    ],
    "correctIndex": 0,
    "correctAnswer": "it to him (John 13:26) Elijah and Moses",
    "scriptureRef": "Matt 17:3"
  },
  {
    "id": 487,
    "question": "Who prayed for the fiery serpents to be taken away from Israel?",
    "options": [
      "Gold",
      "Righteousness",
      "Othniel",
      "Moses"
    ],
    "correctIndex": 3,
    "correctAnswer": "Moses",
    "scriptureRef": "Num 21:7"
  },
  {
    "id": 488,
    "question": "Which married couple did Paul become friends with at Corinth?",
    "options": [
      "Aquila and Priscilla",
      "Salt",
      "Seventy",
      "Fifth"
    ],
    "correctIndex": 0,
    "correctAnswer": "Aquila and Priscilla",
    "scriptureRef": "Acts 18:2"
  },
  {
    "id": 489,
    "question": "Who persuaded Delilah to betray Samson?",
    "options": [
      "Lords of the Philistines",
      "A shining light from heaven",
      "Cousin / Sister's son (KJV)",
      "Patiently"
    ],
    "correctIndex": 0,
    "correctAnswer": "Lords of the Philistines",
    "scriptureRef": "Jdg 16:5"
  },
  {
    "id": 490,
    "question": "When Jesus died, for how long was there darkness over the land?",
    "options": [
      "Phoebe",
      "Three hours",
      "The fruit of the vine",
      "Paul"
    ],
    "correctIndex": 1,
    "correctAnswer": "Three hours",
    "scriptureRef": "Luke 23:44"
  },
  {
    "id": 491,
    "question": "What service did Nehemiah perform for King Artaxerxes?",
    "options": [
      "Trumpets and cymbals",
      "James",
      "Cupbearer",
      "(Quietly) divorce her"
    ],
    "correctIndex": 2,
    "correctAnswer": "Cupbearer",
    "scriptureRef": "Neh 1:11"
  },
  {
    "id": 492,
    "question": "Lord's Prayer What is the next line of the after \"Give us this day our daily bread...\"?",
    "options": [
      "And forgive us our debts/",
      "Is it lawful for a man to put away his",
      "Archelaus",
      "Phoebe"
    ],
    "correctIndex": 0,
    "correctAnswer": "And forgive us our debts/",
    "scriptureRef": ""
  },
  {
    "id": 493,
    "question": "What did Abigail prevent David from doing to Nabal?",
    "options": [
      "Tarshish",
      "To keep them separate as they were",
      "sins (Matt 6:11-12; Luke 11:4) Murdering him",
      "A parable"
    ],
    "correctIndex": 2,
    "correctAnswer": "sins (Matt 6:11-12; Luke 11:4) Murdering him",
    "scriptureRef": "1 Sam 25:34-35"
  },
  {
    "id": 494,
    "question": "Who became nurse to Ruth's son?",
    "options": [
      "Aeneas",
      "Judah",
      "In the east",
      "Naomi"
    ],
    "correctIndex": 3,
    "correctAnswer": "Naomi",
    "scriptureRef": "Ruth 4:16"
  },
  {
    "id": 495,
    "question": "According to the law, why could the Israelites not eat blood?",
    "options": [
      "Fifth",
      "God said, \"the blood is the life.\"",
      "Seven",
      "John the Baptist"
    ],
    "correctIndex": 1,
    "correctAnswer": "God said, \"the blood is the life.\"",
    "scriptureRef": "Deut 12:23"
  },
  {
    "id": 496,
    "question": "What relation was Jacob to Abraham?",
    "options": [
      "Grandson",
      "Sing psalms",
      "He had gone to Bethlehem for a",
      "Lemuel"
    ],
    "correctIndex": 0,
    "correctAnswer": "Grandson",
    "scriptureRef": "Matt 1:2"
  },
  {
    "id": 497,
    "question": "What killed the plant that God had provided Jonah for shade?",
    "options": [
      "Lydda",
      "Pharisees",
      "A worm",
      "On Earth"
    ],
    "correctIndex": 2,
    "correctAnswer": "A worm",
    "scriptureRef": "Jon 4:7"
  },
  {
    "id": 498,
    "question": "What did the prophet Micah say about Jesus' birth?",
    "options": [
      "Ur",
      "His groanings (roarings)",
      "A crown of twelve stars",
      "He would be born in Bethlehem"
    ],
    "correctIndex": 3,
    "correctAnswer": "He would be born in Bethlehem",
    "scriptureRef": "Mic 5:2"
  },
  {
    "id": 499,
    "question": "What did John do with the little book he took from the angel?",
    "options": [
      "Isaac",
      "Feeding of the 5,000 and Jesus",
      "He ate it",
      "Benjamin"
    ],
    "correctIndex": 2,
    "correctAnswer": "He ate it",
    "scriptureRef": "Rev 10:10"
  },
  {
    "id": 500,
    "question": "Who went up yearly to worship God in Shiloh, and one year prayed to God for a baby?",
    "options": [
      "Numbers",
      "Her life was sacrificed to God",
      "Philip",
      "Hannah"
    ],
    "correctIndex": 3,
    "correctAnswer": "Hannah",
    "scriptureRef": "1 Sam 1:3-11"
  },
  {
    "id": 501,
    "question": "In which tribe was the city of Bethlehem?",
    "options": [
      "Gilead",
      "In a basket down the city wall",
      "Ostrich",
      "Judah"
    ],
    "correctIndex": 3,
    "correctAnswer": "Judah",
    "scriptureRef": "Mic 5:2"
  },
  {
    "id": 502,
    "question": "What was Peter doing when he denied Jesus for the second time?",
    "options": [
      "Warming himself by a fire",
      "Forty days",
      "the kingdom to Israel? (Acts 1:6) Fish and honeycomb",
      "one who forgave him more than he who has few debts forgiven. (Luke 7:42-43) 3,000"
    ],
    "correctIndex": 0,
    "correctAnswer": "Warming himself by a fire",
    "scriptureRef": "John 18:25"
  },
  {
    "id": 503,
    "question": "What did Jonah do while he waited to see Nineveh's fate?",
    "options": [
      "Clothing",
      "He sat down on the East of the city",
      "Hiram, King of Tyre",
      "Fifty"
    ],
    "correctIndex": 1,
    "correctAnswer": "He sat down on the East of the city",
    "scriptureRef": ""
  },
  {
    "id": 504,
    "question": "Who carried the cross for Christ?",
    "options": [
      "Patmos",
      "and made a shelter (Jon 4:5) Simon of Cyrene",
      "Ararat",
      "A crown of twelve stars"
    ],
    "correctIndex": 1,
    "correctAnswer": "and made a shelter (Jon 4:5) Simon of Cyrene",
    "scriptureRef": "Matt 27:32"
  },
  {
    "id": 505,
    "question": "On which mountain range did Noah's ark come to rest?",
    "options": [
      "Eaten by birds",
      "Ararat",
      "A crown of twelve stars",
      "Andrew"
    ],
    "correctIndex": 1,
    "correctAnswer": "Ararat",
    "scriptureRef": "Gen 8:4"
  },
  {
    "id": 506,
    "question": "Which two tribes of Israel were not named after sons of Jacob?",
    "options": [
      "Corinth",
      "Ephraim and Manasseh",
      "Mercurius (Hermes)",
      "Fifth"
    ],
    "correctIndex": 1,
    "correctAnswer": "Ephraim and Manasseh",
    "scriptureRef": "Josh 14:4"
  },
  {
    "id": 507,
    "question": "What did the Queen of Sheba give to Solomon?",
    "options": [
      "(120 talents of) gold, spices, and",
      "Tabitha (Dorcas)",
      "Tarshish",
      "Ephraim and Manasseh"
    ],
    "correctIndex": 0,
    "correctAnswer": "(120 talents of) gold, spices, and",
    "scriptureRef": ""
  },
  {
    "id": 508,
    "question": "What should Philemon do if his slave owed him anything?",
    "options": [
      "Pharisees",
      "Fifth",
      "precious stones (1 Ki 10:10) Charge it to Paul",
      "Paul"
    ],
    "correctIndex": 2,
    "correctAnswer": "precious stones (1 Ki 10:10) Charge it to Paul",
    "scriptureRef": "Phm 1:18"
  },
  {
    "id": 509,
    "question": "How many books are there in the Old Testament?",
    "options": [
      "Gardener",
      "Thirty-nine",
      "Herod",
      "Eutychus"
    ],
    "correctIndex": 1,
    "correctAnswer": "Thirty-nine",
    "scriptureRef": "Gen 1:1 - Mal 4:6"
  },
  {
    "id": 510,
    "question": "According to Old Testament law, what should you not cook a young goat in?",
    "options": [
      "slain by Dinah's brothers (Gen 34) Hebrews",
      "Machpelah",
      "Ten male donkeys and ten female donkeys",
      "Its mother's milk"
    ],
    "correctIndex": 3,
    "correctAnswer": "Its mother's milk",
    "scriptureRef": "Ex 23:19"
  },
  {
    "id": 511,
    "question": "What did Joseph want to do when he discovered Mary was pregnant?",
    "options": [
      "Hidden",
      "Pearls",
      "(Quietly) divorce her",
      "1,100"
    ],
    "correctIndex": 2,
    "correctAnswer": "(Quietly) divorce her",
    "scriptureRef": "Matt 1:19"
  },
  {
    "id": 512,
    "question": "What did Boaz say Naomi was selling?",
    "options": [
      "Aquila and Priscilla",
      "His ring, fine linen and a gold chain",
      "A parcel of land",
      "God said, \"the blood is the life.\""
    ],
    "correctIndex": 2,
    "correctAnswer": "A parcel of land",
    "scriptureRef": "Ruth 4:3"
  },
  {
    "id": 513,
    "question": "Abram was rich in gold, silver and what else?",
    "options": [
      "choked out by worldly cares (Matt 13:22) Amittai",
      "Death",
      "Work quietly",
      "Cattle"
    ],
    "correctIndex": 3,
    "correctAnswer": "Cattle",
    "scriptureRef": "Gen 13:2"
  },
  {
    "id": 514,
    "question": "How much of Elijah's spirit did Elisha receive?",
    "options": [
      "Stalks of flax",
      "Double (portion)",
      "Four",
      "Those without fins and scales"
    ],
    "correctIndex": 1,
    "correctAnswer": "Double (portion)",
    "scriptureRef": "2 Ki 2:9"
  },
  {
    "id": 515,
    "question": "What was unusual about the 700 Benjamite soldiers who could sling a stone and hit their target every time?",
    "options": [
      "Beasts",
      "350 years",
      "They were all left-handed",
      "Gibeon"
    ],
    "correctIndex": 2,
    "correctAnswer": "They were all left-handed",
    "scriptureRef": "Jdg 20:16"
  },
  {
    "id": 516,
    "question": "What relation was Annas to Caiaphas?",
    "options": [
      "Rivers of water",
      "pressed into a cup (Gen 40:9-12) The heart",
      "Father-in-law",
      "offered. (Lev 7:15; 22:30) Zebulun"
    ],
    "correctIndex": 2,
    "correctAnswer": "Father-in-law",
    "scriptureRef": "John 18:13"
  },
  {
    "id": 517,
    "question": "According to James, what is \"pure and undefiled religion\"?",
    "options": [
      "Those that do God's commandments",
      "Lydia",
      "To visit the fatherless and widows, and to keep",
      "Fought to rescue him"
    ],
    "correctIndex": 2,
    "correctAnswer": "To visit the fatherless and widows, and to keep",
    "scriptureRef": ""
  },
  {
    "id": 518,
    "question": "When in prison at what time did Paul and Silas pray and sing to God?",
    "options": [
      "Twelve",
      "Philip",
      "Two turtledoves or pigeons",
      "yourself unspotted from the world (Jam 1:27) Midnight"
    ],
    "correctIndex": 3,
    "correctAnswer": "yourself unspotted from the world (Jam 1:27) Midnight",
    "scriptureRef": "Acts 16:25"
  },
  {
    "id": 519,
    "question": "What did Daniel and his three friends eat instead of the king's meat and drink?",
    "options": [
      "Pulses and water",
      "Babylon",
      "You will sit on twelve thrones judging the",
      "pressed into a cup (Gen 40:9-12) The heart"
    ],
    "correctIndex": 0,
    "correctAnswer": "Pulses and water",
    "scriptureRef": "Dan 1:12"
  },
  {
    "id": 520,
    "question": "What did Jesus say is the \"greatest commandment in the law\"?",
    "options": [
      "To love God with all your heart, soul",
      "Lords of the Philistines",
      "twelve tribes of Israel (Matt 19:28) Thousands upon thousands of angels",
      "(Quietly) divorce her"
    ],
    "correctIndex": 0,
    "correctAnswer": "To love God with all your heart, soul",
    "scriptureRef": ""
  },
  {
    "id": 521,
    "question": "Who was afflicted with leprosy for speaking out against Moses?",
    "options": [
      "Abib",
      "Day of Atonement",
      "Spread the news about Jesus' birth",
      "and mind (Mark 12:29-30) Miriam"
    ],
    "correctIndex": 3,
    "correctAnswer": "and mind (Mark 12:29-30) Miriam",
    "scriptureRef": "Num 12:10"
  },
  {
    "id": 522,
    "question": "After the Babylonian exile, the Jews sought wealth and possessions for themselves. What should they have been doing?",
    "options": [
      "Twin",
      "Ammon",
      "Rebuilding the temple",
      "Philippi"
    ],
    "correctIndex": 2,
    "correctAnswer": "Rebuilding the temple",
    "scriptureRef": "Hag 1:2-6"
  },
  {
    "id": 523,
    "question": "What did God count Abram's faith to him as?",
    "options": [
      "Marah",
      "Righteousness",
      "Isaac ate of his venison",
      "Honorable"
    ],
    "correctIndex": 1,
    "correctAnswer": "Righteousness",
    "scriptureRef": "Gen 15:6"
  },
  {
    "id": 524,
    "question": "What sin stopped Moses from leading the children of Israel into the Promised Land?",
    "options": [
      "Hitting a rock twice (instead of",
      "The inhabitants were great and",
      "120,000",
      "They were all left-handed"
    ],
    "correctIndex": 0,
    "correctAnswer": "Hitting a rock twice (instead of",
    "scriptureRef": ""
  },
  {
    "id": 525,
    "question": "Whose hair when cut annually weighed two hundred shekels by the king's weight?",
    "options": [
      "Ostrich",
      "110",
      "speaking to it) (Num 20:11) Absalom",
      "They were covetous (loved money)"
    ],
    "correctIndex": 2,
    "correctAnswer": "speaking to it) (Num 20:11) Absalom",
    "scriptureRef": "2 Sam 14:26"
  },
  {
    "id": 526,
    "question": "During what traumatic event did the apostle Paul take bread and give thanks?",
    "options": [
      "Philip",
      "A sharp sword",
      "Killed by a lion",
      "Sea voyage"
    ],
    "correctIndex": 3,
    "correctAnswer": "Sea voyage",
    "scriptureRef": "Acts 27:35"
  },
  {
    "id": 527,
    "question": "Which man killed a lion with his bare hands?",
    "options": [
      "Frogs",
      "Cyrus",
      "Ananias",
      "Samson"
    ],
    "correctIndex": 3,
    "correctAnswer": "Samson",
    "scriptureRef": "Jdg 14:5-6"
  },
  {
    "id": 528,
    "question": "What was the sign that the angels gave to the shepherds, so that they would recognize Jesus?",
    "options": [
      "Man",
      "(120 talents of) gold, spices, and",
      "Lystra",
      "Wrapped in swaddling clothes, lying"
    ],
    "correctIndex": 3,
    "correctAnswer": "Wrapped in swaddling clothes, lying",
    "scriptureRef": ""
  },
  {
    "id": 529,
    "question": "Who was to be named Zacharias, after the name of his father, until his mother intervened?",
    "options": [
      "Ten",
      "Seventy",
      "disciple (Luke 22:24-30) Hezekiah",
      "in a manger (Luke 2:12) John"
    ],
    "correctIndex": 3,
    "correctAnswer": "in a manger (Luke 2:12) John",
    "scriptureRef": "Luke 1:60"
  },
  {
    "id": 530,
    "question": "In what town did Jesus turn water into wine?",
    "options": [
      "street corners (Matt 6:5) A lame man",
      "In a basket down the city wall",
      "Cana",
      "First"
    ],
    "correctIndex": 2,
    "correctAnswer": "Cana",
    "scriptureRef": "John 2:1-11"
  },
  {
    "id": 531,
    "question": "How long had the infirm man lain at the pool of Bethesda?",
    "options": [
      "147",
      "Thirty-eight years",
      "With honor",
      "Isaac"
    ],
    "correctIndex": 1,
    "correctAnswer": "Thirty-eight years",
    "scriptureRef": "John 5:5"
  },
  {
    "id": 532,
    "question": "What \"doeth good like a medicine\"?",
    "options": [
      "Killed by a lion",
      "Dan",
      "A merry heart",
      "became blood (Rev 16:4) An onyx"
    ],
    "correctIndex": 2,
    "correctAnswer": "A merry heart",
    "scriptureRef": "Pro 17:22"
  },
  {
    "id": 533,
    "question": "What was God to give Abraham as an everlasting possession?",
    "options": [
      "The land of Canaan",
      "Dorcas",
      "Micah",
      "That he was not sinful like other men"
    ],
    "correctIndex": 0,
    "correctAnswer": "The land of Canaan",
    "scriptureRef": "Gen 17:8"
  },
  {
    "id": 534,
    "question": "What lie was told about Naboth that led to him being stoned and Ahab taking possession of his vineyard?",
    "options": [
      "They must eat it on the day it is",
      "Two turtledoves or pigeons",
      "They must marry within their tribe",
      "He had blasphemed against God"
    ],
    "correctIndex": 3,
    "correctAnswer": "He had blasphemed against God",
    "scriptureRef": ""
  },
  {
    "id": 535,
    "question": "Which supernatural being or beings does the Bible say the Sadducees did not believe in?",
    "options": [
      "Cupbearer",
      "Raven",
      "and mind (Mark 12:29-30) Miriam",
      "and the king (1 Ki 21:10) Angels"
    ],
    "correctIndex": 3,
    "correctAnswer": "and the king (1 Ki 21:10) Angels",
    "scriptureRef": "Acts 23:8"
  },
  {
    "id": 536,
    "question": "Who won the hand of Caleb's daughter, Achsah?",
    "options": [
      "Othniel",
      "Rivers of water",
      "The inhabitants were great and",
      "Men of Galilee (Disciples)"
    ],
    "correctIndex": 0,
    "correctAnswer": "Othniel",
    "scriptureRef": "Josh 15:16-17"
  },
  {
    "id": 537,
    "question": "What is the \"light of the body\"?",
    "options": [
      "Seventy",
      "The eye",
      "Jephunneh",
      "Jephthah"
    ],
    "correctIndex": 1,
    "correctAnswer": "The eye",
    "scriptureRef": "Matt 6:22"
  },
  {
    "id": 538,
    "question": "The southern kingdom of divided Israel eventually fell, but to which great power?",
    "options": [
      "Let the mother bird go free",
      "Babylon",
      "Warming himself by a fire",
      "Twin"
    ],
    "correctIndex": 1,
    "correctAnswer": "Babylon",
    "scriptureRef": "2 Ki 25"
  },
  {
    "id": 539,
    "question": "You will be healed if you \"pray for one another\" and what else?",
    "options": [
      "Cattle",
      "Confess your faults",
      "East",
      "Two"
    ],
    "correctIndex": 1,
    "correctAnswer": "Confess your faults",
    "scriptureRef": "Jam 5:16"
  },
  {
    "id": 540,
    "question": "What is in the hypocrite's eye?",
    "options": [
      "A parable",
      "A beam",
      "Pharisees",
      "You will sit on twelve thrones judging the"
    ],
    "correctIndex": 1,
    "correctAnswer": "A beam",
    "scriptureRef": "Matt 7:5"
  },
  {
    "id": 541,
    "question": "Which book of the Bible follows Jonah?",
    "options": [
      "The inhabitants were great and",
      "Philippi",
      "Benhadad",
      "Micah"
    ],
    "correctIndex": 3,
    "correctAnswer": "Micah",
    "scriptureRef": "Jon 4:11 - Mic 1:1"
  },
  {
    "id": 542,
    "question": "What inscription was on the altar in Athens?",
    "options": [
      "An ephah of barley",
      "Olive",
      "The rivers and fountains of waters",
      "To the Unknown God"
    ],
    "correctIndex": 3,
    "correctAnswer": "To the Unknown God",
    "scriptureRef": "Acts 17:23"
  },
  {
    "id": 543,
    "question": "In which book of prophecy do we read about the valley of dry bones?",
    "options": [
      "tall (Num 13:33-14:4) Made it into an idol",
      "A parable",
      "Ezekiel",
      "An ephah of barley"
    ],
    "correctIndex": 2,
    "correctAnswer": "Ezekiel",
    "scriptureRef": "Eze 37:1"
  },
  {
    "id": 544,
    "question": "Which baby was named after his mother's laughter?",
    "options": [
      "Isaac",
      "Obadiah",
      "The temptation of Jesus",
      "Wrapped in swaddling clothes, lying"
    ],
    "correctIndex": 0,
    "correctAnswer": "Isaac",
    "scriptureRef": "Gen 21:6 / Strong's H3327"
  },
  {
    "id": 545,
    "question": "Demetrius, of Ephesus was a...?",
    "options": [
      "Feet",
      "it to him (John 13:26) Elijah and Moses",
      "Silversmith",
      "Tenth"
    ],
    "correctIndex": 2,
    "correctAnswer": "Silversmith",
    "scriptureRef": "Acts 19:24"
  },
  {
    "id": 546,
    "question": "On which day of the year could the High Priest enter the Holiest Place, the inner most part of the temple where the covenant box was kept?",
    "options": [
      "Pleasures for evermore",
      "Day of Atonement",
      "The coming of the Messiah",
      "In sanctification and honor"
    ],
    "correctIndex": 1,
    "correctAnswer": "Day of Atonement",
    "scriptureRef": "Lev 16"
  },
  {
    "id": 547,
    "question": "What was the name of the temple gate at which the lame man was laid daily?",
    "options": [
      "Beautiful Gate",
      "Lameness",
      "The men of Gibeah",
      "As a virtuous (worthy) woman"
    ],
    "correctIndex": 0,
    "correctAnswer": "Beautiful Gate",
    "scriptureRef": "Acts 3:2"
  },
  {
    "id": 548,
    "question": "To which Jewish sect did Nicodemus belong?",
    "options": [
      "Miletum (Miletus)",
      "Lystra",
      "Pharisees",
      "Archelaus"
    ],
    "correctIndex": 2,
    "correctAnswer": "Pharisees",
    "scriptureRef": "John 3:1"
  },
  {
    "id": 549,
    "question": "What is the first recorded dream of Joseph, son of Jacob?",
    "options": [
      "Thirty-nine",
      "Sheaves of wheat bowing down to",
      "Build a guard rail around the roof",
      "Despising God"
    ],
    "correctIndex": 1,
    "correctAnswer": "Sheaves of wheat bowing down to",
    "scriptureRef": ""
  },
  {
    "id": 550,
    "question": "To which tribe did the apostle Paul belong?",
    "options": [
      "other sheaves (Gen 37:5-7) Benjamin",
      "East",
      "Hidden",
      "Build a guard rail around the roof"
    ],
    "correctIndex": 0,
    "correctAnswer": "other sheaves (Gen 37:5-7) Benjamin",
    "scriptureRef": "Rom 11:1"
  },
  {
    "id": 551,
    "question": "How does James say we should \"wait for the coming of the Lord\"?",
    "options": [
      "Patiently",
      "Fifth",
      "Matthew",
      "Underwater creatures and birds"
    ],
    "correctIndex": 0,
    "correctAnswer": "Patiently",
    "scriptureRef": "Jam 5:7"
  },
  {
    "id": 552,
    "question": "\"The blessed man will be like a tree planted by\"…. what?",
    "options": [
      "Kept his hands held up",
      "Blessed is the man who walks not in the",
      "A stone like a great millstone",
      "Rivers of water"
    ],
    "correctIndex": 3,
    "correctAnswer": "Rivers of water",
    "scriptureRef": "Ps 1:1-3"
  },
  {
    "id": 553,
    "question": "How old was Abraham when his son Isaac was born?",
    "options": [
      "Fought to rescue him",
      "Samaria",
      "Rams",
      "100"
    ],
    "correctIndex": 3,
    "correctAnswer": "100",
    "scriptureRef": "Gen 21:5"
  },
  {
    "id": 554,
    "question": "In the parable of the Pharisee and the Publican, what did the Pharisee thank God for?",
    "options": [
      "That he was not sinful like other men",
      "Solomon",
      "Righteousness",
      "Numbers"
    ],
    "correctIndex": 0,
    "correctAnswer": "That he was not sinful like other men",
    "scriptureRef": "Luke 18:11"
  },
  {
    "id": 555,
    "question": "How many times did Jesus say you should forgive your brother when he sins against you?",
    "options": [
      "one who forgave him more than he who has few debts forgiven. (Luke 7:42-43) 3,000",
      "Seventy times seven",
      "Egypt",
      "He claimed to be the Son of God"
    ],
    "correctIndex": 1,
    "correctAnswer": "Seventy times seven",
    "scriptureRef": "Matt 18:22"
  },
  {
    "id": 556,
    "question": "What question concerning marriage did the Pharisees use to tempt Jesus?",
    "options": [
      "Hollow of thigh / Hip",
      "Is it lawful for a man to put away his",
      "Forty",
      "Fleece"
    ],
    "correctIndex": 1,
    "correctAnswer": "Is it lawful for a man to put away his",
    "scriptureRef": ""
  },
  {
    "id": 557,
    "question": "How does Paul tell us to \"work out our own salvation\"?",
    "options": [
      "inside it (1 Ki 16:18) One pence (denarius)",
      "Philemon",
      "King Solomon",
      "wife? (Divorce) (Matt 19:3) With fear and trembling"
    ],
    "correctIndex": 3,
    "correctAnswer": "wife? (Divorce) (Matt 19:3) With fear and trembling",
    "scriptureRef": "Php 2:12"
  },
  {
    "id": 558,
    "question": "In the parable of the cloth and wine, why does no man put new wine into old bottles?",
    "options": [
      "Calming of the storm",
      "It will burst the bottles",
      "He is enticed by his own lust",
      "Aquila and Priscilla"
    ],
    "correctIndex": 1,
    "correctAnswer": "It will burst the bottles",
    "scriptureRef": "Luke 5:37"
  },
  {
    "id": 559,
    "question": "In which city did King Herod live at the time of Jesus' birth?",
    "options": [
      "Jerusalem",
      "Didn't want to spoil his inheritance",
      "Obadiah",
      "other sheaves (Gen 37:5-7) Benjamin"
    ],
    "correctIndex": 0,
    "correctAnswer": "Jerusalem",
    "scriptureRef": "Matt 2:3"
  },
  {
    "id": 560,
    "question": "What is the \"root of all evil\"?",
    "options": [
      "Love of money",
      "Girdle (belt)",
      "A cattle prod (ox goad)",
      "handwriting (2 Th 3:17) Belshazzar"
    ],
    "correctIndex": 0,
    "correctAnswer": "Love of money",
    "scriptureRef": "1 Tim 6:10"
  },
  {
    "id": 561,
    "question": "What does the law say to do when you see a bird in its nest?",
    "options": [
      "Let the mother bird go free",
      "Count it all joy",
      "Agabus",
      "Hiram, King of Tyre"
    ],
    "correctIndex": 0,
    "correctAnswer": "Let the mother bird go free",
    "scriptureRef": "Deut 22:6-7"
  },
  {
    "id": 562,
    "question": "Which tribe of Israel received no inheritance of land?",
    "options": [
      "Forty-eight",
      "(120 talents of) gold, spices, and",
      "Levi",
      "A merry heart"
    ],
    "correctIndex": 2,
    "correctAnswer": "Levi",
    "scriptureRef": "Deut 10:9"
  },
  {
    "id": 563,
    "question": "In Nebuchadnezzar's dream what happened to destroy the statue made from different metals?",
    "options": [
      "Elisha",
      "wife? (Divorce) (Matt 19:3) With fear and trembling",
      "A stone hit the feet and broke",
      "Bread and fish"
    ],
    "correctIndex": 2,
    "correctAnswer": "A stone hit the feet and broke",
    "scriptureRef": ""
  },
  {
    "id": 564,
    "question": "Which King took possession of Naboth's vineyard?",
    "options": [
      "Lydda",
      "them into pieces (Dan 2:34) Ahab",
      "The wicked",
      "Eighty-four"
    ],
    "correctIndex": 1,
    "correctAnswer": "them into pieces (Dan 2:34) Ahab",
    "scriptureRef": "1 Ki 21:16"
  },
  {
    "id": 565,
    "question": "For how many days did Jesus appear to his disciples after his resurrection?",
    "options": [
      "Ten",
      "Forty",
      "Twin",
      "Peter"
    ],
    "correctIndex": 1,
    "correctAnswer": "Forty",
    "scriptureRef": "Acts 1:3"
  },
  {
    "id": 566,
    "question": "Who did Paul write a letter to concerning his slave Onesimus?",
    "options": [
      "Sons of Jacob",
      "Gihon",
      "Philemon",
      "Forty-eight"
    ],
    "correctIndex": 2,
    "correctAnswer": "Philemon",
    "scriptureRef": "Phm 1:1-25"
  },
  {
    "id": 567,
    "question": "How many churches of Asia Minor were listed in Revelation?",
    "options": [
      "32,000",
      "Benhadad",
      "Seven",
      "147"
    ],
    "correctIndex": 2,
    "correctAnswer": "Seven",
    "scriptureRef": "Rev 1:11"
  },
  {
    "id": 568,
    "question": "What object did Gideon place on the ground to receive a sign from God?",
    "options": [
      "Its mother's milk",
      "Fleece",
      "A cattle prod (ox goad)",
      "Eighty-four"
    ],
    "correctIndex": 1,
    "correctAnswer": "Fleece",
    "scriptureRef": "Jdg 6:37"
  },
  {
    "id": 569,
    "question": "Why did Moses' hand become leprous?",
    "options": [
      "A beam",
      "Lions",
      "Psalm 139",
      "As a sign"
    ],
    "correctIndex": 3,
    "correctAnswer": "As a sign",
    "scriptureRef": "Exo 4:6-8"
  },
  {
    "id": 570,
    "question": "In which city in Judah did Cyrus tell the Israelites to build the temple?",
    "options": [
      "Tarsus",
      "Ishmael",
      "Jerusalem",
      "Three"
    ],
    "correctIndex": 2,
    "correctAnswer": "Jerusalem",
    "scriptureRef": "Ezr 6:3"
  },
  {
    "id": 571,
    "question": "Which missionary was described as having \"known the holy scriptures from an early age\"?",
    "options": [
      "Timothy",
      "Asher",
      "Threw a piece of wood into the",
      "Zaphnath-paaneah"
    ],
    "correctIndex": 0,
    "correctAnswer": "Timothy",
    "scriptureRef": "2 Tim 3:15"
  },
  {
    "id": 572,
    "question": "What affliction did Paul strike Elymas the sorcerer down with?",
    "options": [
      "Blindness",
      "300",
      "Silvanus",
      "She had looked after Naomi"
    ],
    "correctIndex": 0,
    "correctAnswer": "Blindness",
    "scriptureRef": "Acts 13:8,11"
  },
  {
    "id": 573,
    "question": "Who was Boaz a kinsman of?",
    "options": [
      "Twelve",
      "Forty-eight",
      "Elimelech",
      "Silversmith"
    ],
    "correctIndex": 2,
    "correctAnswer": "Elimelech",
    "scriptureRef": "Ruth 2:1"
  },
  {
    "id": 574,
    "question": "What animals were carved on Solomon's throne?",
    "options": [
      "Three",
      "Blessed is the man who walks not in the",
      "Lions",
      "Jeroboam II"
    ],
    "correctIndex": 2,
    "correctAnswer": "Lions",
    "scriptureRef": "1 Ki 10:19"
  },
  {
    "id": 575,
    "question": "What did Jesus and the disciples have for breakfast when Jesus appeared to them after the resurrection by the Sea of Tiberias?",
    "options": [
      "Bread and fish",
      "Two",
      "Double (portion)",
      "laden with goods from Egypt (Gen 45:23) Bethany"
    ],
    "correctIndex": 0,
    "correctAnswer": "Bread and fish",
    "scriptureRef": "John 21:13"
  },
  {
    "id": 576,
    "question": "Which woman was a seller of purple goods?",
    "options": [
      "Lydia",
      "Simon (the sorcerer)",
      "Ai",
      "Miletum (Miletus)"
    ],
    "correctIndex": 0,
    "correctAnswer": "Lydia",
    "scriptureRef": "Acts 16:14"
  },
  {
    "id": 577,
    "question": "What were the restrictions on marriage for the daughters of Zelophehad?",
    "options": [
      "They must marry within their tribe",
      "Yeast",
      "twelve tribes of Israel (Matt 19:28) Thousands upon thousands of angels",
      "Eaten by birds"
    ],
    "correctIndex": 0,
    "correctAnswer": "They must marry within their tribe",
    "scriptureRef": "Num 36:6"
  },
  {
    "id": 578,
    "question": "Who said, \"A light to lighten the Gentiles, and the glory of thy people Israel,\" when he saw Jesus?",
    "options": [
      "Simeon",
      "Eighty-six years",
      "It became as black as sackcloth (of hair)",
      "Micah"
    ],
    "correctIndex": 0,
    "correctAnswer": "Simeon",
    "scriptureRef": "Luke 2:25,32"
  },
  {
    "id": 579,
    "question": "How did Moses assure victory against the Amalekites?",
    "options": [
      "Cast into darkness",
      "Destroyed the rest of the royal family",
      "Kept his hands held up",
      "Blessed are the poor in spirit for theirs"
    ],
    "correctIndex": 2,
    "correctAnswer": "Kept his hands held up",
    "scriptureRef": "Exo 17:11-12"
  },
  {
    "id": 580,
    "question": "What was the occupation of Hosea's wife?",
    "options": [
      "Seventeen",
      "Vineyard",
      "By lying",
      "Harlot"
    ],
    "correctIndex": 3,
    "correctAnswer": "Harlot",
    "scriptureRef": "Hos 1:2"
  },
  {
    "id": 581,
    "question": "In the Sermon on the Mount, what does Jesus say you should do when you fast?",
    "options": [
      "The fruit of the vine",
      "Father of Lights",
      "300",
      "Anoint your head, and wash your face"
    ],
    "correctIndex": 3,
    "correctAnswer": "Anoint your head, and wash your face",
    "scriptureRef": "Matt 6:18"
  },
  {
    "id": 582,
    "question": "Which church did Jesus accuse of being lukewarm?",
    "options": [
      "Laodicea",
      "Three",
      "Eighty-four",
      "Make one hair black or white"
    ],
    "correctIndex": 0,
    "correctAnswer": "Laodicea",
    "scriptureRef": "Rev 3:16"
  },
  {
    "id": 583,
    "question": "Why are the Thessalonians told not to worry about those Christians who have died?",
    "options": [
      "They will be raised to life again",
      "Tent peg",
      "Twelve",
      "Trumpets, pitchers and lamps"
    ],
    "correctIndex": 0,
    "correctAnswer": "They will be raised to life again",
    "scriptureRef": "1 Th 4:13-15"
  },
  {
    "id": 584,
    "question": "In the parable of the sower, what happened to the seed that fell on the path?",
    "options": [
      "The men of Gibeah",
      "Eaten by birds",
      "The fruit of the vine",
      "Seventy"
    ],
    "correctIndex": 1,
    "correctAnswer": "Eaten by birds",
    "scriptureRef": "Matt 13:4"
  },
  {
    "id": 585,
    "question": "What was the name of the man who requested Jesus' body for burial?",
    "options": [
      "Elisha",
      "John",
      "Joseph (of Arimathaea)",
      "and mind (Mark 12:29-30) Miriam"
    ],
    "correctIndex": 2,
    "correctAnswer": "Joseph (of Arimathaea)",
    "scriptureRef": "Matt 27:57-58"
  },
  {
    "id": 586,
    "question": "How many Philistines did Samson say he had killed with the jawbone of a donkey?",
    "options": [
      "1,000",
      "The sick",
      "Jephthah",
      "Make one hair black or white"
    ],
    "correctIndex": 0,
    "correctAnswer": "1,000",
    "scriptureRef": "Jdg 15:16"
  },
  {
    "id": 587,
    "question": "Which book of the Bible precedes Jonah?",
    "options": [
      "In the beauty of holiness",
      "Made leprous",
      "Obadiah",
      "Almighty God"
    ],
    "correctIndex": 2,
    "correctAnswer": "Obadiah",
    "scriptureRef": "Oba 1:21 - Jon 1:1"
  },
  {
    "id": 588,
    "question": "Who did Samuel anoint as the first King of Israel?",
    "options": [
      "Saul",
      "The land of Canaan",
      "Rebuilding the temple",
      "Samson"
    ],
    "correctIndex": 0,
    "correctAnswer": "Saul",
    "scriptureRef": "1 Sam 10:1,19-24"
  },
  {
    "id": 589,
    "question": "What was mankind's first sin in the Bible?",
    "options": [
      "Eating some fruit",
      "drove him out (Jdg 11:1-3) Standing in synagogues and on",
      "Tentmaker",
      "Death"
    ],
    "correctIndex": 0,
    "correctAnswer": "Eating some fruit",
    "scriptureRef": "Gen 3:6"
  },
  {
    "id": 590,
    "question": "What was the first bird released from the ark?",
    "options": [
      "Scarlet / Purple",
      "Raven",
      "A tree of life",
      "They were all left-handed"
    ],
    "correctIndex": 1,
    "correctAnswer": "Raven",
    "scriptureRef": "Gen 8:7"
  },
  {
    "id": 591,
    "question": "What nationality was Timothy's father?",
    "options": [
      "1 Samuel",
      "Locusts",
      "Greek",
      "Archelaus"
    ],
    "correctIndex": 2,
    "correctAnswer": "Greek",
    "scriptureRef": "Acts 16:1"
  },
  {
    "id": 592,
    "question": "In Revelation, what is the \"number of a man\"?",
    "options": [
      "Zadok",
      "666",
      "Barnabas",
      "Forty days"
    ],
    "correctIndex": 1,
    "correctAnswer": "666",
    "scriptureRef": "Rev 13:18"
  },
  {
    "id": 593,
    "question": "How many elders sat around the throne of God?",
    "options": [
      "A beam",
      "147",
      "Twenty-four",
      "Thirty"
    ],
    "correctIndex": 2,
    "correctAnswer": "Twenty-four",
    "scriptureRef": "Rev 4:4"
  },
  {
    "id": 594,
    "question": "What order did Joshua give to God while fighting the Amorites?",
    "options": [
      "Make the sun and moon stand still",
      "Three hours",
      "Warming himself by a fire",
      "Philippi"
    ],
    "correctIndex": 0,
    "correctAnswer": "Make the sun and moon stand still",
    "scriptureRef": "Josh 10:12-14"
  },
  {
    "id": 595,
    "question": "How many years did the Lord add to Hezekiah's life after being healed of his sickness?",
    "options": [
      "Psalm 139",
      "The coming of the Messiah",
      "Fifteen",
      "The sick"
    ],
    "correctIndex": 2,
    "correctAnswer": "Fifteen",
    "scriptureRef": "2 Ki 20:6"
  },
  {
    "id": 596,
    "question": "What was the second plague upon Egypt?",
    "options": [
      "God said, \"the blood is the life.\"",
      "Sent Timothy to encourage them",
      "disciple (Luke 22:24-30) Hezekiah",
      "Frogs"
    ],
    "correctIndex": 3,
    "correctAnswer": "Frogs",
    "scriptureRef": "Exo 8:6"
  },
  {
    "id": 597,
    "question": "Which disciple looked after Mary, after the death of Jesus?",
    "options": [
      "Peter",
      "sins (Matt 6:11-12; Luke 11:4) Murdering him",
      "John",
      "Pulses and water"
    ],
    "correctIndex": 2,
    "correctAnswer": "John",
    "scriptureRef": "John 19:26-27"
  },
  {
    "id": 598,
    "question": "Jesus was a high priest after the order of which ancient king, mentioned in Psalm 110?",
    "options": [
      "Cain's fruit of the ground",
      "To keep them separate as they were",
      "Melchizedek",
      "They will be raised to life again"
    ],
    "correctIndex": 2,
    "correctAnswer": "Melchizedek",
    "scriptureRef": "Ps 110:4"
  },
  {
    "id": 599,
    "question": "Which two provinces looked up to Thessalonica as an example?",
    "options": [
      "Beautiful Gate",
      "Rebekah",
      "Seventy",
      "Macedonia & Achaia"
    ],
    "correctIndex": 3,
    "correctAnswer": "Macedonia & Achaia",
    "scriptureRef": "1 Th 1:7"
  },
  {
    "id": 600,
    "question": "Who was Noah's father?",
    "options": [
      "Lamech",
      "Matthew",
      "The land of Canaan",
      "A thirty foot flying roll"
    ],
    "correctIndex": 0,
    "correctAnswer": "Lamech",
    "scriptureRef": "Gen 5:28-29"
  },
  {
    "id": 601,
    "question": "Who did Pilate send Jesus to after he had interrogated him?",
    "options": [
      "One of the Scribes",
      "Herod",
      "She tied a red thread in the window",
      "Benhadad"
    ],
    "correctIndex": 1,
    "correctAnswer": "Herod",
    "scriptureRef": "Luke 23:7"
  },
  {
    "id": 602,
    "question": "Daniel had a dream about four things. What sort of things?",
    "options": [
      "The temptation of Jesus",
      "Patiently",
      "Beasts",
      "Sixth"
    ],
    "correctIndex": 2,
    "correctAnswer": "Beasts",
    "scriptureRef": "Dan 7:3"
  },
  {
    "id": 603,
    "question": "In the parable of the sower, what did the seed that fell among thorns represent?",
    "options": [
      "Those people who hear God's word but then it's",
      "Prevails with God",
      "Pharisees",
      "and killed them (2 Ki 2:24) Viper"
    ],
    "correctIndex": 0,
    "correctAnswer": "Those people who hear God's word but then it's",
    "scriptureRef": ""
  },
  {
    "id": 604,
    "question": "Who was the father of Jonah?",
    "options": [
      "Publican (tax collector)",
      "Cyrus",
      "Herod",
      "choked out by worldly cares (Matt 13:22) Amittai"
    ],
    "correctIndex": 3,
    "correctAnswer": "choked out by worldly cares (Matt 13:22) Amittai",
    "scriptureRef": "Jon 1:1"
  },
  {
    "id": 605,
    "question": "What relation to Abram was Lot?",
    "options": [
      "inside it (1 Ki 16:18) One pence (denarius)",
      "Double (portion)",
      "Benhadad",
      "His nephew"
    ],
    "correctIndex": 3,
    "correctAnswer": "His nephew",
    "scriptureRef": "Gen 14:12"
  },
  {
    "id": 606,
    "question": "Who will the \"least person in the Kingdom of God\" be greater than?",
    "options": [
      "John the Baptist",
      "is the kingdom of heaven (Matt 5:3) Sea of Tiberias (Galilee)",
      "A well of Bethlehem",
      "Ararat"
    ],
    "correctIndex": 0,
    "correctAnswer": "John the Baptist",
    "scriptureRef": "Luke 7:28"
  },
  {
    "id": 607,
    "question": "In what month of Elisabeth's pregnancy did the angel appear to Mary?",
    "options": [
      "A shining light from heaven",
      "Sixth",
      "Psalm 58",
      "In a dream"
    ],
    "correctIndex": 1,
    "correctAnswer": "Sixth",
    "scriptureRef": "Luke 1:26"
  },
  {
    "id": 608,
    "question": "What was the content of the cupbearer's dream interpreted by Joseph?",
    "options": [
      "Trees for meat",
      "A vine bringing forth grapes which are",
      "Gihon",
      "John"
    ],
    "correctIndex": 1,
    "correctAnswer": "A vine bringing forth grapes which are",
    "scriptureRef": ""
  },
  {
    "id": 609,
    "question": "\"Hope deferred\" maketh what sick?",
    "options": [
      "pressed into a cup (Gen 40:9-12) The heart",
      "Locusts",
      "Thirteen years",
      "Agag"
    ],
    "correctIndex": 0,
    "correctAnswer": "pressed into a cup (Gen 40:9-12) The heart",
    "scriptureRef": "Pro 13:12"
  },
  {
    "id": 610,
    "question": "Who laid their hands on Saul of Tarsus, curing him of the blindness he received on the road to Damascus?",
    "options": [
      "Make the sun and moon stand still",
      "She tied a red thread in the window",
      "Ananias",
      "Build a guard rail around the roof"
    ],
    "correctIndex": 2,
    "correctAnswer": "Ananias",
    "scriptureRef": "Acts 9:17"
  },
  {
    "id": 611,
    "question": "Who was Paul with when he wrote the letter to Philemon?",
    "options": [
      "Almond blossom",
      "Two and a half",
      "By a well in the land of Midian",
      "Timothy"
    ],
    "correctIndex": 3,
    "correctAnswer": "Timothy",
    "scriptureRef": "Phm 1:1"
  },
  {
    "id": 612,
    "question": "What did Joseph send to his father from Egypt?",
    "options": [
      "Mercurius (Hermes)",
      "Ten male donkeys and ten female donkeys",
      "Made a whip",
      "Babylon"
    ],
    "correctIndex": 1,
    "correctAnswer": "Ten male donkeys and ten female donkeys",
    "scriptureRef": ""
  },
  {
    "id": 613,
    "question": "In which town did Martha and Mary live?",
    "options": [
      "Ararat",
      "laden with goods from Egypt (Gen 45:23) Bethany",
      "Gold",
      "Isaac"
    ],
    "correctIndex": 1,
    "correctAnswer": "laden with goods from Egypt (Gen 45:23) Bethany",
    "scriptureRef": "John 11:1"
  },
  {
    "id": 614,
    "question": "Who stole her father's household gods?",
    "options": [
      "Silver",
      "Three",
      "To the Unknown God",
      "Rachel"
    ],
    "correctIndex": 3,
    "correctAnswer": "Rachel",
    "scriptureRef": "Gen 31:32"
  },
  {
    "id": 615,
    "question": "What was the fate of the man who had no wedding robe at the parable of the marriage feast?",
    "options": [
      "Cast into darkness",
      "147",
      "127 years",
      "pressed into a cup (Gen 40:9-12) The heart"
    ],
    "correctIndex": 0,
    "correctAnswer": "Cast into darkness",
    "scriptureRef": "Matt 22:13"
  },
  {
    "id": 616,
    "question": "How long did Solomon reign over Israel?",
    "options": [
      "Cattle",
      "Hannah",
      "Aeneas",
      "Forty years"
    ],
    "correctIndex": 3,
    "correctAnswer": "Forty years",
    "scriptureRef": "1 Ki 11:42"
  },
  {
    "id": 617,
    "question": "In Psalm 52, the psalmist describes himself as what kind of tree in the house of God?",
    "options": [
      "Jephunneh",
      "Olive",
      "Sihon",
      "family gathering (1 Sam 20:6) Machpelah"
    ],
    "correctIndex": 1,
    "correctAnswer": "Olive",
    "scriptureRef": "Ps 52:8"
  },
  {
    "id": 618,
    "question": "Who was compared unfavorably to the lilies of the field?",
    "options": [
      "Wrapped in swaddling clothes, lying",
      "King Solomon",
      "His nephew",
      "Twelve"
    ],
    "correctIndex": 1,
    "correctAnswer": "King Solomon",
    "scriptureRef": "Matt 6:28-29"
  },
  {
    "id": 619,
    "question": "Of what did Peter and John heal the man at the temple gate called Beautiful?",
    "options": [
      "Lameness",
      "Priest",
      "Gad",
      "Naomi"
    ],
    "correctIndex": 0,
    "correctAnswer": "Lameness",
    "scriptureRef": "Acts 3:2"
  },
  {
    "id": 620,
    "question": "Which region was specially noted for its balm?",
    "options": [
      "Gilead",
      "350 years",
      "Paul",
      "600"
    ],
    "correctIndex": 0,
    "correctAnswer": "Gilead",
    "scriptureRef": "Jer 46:11"
  },
  {
    "id": 621,
    "question": "What should the Thessalonians do with brethren who are \"not obeying the epistle's word\"?",
    "options": [
      "Have no company with them so that",
      "In sanctification and honor",
      "Don't fear going to Egypt, he would be made",
      "Corinth"
    ],
    "correctIndex": 0,
    "correctAnswer": "Have no company with them so that",
    "scriptureRef": ""
  },
  {
    "id": 622,
    "question": "Why should a father not \"provoke a child to anger\"?",
    "options": [
      "By a well in the land of Midian",
      "Gad",
      "they are ashamed (2 Th 3:14) In case they become discouraged",
      "Trees for meat"
    ],
    "correctIndex": 2,
    "correctAnswer": "they are ashamed (2 Th 3:14) In case they become discouraged",
    "scriptureRef": "Col 3:21"
  },
  {
    "id": 623,
    "question": "What did God rain down on the Amorite army as they passed through Beth-Horon, killing more of them than the Israelite army did?",
    "options": [
      "Daniel",
      "Hailstones",
      "Rams",
      "A merry heart"
    ],
    "correctIndex": 1,
    "correctAnswer": "Hailstones",
    "scriptureRef": "Josh 10:11"
  },
  {
    "id": 624,
    "question": "While John was baptizing, what did he call the Pharisees and Sadducees?",
    "options": [
      "Gravel",
      "Generation of vipers",
      "Psalm 90",
      "(120 talents of) gold, spices, and"
    ],
    "correctIndex": 1,
    "correctAnswer": "Generation of vipers",
    "scriptureRef": "Matt 3:7"
  },
  {
    "id": 625,
    "question": "Whose son did Elijah raise from the dead?",
    "options": [
      "Mountains",
      "The widow of Zarephath",
      "Judgment, mercy, and faith",
      "He was made dumb"
    ],
    "correctIndex": 1,
    "correctAnswer": "The widow of Zarephath",
    "scriptureRef": "1 Ki 17:22"
  },
  {
    "id": 626,
    "question": "Which group of people stood and watched Jesus as he ascended into heaven?",
    "options": [
      "Men of Galilee (Disciples)",
      "Fifty",
      "In a dream",
      "Gihon"
    ],
    "correctIndex": 0,
    "correctAnswer": "Men of Galilee (Disciples)",
    "scriptureRef": "Acts 1:11"
  },
  {
    "id": 627,
    "question": "What object did Elisha cause to float?",
    "options": [
      "family gathering (1 Sam 20:6) Machpelah",
      "Axe head",
      "600",
      "Cast into darkness"
    ],
    "correctIndex": 1,
    "correctAnswer": "Axe head",
    "scriptureRef": "2 Ki 6:5-6"
  },
  {
    "id": 628,
    "question": "By what name was the disciple Tabitha also known?",
    "options": [
      "Psalm 90",
      "Lords of the Philistines",
      "A worm",
      "Dorcas"
    ],
    "correctIndex": 3,
    "correctAnswer": "Dorcas",
    "scriptureRef": "Acts 9:36"
  },
  {
    "id": 629,
    "question": "From which land did Isaac tell Jacob not to take a wife?",
    "options": [
      "Elisha",
      "Psalm 2",
      "Psalm 117",
      "Canaan"
    ],
    "correctIndex": 3,
    "correctAnswer": "Canaan",
    "scriptureRef": "Gen 28:1"
  },
  {
    "id": 630,
    "question": "How does Paul describe marriage in Hebrews?",
    "options": [
      "His nephew",
      "Honorable",
      "Fleece",
      "Kept his hands held up"
    ],
    "correctIndex": 1,
    "correctAnswer": "Honorable",
    "scriptureRef": "Heb 13:4"
  },
  {
    "id": 631,
    "question": "To whom was Jesus referring when he said, \"Go tell that fox, behold I cast out devils?",
    "options": [
      "Herod",
      "Sparrows",
      "Simeon",
      "They were chosen to fight against"
    ],
    "correctIndex": 0,
    "correctAnswer": "Herod",
    "scriptureRef": "Luke 13:31-32"
  },
  {
    "id": 632,
    "question": "How old was Joseph when he began serving Pharaoh?",
    "options": [
      "Forty-eight",
      "In a candlestick",
      "Three",
      "Thirty"
    ],
    "correctIndex": 3,
    "correctAnswer": "Thirty",
    "scriptureRef": "Gen 41:46"
  },
  {
    "id": 633,
    "question": "What did Naboth refuse to sell?",
    "options": [
      "is at hand (Matt 4:17) Pray for one another",
      "Vineyard",
      "They were swallowed up by the earth",
      "Forty"
    ],
    "correctIndex": 1,
    "correctAnswer": "Vineyard",
    "scriptureRef": "1 Ki 21:2-3"
  },
  {
    "id": 634,
    "question": "Which living creatures in the water were deemed unclean?",
    "options": [
      "Philip",
      "Samson",
      "disciple (Luke 22:24-30) Hezekiah",
      "Those without fins and scales"
    ],
    "correctIndex": 3,
    "correctAnswer": "Those without fins and scales",
    "scriptureRef": "Deut 14:9"
  },
  {
    "id": 635,
    "question": "What must a Christian do to \"earn their own bread to eat\"?",
    "options": [
      "In a candlestick",
      "Work quietly",
      "A shining light from heaven",
      "John"
    ],
    "correctIndex": 1,
    "correctAnswer": "Work quietly",
    "scriptureRef": "2 Th 3:12"
  },
  {
    "id": 636,
    "question": "What was the name of the father of Caleb the spy?",
    "options": [
      "John the Baptist",
      "Jephunneh",
      "Gilead",
      "They will be raised to life again"
    ],
    "correctIndex": 1,
    "correctAnswer": "Jephunneh",
    "scriptureRef": "Num 13:6"
  },
  {
    "id": 637,
    "question": "Which apostle baptized the Ethiopian eunuch?",
    "options": [
      "Philip",
      "Two years",
      "Jehu",
      "it to him (John 13:26) Elijah and Moses"
    ],
    "correctIndex": 0,
    "correctAnswer": "Philip",
    "scriptureRef": "Acts 8:38"
  },
  {
    "id": 638,
    "question": "Who promised the \"gift of power to tread on serpents and scorpions\"?",
    "options": [
      "Archelaus",
      "He would be born in Bethlehem",
      "Grandson",
      "Jesus"
    ],
    "correctIndex": 3,
    "correctAnswer": "Jesus",
    "scriptureRef": "Luke 10:19"
  },
  {
    "id": 639,
    "question": "Which king was saved from death by Abraham's prayer?",
    "options": [
      "tall (Num 13:33-14:4) Made it into an idol",
      "The eye",
      "Frogs",
      "Abimelech"
    ],
    "correctIndex": 3,
    "correctAnswer": "Abimelech",
    "scriptureRef": "Gen 20:17"
  },
  {
    "id": 640,
    "question": "What did Abram do when he heard that Lot was made a prisoner of war?",
    "options": [
      "Olive",
      "Obadiah",
      "Fought to rescue him",
      "Prevails with God"
    ],
    "correctIndex": 2,
    "correctAnswer": "Fought to rescue him",
    "scriptureRef": "Gen 14:14-16"
  },
  {
    "id": 641,
    "question": "Who sang, \"My soul doth magnify the Lord\"?",
    "options": [
      "Almond blossom",
      "Destroyed the rest of the royal family",
      "Mary",
      "Make the sun and moon stand still"
    ],
    "correctIndex": 2,
    "correctAnswer": "Mary",
    "scriptureRef": "Luke 1:46"
  },
  {
    "id": 642,
    "question": "At what place did the Israelites arrive only to find the water was too bitter to drink, whereupon God caused it to become sweet?",
    "options": [
      "Jerusalem",
      "Ur",
      "Marah",
      "To gain understanding"
    ],
    "correctIndex": 2,
    "correctAnswer": "Marah",
    "scriptureRef": "Exo 15:23"
  },
  {
    "id": 643,
    "question": "Which Psalm describes how well the Lord knows man, starting with the line, \"O Lord, thou hast searched me, and known me\"?",
    "options": [
      "Fifteen",
      "Psalm 139",
      "32,000",
      "Gardener"
    ],
    "correctIndex": 1,
    "correctAnswer": "Psalm 139",
    "scriptureRef": "Ps 139:1"
  },
  {
    "id": 644,
    "question": "When Moses blessed the tribes before his death, to what animal did he compare Gad?",
    "options": [
      "Tamar",
      "Lion",
      "Philippi",
      "and mind (Mark 12:29-30) Miriam"
    ],
    "correctIndex": 1,
    "correctAnswer": "Lion",
    "scriptureRef": "Deut 33:20"
  },
  {
    "id": 645,
    "question": "When Saul defeated the Amalekites he disobeyed God and took possessions from the land. What was the name of the king he also spared?",
    "options": [
      "Agag",
      "John",
      "The rivers and fountains of waters",
      "they are ashamed (2 Th 3:14) In case they become discouraged"
    ],
    "correctIndex": 0,
    "correctAnswer": "Agag",
    "scriptureRef": "1 Sam 15:9"
  },
  {
    "id": 646,
    "question": "What was Paul's \"distinguishing mark\" in the letters he wrote?",
    "options": [
      "Love of money",
      "Berea",
      "Eutychus",
      "He wrote the greetings in his own"
    ],
    "correctIndex": 3,
    "correctAnswer": "He wrote the greetings in his own",
    "scriptureRef": ""
  },
  {
    "id": 647,
    "question": "Which king had a feast using the gold and silver vessels taken from the temple in Jerusalem?",
    "options": [
      "Lamech",
      "Built larger barns to store them",
      "Wisdom",
      "handwriting (2 Th 3:17) Belshazzar"
    ],
    "correctIndex": 3,
    "correctAnswer": "handwriting (2 Th 3:17) Belshazzar",
    "scriptureRef": "Dan 5:2"
  },
  {
    "id": 648,
    "question": "\"The fear of the Lord is the beginning of knowledge, but fools despise\"... what?",
    "options": [
      "32,000",
      "Wisdom and instruction",
      "Day of Atonement",
      "Jacob"
    ],
    "correctIndex": 1,
    "correctAnswer": "Wisdom and instruction",
    "scriptureRef": "Pro 1:7"
  },
  {
    "id": 649,
    "question": "How should a \"merry person\" behave, according to James?",
    "options": [
      "Salt",
      "Sing psalms",
      "Men of Galilee (Disciples)",
      "Phoebe"
    ],
    "correctIndex": 1,
    "correctAnswer": "Sing psalms",
    "scriptureRef": "Jam 5:13"
  },
  {
    "id": 650,
    "question": "What sacrifice did Mary and Joseph offer when the days of purification were complete after Jesus' birth?",
    "options": [
      "John",
      "A band of men and officers",
      "Two turtledoves or pigeons",
      "Forty-eight"
    ],
    "correctIndex": 2,
    "correctAnswer": "Two turtledoves or pigeons",
    "scriptureRef": "Luke 2:24"
  },
  {
    "id": 651,
    "question": "Who sat down under a tree and asked the Lord to take away his life?",
    "options": [
      "Matthew",
      "Terah",
      "Elijah",
      "The wicked"
    ],
    "correctIndex": 2,
    "correctAnswer": "Elijah",
    "scriptureRef": "1 Ki 19:4"
  },
  {
    "id": 652,
    "question": "What god did the Philistines offer sacrifices to?",
    "options": [
      "A third",
      "He ate it",
      "Dagon",
      "Treasurer"
    ],
    "correctIndex": 2,
    "correctAnswer": "Dagon",
    "scriptureRef": "Jdg 16:23"
  },
  {
    "id": 653,
    "question": "Which judge unknowingly vowed his daughter to the Lord as a burnt offering?",
    "options": [
      "Timothy",
      "Jephthah",
      "Girdle (belt)",
      "Appii forum"
    ],
    "correctIndex": 1,
    "correctAnswer": "Jephthah",
    "scriptureRef": "Jdg 11:30-40"
  },
  {
    "id": 654,
    "question": "God appeared to Jacob on the way to Egypt in a vision at Beer-sheba, but what did he tell him?",
    "options": [
      "Nehemiah",
      "Don't fear going to Egypt, he would be made",
      "Goats",
      "He had gone to Bethlehem for a"
    ],
    "correctIndex": 1,
    "correctAnswer": "Don't fear going to Egypt, he would be made",
    "scriptureRef": ""
  },
  {
    "id": 655,
    "question": "What did God tell the people not to eat after the flood?",
    "options": [
      "Ammon",
      "into a great nation there (Gen 46:3) Blood",
      "Herodias",
      "Thou shall not commit adultery"
    ],
    "correctIndex": 1,
    "correctAnswer": "into a great nation there (Gen 46:3) Blood",
    "scriptureRef": "Gen 9:4"
  },
  {
    "id": 656,
    "question": "What punishment was given to Gehazi for his greed?",
    "options": [
      "Purim",
      "Dorcas",
      "Made leprous",
      "Berea"
    ],
    "correctIndex": 2,
    "correctAnswer": "Made leprous",
    "scriptureRef": "2 Ki 5:25-27"
  },
  {
    "id": 657,
    "question": "How did Rahab let the invading Israelites identify her house?",
    "options": [
      "Mercurius (Hermes)",
      "Isaac",
      "She tied a red thread in the window",
      "Killed by a lion"
    ],
    "correctIndex": 2,
    "correctAnswer": "She tied a red thread in the window",
    "scriptureRef": "Josh 2:18"
  },
  {
    "id": 658,
    "question": "Which angel told Daniel the meaning of his vision of the ram and the goat?",
    "options": [
      "Lameness",
      "Gabriel",
      "Because of the judgments of the",
      "He claimed to be the Son of God"
    ],
    "correctIndex": 1,
    "correctAnswer": "Gabriel",
    "scriptureRef": "Dan 8:16"
  },
  {
    "id": 659,
    "question": "Which king helped Solomon with his building projects?",
    "options": [
      "The poor",
      "Hiram, King of Tyre",
      "Fought to rescue him",
      "Sixth"
    ],
    "correctIndex": 1,
    "correctAnswer": "Hiram, King of Tyre",
    "scriptureRef": "1 Ki 7:13"
  },
  {
    "id": 660,
    "question": "How many missionary journeys did Paul undertake before his journey to Rome?",
    "options": [
      "Corinthians",
      "Three",
      "Interpret his dreams",
      "Malchus"
    ],
    "correctIndex": 1,
    "correctAnswer": "Three",
    "scriptureRef": "Acts 13 - 21"
  },
  {
    "id": 661,
    "question": "What was Timothy advised to take to help with his illnesses?",
    "options": [
      "Thirteen years",
      "In sanctification and honor",
      "Wine",
      "Simon (the sorcerer)"
    ],
    "correctIndex": 2,
    "correctAnswer": "Wine",
    "scriptureRef": "1 Tim 5:23"
  },
  {
    "id": 662,
    "question": "What happened to the prophet from Judah who was led to disobey God when a prophet from Bethel lied to him saying he was allowed to come back and share a meal with him?",
    "options": [
      "is at hand (Matt 4:17) Pray for one another",
      "Killed by a lion",
      "100",
      "1,100"
    ],
    "correctIndex": 1,
    "correctAnswer": "Killed by a lion",
    "scriptureRef": "1 Ki 13:24"
  },
  {
    "id": 663,
    "question": "Who was the goddess of the Ephesians?",
    "options": [
      "Thirty",
      "Appii forum",
      "Tenth",
      "Diana (Artemis)"
    ],
    "correctIndex": 3,
    "correctAnswer": "Diana (Artemis)",
    "scriptureRef": "Acts 19:28"
  },
  {
    "id": 664,
    "question": "How many volunteer soldiers did Gideon have initially?",
    "options": [
      "To the Unknown God",
      "Made leprous",
      "32,000",
      "They must marry within their tribe"
    ],
    "correctIndex": 2,
    "correctAnswer": "32,000",
    "scriptureRef": "Jdg 7:3"
  },
  {
    "id": 665,
    "question": "What will Jesus \"drink new in the Kingdom of God\"?",
    "options": [
      "Samuel",
      "The fruit of the vine",
      "Tarshish",
      "Sheaves of wheat bowing down to"
    ],
    "correctIndex": 1,
    "correctAnswer": "The fruit of the vine",
    "scriptureRef": "Matt 26:29"
  },
  {
    "id": 666,
    "question": "What objects did Gideon and his army use to defeat the Midianites?",
    "options": [
      "Trumpets, pitchers and lamps",
      "Darius",
      "Horse",
      "Blindness"
    ],
    "correctIndex": 0,
    "correctAnswer": "Trumpets, pitchers and lamps",
    "scriptureRef": "Jdg 7:15-22"
  },
  {
    "id": 667,
    "question": "Who had a slave named Onesimus?",
    "options": [
      "A pig's snout",
      "Samaritan",
      "Philemon",
      "Grandson"
    ],
    "correctIndex": 2,
    "correctAnswer": "Philemon",
    "scriptureRef": "Phm 1:10-11"
  },
  {
    "id": 668,
    "question": "In which province was Thessalonica located?",
    "options": [
      "Frogs",
      "(Quietly) divorce her",
      "You will sit on twelve thrones judging the",
      "Macedonia"
    ],
    "correctIndex": 3,
    "correctAnswer": "Macedonia",
    "scriptureRef": "Acts 16-18"
  },
  {
    "id": 669,
    "question": "Which is the shortest Psalm?",
    "options": [
      "Locusts",
      "She tied a red thread in the window",
      "Love of money",
      "Psalm 117"
    ],
    "correctIndex": 3,
    "correctAnswer": "Psalm 117",
    "scriptureRef": "Ps 117"
  },
  {
    "id": 670,
    "question": "How did the townspeople regard Ruth?",
    "options": [
      "Feeding of the 5,000 and Jesus",
      "As a virtuous (worthy) woman",
      "Macedonia",
      "Trumpets, pitchers and lamps"
    ],
    "correctIndex": 1,
    "correctAnswer": "As a virtuous (worthy) woman",
    "scriptureRef": "Ruth 3:11"
  },
  {
    "id": 671,
    "question": "In Revelation, how many people from each tribe were \"sealed\"?",
    "options": [
      "The Songs of Degrees (or Ascents)",
      "12,000",
      "Myrtle",
      "Cousin / Sister's son (KJV)"
    ],
    "correctIndex": 1,
    "correctAnswer": "12,000",
    "scriptureRef": "Rev 7:5-8"
  },
  {
    "id": 672,
    "question": "Who slept under a juniper tree after fleeing for his life?",
    "options": [
      "Elijah",
      "In a dream",
      "Daniel",
      "Twenty-four"
    ],
    "correctIndex": 0,
    "correctAnswer": "Elijah",
    "scriptureRef": "1 Ki 19:5"
  },
  {
    "id": 673,
    "question": "Who thought that the gift of God could be purchased with money?",
    "options": [
      "in a manger (Luke 2:12) John",
      "Simon (the sorcerer)",
      "Feeding of the 5,000 and Jesus",
      "Philippi"
    ],
    "correctIndex": 1,
    "correctAnswer": "Simon (the sorcerer)",
    "scriptureRef": "Acts 8:18"
  },
  {
    "id": 674,
    "question": "What is described as a \"tree of life to them that lay hold upon her\"?",
    "options": [
      "A young goat and some unleavened bread",
      "Raven",
      "Wisdom",
      "He claimed to be the Son of God"
    ],
    "correctIndex": 2,
    "correctAnswer": "Wisdom",
    "scriptureRef": "Pro 3:18"
  },
  {
    "id": 675,
    "question": "What relation was John Mark to Barnabas?",
    "options": [
      "Pharisees",
      "Lord (Ps 48:11; 97:8) 400",
      "Cousin / Sister's son (KJV)",
      "Jesus"
    ],
    "correctIndex": 2,
    "correctAnswer": "Cousin / Sister's son (KJV)",
    "scriptureRef": "Col 4:10"
  },
  {
    "id": 676,
    "question": "Finish the proverb: \"The rod and reproof give wisdom, but a child left to himself.\"..",
    "options": [
      "Ur",
      "…bringeth his mother to shame",
      "The transgression of the law",
      "He was baptized"
    ],
    "correctIndex": 1,
    "correctAnswer": "…bringeth his mother to shame",
    "scriptureRef": "Pro 29:15"
  },
  {
    "id": 677,
    "question": "Why wasn't David allowed to build God's house?",
    "options": [
      "Because he was a man of war",
      "A third",
      "Hailstones",
      "the kingdom to Israel? (Acts 1:6) Fish and honeycomb"
    ],
    "correctIndex": 0,
    "correctAnswer": "Because he was a man of war",
    "scriptureRef": "1 Chr 28:3"
  },
  {
    "id": 678,
    "question": "Which parts of his body did Peter ask Jesus to wash, after being told that unless Jesus washed his feet he would have no part with him?",
    "options": [
      "street corners (Matt 6:5) A lame man",
      "other sheaves (Gen 37:5-7) Benjamin",
      "Ararat",
      "Feet, hands and head"
    ],
    "correctIndex": 3,
    "correctAnswer": "Feet, hands and head",
    "scriptureRef": "John 13:9"
  },
  {
    "id": 679,
    "question": "What did the Holy Spirit look like when the disciples received it?",
    "options": [
      "Didn't want to spoil his inheritance",
      "Tongues of fire",
      "Her life was sacrificed to God",
      "walks on water (John 6:1; 6:16) Joshua"
    ],
    "correctIndex": 1,
    "correctAnswer": "Tongues of fire",
    "scriptureRef": "Acts 2:3"
  },
  {
    "id": 680,
    "question": "Which two of the eight signs, or miracles, recorded in John, are also recorded in other gospel records?",
    "options": [
      "Rebuilding the temple",
      "other sheaves (Gen 37:5-7) Benjamin",
      "Work quietly",
      "Feeding of the 5,000 and Jesus"
    ],
    "correctIndex": 3,
    "correctAnswer": "Feeding of the 5,000 and Jesus",
    "scriptureRef": ""
  },
  {
    "id": 681,
    "question": "Who led the people of Israel into the Promised Land?",
    "options": [
      "Machpelah",
      "walks on water (John 6:1; 6:16) Joshua",
      "is the kingdom of heaven (Matt 5:3) Sea of Tiberias (Galilee)",
      "The Spirit, the water and the blood"
    ],
    "correctIndex": 1,
    "correctAnswer": "walks on water (John 6:1; 6:16) Joshua",
    "scriptureRef": "Josh 1:2"
  },
  {
    "id": 682,
    "question": "With what object did Jael kill Sisera?",
    "options": [
      "To visit the fatherless and widows, and to keep",
      "1 Samuel",
      "Tent peg",
      "Anna the Prophetess"
    ],
    "correctIndex": 2,
    "correctAnswer": "Tent peg",
    "scriptureRef": "Jdg 4:21"
  },
  {
    "id": 683,
    "question": "\"Praise ye him, all his angels: praise ye him, all his hosts\", is followed by which line?",
    "options": [
      "A cattle prod (ox goad)",
      "Seven",
      "Praise ye him, sun and moon, praise him,",
      "Bethlehem"
    ],
    "correctIndex": 2,
    "correctAnswer": "Praise ye him, sun and moon, praise him,",
    "scriptureRef": ""
  },
  {
    "id": 684,
    "question": "Which of Leah's sons brought her mandrakes?",
    "options": [
      "all ye stars of light (Ps 148:2-3) Reuben",
      "God has taken his power and",
      "Jesus",
      "Tongues of fire"
    ],
    "correctIndex": 0,
    "correctAnswer": "all ye stars of light (Ps 148:2-3) Reuben",
    "scriptureRef": "Gen 30:14"
  },
  {
    "id": 685,
    "question": "It is \"better to obtain wisdom\" than what?",
    "options": [
      "Hollow of thigh / Hip",
      "120,000",
      "Death",
      "Gold"
    ],
    "correctIndex": 3,
    "correctAnswer": "Gold",
    "scriptureRef": "Pro 16:16"
  },
  {
    "id": 686,
    "question": "In which book of the Bible do we read of David and Goliath?",
    "options": [
      "offered. (Lev 7:15; 22:30) Zebulun",
      "1 Samuel",
      "Obadiah",
      "A shining light from heaven"
    ],
    "correctIndex": 1,
    "correctAnswer": "1 Samuel",
    "scriptureRef": "1 Sam 17"
  },
  {
    "id": 687,
    "question": "Many of the chief rulers privately believed in Jesus. Why did they not confess this belief publicly?",
    "options": [
      "A cattle prod (ox goad)",
      "Apples",
      "They were afraid the Pharisees would put",
      "Evil men"
    ],
    "correctIndex": 2,
    "correctAnswer": "They were afraid the Pharisees would put",
    "scriptureRef": ""
  },
  {
    "id": 688,
    "question": "When Jesus left Nazareth and began his ministry in Capernaum, what message did he preach?",
    "options": [
      "disciple (Luke 22:24-30) Hezekiah",
      "them out of the synagogue (John 12:42) Repent: for the kingdom of heaven",
      "Archelaus",
      "Disputing who was the greatest"
    ],
    "correctIndex": 1,
    "correctAnswer": "them out of the synagogue (John 12:42) Repent: for the kingdom of heaven",
    "scriptureRef": ""
  },
  {
    "id": 689,
    "question": "According to James, what should we do after \"confessing our faults to one another\"?",
    "options": [
      "Levite",
      "300",
      "The widow of Zarephath",
      "is at hand (Matt 4:17) Pray for one another"
    ],
    "correctIndex": 3,
    "correctAnswer": "is at hand (Matt 4:17) Pray for one another",
    "scriptureRef": "Jam 5:16"
  },
  {
    "id": 690,
    "question": "How old was Joshua when he died?",
    "options": [
      "110",
      "Benjamin",
      "Cupbearer",
      "150"
    ],
    "correctIndex": 0,
    "correctAnswer": "110",
    "scriptureRef": "Josh 24:29"
  },
  {
    "id": 691,
    "question": "Who was the king of Judea at the time of Jesus' birth?",
    "options": [
      "City gates",
      "Samaria",
      "Purim",
      "Herod (the Great)"
    ],
    "correctIndex": 3,
    "correctAnswer": "Herod (the Great)",
    "scriptureRef": "Matt 2:1"
  },
  {
    "id": 692,
    "question": "What seed did Manna look like?",
    "options": [
      "Coriander",
      "Blind",
      "Berea",
      "Myrtle"
    ],
    "correctIndex": 0,
    "correctAnswer": "Coriander",
    "scriptureRef": "Num 11:7"
  },
  {
    "id": 693,
    "question": "Which disciple brought the boy with five loaves and two fishes to Jesus?",
    "options": [
      "Samuel",
      "Hiram, King of Tyre",
      "Andrew",
      "Tabitha (Dorcas)"
    ],
    "correctIndex": 2,
    "correctAnswer": "Andrew",
    "scriptureRef": "John 6:8"
  },
  {
    "id": 694,
    "question": "According to James, what should we do when we \"fall into temptation\"?",
    "options": [
      "Obadiah",
      "Seven",
      "A well of Bethlehem",
      "Count it all joy"
    ],
    "correctIndex": 3,
    "correctAnswer": "Count it all joy",
    "scriptureRef": "Jam 1:2"
  },
  {
    "id": 695,
    "question": "Whose \"days are like grass,\" according to the Psalmist?",
    "options": [
      "Its mother's milk",
      "Man",
      "Make the sun and moon stand still",
      "(120 talents of) gold, spices, and"
    ],
    "correctIndex": 1,
    "correctAnswer": "Man",
    "scriptureRef": "Ps 103:15"
  },
  {
    "id": 696,
    "question": "Which animal is associated with the first four of the seven seals?",
    "options": [
      "the Midianites (Jdg 7:5-7) Five",
      "Hitting a rock twice (instead of",
      "Horse",
      "Forty days"
    ],
    "correctIndex": 2,
    "correctAnswer": "Horse",
    "scriptureRef": "Rev 6"
  },
  {
    "id": 697,
    "question": "Which kind of bird did Jesus say were \"sold two for a farthing\"?",
    "options": [
      "Silver",
      "Sparrows",
      "Samaritan",
      "It will burst the bottles"
    ],
    "correctIndex": 1,
    "correctAnswer": "Sparrows",
    "scriptureRef": "Matt 10:29"
  },
  {
    "id": 698,
    "question": "Who was the father of Abraham?",
    "options": [
      "other sheaves (Gen 37:5-7) Benjamin",
      "Three",
      "Moses",
      "Terah"
    ],
    "correctIndex": 3,
    "correctAnswer": "Terah",
    "scriptureRef": "Gen 11:31"
  },
  {
    "id": 699,
    "question": "How were the family warned that someone wanted to kill the baby Jesus?",
    "options": [
      "Jephunneh",
      "speaking to it) (Num 20:11) Absalom",
      "In a dream",
      "Men of Galilee (Disciples)"
    ],
    "correctIndex": 2,
    "correctAnswer": "In a dream",
    "scriptureRef": "Matt 2:13"
  },
  {
    "id": 700,
    "question": "How did the sailors discover Jonah was responsible for the storm?",
    "options": [
      "Philippi",
      "Zarephath",
      "Cast lots",
      "Its mother's milk"
    ],
    "correctIndex": 2,
    "correctAnswer": "Cast lots",
    "scriptureRef": "Jon 1:7"
  },
  {
    "id": 701,
    "question": "What did the chief priest and Pharisees give Judas to enable him to help arrest Jesus?",
    "options": [
      "God said, \"the blood is the life.\"",
      "tall (Num 13:33-14:4) Made it into an idol",
      "Phinehas'",
      "A band of men and officers"
    ],
    "correctIndex": 3,
    "correctAnswer": "A band of men and officers",
    "scriptureRef": "John 18:3"
  },
  {
    "id": 702,
    "question": "How old was Josiah when he became king of Judah?",
    "options": [
      "Elkanah",
      "The coming of the Messiah",
      "Mist went up from the earth",
      "Eight"
    ],
    "correctIndex": 3,
    "correctAnswer": "Eight",
    "scriptureRef": "2 Ki 22:1"
  },
  {
    "id": 703,
    "question": "What was the name of Abigail's first husband?",
    "options": [
      "The transgression of the law",
      "Machpelah",
      "Sea voyage",
      "Nabal"
    ],
    "correctIndex": 3,
    "correctAnswer": "Nabal",
    "scriptureRef": "1 Sam 25:3"
  },
  {
    "id": 704,
    "question": "Why did Jephthah flee to the land of Tob?",
    "options": [
      "Ten",
      "Grasshoppers",
      "Clothing",
      "He was illegitimate and his brothers"
    ],
    "correctIndex": 3,
    "correctAnswer": "He was illegitimate and his brothers",
    "scriptureRef": ""
  },
  {
    "id": 705,
    "question": "Where did the hypocrites \"love to pray\"?",
    "options": [
      "Simeon",
      "Salem",
      "drove him out (Jdg 11:1-3) Standing in synagogues and on",
      "Wrapped in swaddling clothes, lying"
    ],
    "correctIndex": 2,
    "correctAnswer": "drove him out (Jdg 11:1-3) Standing in synagogues and on",
    "scriptureRef": ""
  },
  {
    "id": 706,
    "question": "Who did Paul heal at Lystra?",
    "options": [
      "His nephew",
      "Horses",
      "street corners (Matt 6:5) A lame man",
      "Righteousness"
    ],
    "correctIndex": 2,
    "correctAnswer": "street corners (Matt 6:5) A lame man",
    "scriptureRef": "Acts 14:8"
  },
  {
    "id": 707,
    "question": "Which animal did the ten spies liken themselves to, when compared to the people of the land of Canaan?",
    "options": [
      "Grasshoppers",
      "A shining light from heaven",
      "commenced his reign (Rev 11:17) His lawgiver (royal scepter)",
      "Who is the greatest in heaven"
    ],
    "correctIndex": 0,
    "correctAnswer": "Grasshoppers",
    "scriptureRef": "Num 13:33"
  },
  {
    "id": 708,
    "question": "After Pilate found no guilt in Christ, for what reason did the Jews say that Jesus should die?",
    "options": [
      "He claimed to be the Son of God",
      "Theft",
      "Appii forum",
      "Archelaus"
    ],
    "correctIndex": 0,
    "correctAnswer": "He claimed to be the Son of God",
    "scriptureRef": "John 19:7"
  },
  {
    "id": 709,
    "question": "In a parable told by Jesus, two men went up to the temple to pray, a Pharisee and who else?",
    "options": [
      "Publican (tax collector)",
      "Gardener",
      "In a dream",
      "Jupiter (Zeus)"
    ],
    "correctIndex": 0,
    "correctAnswer": "Publican (tax collector)",
    "scriptureRef": "Luke 18:10"
  },
  {
    "id": 710,
    "question": "Who were the first two disciples to be called?",
    "options": [
      "Philip",
      "Thirty",
      "A wall fell on them",
      "Simon (Peter) and Andrew"
    ],
    "correctIndex": 3,
    "correctAnswer": "Simon (Peter) and Andrew",
    "scriptureRef": "Matt 4:18-19"
  },
  {
    "id": 711,
    "question": "How many sons did Gideon have?",
    "options": [
      "Ishmaelites",
      "speaking to it) (Num 20:11) Absalom",
      "Benhadad",
      "Seventy"
    ],
    "correctIndex": 3,
    "correctAnswer": "Seventy",
    "scriptureRef": "Jdg 8:30"
  },
  {
    "id": 712,
    "question": "On which day of the creation did God create trees and plants?",
    "options": [
      "Herod",
      "Psalm 90",
      "Gabriel",
      "Third"
    ],
    "correctIndex": 3,
    "correctAnswer": "Third",
    "scriptureRef": "Gen 1:11-13"
  },
  {
    "id": 713,
    "question": "On which island did Paul preach on his first missionary journey?",
    "options": [
      "Cyprus",
      "They were afraid the Pharisees would put",
      "Beautiful Gate",
      "the kingdom to Israel? (Acts 1:6) Fish and honeycomb"
    ],
    "correctIndex": 0,
    "correctAnswer": "Cyprus",
    "scriptureRef": "Acts 13:4"
  },
  {
    "id": 714,
    "question": "Why did the Pharisees deride Jesus when he said, \"You cannot serve God and Mammon\"?",
    "options": [
      "The Songs of Degrees (or Ascents)",
      "Over the hole of a snake",
      "They were covetous (loved money)",
      "Love of money"
    ],
    "correctIndex": 2,
    "correctAnswer": "They were covetous (loved money)",
    "scriptureRef": "Luke 16:13-14"
  },
  {
    "id": 715,
    "question": "What was Samson's offer of reward if the Philistines could solve his riddle?",
    "options": [
      "thanksgiving (Php 4:6) God's footstool",
      "Mary",
      "Clothing",
      "Confusion and every evil work"
    ],
    "correctIndex": 2,
    "correctAnswer": "Clothing",
    "scriptureRef": "Jdg 14:12"
  },
  {
    "id": 716,
    "question": "How many of Nineveh's inhabitants could not \"discern their left hand from their right hand\"?",
    "options": [
      "A stone hit the feet and broke",
      "Ninth",
      "Jephthah",
      "120,000"
    ],
    "correctIndex": 3,
    "correctAnswer": "120,000",
    "scriptureRef": "Jon 4:11"
  },
  {
    "id": 717,
    "question": "What did the mighty angel throw into the sea that represented the throwing down of Babylon?",
    "options": [
      "Ten",
      "A stone like a great millstone",
      "Twelve",
      "A man clothed in linen"
    ],
    "correctIndex": 1,
    "correctAnswer": "A stone like a great millstone",
    "scriptureRef": "Rev 18:21"
  },
  {
    "id": 718,
    "question": "God calls us to a life of holiness, but according to Thessalonians what are we told we are doing if we ignore this advice?",
    "options": [
      "Father of Lights",
      "Despising God",
      "Hannah",
      "Eight"
    ],
    "correctIndex": 1,
    "correctAnswer": "Despising God",
    "scriptureRef": "1 Th 4:7-8"
  },
  {
    "id": 719,
    "question": "How did Paul escape from Damascus?",
    "options": [
      "In a basket down the city wall",
      "A cattle prod (ox goad)",
      "Machpelah",
      "His groanings (roarings)"
    ],
    "correctIndex": 0,
    "correctAnswer": "In a basket down the city wall",
    "scriptureRef": "Acts 9:23-25"
  },
  {
    "id": 720,
    "question": "According to the Book of Proverbs, what is \"bound in the heart of a child\"?",
    "options": [
      "Foolishness",
      "Yeast",
      "Fifteen",
      "He was baptized"
    ],
    "correctIndex": 0,
    "correctAnswer": "Foolishness",
    "scriptureRef": "Pro 22:15"
  },
  {
    "id": 721,
    "question": "Which men murdered the Levite's concubine?",
    "options": [
      "The men of Gibeah",
      "Kish",
      "God said, \"the blood is the life.\"",
      "He was made dumb"
    ],
    "correctIndex": 0,
    "correctAnswer": "The men of Gibeah",
    "scriptureRef": "Jdg 19:15-28"
  },
  {
    "id": 722,
    "question": "What happened when the third vial of wrath was poured on the earth?",
    "options": [
      "Greek",
      "Zarephath",
      "The rivers and fountains of waters",
      "twelve tribes of Israel (Matt 19:28) Thousands upon thousands of angels"
    ],
    "correctIndex": 2,
    "correctAnswer": "The rivers and fountains of waters",
    "scriptureRef": ""
  },
  {
    "id": 723,
    "question": "On what type of stone were the twelve children of Israel to have their names engraved, as part of the High Priest's garments?",
    "options": [
      "Philemon",
      "became blood (Rev 16:4) An onyx",
      "Coriander",
      "Four"
    ],
    "correctIndex": 1,
    "correctAnswer": "became blood (Rev 16:4) An onyx",
    "scriptureRef": "Exo 28:9"
  },
  {
    "id": 724,
    "question": "What sin did Achan commit?",
    "options": [
      "Theft",
      "Naomi",
      "Lystra",
      "Make one hair black or white"
    ],
    "correctIndex": 0,
    "correctAnswer": "Theft",
    "scriptureRef": "Josh 7:1"
  },
  {
    "id": 725,
    "question": "Who was the father of Saul?",
    "options": [
      "The men of Gibeah",
      "Two years",
      "Barnabas",
      "Kish"
    ],
    "correctIndex": 3,
    "correctAnswer": "Kish",
    "scriptureRef": "1 Sam 14:51"
  },
  {
    "id": 726,
    "question": "What four beasts did Daniel see in a vision?",
    "options": [
      "On Earth",
      "Ananias",
      "Philip",
      "Lion, Bear, Leopard & Terrible beast"
    ],
    "correctIndex": 3,
    "correctAnswer": "Lion, Bear, Leopard & Terrible beast",
    "scriptureRef": "Dan 7:3-7"
  },
  {
    "id": 727,
    "question": "Wisdom is \"more precious\" than which gems?",
    "options": [
      "Rubies",
      "Appii forum",
      "He was made dumb",
      "His nephew"
    ],
    "correctIndex": 0,
    "correctAnswer": "Rubies",
    "scriptureRef": "Pro 8:11"
  },
  {
    "id": 728,
    "question": "What did the Israelites borrow from their Egyptian neighbors?",
    "options": [
      "Interpret his dreams",
      "A parable",
      "Jewels and clothing",
      "Silvanus"
    ],
    "correctIndex": 2,
    "correctAnswer": "Jewels and clothing",
    "scriptureRef": "Exo 3:22"
  },
  {
    "id": 729,
    "question": "Who came into Galilee preaching the Kingdom of God?",
    "options": [
      "Jesus",
      "Simeon",
      "The Songs of Degrees (or Ascents)",
      "Dorcas"
    ],
    "correctIndex": 0,
    "correctAnswer": "Jesus",
    "scriptureRef": "Mark 1:14"
  },
  {
    "id": 730,
    "question": "What did God create on the fifth day?",
    "options": [
      "Underwater creatures and birds",
      "It doesn't say",
      "them into pieces (Dan 2:34) Ahab",
      "sins (Matt 6:11-12; Luke 11:4) Murdering him"
    ],
    "correctIndex": 0,
    "correctAnswer": "Underwater creatures and birds",
    "scriptureRef": "Gen 1:20-23"
  },
  {
    "id": 731,
    "question": "What Egyptian name did Pharaoh give to Joseph?",
    "options": [
      "handwriting (2 Th 3:17) Belshazzar",
      "When the plague of the death of the firstborn",
      "Anoint your head, and wash your face",
      "Zaphnath-paaneah"
    ],
    "correctIndex": 3,
    "correctAnswer": "Zaphnath-paaneah",
    "scriptureRef": "Gen 41:45"
  },
  {
    "id": 732,
    "question": "What did Jesus do before driving the money-changers out of the temple?",
    "options": [
      "100",
      "Made a whip",
      "Jesus",
      "became blood (Rev 16:4) An onyx"
    ],
    "correctIndex": 1,
    "correctAnswer": "Made a whip",
    "scriptureRef": "John 2:14"
  },
  {
    "id": 733,
    "question": "What reward did Jesus say the twelve apostles would get for forsaking everything and following him?",
    "options": [
      "You will sit on twelve thrones judging the",
      "Lions",
      "He had blasphemed against God",
      "Beautiful Gate"
    ],
    "correctIndex": 0,
    "correctAnswer": "You will sit on twelve thrones judging the",
    "scriptureRef": ""
  },
  {
    "id": 734,
    "question": "Who said, \"Worthy is the lamb who was slain\"?",
    "options": [
      "twelve tribes of Israel (Matt 19:28) Thousands upon thousands of angels",
      "Purim",
      "Blessed is the man who walks not in the",
      "Priest"
    ],
    "correctIndex": 0,
    "correctAnswer": "twelve tribes of Israel (Matt 19:28) Thousands upon thousands of angels",
    "scriptureRef": "Rev 5:11-12"
  },
  {
    "id": 735,
    "question": "Who gave water to the camels of Abraham's servant, in answer to his prayer?",
    "options": [
      "666",
      "Rebekah",
      "Destroyed the rest of the royal family",
      "Like a bride"
    ],
    "correctIndex": 1,
    "correctAnswer": "Rebekah",
    "scriptureRef": "Gen 24:14-19"
  },
  {
    "id": 736,
    "question": "In which gospel does Jesus state that he is the \"Bread of Life?",
    "options": [
      "John",
      "Jupiter (Zeus)",
      "shepherds, which were an abomination to the Egyptians (Gen 46:34) Haggai",
      "Almond blossom"
    ],
    "correctIndex": 0,
    "correctAnswer": "John",
    "scriptureRef": "John 6:48"
  },
  {
    "id": 737,
    "question": "How many fish were caught in the miracle of the draught of fishes?",
    "options": [
      "153",
      "Frogs",
      "Philippi",
      "of Stephanas (1 Cor 1:14-16) Gamaliel"
    ],
    "correctIndex": 0,
    "correctAnswer": "153",
    "scriptureRef": "John 21:11"
  },
  {
    "id": 738,
    "question": "From which minor prophet is Jesus quoting when he says, \"I am come to set the daughter against her mother\"?",
    "options": [
      "Half",
      "Lion",
      "Micah",
      "Augustus Caesar"
    ],
    "correctIndex": 2,
    "correctAnswer": "Micah",
    "scriptureRef": "Mic 7:6"
  },
  {
    "id": 739,
    "question": "After seeing the destruction of Jericho and Ai, the inhabitants of which city pretended to be travelers from a far off land to make a covenant of peace with the Israelites?",
    "options": [
      "Gibeon",
      "They were covetous (loved money)",
      "Judah",
      "Make the sun and moon stand still"
    ],
    "correctIndex": 0,
    "correctAnswer": "Gibeon",
    "scriptureRef": "Josh 9:3-6"
  },
  {
    "id": 740,
    "question": "In the parable of the Good Samaritan, who was the first man to pass by the wounded man?",
    "options": [
      "The land of Canaan",
      "Priest",
      "To gain understanding",
      "Feeding of the 5,000 and Jesus"
    ],
    "correctIndex": 1,
    "correctAnswer": "Priest",
    "scriptureRef": "Luke 10:31"
  },
  {
    "id": 741,
    "question": "What did Paul do when he couldn't bear to be away from the brethren at Thessalonica any longer?",
    "options": [
      "Ten male donkeys and ten female donkeys",
      "Sent Timothy to encourage them",
      "Made leprous",
      "The Songs of Degrees (or Ascents)"
    ],
    "correctIndex": 1,
    "correctAnswer": "Sent Timothy to encourage them",
    "scriptureRef": "1 Th 3:1-2"
  },
  {
    "id": 742,
    "question": "What did James and John want to do to the unwelcoming Samaritan village?",
    "options": [
      "Silvanus",
      "walks on water (John 6:1; 6:16) Joshua",
      "Interpret his dreams",
      "Call down fire from heaven"
    ],
    "correctIndex": 3,
    "correctAnswer": "Call down fire from heaven",
    "scriptureRef": "Luke 9:54"
  },
  {
    "id": 743,
    "question": "Jesus said not to \"swear by your head\" because you cannot do what?",
    "options": [
      "Built larger barns to store them",
      "Asher",
      "Make one hair black or white",
      "Who is the greatest in heaven"
    ],
    "correctIndex": 2,
    "correctAnswer": "Make one hair black or white",
    "scriptureRef": "Matt 5:36"
  },
  {
    "id": 744,
    "question": "On the fourth day God made the Sun, Moon and what else?",
    "options": [
      "Stars",
      "is at hand (Matt 4:17) Pray for one another",
      "Tongues of fire",
      "Gilead"
    ],
    "correctIndex": 0,
    "correctAnswer": "Stars",
    "scriptureRef": "Gen 1:14-18"
  },
  {
    "id": 745,
    "question": "In the New Jerusalem described in Revelation, what are the twelve gates made from?",
    "options": [
      "Greek",
      "Pearls",
      "commenced his reign (Rev 11:17) His lawgiver (royal scepter)",
      "Ananias"
    ],
    "correctIndex": 1,
    "correctAnswer": "Pearls",
    "scriptureRef": "Rev 21:21"
  },
  {
    "id": 746,
    "question": "Which Psalm is entitled \"A Prayer of Moses\"?",
    "options": [
      "Philippi",
      "Moses",
      "Psalm 90",
      "Hidden"
    ],
    "correctIndex": 2,
    "correctAnswer": "Psalm 90",
    "scriptureRef": "Ps 90:1"
  },
  {
    "id": 747,
    "question": "On what day of creation were dry land and seas created?",
    "options": [
      "Third",
      "Seventy times seven",
      "Gravel",
      "Call down fire from heaven"
    ],
    "correctIndex": 0,
    "correctAnswer": "Third",
    "scriptureRef": "Gen 1:9-13"
  },
  {
    "id": 748,
    "question": "How many tribes was Jeroboam promised he would rule over?",
    "options": [
      "Mountains",
      "Ten",
      "An ephah of barley",
      "The eye"
    ],
    "correctIndex": 1,
    "correctAnswer": "Ten",
    "scriptureRef": "1 Ki 11:31"
  },
  {
    "id": 749,
    "question": "Which brother did Joseph imprison while the others returned to Jacob?",
    "options": [
      "Simeon",
      "The inhabitants were great and",
      "The land of Canaan",
      "Cast lots"
    ],
    "correctIndex": 0,
    "correctAnswer": "Simeon",
    "scriptureRef": "Gen 42:24"
  },
  {
    "id": 750,
    "question": "How many spies did Moses send out to explore the land of Canaan?",
    "options": [
      "Twelve",
      "Matthew",
      "Ishmaelites",
      "In a candlestick"
    ],
    "correctIndex": 0,
    "correctAnswer": "Twelve",
    "scriptureRef": "Num 13:2-16"
  },
  {
    "id": 751,
    "question": "Which bird does Job say is \"lacking in wisdom\", due to the fact she leaves her eggs on the floor?",
    "options": [
      "Diana (Artemis)",
      "Yeast",
      "Ostrich",
      "Have no company with them so that"
    ],
    "correctIndex": 2,
    "correctAnswer": "Ostrich",
    "scriptureRef": "Job 39:13-17"
  },
  {
    "id": 752,
    "question": "Whose mother found him a wife from Egypt?",
    "options": [
      "was brought upon the land of Egypt (Exo 12:27) Drunkenness",
      "Ishmael",
      "Naomi",
      "Timothy"
    ],
    "correctIndex": 1,
    "correctAnswer": "Ishmael",
    "scriptureRef": "Gen 21:21"
  },
  {
    "id": 753,
    "question": "Noah was a \"preacher\" of what?",
    "options": [
      "Fifty",
      "Ararat",
      "Righteousness",
      "Philippi"
    ],
    "correctIndex": 2,
    "correctAnswer": "Righteousness",
    "scriptureRef": "2 Pe 2:5"
  },
  {
    "id": 754,
    "question": "Which of the twelve sons of Jacob had a name that means \"praise\"?",
    "options": [
      "Passover (Matt 26:30) Ashkelon",
      "A worm",
      "Judah",
      "Bread and wine"
    ],
    "correctIndex": 2,
    "correctAnswer": "Judah",
    "scriptureRef": "Gen 29:35"
  },
  {
    "id": 755,
    "question": "What is the message of the parable that Jesus told Simon the Pharisee?",
    "options": [
      "A living dog",
      "He who has many debts forgiven, loves the",
      "Abimelech",
      "Jesus"
    ],
    "correctIndex": 1,
    "correctAnswer": "He who has many debts forgiven, loves the",
    "scriptureRef": ""
  },
  {
    "id": 756,
    "question": "How many men and women were in the temple to watch Samson entertain them?",
    "options": [
      "one who forgave him more than he who has few debts forgiven. (Luke 7:42-43) 3,000",
      "Herod",
      "Joab",
      "Ai"
    ],
    "correctIndex": 0,
    "correctAnswer": "one who forgave him more than he who has few debts forgiven. (Luke 7:42-43) 3,000",
    "scriptureRef": "Jdg 16:27"
  },
  {
    "id": 757,
    "question": "Who escorted the slave with the letter to Philemon?",
    "options": [
      "(Gen 17:5 / Strong's H87) Nineteen",
      "Tychicus",
      "Thirty",
      "Forty-eight"
    ],
    "correctIndex": 1,
    "correctAnswer": "Tychicus",
    "scriptureRef": "Col 4:7-9"
  },
  {
    "id": 758,
    "question": "Who was Paul writing to when he wrote \"I will receive you and will be a Father unto you and ye shall be my sons and daughters, saith the Lord Almighty\"?",
    "options": [
      "Clothing",
      "abandon Uriah in battle (2 Sam 11:15) None",
      "Gilead",
      "Corinthians"
    ],
    "correctIndex": 3,
    "correctAnswer": "Corinthians",
    "scriptureRef": "2 Cor 6:17-18"
  },
  {
    "id": 759,
    "question": "What was the name of the servant who had his ear cut off at the arrest of Jesus?",
    "options": [
      "Made a whip",
      "Egypt",
      "Ahijah",
      "Malchus"
    ],
    "correctIndex": 3,
    "correctAnswer": "Malchus",
    "scriptureRef": "John 18:10"
  },
  {
    "id": 760,
    "question": "What did Samson carry to the top of the hill overlooking Hebron?",
    "options": [
      "Father-in-law",
      "City gates",
      "Wisdom and instruction",
      "666"
    ],
    "correctIndex": 1,
    "correctAnswer": "City gates",
    "scriptureRef": "Jdg 16:3"
  },
  {
    "id": 761,
    "question": "Whose house did Paul go to in Caesarea?",
    "options": [
      "Lydda",
      "Elymas (Bar-Jesus)",
      "Philip",
      "Ammon"
    ],
    "correctIndex": 2,
    "correctAnswer": "Philip",
    "scriptureRef": "Acts 21:8"
  },
  {
    "id": 762,
    "question": "Who went to sleep during one of Paul's sermons and fell out of the window?",
    "options": [
      "Eutychus",
      "Spread the news about Jesus' birth",
      "He who has many debts forgiven, loves the",
      "It will sprout again"
    ],
    "correctIndex": 0,
    "correctAnswer": "Eutychus",
    "scriptureRef": "Acts 20:9"
  },
  {
    "id": 763,
    "question": "Which prophet of God told Naaman to wash in the river Jordan to cure his leprosy?",
    "options": [
      "Blessed are the poor in spirit for theirs",
      "Philippi",
      "them out of the synagogue (John 12:42) Repent: for the kingdom of heaven",
      "Elisha"
    ],
    "correctIndex": 3,
    "correctAnswer": "Elisha",
    "scriptureRef": "2 Ki 5:10"
  },
  {
    "id": 764,
    "question": "What occupation did Priscilla have?",
    "options": [
      "Tentmaker",
      "The land of Canaan",
      "Agabus",
      "Third"
    ],
    "correctIndex": 0,
    "correctAnswer": "Tentmaker",
    "scriptureRef": "Acts 18:2-3"
  },
  {
    "id": 765,
    "question": "One title of God is El Shaddai, which means what?",
    "options": [
      "Almighty God",
      "Hitting a rock twice (instead of",
      "Elisha",
      "An ephah of barley"
    ],
    "correctIndex": 0,
    "correctAnswer": "Almighty God",
    "scriptureRef": "Gen 17:1"
  },
  {
    "id": 766,
    "question": "What is the seventh commandment?",
    "options": [
      "Forty days",
      "Horses",
      "Levite",
      "Thou shall not commit adultery"
    ],
    "correctIndex": 3,
    "correctAnswer": "Thou shall not commit adultery",
    "scriptureRef": "Exo 20:14"
  },
  {
    "id": 767,
    "question": "How many cities of refuge were on the east side of Jordan?",
    "options": [
      "They must marry within their tribe",
      "Eutychus",
      "Three",
      "Jewels and clothing"
    ],
    "correctIndex": 2,
    "correctAnswer": "Three",
    "scriptureRef": "Deut 4:41-43"
  },
  {
    "id": 768,
    "question": "What was the name of Joseph's (son of Jacob) first born son?",
    "options": [
      "Levi",
      "Manasseh",
      "A stone like a great millstone",
      "Lions"
    ],
    "correctIndex": 1,
    "correctAnswer": "Manasseh",
    "scriptureRef": "Gen 41:51"
  },
  {
    "id": 769,
    "question": "According to the Bible what sort of man was Noah?",
    "options": [
      "Cana",
      "Just / Godly / Blameless",
      "thanksgiving (Php 4:6) God's footstool",
      "Benhadad"
    ],
    "correctIndex": 1,
    "correctAnswer": "Just / Godly / Blameless",
    "scriptureRef": "Gen 6:9"
  },
  {
    "id": 770,
    "question": "How many tribes inherited land on the east of Jordan?",
    "options": [
      "Made a whip",
      "By lying",
      "Aquila and Priscilla",
      "Two and a half"
    ],
    "correctIndex": 3,
    "correctAnswer": "Two and a half",
    "scriptureRef": "Josh 18:7"
  },
  {
    "id": 771,
    "question": "What relation was Lois to Timothy?",
    "options": [
      "Babylon",
      "The poor",
      "Grandmother",
      "Hannah"
    ],
    "correctIndex": 2,
    "correctAnswer": "Grandmother",
    "scriptureRef": "2 Tim 1:5"
  },
  {
    "id": 772,
    "question": "In the parable of the Good Samaritan, who was the second man to pass by the robbed man?",
    "options": [
      "Levite",
      "Have no company with them so that",
      "Ishmaelites",
      "Bread and fish"
    ],
    "correctIndex": 0,
    "correctAnswer": "Levite",
    "scriptureRef": "Luke 10:30-32"
  },
  {
    "id": 773,
    "question": "What was the name of the city where Lydia was converted?",
    "options": [
      "120,000",
      "Philippi",
      "became blood (Rev 16:4) An onyx",
      "Isaac ate of his venison"
    ],
    "correctIndex": 1,
    "correctAnswer": "Philippi",
    "scriptureRef": "Acts 16:11-14"
  },
  {
    "id": 774,
    "question": "Against which enemy did Jephthah lead Israel?",
    "options": [
      "Ammonites",
      "The sick",
      "Sing psalms",
      "Pharisees"
    ],
    "correctIndex": 0,
    "correctAnswer": "Ammonites",
    "scriptureRef": "Jdg 11:9-11"
  },
  {
    "id": 775,
    "question": "What was the name of the prophet who prophesied that Paul would be bound at Jerusalem?",
    "options": [
      "1 Samuel",
      "Elimelech",
      "and made a shelter (Jon 4:5) Simon of Cyrene",
      "Agabus"
    ],
    "correctIndex": 3,
    "correctAnswer": "Agabus",
    "scriptureRef": "Acts 21:10-11"
  },
  {
    "id": 776,
    "question": "How did King Zimri commit suicide?",
    "options": [
      "Ten",
      "Burned his house down while still",
      "Bread and fish",
      "commenced his reign (Rev 11:17) His lawgiver (royal scepter)"
    ],
    "correctIndex": 1,
    "correctAnswer": "Burned his house down while still",
    "scriptureRef": ""
  },
  {
    "id": 777,
    "question": "In the parable of the laborers in the vineyard how much was each person paid to work?",
    "options": [
      "The Thessalonians",
      "147",
      "inside it (1 Ki 16:18) One pence (denarius)",
      "into a great nation there (Gen 46:3) Blood"
    ],
    "correctIndex": 2,
    "correctAnswer": "inside it (1 Ki 16:18) One pence (denarius)",
    "scriptureRef": "Matt 20:2"
  },
  {
    "id": 778,
    "question": "Whose wife went into labor and gave birth on hearing the news that the Ark of God was captured and that her father-in-law and husband were dead?",
    "options": [
      "Cattle",
      "The Spirit, the water and the blood",
      "Phinehas'",
      "water (Exo 15:23-25) They were not ashamed"
    ],
    "correctIndex": 2,
    "correctAnswer": "Phinehas'",
    "scriptureRef": "1 Sam 4:19"
  },
  {
    "id": 779,
    "question": "In Luke's account of the Beatitudes who does Jesus say the Kingdom of God belongs to?",
    "options": [
      "Half",
      "Samuel",
      "The poor",
      "First"
    ],
    "correctIndex": 2,
    "correctAnswer": "The poor",
    "scriptureRef": "Luke 6:20"
  },
  {
    "id": 780,
    "question": "For what reason did Isaac say he loved Esau?",
    "options": [
      "Canaan",
      "Isaac ate of his venison",
      "A crown of twelve stars",
      "He wrote the greetings in his own"
    ],
    "correctIndex": 1,
    "correctAnswer": "Isaac ate of his venison",
    "scriptureRef": "Gen 25:28"
  },
  {
    "id": 781,
    "question": "In the ritual cleansing of a leper under the Law of Moses, which animals were to be offered on the eighth day?",
    "options": [
      "Lambs",
      "Abib",
      "Three",
      "Asher"
    ],
    "correctIndex": 0,
    "correctAnswer": "Lambs",
    "scriptureRef": "Lev 14:10"
  },
  {
    "id": 782,
    "question": "Who should you \"withdraw from\", according to the epistles of Thessalonians?",
    "options": [
      "Tent peg",
      "Idle/disorderly brethren",
      "Bringing the ark back to Jerusalem",
      "On Earth"
    ],
    "correctIndex": 1,
    "correctAnswer": "Idle/disorderly brethren",
    "scriptureRef": "2 Th 3:6"
  },
  {
    "id": 783,
    "question": "Psalm 91 verses 11 and 12 are quoted in which New Testament incident?",
    "options": [
      "The temptation of Jesus",
      "Two",
      "Ephraim and Manasseh",
      "666"
    ],
    "correctIndex": 0,
    "correctAnswer": "The temptation of Jesus",
    "scriptureRef": "Matt 4:6"
  },
  {
    "id": 784,
    "question": "How was the earth watered initially before rain?",
    "options": [
      "Gravel",
      "Seven",
      "Lemuel",
      "Mist went up from the earth"
    ],
    "correctIndex": 3,
    "correctAnswer": "Mist went up from the earth",
    "scriptureRef": "Gen 2:5-6"
  },
  {
    "id": 785,
    "question": "What proportion of his goods did Zacchaeus give away to the poor?",
    "options": [
      "Half",
      "Lords of the Philistines",
      "Peter",
      "Love of money"
    ],
    "correctIndex": 0,
    "correctAnswer": "Half",
    "scriptureRef": "Luke 19:8"
  },
  {
    "id": 786,
    "question": "How old was Anna the prophetess when she saw Jesus?",
    "options": [
      "Eighty-four",
      "Berea",
      "A man clothed in linen",
      "Machpelah"
    ],
    "correctIndex": 0,
    "correctAnswer": "Eighty-four",
    "scriptureRef": "Luke 2:37"
  },
  {
    "id": 787,
    "question": "What did Rachel steal from her father, Laban, when she left home with her husband Jacob?",
    "options": [
      "Household gods / idols",
      "600",
      "300",
      "Imagine evil"
    ],
    "correctIndex": 0,
    "correctAnswer": "Household gods / idols",
    "scriptureRef": "Gen 31:19"
  },
  {
    "id": 788,
    "question": "The snail is mentioned in which Psalm?",
    "options": [
      "Sihon",
      "Psalm 58",
      "Tychicus",
      "Apples"
    ],
    "correctIndex": 1,
    "correctAnswer": "Psalm 58",
    "scriptureRef": "Ps 58:8"
  },
  {
    "id": 789,
    "question": "How does Psalm 96 say we should worship God?",
    "options": [
      "Figs",
      "Macedonia",
      "In the beauty of holiness",
      "A beam"
    ],
    "correctIndex": 2,
    "correctAnswer": "In the beauty of holiness",
    "scriptureRef": "Ps 96:9"
  },
  {
    "id": 790,
    "question": "Why should children listen to \"the instruction of a father\"?",
    "options": [
      "Beautiful Gate",
      "A sharp sword",
      "Appii forum",
      "To gain understanding"
    ],
    "correctIndex": 3,
    "correctAnswer": "To gain understanding",
    "scriptureRef": "Pro 4:1"
  },
  {
    "id": 791,
    "question": "What did the disciples say to Jesus before the ascension?",
    "options": [
      "Blue",
      "Lord will you at this time restore again",
      "became blood (Rev 16:4) An onyx",
      "Mountains"
    ],
    "correctIndex": 1,
    "correctAnswer": "Lord will you at this time restore again",
    "scriptureRef": ""
  },
  {
    "id": 792,
    "question": "What did Jesus eat to convince the disciples that he was indeed raised from the dead?",
    "options": [
      "Elisha",
      "Philip",
      "the kingdom to Israel? (Acts 1:6) Fish and honeycomb",
      "Seventeen"
    ],
    "correctIndex": 2,
    "correctAnswer": "the kingdom to Israel? (Acts 1:6) Fish and honeycomb",
    "scriptureRef": "Luke 24:42"
  },
  {
    "id": 793,
    "question": "How old was Joseph when he died?",
    "options": [
      "110",
      "Lord will you at this time restore again",
      "Her life was sacrificed to God",
      "Babylon"
    ],
    "correctIndex": 0,
    "correctAnswer": "110",
    "scriptureRef": "Gen 50:22"
  },
  {
    "id": 794,
    "question": "Where was David born?",
    "options": [
      "Thirty",
      "Bethlehem",
      "Let the mother bird go free",
      "Saul"
    ],
    "correctIndex": 1,
    "correctAnswer": "Bethlehem",
    "scriptureRef": "1 Sam 17:58"
  },
  {
    "id": 795,
    "question": "How were the Thessalonians told to \"keep their own bodies\"?",
    "options": [
      "Forty-eight",
      "He had gone to Bethlehem for a",
      "In sanctification and honor",
      "slain by Dinah's brothers (Gen 34) Hebrews"
    ],
    "correctIndex": 2,
    "correctAnswer": "In sanctification and honor",
    "scriptureRef": "1 Th 4:4"
  },
  {
    "id": 796,
    "question": "How many companions did the Philistines give to Samson at the feast in Timnah?",
    "options": [
      "in a manger (Luke 2:12) John",
      "Thirty",
      "350 years",
      "Ai"
    ],
    "correctIndex": 1,
    "correctAnswer": "Thirty",
    "scriptureRef": "Jdg 14:11"
  },
  {
    "id": 797,
    "question": "How many times did Noah send out the dove?",
    "options": [
      "Three",
      "Matthew",
      "Paul",
      "Lystra"
    ],
    "correctIndex": 0,
    "correctAnswer": "Three",
    "scriptureRef": "Gen 8:8-12"
  },
  {
    "id": 798,
    "question": "What instruments were used to praise God when the temple foundation was rebuilt?",
    "options": [
      "Trumpets and cymbals",
      "Two years and under",
      "of Stephanas (1 Cor 1:14-16) Gamaliel",
      "Jewels and clothing"
    ],
    "correctIndex": 0,
    "correctAnswer": "Trumpets and cymbals",
    "scriptureRef": "Ezr 3:10"
  },
  {
    "id": 799,
    "question": "How many \"minor prophets\" are there?",
    "options": [
      "Phinehas'",
      "Bethlehem",
      "Publican (tax collector)",
      "Twelve"
    ],
    "correctIndex": 3,
    "correctAnswer": "Twelve",
    "scriptureRef": "Hos 1:1 - Mal 4:6"
  },
  {
    "id": 800,
    "question": "\"Honor thy father and thy mother\" is one of the ten commandments. Which one?",
    "options": [
      "Kish",
      "Lion",
      "Psalm 90",
      "Fifth"
    ],
    "correctIndex": 3,
    "correctAnswer": "Fifth",
    "scriptureRef": "Exo 20:12"
  },
  {
    "id": 801,
    "question": "What did Daniel see by the river Hiddekel?",
    "options": [
      "precious stones (1 Ki 10:10) Charge it to Paul",
      "Paul",
      "Fleece",
      "A man clothed in linen"
    ],
    "correctIndex": 3,
    "correctAnswer": "A man clothed in linen",
    "scriptureRef": "Dan 10:5"
  },
  {
    "id": 802,
    "question": "In the time of the Judges, civil war broke out against which tribe?",
    "options": [
      "sins (Matt 6:11-12; Luke 11:4) Murdering him",
      "Benjamin",
      "A tree of life",
      "Gabriel"
    ],
    "correctIndex": 1,
    "correctAnswer": "Benjamin",
    "scriptureRef": "Jdg 20"
  },
  {
    "id": 803,
    "question": "Paul thanks God that he did not baptize any of the Corinthians, except for which people?",
    "options": [
      "Make the sun and moon stand still",
      "Crispus, Gaius and the household",
      "Locusts",
      "Work quietly"
    ],
    "correctIndex": 1,
    "correctAnswer": "Crispus, Gaius and the household",
    "scriptureRef": ""
  },
  {
    "id": 804,
    "question": "Which Pharisee said that if the gospel truly comes from God, no-one will be able to stop it spreading?",
    "options": [
      "A crown of twelve stars",
      "He, his father, and the men of his city were",
      "Cyrus",
      "of Stephanas (1 Cor 1:14-16) Gamaliel"
    ],
    "correctIndex": 3,
    "correctAnswer": "of Stephanas (1 Cor 1:14-16) Gamaliel",
    "scriptureRef": "Acts 5:34-39"
  },
  {
    "id": 805,
    "question": "Where does Solomon say that leopards live?",
    "options": [
      "Wrapped in swaddling clothes, lying",
      "Lamech",
      "One of the Scribes",
      "Mountains"
    ],
    "correctIndex": 3,
    "correctAnswer": "Mountains",
    "scriptureRef": "Song 4:8"
  },
  {
    "id": 806,
    "question": "What did the New Jerusalem look like in the book of Revelation?",
    "options": [
      "Tongues of fire",
      "Like a bride",
      "Joseph (of Arimathaea)",
      "Egypt"
    ],
    "correctIndex": 1,
    "correctAnswer": "Like a bride",
    "scriptureRef": "Rev 21:2"
  },
  {
    "id": 807,
    "question": "Melchizedek was a high priest, but also king of where?",
    "options": [
      "Salem",
      "Coriander",
      "Two bears came out of the woods",
      "Death"
    ],
    "correctIndex": 0,
    "correctAnswer": "Salem",
    "scriptureRef": "Gen 14:18, Heb 7:1"
  },
  {
    "id": 808,
    "question": "Which king had the longest reign over the Kingdom of Israel?",
    "options": [
      "Jeroboam II",
      "Twenty-four",
      "Eighty-six years",
      "Matthew"
    ],
    "correctIndex": 0,
    "correctAnswer": "Jeroboam II",
    "scriptureRef": "2 Ki 14:23"
  },
  {
    "id": 809,
    "question": "On what day of the week was Christ resurrected?",
    "options": [
      "First",
      "He claimed to be the Son of God",
      "Malchus",
      "Herod (the Great)"
    ],
    "correctIndex": 0,
    "correctAnswer": "First",
    "scriptureRef": "John 20:1"
  },
  {
    "id": 810,
    "question": "Paul and Silas were imprisoned during the second missionary journey, but in what city did this happen?",
    "options": [
      "Andrew",
      "The Thessalonians",
      "Resurrection",
      "Philippi"
    ],
    "correctIndex": 3,
    "correctAnswer": "Philippi",
    "scriptureRef": "Acts 16:12"
  },
  {
    "id": 811,
    "question": "What is the shortest book in the Old Testament?",
    "options": [
      "Obadiah",
      "Frogs",
      "In the beauty of holiness",
      "disciple (Luke 22:24-30) Hezekiah"
    ],
    "correctIndex": 0,
    "correctAnswer": "Obadiah",
    "scriptureRef": "Oba 1:1-21"
  },
  {
    "id": 812,
    "question": "In Matthew's account of the Sermon on the Mount, what was the first of the Beatitudes?",
    "options": [
      "Blessed are the poor in spirit for theirs",
      "The temptation of Jesus",
      "Timothy",
      "is the kingdom of heaven (Matt 5:3) Sea of Tiberias (Galilee)"
    ],
    "correctIndex": 0,
    "correctAnswer": "Blessed are the poor in spirit for theirs",
    "scriptureRef": ""
  },
  {
    "id": 813,
    "question": "Jesus appeared to his disciples after the resurrection beside which sea?",
    "options": [
      "Cast lots",
      "Marah",
      "is the kingdom of heaven (Matt 5:3) Sea of Tiberias (Galilee)",
      "John the Baptist"
    ],
    "correctIndex": 2,
    "correctAnswer": "is the kingdom of heaven (Matt 5:3) Sea of Tiberias (Galilee)",
    "scriptureRef": "John 6:1; 21:1"
  },
  {
    "id": 814,
    "question": "How many wise men does the Bible say came to visit Jesus?",
    "options": [
      "commenced his reign (Rev 11:17) His lawgiver (royal scepter)",
      "It doesn't say",
      "Trumpets, pitchers and lamps",
      "Tent peg"
    ],
    "correctIndex": 1,
    "correctAnswer": "It doesn't say",
    "scriptureRef": "Matt 2:1-12"
  },
  {
    "id": 815,
    "question": "Where did Philip preach the good news about the Kingdom of God leading to many baptisms?",
    "options": [
      "Make one hair black or white",
      "counsel of the ungodly (Ps 1:1) A fever",
      "Samaria",
      "A parable"
    ],
    "correctIndex": 2,
    "correctAnswer": "Samaria",
    "scriptureRef": "Acts 8:12"
  },
  {
    "id": 816,
    "question": "What did Paul do immediately after receiving his sight back?",
    "options": [
      "He was baptized",
      "Build a guard rail around the roof",
      "32,000",
      "In a candlestick"
    ],
    "correctIndex": 0,
    "correctAnswer": "He was baptized",
    "scriptureRef": "Acts 9:18"
  },
  {
    "id": 817,
    "question": "What was the name of the city where Elijah raised the widow's son from the dead?",
    "options": [
      "In the beauty of holiness",
      "Righteousness",
      "Hailstones",
      "Zarephath"
    ],
    "correctIndex": 3,
    "correctAnswer": "Zarephath",
    "scriptureRef": "1 Ki 17:9-23"
  },
  {
    "id": 818,
    "question": "Who said, \"To obey is better than sacrifice\"?",
    "options": [
      "Rachel",
      "them out of the synagogue (John 12:42) Repent: for the kingdom of heaven",
      "Samuel",
      "Forty years"
    ],
    "correctIndex": 2,
    "correctAnswer": "Samuel",
    "scriptureRef": "1 Sam 15:22"
  },
  {
    "id": 819,
    "question": "What was the name of a man who was given the Spirit of God, to enable him to become a good craftsman, and assist with the building of the tabernacle?",
    "options": [
      "Feeding of the 5,000 and Jesus",
      "Build a guard rail around the roof",
      "Bezaleel",
      "Kept his hands held up"
    ],
    "correctIndex": 2,
    "correctAnswer": "Bezaleel",
    "scriptureRef": "Exo 31:2-3"
  },
  {
    "id": 820,
    "question": "Which prophet told Jeroboam he would rule over ten tribes?",
    "options": [
      "Ahijah",
      "Burned his house down while still",
      "350 years",
      "To the Unknown God"
    ],
    "correctIndex": 0,
    "correctAnswer": "Ahijah",
    "scriptureRef": "1 Ki 11:30-31"
  },
  {
    "id": 821,
    "question": "What did Melchizedek give to Abram?",
    "options": [
      "Imagine evil",
      "He went mad and lived as a beast",
      "Bread and wine",
      "Joseph (of Arimathaea)"
    ],
    "correctIndex": 2,
    "correctAnswer": "Bread and wine",
    "scriptureRef": "Gen 14:18"
  },
  {
    "id": 822,
    "question": "What argument prompted Jesus to tell his disciples that they would judge the twelve tribes in the kingdom?",
    "options": [
      "By lying",
      "Philippi",
      "Made a whip",
      "Disputing who was the greatest"
    ],
    "correctIndex": 3,
    "correctAnswer": "Disputing who was the greatest",
    "scriptureRef": ""
  },
  {
    "id": 823,
    "question": "Who was king of the southern kingdom when the northern kingdom of Israel fell to Assyria?",
    "options": [
      "Ehud",
      "disciple (Luke 22:24-30) Hezekiah",
      "A living dog",
      "A famine"
    ],
    "correctIndex": 1,
    "correctAnswer": "disciple (Luke 22:24-30) Hezekiah",
    "scriptureRef": "2 Ki 18:9-12"
  },
  {
    "id": 824,
    "question": "The fifth trumpet in Revelation is a plague which was also a plague upon Egypt in Exodus. Which one?",
    "options": [
      "Valley of Sorek",
      "Ishmael",
      "Locusts",
      "Gold"
    ],
    "correctIndex": 2,
    "correctAnswer": "Locusts",
    "scriptureRef": "Rev 9:1-4"
  },
  {
    "id": 825,
    "question": "In Zechariah, the prophet has a vision of a man riding a red horse and standing under what kind of tree?",
    "options": [
      "A beam",
      "They were covetous (loved money)",
      "Publican (tax collector)",
      "Myrtle"
    ],
    "correctIndex": 3,
    "correctAnswer": "Myrtle",
    "scriptureRef": "Zec 1:8"
  },
  {
    "id": 826,
    "question": "For how long did Abdon, son of Hillel, judge Israel?",
    "options": [
      "Eight years",
      "Hiram, King of Tyre",
      "Macedonia & Achaia",
      "Father of Lights"
    ],
    "correctIndex": 0,
    "correctAnswer": "Eight years",
    "scriptureRef": "Jdg 12:13-14"
  },
  {
    "id": 827,
    "question": "When the Israelites came to Elim, how many palm trees were there?",
    "options": [
      "The sick",
      "Seventy",
      "32,000",
      "Jairus'"
    ],
    "correctIndex": 1,
    "correctAnswer": "Seventy",
    "scriptureRef": "Exo 15:27"
  },
  {
    "id": 828,
    "question": "How many rivers did the river in Eden split into once it left the garden?",
    "options": [
      "Phinehas'",
      "Trumpets, pitchers and lamps",
      "The Unknown God",
      "Four"
    ],
    "correctIndex": 3,
    "correctAnswer": "Four",
    "scriptureRef": "Gen 2:10"
  },
  {
    "id": 829,
    "question": "What was the name of the Sorcerer Paul met on the island of Cyprus?",
    "options": [
      "They were covetous (loved money)",
      "A living dog",
      "Elymas (Bar-Jesus)",
      "Terah"
    ],
    "correctIndex": 2,
    "correctAnswer": "Elymas (Bar-Jesus)",
    "scriptureRef": "Acts 13:8"
  },
  {
    "id": 830,
    "question": "How much did Ruth glean on her first day in Boaz's field?",
    "options": [
      "In spirit and truth",
      "inside it (1 Ki 16:18) One pence (denarius)",
      "An ephah of barley",
      "Trumpets, pitchers and lamps"
    ],
    "correctIndex": 2,
    "correctAnswer": "An ephah of barley",
    "scriptureRef": "Ruth 2:17"
  },
  {
    "id": 831,
    "question": "Who thanked King David for allowing his (David's) son Absalom to return to Jerusalem?",
    "options": [
      "Joab",
      "Burned his house down while still",
      "Day of Atonement",
      "Cast into darkness"
    ],
    "correctIndex": 0,
    "correctAnswer": "Joab",
    "scriptureRef": "2 Sam 14:22"
  },
  {
    "id": 832,
    "question": "In the parable of the lamp, where is the candle to be \"set once it is lit\"?",
    "options": [
      "Sparrows",
      "In a candlestick",
      "Tentmaker",
      "Tent peg"
    ],
    "correctIndex": 1,
    "correctAnswer": "In a candlestick",
    "scriptureRef": "Luke 11:33"
  },
  {
    "id": 833,
    "question": "\"A wholesome (healing), tongue\" is described as what?",
    "options": [
      "In a basket down the city wall",
      "Scarlet / Purple",
      "Those people who hear God's word but then it's",
      "A tree of life"
    ],
    "correctIndex": 3,
    "correctAnswer": "A tree of life",
    "scriptureRef": "Pro 15:4"
  },
  {
    "id": 834,
    "question": "Three of David's mighty men risked their lives against the Philistines to get him a drink of water from where?",
    "options": [
      "Like a bride",
      "His ring, fine linen and a gold chain",
      "A well of Bethlehem",
      "Lion, Bear, Leopard & Terrible beast"
    ],
    "correctIndex": 2,
    "correctAnswer": "A well of Bethlehem",
    "scriptureRef": "2 Sam 23:15-16"
  },
  {
    "id": 835,
    "question": "What feast was instituted when Queen Esther saved the Jews from destruction?",
    "options": [
      "Egypt",
      "Purim",
      "Silvanus",
      "Lystra"
    ],
    "correctIndex": 1,
    "correctAnswer": "Purim",
    "scriptureRef": "Est 9:24-26"
  },
  {
    "id": 836,
    "question": "What was the name of the field where Abraham buried his wife?",
    "options": [
      "Machpelah",
      "Warming himself by a fire",
      "Passover (Matt 26:30) Ashkelon",
      "They must eat it on the day it is"
    ],
    "correctIndex": 0,
    "correctAnswer": "Machpelah",
    "scriptureRef": "Gen 23:19"
  },
  {
    "id": 837,
    "question": "From which country did Solomon import horses?",
    "options": [
      "That he was not sinful like other men",
      "Egypt",
      "Andrew",
      "He sat down on the East of the city"
    ],
    "correctIndex": 1,
    "correctAnswer": "Egypt",
    "scriptureRef": "1 Ki 10:28"
  },
  {
    "id": 838,
    "question": "What miracle did Jesus perform just before healing Legion of his unclean spirit?",
    "options": [
      "Calming of the storm",
      "He wrote the greetings in his own",
      "handwriting (2 Th 3:17) Belshazzar",
      "Sandal"
    ],
    "correctIndex": 0,
    "correctAnswer": "Calming of the storm",
    "scriptureRef": "Mark 4:39 - 5:2"
  },
  {
    "id": 839,
    "question": "Why did Pharaoh give Joseph's family the land of Goshen to live in?",
    "options": [
      "Blessed is the man who walks not in the",
      "To keep them separate as they were",
      "the kingdom to Israel? (Acts 1:6) Fish and honeycomb",
      "Cast into darkness"
    ],
    "correctIndex": 1,
    "correctAnswer": "To keep them separate as they were",
    "scriptureRef": ""
  },
  {
    "id": 840,
    "question": "After the exile, the Israelites returned and started to rebuild the temple in Jerusalem, but which other prophet along with Zechariah was sent to encourage the completion of the partly built temple?",
    "options": [
      "Terah",
      "Cousin / Sister's son (KJV)",
      "Fifty",
      "shepherds, which were an abomination to the Egyptians (Gen 46:34) Haggai"
    ],
    "correctIndex": 3,
    "correctAnswer": "shepherds, which were an abomination to the Egyptians (Gen 46:34) Haggai",
    "scriptureRef": "Hag 2:4"
  },
  {
    "id": 841,
    "question": "At what place did the writer to the Thessalonians say he'd been given rough treatment?",
    "options": [
      "Hiram, King of Tyre",
      "Fleece",
      "Abimelech",
      "Philippi"
    ],
    "correctIndex": 3,
    "correctAnswer": "Philippi",
    "scriptureRef": "1 Th 2:2"
  },
  {
    "id": 842,
    "question": "Who was well reported of at Lystra and Iconium?",
    "options": [
      "Lords of the Philistines",
      "Zarephath",
      "Timothy",
      "Half"
    ],
    "correctIndex": 2,
    "correctAnswer": "Timothy",
    "scriptureRef": "Acts 16:2"
  },
  {
    "id": 843,
    "question": "In John's first epistle which three things are said to testify and agree about Jesus?",
    "options": [
      "Yeast",
      "They must eat it on the day it is",
      "Idle/disorderly brethren",
      "The Spirit, the water and the blood"
    ],
    "correctIndex": 3,
    "correctAnswer": "The Spirit, the water and the blood",
    "scriptureRef": "1 Jn 5:8"
  },
  {
    "id": 844,
    "question": "In Proverbs, how shall the \"man's belly be satisfied\"?",
    "options": [
      "them out of the synagogue (John 12:42) Repent: for the kingdom of heaven",
      "By the fruit of his mouth",
      "To the Unknown God",
      "Herod (the Great)"
    ],
    "correctIndex": 1,
    "correctAnswer": "By the fruit of his mouth",
    "scriptureRef": "Pro 18:20"
  },
  {
    "id": 845,
    "question": "What did Rahab hide the two spies under?",
    "options": [
      "Stalks of flax",
      "Burned his house down while still",
      "His groanings (roarings)",
      "Rivers of water"
    ],
    "correctIndex": 0,
    "correctAnswer": "Stalks of flax",
    "scriptureRef": "Josh 2:6"
  },
  {
    "id": 846,
    "question": "In years, roughly how long did Paul spend in Ephesus?",
    "options": [
      "Treasurer",
      "Three years",
      "Kish",
      "As a sign"
    ],
    "correctIndex": 1,
    "correctAnswer": "Three years",
    "scriptureRef": "Acts 20:31"
  },
  {
    "id": 847,
    "question": "Which gospel records the fewest of the miracles performed by Jesus?",
    "options": [
      "John",
      "counsel of the ungodly (Ps 1:1) A fever",
      "Marah",
      "Lord (Ps 48:11; 97:8) 400"
    ],
    "correctIndex": 0,
    "correctAnswer": "John",
    "scriptureRef": "John 1:1 - 21:25"
  },
  {
    "id": 848,
    "question": "What does Psalm 16 say there is in \"the Lord's right hand\"?",
    "options": [
      "Malchus",
      "Eighty-four",
      "Lambs",
      "Pleasures for evermore"
    ],
    "correctIndex": 3,
    "correctAnswer": "Pleasures for evermore",
    "scriptureRef": "Ps 16:11"
  },
  {
    "id": 849,
    "question": "Who walked barefoot and naked for three years at the Lord's command?",
    "options": [
      "Machpelah",
      "Isaiah",
      "Generation of vipers",
      "300"
    ],
    "correctIndex": 1,
    "correctAnswer": "Isaiah",
    "scriptureRef": "Isa 20:2-3"
  },
  {
    "id": 850,
    "question": "Who promised to give their daughters to Shechemites if they agreed to be circumcised, only to kill them instead three days later while they were still sore?",
    "options": [
      "Sons of Jacob",
      "Levi",
      "Lydia",
      "East"
    ],
    "correctIndex": 0,
    "correctAnswer": "Sons of Jacob",
    "scriptureRef": "Gen 34:13"
  },
  {
    "id": 851,
    "question": "Which god did the people of Lystra think Paul was?",
    "options": [
      "Eighty-four",
      "Mercurius (Hermes)",
      "Bread and wine",
      "Tamar"
    ],
    "correctIndex": 1,
    "correctAnswer": "Mercurius (Hermes)",
    "scriptureRef": "Acts 14:12"
  },
  {
    "id": 852,
    "question": "What happened to the sun when the sixth seal was opened?",
    "options": [
      "It became as black as sackcloth (of hair)",
      "600",
      "Clothing",
      "Sing psalms"
    ],
    "correctIndex": 0,
    "correctAnswer": "It became as black as sackcloth (of hair)",
    "scriptureRef": "Rev 6:12"
  },
  {
    "id": 853,
    "question": "What characteristics are attached to the breastplate mentioned in Thessalonians?",
    "options": [
      "Bread and wine",
      "Faith and love",
      "The wicked",
      "became blood (Rev 16:4) An onyx"
    ],
    "correctIndex": 1,
    "correctAnswer": "Faith and love",
    "scriptureRef": "1 Th 5:8"
  },
  {
    "id": 854,
    "question": "Of which animal were the kings of Israel told not to have lots?",
    "options": [
      "600",
      "Isaac ate of his venison",
      "Herod",
      "Horses"
    ],
    "correctIndex": 3,
    "correctAnswer": "Horses",
    "scriptureRef": "Deut 17:14-16"
  },
  {
    "id": 855,
    "question": "In Revelation, unclean spirits came out of the mouth of the dragon, in the form of what animals?",
    "options": [
      "Lydda",
      "Moses",
      "Frogs",
      "Philip"
    ],
    "correctIndex": 2,
    "correctAnswer": "Frogs",
    "scriptureRef": "Rev 16:13"
  },
  {
    "id": 856,
    "question": "How old was Noah when the floods came?",
    "options": [
      "Jephunneh",
      "600",
      "Babylon",
      "Seventy"
    ],
    "correctIndex": 1,
    "correctAnswer": "600",
    "scriptureRef": "Gen 7:6"
  },
  {
    "id": 857,
    "question": "Which animal skins, dyed red, were used as an offering to help make the tabernacle?",
    "options": [
      "Horses",
      "Rams",
      "Philip",
      "Axe head"
    ],
    "correctIndex": 1,
    "correctAnswer": "Rams",
    "scriptureRef": "Exo 25:3-5"
  },
  {
    "id": 858,
    "question": "Which king contributes words of wisdom in Proverbs chapter 31?",
    "options": [
      "Pharisees",
      "The land of Canaan",
      "600",
      "Lemuel"
    ],
    "correctIndex": 3,
    "correctAnswer": "Lemuel",
    "scriptureRef": "Pro 31:1"
  },
  {
    "id": 859,
    "question": "In which Jewish month is the Passover?",
    "options": [
      "Almond blossom",
      "With singing",
      "Abib",
      "Didn't want to spoil his inheritance"
    ],
    "correctIndex": 2,
    "correctAnswer": "Abib",
    "scriptureRef": "Deut 16:1"
  },
  {
    "id": 860,
    "question": "Who did Daniel see sitting in a throne in his vision of the four beasts?",
    "options": [
      "1 Samuel",
      "Priest",
      "The Ancient of Days",
      "Made a whip"
    ],
    "correctIndex": 2,
    "correctAnswer": "The Ancient of Days",
    "scriptureRef": "Dan 7:9"
  },
  {
    "id": 861,
    "question": "The Ethiopian eunuch, held what office of responsibility to Candace, queen of the Ethiopians?",
    "options": [
      "Manasseh",
      "A sharp sword",
      "Treasurer",
      "110"
    ],
    "correctIndex": 2,
    "correctAnswer": "Treasurer",
    "scriptureRef": "Acts 8:27"
  },
  {
    "id": 862,
    "question": "How does Psalm 100 say we should come before the Lord's presence?",
    "options": [
      "sins (Matt 6:11-12; Luke 11:4) Murdering him",
      "Destroyed the rest of the royal family",
      "With singing",
      "Three years"
    ],
    "correctIndex": 2,
    "correctAnswer": "With singing",
    "scriptureRef": "Ps 100:2"
  },
  {
    "id": 863,
    "question": "How many concubines did Solomon have?",
    "options": [
      "Father of Lights",
      "Thirty",
      "300",
      "Daniel"
    ],
    "correctIndex": 2,
    "correctAnswer": "300",
    "scriptureRef": "1 Ki 11:3"
  },
  {
    "id": 864,
    "question": "How did Moses make the bitter waters of Marah drinkable?",
    "options": [
      "He claimed to be the Son of God",
      "Threw a piece of wood into the",
      "Babylon",
      "Levi"
    ],
    "correctIndex": 1,
    "correctAnswer": "Threw a piece of wood into the",
    "scriptureRef": ""
  },
  {
    "id": 865,
    "question": "How did Adam and Eve feel about their nakedness at first?",
    "options": [
      "John",
      "Warming himself by a fire",
      "Peter",
      "water (Exo 15:23-25) They were not ashamed"
    ],
    "correctIndex": 3,
    "correctAnswer": "water (Exo 15:23-25) They were not ashamed",
    "scriptureRef": "Gen 2:25"
  },
  {
    "id": 866,
    "question": "Who deceived the worshippers of Baal into attending sacrifices only to destroy them all once they had arrived?",
    "options": [
      "Tent peg",
      "Jehu",
      "Sihon",
      "He was made dumb"
    ],
    "correctIndex": 1,
    "correctAnswer": "Jehu",
    "scriptureRef": "2 Ki 10:18-28"
  },
  {
    "id": 867,
    "question": "The branched candlestick in the tabernacle had its cups carved in the likeness of which plant?",
    "options": [
      "Simeon",
      "Almond blossom",
      "Lameness",
      "Three"
    ],
    "correctIndex": 1,
    "correctAnswer": "Almond blossom",
    "scriptureRef": "Exo 25:33"
  },
  {
    "id": 868,
    "question": "What happened to the soldiers of Gideon who lapped the river water with their tongues like dogs?",
    "options": [
      "Four",
      "The Spirit, the water and the blood",
      "They were chosen to fight against",
      "Death"
    ],
    "correctIndex": 2,
    "correctAnswer": "They were chosen to fight against",
    "scriptureRef": ""
  },
  {
    "id": 869,
    "question": "How many sections (or books) is the book of Psalms split into?",
    "options": [
      "Bringing the ark back to Jerusalem",
      "the Midianites (Jdg 7:5-7) Five",
      "Sihon",
      "By a well in the land of Midian"
    ],
    "correctIndex": 1,
    "correctAnswer": "the Midianites (Jdg 7:5-7) Five",
    "scriptureRef": "Ps 1; 43; 73; 90; 107"
  },
  {
    "id": 870,
    "question": "How old was Abraham's first wife when she died?",
    "options": [
      "12,000",
      "Butler",
      "127 years",
      "Forty years"
    ],
    "correctIndex": 2,
    "correctAnswer": "127 years",
    "scriptureRef": "Gen 23:1"
  },
  {
    "id": 871,
    "question": "To what does the \"seventy weeks\" prophecy refer?",
    "options": [
      "Grandson",
      "The coming of the Messiah",
      "Sihon",
      "First"
    ],
    "correctIndex": 1,
    "correctAnswer": "The coming of the Messiah",
    "scriptureRef": "Dan 9:20-27"
  },
  {
    "id": 872,
    "question": "To which tribe did Anna the prophetess belong?",
    "options": [
      "Butler",
      "Foolishness",
      "Appii forum",
      "Asher"
    ],
    "correctIndex": 3,
    "correctAnswer": "Asher",
    "scriptureRef": "Luke 2:36"
  },
  {
    "id": 873,
    "question": "What part of Paul's clothing did Agabus use?",
    "options": [
      "Cupbearer",
      "Girdle (belt)",
      "Forty years",
      "A crown of twelve stars"
    ],
    "correctIndex": 1,
    "correctAnswer": "Girdle (belt)",
    "scriptureRef": "Acts 21:11"
  },
  {
    "id": 874,
    "question": "David says in the Psalms that \"adders' poison is under their lips\". To whom is he referring?",
    "options": [
      "Colosse",
      "First",
      "Three",
      "Evil men"
    ],
    "correctIndex": 3,
    "correctAnswer": "Evil men",
    "scriptureRef": "Ps 140:1-3"
  },
  {
    "id": 875,
    "question": "Who was the father in law of Caiaphas, the high priest at the time of Jesus death?",
    "options": [
      "Annas",
      "Eaten by birds",
      "Julius",
      "A sharp sword"
    ],
    "correctIndex": 0,
    "correctAnswer": "Annas",
    "scriptureRef": "John 18:13"
  },
  {
    "id": 876,
    "question": "Who did Paul take with him on his first missionary journey?",
    "options": [
      "Cast lots",
      "Barnabas",
      "Forty years",
      "Forty"
    ],
    "correctIndex": 1,
    "correctAnswer": "Barnabas",
    "scriptureRef": "Acts 13:4"
  },
  {
    "id": 877,
    "question": "Jesus initially sent the twelve disciples to preach to which group of people?",
    "options": [
      "Tarshish",
      "House of Israel",
      "Herod (the Great)",
      "Raven"
    ],
    "correctIndex": 1,
    "correctAnswer": "House of Israel",
    "scriptureRef": "Matt 10:5-6"
  },
  {
    "id": 878,
    "question": "Where will the believers reign in the Kingdom of God?",
    "options": [
      "On Earth",
      "Mary",
      "The poor",
      "To love God with all your heart, soul"
    ],
    "correctIndex": 0,
    "correctAnswer": "On Earth",
    "scriptureRef": "Rev 5:10"
  },
  {
    "id": 879,
    "question": "Who did Joseph's brothers sell him to?",
    "options": [
      "Ishmaelites",
      "was brought upon the land of Egypt (Exo 12:27) Drunkenness",
      "The Songs of Degrees (or Ascents)",
      "Generation of vipers"
    ],
    "correctIndex": 0,
    "correctAnswer": "Ishmaelites",
    "scriptureRef": "Gen 37:28"
  },
  {
    "id": 880,
    "question": "Who shall the \"prayer of faith\" save?",
    "options": [
      "The sick",
      "The Spirit, the water and the blood",
      "Jephthah",
      "That he was not sinful like other men"
    ],
    "correctIndex": 0,
    "correctAnswer": "The sick",
    "scriptureRef": "Jam 5:15"
  },
  {
    "id": 881,
    "question": "Where did Delilah live?",
    "options": [
      "Cast into darkness",
      "One of the Scribes",
      "Valley of Sorek",
      "Theft"
    ],
    "correctIndex": 2,
    "correctAnswer": "Valley of Sorek",
    "scriptureRef": "Jdg 16:4"
  },
  {
    "id": 882,
    "question": "Who was Paul referring to when he said, \"May the Lord grant mercy to his household, for he often refreshed me and was not ashamed of my chains\"?",
    "options": [
      "The Spirit, the water and the blood",
      "Rebekah",
      "Onesiphorus",
      "Eight years"
    ],
    "correctIndex": 2,
    "correctAnswer": "Onesiphorus",
    "scriptureRef": "2 Tim 1:16"
  },
  {
    "id": 883,
    "question": "How many elders witnessed Boaz's agreement with the kinsman?",
    "options": [
      "Ten",
      "The eye",
      "Double (portion)",
      "Eight years"
    ],
    "correctIndex": 0,
    "correctAnswer": "Ten",
    "scriptureRef": "Ruth 4:2"
  },
  {
    "id": 884,
    "question": "According to Job, what is the hope of \"a tree that is cut down\"?",
    "options": [
      "In a dream",
      "Silver",
      "Count it all joy",
      "It will sprout again"
    ],
    "correctIndex": 3,
    "correctAnswer": "It will sprout again",
    "scriptureRef": "Job 14:7"
  },
  {
    "id": 885,
    "question": "What should the Israelites not destroy when they besiege a city?",
    "options": [
      "Cast lots",
      "A parcel of land",
      "Trees for meat",
      "Aeneas"
    ],
    "correctIndex": 2,
    "correctAnswer": "Trees for meat",
    "scriptureRef": "Deut 20:19-20"
  },
  {
    "id": 886,
    "question": "What offering did Gideon present to the Lord under the oak tree?",
    "options": [
      "A young goat and some unleavened bread",
      "offered. (Lev 7:15; 22:30) Zebulun",
      "The rivers and fountains of waters",
      "Nabal"
    ],
    "correctIndex": 0,
    "correctAnswer": "A young goat and some unleavened bread",
    "scriptureRef": "Jdg 6:19"
  },
  {
    "id": 887,
    "question": "On what island was Paul shipwrecked as he made his way to Rome?",
    "options": [
      "Praise ye him, sun and moon, praise him,",
      "Horse",
      "Malta",
      "That he was not sinful like other men"
    ],
    "correctIndex": 2,
    "correctAnswer": "Malta",
    "scriptureRef": "Acts 28:1"
  },
  {
    "id": 888,
    "question": "\"An excellent wife\" is a what to her husband?",
    "options": [
      "That he was not sinful like other men",
      "Eighty-six years",
      "A crown",
      "Rebekah"
    ],
    "correctIndex": 2,
    "correctAnswer": "A crown",
    "scriptureRef": "Pro 12:4"
  },
  {
    "id": 889,
    "question": "To what tribe did Samson belong?",
    "options": [
      "Samson",
      "Deborah (Rebekah's nurse)",
      "Joseph of Arimathea",
      "Dan"
    ],
    "correctIndex": 3,
    "correctAnswer": "Dan",
    "scriptureRef": "Jdg 13:25"
  },
  {
    "id": 890,
    "question": "In which book of the Bible would you find the record of Balaam and his donkey?",
    "options": [
      "A third",
      "Numbers",
      "The coming of the Messiah",
      "Malchus"
    ],
    "correctIndex": 1,
    "correctAnswer": "Numbers",
    "scriptureRef": "Num 22:22-35"
  },
  {
    "id": 891,
    "question": "What are Psalms 120-134 collectively known as?",
    "options": [
      "Lord (Ps 48:11; 97:8) 400",
      "The Songs of Degrees (or Ascents)",
      "(Gen 17:5 / Strong's H87) Nineteen",
      "Othniel"
    ],
    "correctIndex": 1,
    "correctAnswer": "The Songs of Degrees (or Ascents)",
    "scriptureRef": "Ps 120 - 134"
  },
  {
    "id": 892,
    "question": "When Joseph was in prison, whose dream did he correctly interpret to mean he would be restored to his job?",
    "options": [
      "Butler",
      "Seventeen",
      "Benhadad",
      "Cousin / Sister's son (KJV)"
    ],
    "correctIndex": 0,
    "correctAnswer": "Butler",
    "scriptureRef": "Gen 42:32-36"
  },
  {
    "id": 893,
    "question": "What is \"sanctified by the word of God and prayer\"?",
    "options": [
      "one who forgave him more than he who has few debts forgiven. (Luke 7:42-43) 3,000",
      "He wrote the greetings in his own",
      "God's creation",
      "Ammon"
    ],
    "correctIndex": 2,
    "correctAnswer": "God's creation",
    "scriptureRef": "1 Tim 4:5"
  },
  {
    "id": 894,
    "question": "In the parable of the good father, if a son asks for an egg, what would the good father not give him?",
    "options": [
      "Forty-eight",
      "A scorpion",
      "A band of men and officers",
      "Anna the Prophetess"
    ],
    "correctIndex": 1,
    "correctAnswer": "A scorpion",
    "scriptureRef": "Luke 11:12"
  },
  {
    "id": 895,
    "question": "Fearing that Saul wanted to kill him, what lie did David ask Jonathan to tell his father if asked why he wasn't at the king's table for the New Moon feast?",
    "options": [
      "Don't fear going to Egypt, he would be made",
      "He had gone to Bethlehem for a",
      "Resurrection",
      "them out of the synagogue (John 12:42) Repent: for the kingdom of heaven"
    ],
    "correctIndex": 1,
    "correctAnswer": "He had gone to Bethlehem for a",
    "scriptureRef": ""
  },
  {
    "id": 896,
    "question": "What was the name of the field that Jacob requested to be buried in?",
    "options": [
      "Jephunneh",
      "Mercurius (Hermes)",
      "family gathering (1 Sam 20:6) Machpelah",
      "Herodias"
    ],
    "correctIndex": 2,
    "correctAnswer": "family gathering (1 Sam 20:6) Machpelah",
    "scriptureRef": "Gen 50:12-13"
  },
  {
    "id": 897,
    "question": "How long did Noah live for after the flood?",
    "options": [
      "Lydda",
      "Othniel",
      "Summer",
      "350 years"
    ],
    "correctIndex": 3,
    "correctAnswer": "350 years",
    "scriptureRef": "Gen 9:28"
  },
  {
    "id": 898,
    "question": "Paul, Timothy and who else sent their greetings to Thessalonica?",
    "options": [
      "Silvanus",
      "Ostrich",
      "With singing",
      "A parable"
    ],
    "correctIndex": 0,
    "correctAnswer": "Silvanus",
    "scriptureRef": "1 Th 1:1"
  },
  {
    "id": 899,
    "question": "How many years did Jacob live for?",
    "options": [
      "147",
      "Isaac",
      "Eighty-six years",
      "Dorcas"
    ],
    "correctIndex": 0,
    "correctAnswer": "147",
    "scriptureRef": "Gen 47:28"
  },
  {
    "id": 900,
    "question": "What animal is \"better than a dead lion\"?",
    "options": [
      "A living dog",
      "As a sign",
      "Locusts",
      "street corners (Matt 6:5) A lame man"
    ],
    "correctIndex": 0,
    "correctAnswer": "A living dog",
    "scriptureRef": "Ecc 9:4"
  },
  {
    "id": 901,
    "question": "One of the ten plagues of Egypt was the plague of boils, but which number was it?",
    "options": [
      "Lemuel",
      "Coriander",
      "A young goat and some unleavened bread",
      "Sixth"
    ],
    "correctIndex": 3,
    "correctAnswer": "Sixth",
    "scriptureRef": "Exo 9:8"
  },
  {
    "id": 902,
    "question": "After being left behind in Berea, in which city did Silas and Timothy meet up with Paul?",
    "options": [
      "Confusion and every evil work",
      "East",
      "Rebekah",
      "Corinth"
    ],
    "correctIndex": 3,
    "correctAnswer": "Corinth",
    "scriptureRef": "Acts 18:1-5"
  },
  {
    "id": 903,
    "question": "Who told his wife not to worry that she was barren and said, \"am not I better to thee than ten sons\"?",
    "options": [
      "Elkanah",
      "choked out by worldly cares (Matt 13:22) Amittai",
      "Eighty-six years",
      "The transgression of the law"
    ],
    "correctIndex": 0,
    "correctAnswer": "Elkanah",
    "scriptureRef": "1 Sam 1:8"
  },
  {
    "id": 904,
    "question": "What does Job say is \"poured out like water\"?",
    "options": [
      "Ur",
      "His groanings (roarings)",
      "One of the Scribes",
      "Onesiphorus"
    ],
    "correctIndex": 1,
    "correctAnswer": "His groanings (roarings)",
    "scriptureRef": "Job 3:24"
  },
  {
    "id": 905,
    "question": "A word \"fitly spoken\" is like what of gold set in pictures of silver?",
    "options": [
      "Philippi",
      "Judah",
      "Warming himself by a fire",
      "Apples"
    ],
    "correctIndex": 3,
    "correctAnswer": "Apples",
    "scriptureRef": "Pro 25:11"
  },
  {
    "id": 906,
    "question": "On which occasion in the Bible does it specifically say that believers sung a hymn?",
    "options": [
      "all ye stars of light (Ps 148:2-3) Reuben",
      "To visit the fatherless and widows, and to keep",
      "Jesus and the disciples celebrating",
      "drove him out (Jdg 11:1-3) Standing in synagogues and on"
    ],
    "correctIndex": 2,
    "correctAnswer": "Jesus and the disciples celebrating",
    "scriptureRef": ""
  },
  {
    "id": 907,
    "question": "To which city did Samson go down to and kill thirty men?",
    "options": [
      "Passover (Matt 26:30) Ashkelon",
      "Lydda",
      "He would be born in Bethlehem",
      "the kingdom to Israel? (Acts 1:6) Fish and honeycomb"
    ],
    "correctIndex": 0,
    "correctAnswer": "Passover (Matt 26:30) Ashkelon",
    "scriptureRef": "Jdg 14:19"
  },
  {
    "id": 908,
    "question": "Who was the Persian king when the rebuilding of the temple after the exile was finally complete?",
    "options": [
      "Darius",
      "Built larger barns to store them",
      "Disputing who was the greatest",
      "A parcel of land"
    ],
    "correctIndex": 0,
    "correctAnswer": "Darius",
    "scriptureRef": "Ezr 6:15"
  },
  {
    "id": 909,
    "question": "What part of King Asa's body was diseased?",
    "options": [
      "Tamar",
      "Passover (Matt 26:30) Ashkelon",
      "Manasseh",
      "Feet"
    ],
    "correctIndex": 3,
    "correctAnswer": "Feet",
    "scriptureRef": "1 Ki 15:23"
  },
  {
    "id": 910,
    "question": "Which priest anointed Solomon?",
    "options": [
      "Samuel",
      "Zadok",
      "Let the mother bird go free",
      "Phoebe"
    ],
    "correctIndex": 1,
    "correctAnswer": "Zadok",
    "scriptureRef": "1 Ki 1:39"
  },
  {
    "id": 911,
    "question": "Who does James say is the \"source of every good and every perfect gift\"?",
    "options": [
      "Just / Godly / Blameless",
      "Frogs",
      "Father of Lights",
      "Lion"
    ],
    "correctIndex": 2,
    "correctAnswer": "Father of Lights",
    "scriptureRef": "Jam 1:17"
  },
  {
    "id": 912,
    "question": "Which disciple asked Jesus to show them the Father?",
    "options": [
      "Feeding of the 5,000 and Jesus",
      "110",
      "Philip",
      "offered. (Lev 7:15; 22:30) Zebulun"
    ],
    "correctIndex": 2,
    "correctAnswer": "Philip",
    "scriptureRef": "John 14:8"
  },
  {
    "id": 913,
    "question": "What did Athaliah do when she saw her son, Ahaziah, was dead?",
    "options": [
      "Lemuel",
      "The inhabitants were great and",
      "Destroyed the rest of the royal family",
      "Interpret his dreams"
    ],
    "correctIndex": 2,
    "correctAnswer": "Destroyed the rest of the royal family",
    "scriptureRef": "2 Ki 11:1"
  },
  {
    "id": 914,
    "question": "Who had a bed 13.5 foot long by 6 foot wide?",
    "options": [
      "speaking to it) (Num 20:11) Absalom",
      "Jupiter (Zeus)",
      "Og",
      "Jesus"
    ],
    "correctIndex": 2,
    "correctAnswer": "Og",
    "scriptureRef": "Deut 3:11"
  },
  {
    "id": 915,
    "question": "Whose handkerchiefs were able to heal the sick?",
    "options": [
      "tall (Num 13:33-14:4) Made it into an idol",
      "Isaac",
      "Seventy",
      "Paul"
    ],
    "correctIndex": 3,
    "correctAnswer": "Paul",
    "scriptureRef": "Acts 19:12"
  },
  {
    "id": 916,
    "question": "How did Daniel react to the vision by the river Hiddekel?",
    "options": [
      "He felt ill and weak",
      "They will be raised to life again",
      "Despising God",
      "Abimelech"
    ],
    "correctIndex": 0,
    "correctAnswer": "He felt ill and weak",
    "scriptureRef": "Dan 10:8"
  },
  {
    "id": 917,
    "question": "Which Old Testament prophet was given a book to eat by God?",
    "options": [
      "You will sit on twelve thrones judging the",
      "Ezekiel",
      "Scarlet / Purple",
      "East"
    ],
    "correctIndex": 1,
    "correctAnswer": "Ezekiel",
    "scriptureRef": "Eze 3:2"
  },
  {
    "id": 918,
    "question": "What was the name of the centurion who looked after Paul on the journey to Rome?",
    "options": [
      "Julius",
      "They must marry within their tribe",
      "Day of Atonement",
      "Pharisees"
    ],
    "correctIndex": 0,
    "correctAnswer": "Julius",
    "scriptureRef": "Acts 27:1"
  },
  {
    "id": 919,
    "question": "Which book of the Bible comments that \"dead flies cause the ointment of the apothecary to send forth a stinking savor?",
    "options": [
      "Annas",
      "Malta",
      "Ecclesiastes",
      "Paul"
    ],
    "correctIndex": 2,
    "correctAnswer": "Ecclesiastes",
    "scriptureRef": "Ecc 10:1"
  },
  {
    "id": 920,
    "question": "\"Bread gained by deceit is sweet to a man\", but what shall his mouth be filled with afterwards?",
    "options": [
      "Jeroboam II",
      "Sandal",
      "Gravel",
      "all ye stars of light (Ps 148:2-3) Reuben"
    ],
    "correctIndex": 2,
    "correctAnswer": "Gravel",
    "scriptureRef": "Pro 20:17"
  },
  {
    "id": 921,
    "question": "What does Zechariah see in a vision that destroys the houses of thieves and liars?",
    "options": [
      "To the Unknown God",
      "Jupiter (Zeus)",
      "A thirty foot flying roll",
      "In the beauty of holiness"
    ],
    "correctIndex": 2,
    "correctAnswer": "A thirty foot flying roll",
    "scriptureRef": "Zec 5:1-4"
  },
  {
    "id": 922,
    "question": "How long did it take Solomon to build his own house?",
    "options": [
      "Thirteen years",
      "Didn't want to spoil his inheritance",
      "Philemon",
      "Gardener"
    ],
    "correctIndex": 0,
    "correctAnswer": "Thirteen years",
    "scriptureRef": "1 Ki 7:1"
  },
  {
    "id": 923,
    "question": "At which battle were the Israelites defeated because Joshua attacked without seeking God's guidance first?",
    "options": [
      "They will be raised to life again",
      "Sons of Jacob",
      "Lemuel",
      "Ai"
    ],
    "correctIndex": 3,
    "correctAnswer": "Ai",
    "scriptureRef": "Josh 7:5-12"
  },
  {
    "id": 924,
    "question": "In the parable of the debtors, one owed 500 denarii (pence), but how much did the other one owe?",
    "options": [
      "Jephthah",
      "Daniel",
      "Fifty",
      "Marah"
    ],
    "correctIndex": 2,
    "correctAnswer": "Fifty",
    "scriptureRef": "Luke 7:41"
  },
  {
    "id": 925,
    "question": "What was the name of the man who was paralyzed and had been bedridden for eight years?",
    "options": [
      "Aeneas",
      "Corinth",
      "Half",
      "153"
    ],
    "correctIndex": 0,
    "correctAnswer": "Aeneas",
    "scriptureRef": "Acts 9:33"
  },
  {
    "id": 926,
    "question": "How old was Abram when he first became a father?",
    "options": [
      "Eighty-six years",
      "Righteousness",
      "Just / Godly / Blameless",
      "By lying"
    ],
    "correctIndex": 0,
    "correctAnswer": "Eighty-six years",
    "scriptureRef": "Gen 16:16"
  },
  {
    "id": 927,
    "question": "How old was David when he died?",
    "options": [
      "Built larger barns to store them",
      "Seventy",
      "Sing psalms",
      "Thirty-nine"
    ],
    "correctIndex": 1,
    "correctAnswer": "Seventy",
    "scriptureRef": "2 Sam 5:4"
  },
  {
    "id": 928,
    "question": "How long was Noah's ark?",
    "options": [
      "Jairus'",
      "300 cubits / 450 feet",
      "John",
      "Blue"
    ],
    "correctIndex": 1,
    "correctAnswer": "300 cubits / 450 feet",
    "scriptureRef": "Gen 6:15"
  },
  {
    "id": 929,
    "question": "During Paul's third missionary journey, roughly for how long did he minister in the school of Tyrannus at Ephesus?",
    "options": [
      "Honorable",
      "Two years",
      "Frogs",
      "Philemon"
    ],
    "correctIndex": 1,
    "correctAnswer": "Two years",
    "scriptureRef": "Acts 19:10"
  },
  {
    "id": 930,
    "question": "What does James say \"envying and strife in your heart\" brings?",
    "options": [
      "Confusion and every evil work",
      "Thirteen years",
      "Third",
      "Stalks of flax"
    ],
    "correctIndex": 0,
    "correctAnswer": "Confusion and every evil work",
    "scriptureRef": "Jam 3:16"
  },
  {
    "id": 931,
    "question": "Which honorable counselor was waiting for the Kingdom of God?",
    "options": [
      "Judah",
      "Samaria",
      "Joseph of Arimathea",
      "Zaphnath-paaneah"
    ],
    "correctIndex": 2,
    "correctAnswer": "Joseph of Arimathea",
    "scriptureRef": "Mark 15:43"
  },
  {
    "id": 932,
    "question": "One of the Ten Commandments forbids the coveting of a neighbor's property. Which one?",
    "options": [
      "Bethlehem",
      "Tenth",
      "Forty",
      "Lamech"
    ],
    "correctIndex": 1,
    "correctAnswer": "Tenth",
    "scriptureRef": "Exo 20:17"
  },
  {
    "id": 933,
    "question": "What did God specifically command concerning the eating of the thanksgiving offering that the Israelites made?",
    "options": [
      "Ammonites",
      "A pig's snout",
      "Lydda",
      "They must eat it on the day it is"
    ],
    "correctIndex": 3,
    "correctAnswer": "They must eat it on the day it is",
    "scriptureRef": ""
  },
  {
    "id": 934,
    "question": "Which tribe's blessing from Jacob said they would \"dwell at the haven of the sea\"?",
    "options": [
      "offered. (Lev 7:15; 22:30) Zebulun",
      "sins (Matt 6:11-12; Luke 11:4) Murdering him",
      "Rivers of water",
      "Forty-eight"
    ],
    "correctIndex": 0,
    "correctAnswer": "offered. (Lev 7:15; 22:30) Zebulun",
    "scriptureRef": "Gen 49:13"
  },
  {
    "id": 935,
    "question": "Jesus accused the Pharisees of hypocritically paying tithes on herbs, and omitting which weightier matters of the law?",
    "options": [
      "speaking to it) (Num 20:11) Absalom",
      "Judgment, mercy, and faith",
      "one who forgave him more than he who has few debts forgiven. (Luke 7:42-43) 3,000",
      "Levi"
    ],
    "correctIndex": 1,
    "correctAnswer": "Judgment, mercy, and faith",
    "scriptureRef": "Matt 23:23"
  },
  {
    "id": 936,
    "question": "Which king of Heshbon would not let the Israelites pass through his land?",
    "options": [
      "Three",
      "Forty",
      "Daniel",
      "Sihon"
    ],
    "correctIndex": 3,
    "correctAnswer": "Sihon",
    "scriptureRef": "Deut 2:30; Jdg 11:19-20"
  },
  {
    "id": 937,
    "question": "What occasion did David write Psalm 105 for?",
    "options": [
      "Cupbearer",
      "Machpelah",
      "Bringing the ark back to Jerusalem",
      "666"
    ],
    "correctIndex": 2,
    "correctAnswer": "Bringing the ark back to Jerusalem",
    "scriptureRef": "1 Chr 15-16"
  },
  {
    "id": 938,
    "question": "Which one of the Ten Commandments was an instruction not to lie (bear false witness)?",
    "options": [
      "It doesn't say",
      "Ninth",
      "Scarlet / Purple",
      "A wall fell on them"
    ],
    "correctIndex": 1,
    "correctAnswer": "Ninth",
    "scriptureRef": "Exo 20:16"
  },
  {
    "id": 939,
    "question": "What was the name of the god that Barnabas was called at Lystra?",
    "options": [
      "Bringing the ark back to Jerusalem",
      "Jupiter (Zeus)",
      "Annas",
      "disciple (Luke 22:24-30) Hezekiah"
    ],
    "correctIndex": 1,
    "correctAnswer": "Jupiter (Zeus)",
    "scriptureRef": "Acts 14:12"
  },
  {
    "id": 940,
    "question": "How many horns did the ram in Daniel's vision have?",
    "options": [
      "Grandson",
      "Trumpets, pitchers and lamps",
      "Ostrich",
      "Two"
    ],
    "correctIndex": 3,
    "correctAnswer": "Two",
    "scriptureRef": "Dan 8:3"
  },
  {
    "id": 941,
    "question": "Onesimus, was a run away slave from which city?",
    "options": [
      "Tabitha (Dorcas)",
      "Zadok",
      "Colosse",
      "yourself unspotted from the world (Jam 1:27) Midnight"
    ],
    "correctIndex": 2,
    "correctAnswer": "Colosse",
    "scriptureRef": "Col 4:9; Phm 1:12"
  },
  {
    "id": 942,
    "question": "The disciple Thomas was also known as Didymus, but what does this name mean?",
    "options": [
      "The Spirit, the water and the blood",
      "Twin",
      "In a dream",
      "Jewels and clothing"
    ],
    "correctIndex": 1,
    "correctAnswer": "Twin",
    "scriptureRef": "John 11:16 / Strongs G1324"
  },
  {
    "id": 943,
    "question": "Which king decreed that the Jews could return to their land to rebuild the temple?",
    "options": [
      "Cyrus",
      "Frogs",
      "Eight years",
      "…bringeth his mother to shame"
    ],
    "correctIndex": 0,
    "correctAnswer": "Cyrus",
    "scriptureRef": "Ezr 1:1-3"
  },
  {
    "id": 944,
    "question": "Isaiah took a cake of what to heal Hezekiah?",
    "options": [
      "Just / Godly / Blameless",
      "Ehud",
      "Lord will you at this time restore again",
      "Figs"
    ],
    "correctIndex": 3,
    "correctAnswer": "Figs",
    "scriptureRef": "2 Ki 20:7"
  },
  {
    "id": 945,
    "question": "Who prayed, \"I pray thee, open his eyes that he may see?",
    "options": [
      "Forty",
      "He ate it",
      "Elisha",
      "Sparrows"
    ],
    "correctIndex": 2,
    "correctAnswer": "Elisha",
    "scriptureRef": "2 Ki 6:17"
  },
  {
    "id": 946,
    "question": "How many silver shekels did Jeremiah pay to Hanameel for a field in Anathoth?",
    "options": [
      "The land of Canaan",
      "Seventeen",
      "His ring, fine linen and a gold chain",
      "Those without fins and scales"
    ],
    "correctIndex": 1,
    "correctAnswer": "Seventeen",
    "scriptureRef": "Jer 32:9"
  },
  {
    "id": 947,
    "question": "In the love poetry of Song of Solomon the lady's hair is described as a flock of which animal?",
    "options": [
      "Ararat",
      "Lords of the Philistines",
      "Four",
      "Goats"
    ],
    "correctIndex": 3,
    "correctAnswer": "Goats",
    "scriptureRef": "Song 4:1"
  },
  {
    "id": 948,
    "question": "What is the first offering made to the Lord recorded in the Bible?",
    "options": [
      "Ephraim and Manasseh",
      "Cain's fruit of the ground",
      "Who is the greatest in heaven",
      "Agabus"
    ],
    "correctIndex": 1,
    "correctAnswer": "Cain's fruit of the ground",
    "scriptureRef": "Gen 4:3"
  },
  {
    "id": 949,
    "question": "In Revelation 22, who does it say has the right to the tree of life?",
    "options": [
      "Those that do God's commandments",
      "is at hand (Matt 4:17) Pray for one another",
      "The sick",
      "Ararat"
    ],
    "correctIndex": 0,
    "correctAnswer": "Those that do God's commandments",
    "scriptureRef": "Rev 22:14"
  },
  {
    "id": 950,
    "question": "In Proverbs, what metal is the \"tongue of the just\" likened to?",
    "options": [
      "Seven",
      "Silver",
      "Tychicus",
      "Silversmith"
    ],
    "correctIndex": 1,
    "correctAnswer": "Silver",
    "scriptureRef": "Pro 10:20"
  },
  {
    "id": 951,
    "question": "Which three tribes camped on the northern side of the tabernacle in the wilderness?",
    "options": [
      "A scorpion",
      "Dan, Asher, Naphtali",
      "Silvanus",
      "Archelaus"
    ],
    "correctIndex": 1,
    "correctAnswer": "Dan, Asher, Naphtali",
    "scriptureRef": "Num 2:25-29"
  },
  {
    "id": 952,
    "question": "To where did Paul & Silas flee after upsetting the Jews at Thessalonica?",
    "options": [
      "Blue",
      "A third",
      "Kept his hands held up",
      "Berea"
    ],
    "correctIndex": 3,
    "correctAnswer": "Berea",
    "scriptureRef": "Acts 17:10"
  },
  {
    "id": 953,
    "question": "How many silver pieces would each Philistine lord give to Delilah if she betrayed Samson?",
    "options": [
      "Warming himself by a fire",
      "1,100",
      "Over the hole of a snake",
      "Joab"
    ],
    "correctIndex": 1,
    "correctAnswer": "1,100",
    "scriptureRef": "Jdg 16:5"
  },
  {
    "id": 954,
    "question": "In the parable about a fig tree, when you see the \"tree putting forth leaves\", what is near?",
    "options": [
      "Summer",
      "thanksgiving (Php 4:6) God's footstool",
      "Burned his house down while still",
      "Fifteen"
    ],
    "correctIndex": 0,
    "correctAnswer": "Summer",
    "scriptureRef": "Matt 24:32"
  },
  {
    "id": 955,
    "question": "According to Proverbs, how do those \"seeking death\" acquire their wealth?",
    "options": [
      "Micah",
      "By lying",
      "110",
      "Judah"
    ],
    "correctIndex": 1,
    "correctAnswer": "By lying",
    "scriptureRef": "Pro 21:6"
  },
  {
    "id": 956,
    "question": "In the prophecy of Isaiah, where will a little child play in the kingdom age?",
    "options": [
      "You will sit on twelve thrones judging the",
      "Seven",
      "Babylon",
      "Over the hole of a snake"
    ],
    "correctIndex": 3,
    "correctAnswer": "Over the hole of a snake",
    "scriptureRef": "Isa 11:8"
  },
  {
    "id": 957,
    "question": "In Genesis, who was buried under an oak tree below Bethel?",
    "options": [
      "Ten male donkeys and ten female donkeys",
      "God said, \"the blood is the life.\"",
      "Joseph of Arimathea",
      "Deborah (Rebekah's nurse)"
    ],
    "correctIndex": 3,
    "correctAnswer": "Deborah (Rebekah's nurse)",
    "scriptureRef": "Gen 35:8"
  },
  {
    "id": 958,
    "question": "What color was the High Priest's robe?",
    "options": [
      "Darius",
      "That he was not sinful like other men",
      "Blue",
      "Asher"
    ],
    "correctIndex": 2,
    "correctAnswer": "Blue",
    "scriptureRef": "Exo 28:31"
  },
  {
    "id": 959,
    "question": "Who does Paul thank God for because their \"faith and love grew exceedingly\"?",
    "options": [
      "Underwater creatures and birds",
      "The Thessalonians",
      "them into pieces (Dan 2:34) Ahab",
      "The widow of Zarephath"
    ],
    "correctIndex": 1,
    "correctAnswer": "The Thessalonians",
    "scriptureRef": "2 Th 1:3"
  },
  {
    "id": 960,
    "question": "Which nation does Jeremiah say is dwelling in Gad?",
    "options": [
      "Shadrach, Meshach and Abednego",
      "Three",
      "Ammon",
      "Let the mother bird go free"
    ],
    "correctIndex": 2,
    "correctAnswer": "Ammon",
    "scriptureRef": "Jer 49:1"
  },
  {
    "id": 961,
    "question": "In which city were Paul and Barnabas worshipped as gods?",
    "options": [
      "The poor",
      "He wrote the greetings in his own",
      "City gates",
      "Lystra"
    ],
    "correctIndex": 3,
    "correctAnswer": "Lystra",
    "scriptureRef": "Acts 14:8-12"
  },
  {
    "id": 962,
    "question": "What does the name Israel mean?",
    "options": [
      "Bread and fish",
      "Prevails with God",
      "sins (Matt 6:11-12; Luke 11:4) Murdering him",
      "He would be born in Bethlehem"
    ],
    "correctIndex": 1,
    "correctAnswer": "Prevails with God",
    "scriptureRef": "Gen 32:28"
  },
  {
    "id": 963,
    "question": "What must an Israelite do when \"building a new house\"?",
    "options": [
      "A merry heart",
      "Build a guard rail around the roof",
      "By the fruit of his mouth",
      "thanksgiving (Php 4:6) God's footstool"
    ],
    "correctIndex": 1,
    "correctAnswer": "Build a guard rail around the roof",
    "scriptureRef": "Deut 22:8"
  },
  {
    "id": 964,
    "question": "Which prophet said, \"Out of Egypt have I called my son\"?",
    "options": [
      "choked out by worldly cares (Matt 13:22) Amittai",
      "Valley of Sorek",
      "They were afraid the Pharisees would put",
      "Hosea"
    ],
    "correctIndex": 3,
    "correctAnswer": "Hosea",
    "scriptureRef": "Hos 11:1"
  },
  {
    "id": 965,
    "question": "what?",
    "options": [
      "Twin",
      "Imagine evil",
      "A vine bringing forth grapes which are",
      "Hannah"
    ],
    "correctIndex": 1,
    "correctAnswer": "Imagine evil",
    "scriptureRef": "Pro 12:20"
  },
  {
    "id": 966,
    "question": "Jesus quotes a portion of text from the Old Testament in connection with the parable of the vineyard owner, \"The stone which the builders rejected is become the head of the corner:\", but which Old Testament book did this come from?",
    "options": [
      "Pharisees",
      "Philemon",
      "Psalms",
      "They were chosen to fight against"
    ],
    "correctIndex": 2,
    "correctAnswer": "Psalms",
    "scriptureRef": "Mark 12:10; Ps 118:22"
  },
  {
    "id": 967,
    "question": "Where did Paul leave the sick Trophimus?",
    "options": [
      "Herod (the Great)",
      "Elisha",
      "Miletum (Miletus)",
      "Zaphnath-paaneah"
    ],
    "correctIndex": 2,
    "correctAnswer": "Miletum (Miletus)",
    "scriptureRef": "2 Tim 4:20"
  },
  {
    "id": 968,
    "question": "In a battle against the Syrians, what killed 27,000 of them in the city of Aphek?",
    "options": [
      "Jerusalem",
      "A wall fell on them",
      "Rebekah",
      "one who forgave him more than he who has few debts forgiven. (Luke 7:42-43) 3,000"
    ],
    "correctIndex": 1,
    "correctAnswer": "A wall fell on them",
    "scriptureRef": "1 Ki 20:30"
  },
  {
    "id": 969,
    "question": "What weight of gold was Solomon recorded as acquiring in one year?",
    "options": [
      "666 talents",
      "Judgment, mercy, and faith",
      "To visit the fatherless and widows, and to keep",
      "Hiram, King of Tyre"
    ],
    "correctIndex": 0,
    "correctAnswer": "666 talents",
    "scriptureRef": "1 Ki 10:14"
  },
  {
    "id": 970,
    "question": "Who addresses an epistle to the \"twelve tribes which are scattered abroad\"?",
    "options": [
      "James",
      "Mary",
      "A scorpion",
      "Cast lots"
    ],
    "correctIndex": 0,
    "correctAnswer": "James",
    "scriptureRef": "Jam 1:1"
  },
  {
    "id": 971,
    "question": "Who was killed by a wet blanket?",
    "options": [
      "Ten male donkeys and ten female donkeys",
      "Simon (Peter) and Andrew",
      "Benhadad",
      "Corinthians"
    ],
    "correctIndex": 2,
    "correctAnswer": "Benhadad",
    "scriptureRef": "2 Ki 8:15"
  },
  {
    "id": 972,
    "question": "In the parable of the Prodigal Son, what portion would the son have received?",
    "options": [
      "Samson",
      "Ararat",
      "is at hand (Matt 4:17) Pray for one another",
      "A third"
    ],
    "correctIndex": 3,
    "correctAnswer": "A third",
    "scriptureRef": "Deut 21:17; Luke 15:12"
  },
  {
    "id": 973,
    "question": "What did Elisha throw into Jericho's water supply to \"heal\" it?",
    "options": [
      "Salt",
      "East",
      "Mist went up from the earth",
      "Philippi"
    ],
    "correctIndex": 0,
    "correctAnswer": "Salt",
    "scriptureRef": "2 Ki 2:21"
  },
  {
    "id": 974,
    "question": "With what unusual weapon did Shamgar slay 600 Philistines?",
    "options": [
      "Third",
      "A third",
      "A cattle prod (ox goad)",
      "Mary"
    ],
    "correctIndex": 2,
    "correctAnswer": "A cattle prod (ox goad)",
    "scriptureRef": "Jdg 3:31"
  },
  {
    "id": 975,
    "question": "In which tribe was the city of Ramoth-Gilead?",
    "options": [
      "Gad",
      "Ai",
      "Just / Godly / Blameless",
      "In a basket down the city wall"
    ],
    "correctIndex": 0,
    "correctAnswer": "Gad",
    "scriptureRef": "Deut 4:43"
  },
  {
    "id": 976,
    "question": "Why do the four and twenty elders in Revelation give thanks to God?",
    "options": [
      "Like a bride",
      "Gihon",
      "Built larger barns to store them",
      "God has taken his power and"
    ],
    "correctIndex": 3,
    "correctAnswer": "God has taken his power and",
    "scriptureRef": ""
  },
  {
    "id": 977,
    "question": "David refers to the tribe of Judah as his what in the Psalms?",
    "options": [
      "Double (portion)",
      "commenced his reign (Rev 11:17) His lawgiver (royal scepter)",
      "Gardener",
      "A parcel of land"
    ],
    "correctIndex": 1,
    "correctAnswer": "commenced his reign (Rev 11:17) His lawgiver (royal scepter)",
    "scriptureRef": "Ps 60:7"
  },
  {
    "id": 978,
    "question": "When Isaiah describes the desolation of the last days, a man shall \"cast his idols of silver, and his idols of gold, to the moles\" and the what?",
    "options": [
      "They were covetous (loved money)",
      "Rivers of water",
      "Bats",
      "He who has many debts forgiven, loves the"
    ],
    "correctIndex": 2,
    "correctAnswer": "Bats",
    "scriptureRef": "Isa 2:20"
  },
  {
    "id": 979,
    "question": "Who gave thanks to the Lord when she saw the baby Jesus?",
    "options": [
      "Trumpets, pitchers and lamps",
      "Anna the Prophetess",
      "Salem",
      "Two"
    ],
    "correctIndex": 1,
    "correctAnswer": "Anna the Prophetess",
    "scriptureRef": "Luke 2:36-38"
  },
  {
    "id": 980,
    "question": "Children in the region of what age were to be killed, in the hope that the young Jesus would also be killed?",
    "options": [
      "Burned his house down while still",
      "Two years and under",
      "Lamech",
      "Scarlet / Purple"
    ],
    "correctIndex": 1,
    "correctAnswer": "Two years and under",
    "scriptureRef": "Matt 2:16"
  },
  {
    "id": 981,
    "question": "Who is described in the Psalms as \"spreading himself like a green bay tree\"?",
    "options": [
      "Grandmother",
      "Frogs",
      "The wicked",
      "First"
    ],
    "correctIndex": 2,
    "correctAnswer": "The wicked",
    "scriptureRef": "Ps 37:35"
  },
  {
    "id": 982,
    "question": "Aeneas was confined to bed for eight years suffering from the palsy, but which town did he dwell in?",
    "options": [
      "Confess your faults",
      "Lydda",
      "A living dog",
      "Rachel"
    ],
    "correctIndex": 1,
    "correctAnswer": "Lydda",
    "scriptureRef": "Acts 9:32-33"
  },
  {
    "id": 983,
    "question": "Where was Solomon anointed?",
    "options": [
      "Two turtledoves or pigeons",
      "Mountains",
      "Judah",
      "Gihon"
    ],
    "correctIndex": 3,
    "correctAnswer": "Gihon",
    "scriptureRef": "1 Ki 1:38"
  },
  {
    "id": 984,
    "question": "Christ was led away to which high priest first?",
    "options": [
      "…bringeth his mother to shame",
      "A pig's snout",
      "Cast lots",
      "Annas"
    ],
    "correctIndex": 3,
    "correctAnswer": "Annas",
    "scriptureRef": "Luke 3:2; John 18:13"
  },
  {
    "id": 985,
    "question": "Whose mother does Paul greet in the letter to the Romans?",
    "options": [
      "water (Exo 15:23-25) They were not ashamed",
      "Trees for meat",
      "disciple (Luke 22:24-30) Hezekiah",
      "Rufus'"
    ],
    "correctIndex": 3,
    "correctAnswer": "Rufus'",
    "scriptureRef": "Rom 16:13"
  },
  {
    "id": 986,
    "question": "Which Psalm does Paul quote from in his exhortation at Antioch?",
    "options": [
      "Psalm 2",
      "Peter",
      "Macedonia",
      "Twin"
    ],
    "correctIndex": 0,
    "correctAnswer": "Psalm 2",
    "scriptureRef": "Acts 13:33; Ps 2:7"
  },
  {
    "id": 987,
    "question": "\"The legs of the lame hanging limp\" are like what in the mouth of fools?",
    "options": [
      "Lord will you at this time restore again",
      "By the fruit of his mouth",
      "A parable",
      "The Songs of Degrees (or Ascents)"
    ],
    "correctIndex": 2,
    "correctAnswer": "A parable",
    "scriptureRef": "Pro 26:7"
  },
  {
    "id": 988,
    "question": "How does Peter say a husband should treat his wife?",
    "options": [
      "Moses",
      "precious stones (1 Ki 10:10) Charge it to Paul",
      "With honor",
      "A tree of life"
    ],
    "correctIndex": 2,
    "correctAnswer": "With honor",
    "scriptureRef": "1 Pe 3:7"
  },
  {
    "id": 989,
    "question": "After being told by God to remain in Gerar, who told the men there when questioned that his wife was merely his sister?",
    "options": [
      "Isaac",
      "God said, \"the blood is the life.\"",
      "He sat down on the East of the city",
      "Bringing the ark back to Jerusalem"
    ],
    "correctIndex": 0,
    "correctAnswer": "Isaac",
    "scriptureRef": "Gen 26:1-7"
  },
  {
    "id": 990,
    "question": "Why does David say \"the daughters of Judah should be glad\"?",
    "options": [
      "Trees for meat",
      "Because of the judgments of the",
      "handwriting (2 Th 3:17) Belshazzar",
      "Cyrus"
    ],
    "correctIndex": 1,
    "correctAnswer": "Because of the judgments of the",
    "scriptureRef": ""
  },
  {
    "id": 991,
    "question": "For how many shekels of silver did Abraham purchase the field of Machpelah?",
    "options": [
      "Lord (Ps 48:11; 97:8) 400",
      "He who has many debts forgiven, loves the",
      "yourself unspotted from the world (Jam 1:27) Midnight",
      "Foolishness"
    ],
    "correctIndex": 0,
    "correctAnswer": "Lord (Ps 48:11; 97:8) 400",
    "scriptureRef": "Gen 23:16"
  },
  {
    "id": 992,
    "question": "In Ezekiel's prophecy, who is said to be the \"mother of Jerusalem\"?",
    "options": [
      "The widow of Zarephath",
      "Calming of the storm",
      "Diana (Artemis)",
      "A Hittite"
    ],
    "correctIndex": 3,
    "correctAnswer": "A Hittite",
    "scriptureRef": "Eze 16:3"
  },
  {
    "id": 993,
    "question": "Who did Jesus say was \"not far from the Kingdom of God\"?",
    "options": [
      "Phoebe",
      "An ephah of barley",
      "By lying",
      "One of the Scribes"
    ],
    "correctIndex": 3,
    "correctAnswer": "One of the Scribes",
    "scriptureRef": "Mark 12:28-34"
  },
  {
    "id": 994,
    "question": "Who succeeded Herod the Great after his death?",
    "options": [
      "Gibeon",
      "Ur",
      "Cana",
      "Archelaus"
    ],
    "correctIndex": 3,
    "correctAnswer": "Archelaus",
    "scriptureRef": "Matt 2:22"
  },
  {
    "id": 995,
    "question": "On Paul's journey to Rome, at what location did he meet brethren whom he thanked God for?",
    "options": [
      "Just / Godly / Blameless",
      "Appii forum",
      "Wine",
      "Tabitha (Dorcas)"
    ],
    "correctIndex": 1,
    "correctAnswer": "Appii forum",
    "scriptureRef": "Acts 28:15"
  },
  {
    "id": 996,
    "question": "Proverbs describes a \"fair woman without discretion\" as like a jewel of gold in what?",
    "options": [
      "Third",
      "A pig's snout",
      "Count it all joy",
      "Evil men"
    ],
    "correctIndex": 1,
    "correctAnswer": "A pig's snout",
    "scriptureRef": "Pro 11:22"
  },
  {
    "id": 997,
    "question": "What does the name Abram mean?",
    "options": [
      "She had looked after Naomi",
      "Sheaves of wheat bowing down to",
      "Elisha",
      "High father / Father of heights"
    ],
    "correctIndex": 3,
    "correctAnswer": "High father / Father of heights",
    "scriptureRef": ""
  },
  {
    "id": 998,
    "question": "How many begotten sons of David are named in the Bible?",
    "options": [
      "You will sit on twelve thrones judging the",
      "Simeon",
      "150",
      "(Gen 17:5 / Strong's H87) Nineteen"
    ],
    "correctIndex": 3,
    "correctAnswer": "(Gen 17:5 / Strong's H87) Nineteen",
    "scriptureRef": "1 Chr 3:1-9"
  },
  {
    "id": 999,
    "question": "In Luke's account of the Sermon on the Mount to who does Jesus say \"God is kind\"?",
    "options": [
      "The Unknown God",
      "The rivers and fountains of waters",
      "The unthankful and the evil",
      "Tychicus"
    ],
    "correctIndex": 2,
    "correctAnswer": "The unthankful and the evil",
    "scriptureRef": "Luke 6:35"
  },
  {
    "id": 1000,
    "question": "How many cities did the Levites possess?",
    "options": [
      "Philippi",
      "Simon (the sorcerer)",
      "Forty-eight",
      "Micah"
    ],
    "correctIndex": 2,
    "correctAnswer": "Forty-eight",
    "scriptureRef": "Josh 21:41"
  },
  {
    "id": 1001,
    "question": "The angel said to Mary that Jesus would \"reign over the house\" of which Old Testament character?",
    "options": [
      "Lamech",
      "Psalm 117",
      "Made a whip",
      "Jacob"
    ],
    "correctIndex": 3,
    "correctAnswer": "Jacob",
    "scriptureRef": "Luke 1:33"
  }
];
