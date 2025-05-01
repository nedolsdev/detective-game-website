import { GameData } from "./types";

export const GAME_DATA: GameData = {
  roles: [
    {
      name: "detective",
      displayName: "Lead Detective",
      id: 1,
      qr: "role-1",
    },
    {
      name: "scientist",
      displayName: "Forsensic Scientist",
      id: 2,
      qr: "role-2",
    },
    {
      name: "psychologist",
      displayName: "Criminal Psychologist",
      id: 3,
      qr: "role-3",
    },
  ],
  clues: [
    {
      clueType: "clue",
      name: "Footprints",
      id: 1,
      info: [
        {
          text: "The footprints lead out the door",
          foundBy: [1, 3, 2],
        },
        {
          text: "The footprints are size 10",
          foundBy: [1],
        },
        {
          text: "The footprints are of a person running, they're clearly in a rush",
          foundBy: [3],
        },
        {
          text: "The spread of the footprints suggests erratic behaviour",
          foundBy: [3],
        },
      ],
      qr: "clue-1",
    },
    {
      clueType: "item",
      name: "Pill Bottle",
      id: 2,
      info: [
        {
          text: "A pill bottle that is half empty left on the bathroom sink containing Oxycodone",
          foundBy: [1, 3, 2],
        },
        {
          text: "These pharmecutical drugs are highly regulated, these are sold on the streets",
          foundBy: [1, 2],
        },
        {
          text: "Oxy is often cut with other street drugs to make them more effective",
          foundBy: [1],
        },
        {
          text: "This bottle comes with a script, it was obtained legally",
          foundBy: [1],
        },
      ],
      qr: "clue-2",
    },
    {
      clueType: "item",
      name: "Coroner's report",
      id: 3,
      info: [
        {
          text: "This report states the cause of death is poisoning, not blunt force trauma",
          foundBy: [1, 3, 2],
        },
        {
          text: "The poison was slow acting, contained traces of Oxy and various other substances",
          foundBy: [2],
        },
        {
          text: "Poison is traditionally the preffered killing method of women",
          foundBy: [3, 2],
        },
        {
          text: "The primary poison is odourless and colourless, easily slipped into a drink",
          foundBy: [2],
        },
      ],
      qr: "clue-3",
    },
    {
      clueType: "item",
      name: "Ruined Diary",
      id: 4,
      info: [
        {
          text: "This diary belongs to the victim, it has been ruined by water damage",
          foundBy: [1, 3, 2],
        },
        {
          text: "Foresnic techniques reveal a single sentence",
          foundBy: [2],
        },
        {
          text: '"I love her, but my parents will never accept us and I can\'t lose their support"',
          foundBy: [2],
        },
        {
          text: "It appears to be various love letters to another girl",
          foundBy: [3, 2],
        },
      ],
      qr: "clue-4",
    },
    {
      clueType: "item",
      name: "Victim's Purse",
      id: 5,
      info: [
        {
          text: "The purse found on the body of the victim",
          foundBy: [1, 3, 2],
        },
        {
          text: "It contains an ID, used movie tickets, lipstick and gum",
          foundBy: [1, 3, 2],
        },
        {
          text: "There is a used script for Oxycodone",
          foundBy: [1, 3, 2],
        },
      ],
      qr: "clue-5",
    },
    {
      clueType: "item",
      name: "Broken cocktail Glass",
      id: 6,
      info: [
        {
          text: "There are a few broken glasses surrounding the victims body",
          foundBy: [1, 3, 2],
        },
      ],
      qr: "clue-6",
    },
    {
      clueType: "clue",
      name: "Security Footage - Rooftop",
      id: 7,
      info: [
        {
          text: "Security of the Victim partying hours before her body was found",
          foundBy: [1, 3, 2],
        },
        {
          text: "Footage shows the victim was on the rooftop between 9:30pm-12:00am",
          foundBy: [1, 3, 2],
        },
        {
          text: "Footage shows the victim seemingly arguing with her boyfriend",
          foundBy: [1, 3],
        },
        {
          text: "Footage shows best friend comforting her, but she throws her hands off and they argue",
          foundBy: [1, 3],
        },
      ],
      qr: "clue-7",
    },
    {
      clueType: "item",
      name: "Discarded unlabelled glass bottle",
      id: 8,
      info: [
        {
          text: "A glass bottle which contained a mysterious liquid",
          foundBy: [1, 3, 2],
        },
        {
          text: "The mysterious liquid is an odourless poisonous chemical",
          foundBy: [2],
        },
        {
          text: "This liquid can be cut with other medicines or slipped into drinks easily",
          foundBy: [2],
        },
        {
          text: "This liquid is a partial match for the victims stomach contents",
          foundBy: [2],
        },
      ],
      qr: "clue-8",
    },
    {
      clueType: "item",
      name: "Broken Heels",
      id: 9,
      info: [
        {
          text: "A pair of heels tossed aside in an alleyway",
          foundBy: [1, 3, 2],
        },
        {
          text: "The Heels match size 7 feet.",
          foundBy: [1],
        },
        {
          text: "They are an expensive type of heel bought in upmarket brand places",
          foundBy: [1],
        },
      ],
      qr: "clue-9",
    },
    {
      clueType: "item",
      name: "Broken pendant",
      id: 10,
      info: [
        {
          text: "There is a broken heart pendant found in the alleyway, it has a picture of the victim and her best friend",
          foundBy: [1, 3, 2],
        },
        {
          text: "The pictures suggests a close relationship between the two",
          foundBy: [3],
        },
        {
          text: "Pendants like these are used by individuals who are in love romantically",
          foundBy: [3],
        },
      ],
      qr: "clue-10",
    },
    {
      clueType: "item",
      name: "Meat Mallet",
      id: 11,
      info: [
        {
          text: "A meat tenderiser found in the alleyway next to the bar, it's covered in blood",
          foundBy: [1, 3, 2],
        },
        {
          text: "The blood isn't human, but rather rodent from a rat or mouse",
          foundBy: [2],
        },
      ],
      qr: "clue-11",
    },
    {
      clueType: "clue",
      name: "Hotel Room Keycard",
      id: 12,
      info: [
        {
          text: "A keycard belonging to the hotel",
          foundBy: [1, 3, 2],
        },
        {
          text: "The Victim's parents are staying at the hotel",
          foundBy: [1],
        },
        {
          text: "The victim was seen arguing with her parents in the hotel restaurant earlier in the evening",
          foundBy: [1],
        },
      ],
      qr: "clue-12",
    },
    {
      clueType: "item",
      name: "Crumpled Letters",
      id: 13,
      info: [
        {
          text: "A group of crumpled angry letters from the victims parents",
          foundBy: [1, 3, 2],
        },
        {
          text: "The letters are threatening and the language used suggests paranoia",
          foundBy: [3],
        },
        {
          text: "Within the letters the parents threaten to kill the victim",
          foundBy: [1, 3],
        },
        {
          text: "The parents also threaten to disenherit the victim from their wills",
          foundBy: [1, 3],
        },
      ],
      qr: "clue-13",
    },
    {
      clueType: "item",
      name: "Victim's phone",
      id: 14,
      info: [
        {
          text: "Victims phone was destroyed but call logs can be recovered",
          foundBy: [1, 3, 2],
        },
        {
          text: "Call logs suggests calls with victim's best friend, boyfriend & parents hours before her death",
          foundBy: [1],
        },
        {
          text: "There are 23 missed calls from the boyfriend throughout the night",
          foundBy: [1],
        },
        {
          text: "The nature of repeated calls suggests panic/concern from the caller",
          foundBy: [3],
        },
      ],
      qr: "clue-14",
    },
    {
      clueType: "clue",
      name: "Restaurant Footage",
      id: 15,
      info: [
        {
          text: "Video footage of Victim meeting with parents for dinner in the hotel restaurant",
          foundBy: [1, 3, 2],
        },
        {
          text: "Victim and parents are shown to be arguing at 7:38pm",
          foundBy: [1, 3, 2],
        },
        {
          text: "The facial expression of the parents show disgust",
          foundBy: [3],
        },
      ],
      qr: "clue-15",
    },
    {
      clueType: "clue",
      name: "Baseball Bat & Sports Equipment",
      id: 16,
      info: [
        {
          text: "There is discarded sports equipment including a well used bat.",
          foundBy: [1, 3, 2],
        },
        {
          text: "Victim, boyfriend and best friend's fingerprints are all over the bag",
          foundBy: [2],
        },
        {
          text: "There is a love letter from boyfriend in one of the pockets of the bag",
          foundBy: [1, 3, 2],
        },
      ],
      qr: "clue-16",
    },
    {
      clueType: "clue",
      name: "Shredded note",
      id: 17,
      info: [
        {
          text: "In the Victim's living room there is a pile of shredded paper",
          foundBy: [1, 3, 2],
        },
        {
          text: "Reconstructing the note reveals an incriminating relationship between best friend and victim",
          foundBy: [2],
        },
        {
          text: "The note is pleading for their relationship to go public",
          foundBy: [2],
        },
        {
          text: "There is a loose threat of ending things entirely if they don't go public",
          foundBy: [2],
        },
      ],
      qr: "clue-17",
    },
    {
      clueType: "clue",
      name: "Chemistry Homework",
      id: 18,
      info: [
        {
          text: "There is undone chemistry homework assignments on the victim's desk",
          foundBy: [1, 3, 2],
        },
        {
          text: "The chemistry homework lists various substances that are toxic to ingest",
          foundBy: [2],
        },
        {
          text: "Some of them are common items",
          foundBy: [2],
        },
      ],
      qr: "clue-18",
    },
    {
      clueType: "clue",
      name: "Group Picture",
      id: 19,
      info: [
        {
          text: "A picture on the victim's nightstand shows her group of friends together at a party",
          foundBy: [1, 3, 2],
        },
        {
          text: "The boyfriend's arm is around her possessively",
          foundBy: [3],
        },
        {
          text: "The best friend appears to be glaring at the boyfriend while he remains oblivious",
          foundBy: [3],
        },
        {
          text: "The best friend and victim appear to be holding hands but hiding it",
          foundBy: [3],
        },
      ],
      qr: "clue-19",
    },
    {
      clueType: "clue",
      name: "Report Cards",
      id: 20,
      info: [
        {
          text: "Victims report cards are pinned to a cork board",
          foundBy: [1, 3, 2],
        },
        {
          text: "Victim was a model student with high achieving grades",
          foundBy: [1, 3],
        },
        {
          text: "Victim was studying to be a biochemical engineer",
          foundBy: [1, 3],
        },
        {
          text: "Victim likely spent most of her time studying, signs of perfectionism",
          foundBy: [3],
        },
      ],
      qr: "clue-20",
    },
    {
      clueType: "item",
      name: "Hidden Funds",
      id: 21,
      info: [
        {
          text: "A locked box contains a collection of cash",
          foundBy: [1, 3, 2],
        },
        {
          text: "The stack of cash suggests potential to flee/leave",
          foundBy: [1, 3],
        },
        {
          text: "These kinds of stashes suggests well thought out plans to run away",
          foundBy: [3],
        },
        {
          text: "When running away, it's usually because of a secret",
          foundBy: [3],
        },
      ],
      qr: "clue-21",
    },
    {
      clueType: "clue",
      name: "Boyfriend's Dorm room",
      id: 22,
      info: [
        {
          text: "The room is messy but there are some plane tickets magnetised to the fridge",
          foundBy: [1, 3, 2],
        },
        {
          text: "There are baseball trophies and memorabilia on shelves around the room",
          foundBy: [1, 3, 2],
        },
        {
          text: "Pictures of Boyfriend and Victim are around his room",
          foundBy: [1, 3, 2],
        },
      ],
      qr: "clue-22",
    },
    {
      clueType: "clue",
      name: "Bestfriend's Dorm room",
      id: 23,
      info: [
        {
          text: "The oom is neatly kept with books all lined up and posters around the room",
          foundBy: [1, 3, 2],
        },
        {
          text: "Notable pictures of bestfriend and victim",
          foundBy: [1, 3, 2],
        },
        {
          text: "There is another hidden stash of cash in a box in the closet",
          foundBy: [1, 3],
        },
      ],
      qr: "clue-23",
    },
    {
      clueType: "clue",
      name: "Secret Love Letters",
      id: 24,
      info: [
        {
          text: "A collection of love letters from Victim to bestfriend",
          foundBy: [1, 3, 2],
        },
        {
          text: "One letter expresses plans to stash money",
          foundBy: [1],
        },
        {
          text: "There are plane tickets to Barcelona",
          foundBy: [1],
        },
        {
          text: '"I\'d rather die than be without you" is prominent in many letters',
          foundBy: [1, 3],
        },
      ],
      qr: "clue-24",
    },
    {
      clueType: "suspect",
      name: "Kiana Lawrence",
      id: 25,
      info: [
        {
          text: "The cleaner who found the body, she works for the company full-time",
          foundBy: [1, 3, 2],
        },
        {
          text: "She also studies part-time at the university at night",
          foundBy: [1],
        },
        {
          text: "Her alibi was that she was in class during the time of death and time victim was partying",
          foundBy: [1],
        },
      ],
      qr: "suspect-1",
    },
    {
      clueType: "suspect",
      name: "Kaine Jordans",
      id: 26,
      info: [
        {
          text: "Boyfriend of the victim, he's a sport star and baseball pitcher",
          foundBy: [1, 3, 2],
        },
        {
          text: "In love with victim, but suspects a more-than-friend relationship with victim's best friend",
          foundBy: [3],
        },
        {
          text: "Has a loud boisterous personality, can be insecure and quick to anger",
          foundBy: [3],
        },
        {
          text: "Was heard arguing vehemently with victim hours before death",
          foundBy: [1, 3],
        },
      ],
      qr: "suspect-2",
    },
    {
      clueType: "suspect",
      name: "Maria Hargraves",
      id: 27,
      info: [
        {
          text: "Bestfriend of victim, has a boyfriend, studying bio-med at university",
          foundBy: [1, 3, 2],
        },
        {
          text: "Closeted lesbian, boyfriend is closeted gay, they are dating for appearances",
          foundBy: [3],
        },
        {
          text: "Was heard arguing vehemently with victim hours before death",
          foundBy: [1, 3],
        },
        {
          text: "Seems nervous and quick to reply and deny any wrongdoing",
          foundBy: [1, 3],
        },
      ],
      qr: "suspect-3",
    },
    {
      clueType: "suspect",
      name: "Trenton Bryce",
      id: 28,
      info: [
        {
          text: "Maria's Boyfriend, closeted gay, plays on the baseball team with Kaine.",
          foundBy: [1, 3, 2],
        },
        {
          text: "Likes to party, is almost always hungover",
          foundBy: [3],
        },
        {
          text: "Was seen partying with the group on the rooftop",
          foundBy: [1, 3],
        },
        {
          text: "Snuck off with one of the other guys around midnight",
          foundBy: [1],
        },
      ],
      qr: "suspect-4",
    },
    {
      clueType: "suspect",
      name: "Tayla Hill",
      id: 29,
      info: [
        {
          text: "Bar manager on the rooftop bar, saw the victim and group of people she was with",
          foundBy: [1, 3, 2],
        },
        {
          text: "She noticed an argument with victim, boyfriend & best friend",
          foundBy: [1],
        },
        {
          text: "Observed the boyfriend leave the party angry, then victim threw off her best friends comfort",
          foundBy: [1],
        },
        {
          text: "Believes something is going on between victim and best friend",
          foundBy: [1],
        },
      ],
      qr: "suspect-5",
    },
    {
      clueType: "suspect",
      name: "James Cooper",
      id: 30,
      info: [
        {
          text: "A professor at the University, a tenured professor for the Science Department",
          foundBy: [1, 3, 2],
        },
        {
          text: "Credentials reveals he specialises on pharmecutical medicine",
          foundBy: [1],
        },
        {
          text: "Isn't married and spends most of his time working at the university",
          foundBy: [1, 3],
        },
        {
          text: "Workaholic tendencies can involve intense focus on a singular subject or individual",
          foundBy: [1, 3],
        },
      ],
      qr: "suspect-6",
    },
    {
      clueType: "suspect",
      name: "Abigail King",
      id: 31,
      info: [
        {
          text: "Victim's Mother, very standoffish and acts like a high class woman",
          foundBy: [1, 3, 2],
        },
        {
          text: "Has narcissistic tendncies and looks down on lower class & gender diverse people",
          foundBy: [3],
        },
        {
          text: "Was seen shouting at victim in the restaurant at approximately 8:30pm.",
          foundBy: [1, 3, 2],
        },
        {
          text: "Has a tendency to emotionally blackmail and manipulate others",
          foundBy: [3],
        },
      ],
      qr: "suspect-7",
    },
    {
      clueType: "suspect",
      name: "George Miller",
      id: 32,
      info: [
        {
          text: "Victim's Father, very cynic and condescending",
          foundBy: [1, 3, 2],
        },
        {
          text: "A business man who works in the stock market, was a trust fund child",
          foundBy: [1, 3],
        },
        {
          text: "Stern and disapproving, always wanting to appear as a 'perfect' family in public",
          foundBy: [1, 3],
        },
        {
          text: "Seen arguing with victim in the restaurant at approximately 8:30pm",
          foundBy: [1, 3, 2],
        },
      ],
      qr: "suspect-8",
    },
    {
      clueType: "suspect",
      name: "Penelope Lansdown",
      id: 33,
      info: [
        {
          text: "Witness who was at the restaurant for an anniversary dinner",
          foundBy: [1, 3, 2],
        },
        {
          text: "Heard Victim's mother and father threatening to disown Victim if she 'went through with her plan'",
          foundBy: [1, 3],
        },
        {
          text: "Spoke with Victim in the woman's rest room when she left the dinner",
          foundBy: [1],
        },
      ],
      qr: "suspect-9",
    },
    {
      clueType: "suspect",
      name: "John Lansdown",
      id: 34,
      info: [
        {
          text: "Witness who was at the restaurant for an anniversary dinner",
          foundBy: [1, 3, 2],
        },
        {
          text: "Heard Victim's mother and father threatening to disown Victim if she 'went through with her plan'",
          foundBy: [1, 3],
        },
        {
          text: "Heard Victim's Mother and Father complaining about 'That girl was always trouble'",
          foundBy: [1, 3],
        },
        {
          text: 'Heard father mention "At least we helped Kaine get those tickets, perhaps time away will be good"',
          foundBy: [1, 3],
        },
      ],
      qr: "suspect-10",
    },
    {
      clueType: "suspect",
      name: "Veronica Martinez",
      id: 35,
      info: [
        {
          text: 'Was out at the rooftop bar "drinking her feelings"',
          foundBy: [1, 3, 2],
        },
        {
          text: "Heard the fight between Kaine, Maria & Victim",
          foundBy: [1, 3, 2],
        },
        {
          text: "Got blackout drunk according to police test results",
          foundBy: [2],
        },
      ],
      qr: "suspect-11",
    },
    {
      clueType: "suspect",
      name: "Patrick Hall",
      id: 36,
      info: [
        {
          text: "Restaurant Manager at the hotel",
          foundBy: [1, 3, 2],
        },
        {
          text: "Was alerted to the fight between Victim and Parents",
          foundBy: [1, 3, 2],
        },
        {
          text: "Informed the table that they were causing a commotion and had to leave",
          foundBy: [1, 3, 2],
        },
        {
          text: "Co-operating with the police and providing what information they have",
          foundBy: [1, 3, 2],
        },
      ],
      qr: "suspect-12",
    },
  ],
  causes: [
    {
      id: 1,
      cause: "Pill Bottle",
    },
    {
      id: 2,
      cause: "Unlabelled Bottle",
    },
    {
      id: 3,
      cause: "Meat Mallet",
    },
    {
      id: 4,
      cause: "Baseball Bat",
    },
    {
      id: 5,
      cause: "Broken Glass",
    },
  ],
  crime: {
    killer: 3,
    motive: 1,
    method: 2,
  },
  motives: [
    {
      id: 1,
      motive: "Crime of Passion",
    },
    {
      id: 2,
      motive: "Crime of Greed",
    },
    {
      id: 3,
      motive: "Crime of Coincidence",
    },
    {
      id: 4,
      motive: "Crime of Necessity",
    },
  ],
};
