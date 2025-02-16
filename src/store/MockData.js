const mockData = [
  {
    id: "SDTwt141",
    username: "PixelPainter",
    content:
      "Pixels: The building blocks of our digital universe. We're all pixel architects. 🧱🖼️ #DigitalWorld",
    likes: 251,
    retweets: 79,
    replies: [],
  },
  {
    id: "SDTwt142",
    username: "CodeConductor",
    content:
      "Coding like a puzzle: You've got to find the right pieces for the perfect picture. 🧩💻 #CodePuzzles",
    likes: 285,
    retweets: 96,
    replies: [],
  },
  {
    id: "SDTwt143",
    username: "LayoutLuminary",
    content:
      "Web design: Where lines of code dance together to create a visual symphony. 🎵🎉 #WebMagic",
    likes: 219,
    retweets: 70,
    replies: [],
  },
  {
    id: "SDTwt144",
    username: "BugBuster",
    content:
      "Spotting a bug that slipped through code review: Like finding a hidden message in a book. 🔍📖 #CodeMysteries",
    likes: 258,
    retweets: 84,
    replies: [],
  },
  {
    id: "SDTwt145",
    username: "DesignDynamo",
    content:
      "Design is the art of transforming ideas into visual poetry that speaks to the soul. 🖋️🎨 #DesignMagic",
    likes: 226,
    retweets: 76,
    replies: [],
  },
  {
    id: "SDTwt146",
    username: "CodeCraftsman",
    content:
      "Coding sprints: The marathon of racing your own brain. 🏃‍♂️💡 #SprintCoding",
    likes: 271,
    retweets: 89,
    replies: [
      {
        id: "SDTwt146__Rply141",
        username: "CodeRunner",
        content: "@CodeCraftsman Racing against time and typos! ⏱️🏁",
        likes: 44,
        retweets: 15,
      },
    ],
  },
  {
    id: "SDTwt147",
    username: "PixelPioneer",
    content:
      "Pixel-perfect design: Like fitting a jigsaw piece into the grand puzzle of the web. 🧩🖼️ #DesignChallenge",
    likes: 235,
    retweets: 78,
    replies: [
      {
        id: "SDTwt147__Rply142",
        username: "DesignDilemma",
        content:
          "@PixelPioneer Every pixel has a purpose in the grand masterpiece! 🎨",
        likes: 39,
        retweets: 12,
      },
    ],
  },
  {
    id: "SDTwt148",
    username: "ErrorEraser",
    content:
      "Syntax errors: The villains that wear invisibility cloaks in the world of coding. 🧙‍♂️💻 #CodeMagic",
    likes: 279,
    retweets: 93,
    replies: [],
  },
  {
    id: "SDTwt149",
    username: "DesignDreamer",
    content:
      "Designers: We turn chaos into visual harmony, one pixel at a time. 🎨🪄 #DesignAlchemy",
    likes: 211,
    retweets: 71,
    replies: [],
  },
  {
    id: "SDTwt150",
    username: "CodeComposer",
    content:
      "Coding: The closest thing we have to wielding magic wands in the digital realm. 🪄💻 #CodeWizardry",
    likes: 264,
    retweets: 88,
    replies: [],
  },
  {
    id: "SDTwt101",
    username: "PixelPioneer",
    content:
      "When CSS floats drive you to the edge... but you realize it's not the float you need, but the clear. 💥💭 #WebDesignWoes",
    likes: 198,
    retweets: 63,
    replies: [
      {
        id: "SDTwt101__Rply101",
        username: "LayoutGuru",
        content: "@PixelPioneer Classic CSS mysteries! 🕵️‍♀️",
        likes: 32,
        retweets: 9,
      },
    ],
  },
  {
    id: "SDTwt102",
    username: "BugHunter",
    content:
      "Bugs in the code: Like the surprise guests you never invited to the party. 🐛🎉 #DebuggingChronicles",
    likes: 245,
    retweets: 71,
    replies: [
      {
        id: "SDTwt102__Rply102",
        username: "CodeExterminator",
        content: "@BugHunter Time to grab the virtual bug spray! 🐜🕷️",
        likes: 38,
        retweets: 12,
      },
    ],
  },
  {
    id: "SDTwt103",
    username: "InkSlinger",
    content:
      "Pen tool: The unsung hero of turning curves into vector magic. ✍️🔮 #GraphicDesign",
    likes: 182,
    retweets: 54,
    replies: [],
  },
  {
    id: "SDTwt104",
    username: "CodeSculptor",
    content:
      "Turning coffee into code since... who am I kidding, it's always coffee o'clock. ☕💻 #CodingFuel",
    likes: 320,
    retweets: 101,
    replies: [],
  },
  {
    id: "SDTwt105",
    username: "DesignDabbler",
    content:
      "When the client's idea board looks like a treasure map, and 'X' marks the impossible. 🗺️💎 #DesignChallenges",
    likes: 267,
    retweets: 82,
    replies: [
      {
        id: "SDTwt105__Rply105",
        username: "CreativeCartographer",
        content: "@DesignDabbler The client's dreams can be quite a maze! 🧩",
        likes: 45,
        retweets: 15,
      },
    ],
  },
  {
    id: "SDTwt106",
    username: "BugWhisperer",
    content:
      "Fixing code bugs like a digital Sherlock Holmes. 🔍🐞 #BugHunting",
    likes: 212,
    retweets: 68,
    replies: [
      {
        id: "SDTwt106__Rply106",
        username: "SleuthyCoder",
        content: "@BugWhisperer Elementary, my dear developer! 🕵️‍♂️",
        likes: 37,
        retweets: 11,
      },
    ],
  },
  {
    id: "SDTwt107",
    username: "LayoutLover",
    content:
      "Remember kids, before flexbox and grid, we lived in a land of floats and clears. 🏝️🚢 #OldSchoolLayout",
    likes: 198,
    retweets: 53,
    replies: [],
  },
  {
    id: "SDTwt108",
    username: "ColorCrafter",
    content:
      "Choosing colors for a project: The true test of indecisiveness. 🎨🤷‍♂️ #DesignChoices",
    likes: 245,
    retweets: 77,
    replies: [
      {
        id: "SDTwt108__Rply108",
        username: "PalettePicker",
        content: "@ColorCrafter I always end up with a rainbow! 🌈",
        likes: 39,
        retweets: 14,
      },
    ],
  },
  {
    id: "SDTwt109",
    username: "PixelPirate",
    content:
      "Designers and developers: United by a shared love for gradients, but divided by their starting point. 🌈🖥️ #CreativeDifferences",
    likes: 320,
    retweets: 96,
    replies: [
      {
        id: "SDTwt109__Rply109",
        username: "CodePalette",
        content: "@PixelPirate The battle of 'hex' and 'rgba'! ⚔️",
        likes: 51,
        retweets: 17,
      },
    ],
  },
  {
    id: "SDTwt110",
    username: "DevDoodle",
    content:
      "Can we talk about browser compatibility? It's like getting everyone to agree on a pizza topping. 🍕🌐 #CrossBrowserStruggles",
    likes: 267,
    retweets: 84,
    replies: [
      {
        id: "SDTwt110__Rply110",
        username: "BrowserBattler",
        content: "@DevDoodle The pizza should unite, not divide! 🍕🤝",
        likes: 43,
        retweets: 15,
      },
    ],
  },
  {
    id: "SDTwt111",
    username: "PixelPainter",
    content:
      "Prototyping UI: When your wireframes evolve from stick figures to digital masterpieces. 🎨🖼️ #UXDesign",
    likes: 223,
    retweets: 72,
    replies: [],
  },
  {
    id: "SDTwt112",
    username: "ErrorEraser",
    content:
      "Code review comments: Like getting suggestions for a painting you thought was a masterpiece. 🎨🖋️ #CodeReview",
    likes: 285,
    retweets: 89,
    replies: [
      {
        id: "SDTwt112__Rply111",
        username: "ReviewArtist",
        content:
          "@ErrorEraser But sometimes, those touch-ups make it shine brighter! ✨",
        likes: 47,
        retweets: 15,
      },
    ],
  },
  {
    id: "SDTwt113",
    username: "LayoutLuminary",
    content:
      "Web design trends: Like fashion shows for pixels. What's in this season? 🌟💃 #DesignTrends",
    likes: 202,
    retweets: 62,
    replies: [],
  },
  {
    id: "SDTwt114",
    username: "BugBuster",
    content:
      "Ever squashed a bug, and it felt like you conquered a dragon? 🐲🦠 #EpicVictory",
    likes: 256,
    retweets: 81,
    replies: [
      {
        id: "SDTwt114__Rply112",
        username: "BugSlayer",
        content: "@BugBuster The battle against code chaos! 💪",
        likes: 42,
        retweets: 13,
      },
    ],
  },
  {
    id: "SDTwt115",
    username: "PixelPerfectionist",
    content:
      "Pixel alignment: Because sometimes, a single pixel can ruin your day. 😵🔍 #DesignPrecision",
    likes: 211,
    retweets: 67,
    replies: [],
  },
  {
    id: "SDTwt116",
    username: "CodeComposer",
    content:
      "Writing code is like composing a symphony. You need the right instruments and harmony. 🎵🎻 #CodeHarmony",
    likes: 298,
    retweets: 97,
    replies: [
      {
        id: "SDTwt116__Rply113",
        username: "MelodyMaker",
        content:
          "@CodeComposer And sometimes, debugging is like tuning an out-of-key note! 🎶",
        likes: 52,
        retweets: 18,
      },
    ],
  },
  {
    id: "SDTwt117",
    username: "DesignDetective",
    content:
      "When someone requests 'just a quick change,' but it affects the entire layout. 🔍📐 #SneakyEdits",
    likes: 185,
    retweets: 56,
    replies: [
      {
        id: "SDTwt117__Rply114",
        username: "LayoutInspector",
        content: "@DesignDetective The butterfly effect of design! 🦋",
        likes: 38,
        retweets: 12,
      },
    ],
  },
  {
    id: "SDTwt118",
    username: "BugHugger",
    content:
      "When your code is bug-free on the first try, and you question your reality. 🧐🛡️ #CodePerfection",
    likes: 334,
    retweets: 110,
    replies: [],
  },
  {
    id: "SDTwt119",
    username: "ColorConductor",
    content:
      "Designing color palettes: Where creativity meets endless debates about shades of blue. 🎨💬 #ColorHarmony",
    likes: 198,
    retweets: 63,
    replies: [
      {
        id: "SDTwt119__Rply115",
        username: "PalettePro",
        content:
          "@ColorConductor Blue is never just 'blue.' It's a spectrum! 💙🔵",
        likes: 29,
        retweets: 10,
      },
    ],
  },
  {
    id: "SDTwt120",
    username: "DesignDreamer",
    content:
      "Turning client's vague ideas into pixel-perfect reality: A designer's superpower. 💭🌟 #DesignMagic",
    likes: 271,
    retweets: 88,
    replies: [
      {
        id: "SDTwt120__Rply116",
        username: "IdeaInterpreter",
        content: "@DesignDreamer The mind-reader of the creative world! 🔮",
        likes: 45,
        retweets: 14,
      },
    ],
  },
  {
    id: "SDTwt121",
    username: "PixelPioneer",
    content:
      "Remember: Ctrl + Z can't undo the decisions you made during the meeting. 😅📅 #UIUX",
    likes: 238,
    retweets: 79,
    replies: [],
  },
  {
    id: "SDTwt122",
    username: "CodeCrafter",
    content:
      "Mastering coding languages: Like becoming a polyglot for computers. 💻🌐 #CodingPolyglot",
    likes: 312,
    retweets: 104,
    replies: [],
  },
  {
    id: "SDTwt123",
    username: "DesignDoodle",
    content:
      "Whitespace: The art of giving your content some breathing room. 🌬️📝 #DesignPrinciples",
    likes: 193,
    retweets: 64,
    replies: [],
  },
  {
    id: "SDTwt124",
    username: "BugBounty",
    content:
      "Bug bounty hunting: The treasure hunt for vulnerabilities in the digital world. 🔍💰 #BugHunt",
    likes: 259,
    retweets: 85,
    replies: [],
  },
  {
    id: "SDTwt125",
    username: "CodeChameleon",
    content:
      "Syntax errors: The camouflage masters of code gremlins. 🦎🤖 #CodePuzzles",
    likes: 198,
    retweets: 62,
    replies: [
      {
        id: "SDTwt125__Rply121",
        username: "SyntaxSleuth",
        content:
          "@CodeChameleon It's like playing 'Where's Waldo?' with code lines!",
        likes: 34,
        retweets: 11,
      },
    ],
  },
  {
    id: "SDTwt126",
    username: "DesignDynamo",
    content:
      "Design iterations: When you discover 50 ways that lead to pixel perfection. 🔁🎨 #IterativeDesign",
    likes: 232,
    retweets: 73,
    replies: [],
  },
  {
    id: "SDTwt127",
    username: "CodeComposer",
    content:
      "Debugging: The art of unveiling hidden truths in your code canvas. 🖌️🐛 #CodeArt",
    likes: 275,
    retweets: 92,
    replies: [
      {
        id: "SDTwt127__Rply123",
        username: "CodePainter",
        content:
          "@CodeComposer Brushing away the bugs to reveal the masterpiece beneath! 🎨",
        likes: 46,
        retweets: 15,
      },
    ],
  },
  {
    id: "SDTwt128",
    username: "DesignDabbler",
    content:
      "Graphic designers: We turn blobs of color into visual stories. 🎨✨ #CreativeCraft",
    likes: 198,
    retweets: 63,
    replies: [
      {
        id: "SDTwt128__Rply124",
        username: "PixelPainter",
        content: "@DesignDabbler Every pixel has a tale to tell! 🖼️",
        likes: 34,
        retweets: 12,
      },
    ],
  },
  {
    id: "SDTwt129",
    username: "BugBasher",
    content:
      "Debugging: The virtual reality escape room for code breakouts. 🕹️🎮 #CodeEscape",
    likes: 239,
    retweets: 77,
    replies: [],
  },
  {
    id: "SDTwt130",
    username: "ColorChameleon",
    content:
      "Choosing color palettes: Like picking flavors for an ice cream cone. 🍦🎨 #PalettePlay",
    likes: 218,
    retweets: 71,
    replies: [
      {
        id: "SDTwt130__Rply130",
        username: "DesignScoop",
        content:
          "@ColorChameleon And sometimes, I want all the flavors in one scoop!",
        likes: 38,
        retweets: 13,
      },
    ],
  },
  {
    id: "SDTwt131",
    username: "CodeConductor",
    content:
      "Code comments: Like little notes to your future self. 📝🕰️ #CodeMemoirs",
    likes: 187,
    retweets: 57,
    replies: [],
  },
  {
    id: "SDTwt132",
    username: "DesignDynamo",
    content:
      "Layout grids: Because sometimes, content needs a little structure in life. 📐🏞️ #DesignBalance",
    likes: 210,
    retweets: 64,
    replies: [],
  },
  {
    id: "SDTwt133",
    username: "ErrorEraser",
    content:
      "When you're the hero who fixes a critical bug minutes before launch. 🦸‍♂️🚀 #BugAvenger",
    likes: 283,
    retweets: 90,
    replies: [],
  },
  {
    id: "SDTwt134",
    username: "CodeComposer",
    content:
      "The greatest code snippets often come to you in the shower. 🚿💻 #CodeInspiration",
    likes: 234,
    retweets: 76,
    replies: [],
  },
  {
    id: "SDTwt135",
    username: "LayoutLuminary",
    content:
      "Design philosophy: Just because it fits, doesn't mean it belongs. 🧩🎨 #DesignThoughts",
    likes: 206,
    retweets: 66,
    replies: [
      {
        id: "SDTwt135__Rply131",
        username: "DesignDetective",
        content: "@LayoutLuminary Every puzzle piece has its place! 🧩✨",
        likes: 35,
        retweets: 10,
      },
    ],
  },
  {
    id: "SDTwt136",
    username: "PixelPioneer",
    content:
      "Drawing the fine line between 'minimalistic' and 'where's the content?' 🧐🖼️ #DesignDebate",
    likes: 219,
    retweets: 68,
    replies: [
      {
        id: "SDTwt136__Rply132",
        username: "DesignDilemma",
        content: "@PixelPioneer The balancing act of modern design! ⚖️",
        likes: 36,
        retweets: 12,
      },
    ],
  },
  {
    id: "SDTwt137",
    username: "CodeConductor",
    content:
      "Version control: Like a time machine for code changes. 🕰️💾 #CodeChronicles",
    likes: 248,
    retweets: 80,
    replies: [],
  },
  {
    id: "SDTwt138",
    username: "BugBounty",
    content:
      "Spotting a bug like it's a rare mythical creature hiding in your code forest. 🌲🐛 #CodeHunting",
    likes: 291,
    retweets: 93,
    replies: [
      {
        id: "SDTwt138__Rply133",
        username: "CodeTracker",
        content:
          "@BugBounty The thrill of the chase, and the joy of the capture! 🦋",
        likes: 48,
        retweets: 16,
      },
    ],
  },
  {
    id: "SDTwt139",
    username: "DesignDynamo",
    content:
      "Design principles: Where aesthetics meet user experience in a grand ballroom. 🎩🎨 #UXDesign",
    likes: 227,
    retweets: 72,
    replies: [],
  },
  {
    id: "SDTwt140",
    username: "CodeCurator",
    content:
      "Commenting on code: Like leaving breadcrumbs for fellow developers to follow. 🍞👣 #CollaborativeCoding",
    likes: 263,
    retweets: 88,
    replies: [
      {
        id: "SDTwt140__Rply134",
        username: "CodeTrailblazer",
        content:
          "@CodeCurator A trail of wisdom through the code wilderness! 🌳",
        likes: 42,
        retweets: 14,
      },
    ],
  },
];

export default mockData;
