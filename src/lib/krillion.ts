export interface PromptHint {
  id: number;
  prompt: string;
  category: string;
  commonAnswers: string[]; // Floaters (low score)
  tooCleverTraps: string[]; // Traps
  deepAnswers: {
    answer: string;
    depth: number; // e.g. 6800m - 7000m
    description: string;
  }[];
}

export interface DailyKrillionDive {
  number: number;
  dateStr: string; // "2026-10-02"
  displayDate: string; // "Oct 2, 2026"
  dayOfWeek: string;
  theme: string;
  slug: string;
  prompts: PromptHint[];
  maxPotentialDepth: number; // 7000m
}

export const SEED_DIVES: { number: number; date: string; theme: string; prompts: PromptHint[] }[] = [
  {
    number: 142,
    date: '2026-10-02',
    theme: 'Abyssal Exploration',
    prompts: [
      {
        id: 1,
        prompt: 'A country located entirely in the Southern Hemisphere',
        category: 'Geography',
        commonAnswers: ['Australia', 'New Zealand', 'South Africa', 'Argentina', 'Brazil'],
        tooCleverTraps: ['Madagascar', 'Chile'],
        deepAnswers: [
          { answer: 'Lesotho', depth: 7000, description: 'Enclaved within South Africa, rarely chosen.' },
          { answer: 'Eswatini', depth: 6950, description: 'Formerly Swaziland, highly obscure choice.' },
          { answer: 'Vanuatu', depth: 6850, description: 'South Pacific island nation.' },
          { answer: 'Tuvalu', depth: 6800, description: 'Polynesian microstate.' }
        ]
      },
      {
        id: 2,
        prompt: 'A chemical element with a single-letter symbol',
        category: 'Science',
        commonAnswers: ['Oxygen (O)', 'Carbon (C)', 'Hydrogen (H)', 'Nitrogen (N)'],
        tooCleverTraps: ['Gold (Au - incorrect)', 'Potassium (K)'],
        deepAnswers: [
          { answer: 'Vanadium (V)', depth: 7000, description: 'Transition metal with atomic number 23.' },
          { answer: 'Tungsten (W)', depth: 6900, description: 'Symbol W comes from Wolfram.' },
          { answer: 'Yttrium (Y)', depth: 6850, description: 'Rare earth element discovered in Sweden.' },
          { answer: 'Uranium (U)', depth: 6700, description: 'Heavy radioactive metal.' }
        ]
      },
      {
        id: 3,
        prompt: 'A real deep-sea marine creature',
        category: 'Marine Biology',
        commonAnswers: ['Anglerfish', 'Giant Squid', 'Vampire Squid', 'Dumbo Octopus'],
        tooCleverTraps: ['Blobfish', 'Goblin Shark'],
        deepAnswers: [
          { answer: 'Gulper Eel (Pelican Eel)', depth: 7000, description: 'Bathypelagic fish with massive mouth pouch.' },
          { answer: 'Barreleye Fish', depth: 6950, description: 'Transparent fluid-filled head dome.' },
          { answer: 'Hoff Crab', depth: 6900, description: 'Hydrothermal vent crab covered in bacteria setae.' },
          { answer: 'Xenophyophore', depth: 6800, description: 'Giant single-celled benthic foraminifera.' }
        ]
      },
      {
        id: 4,
        prompt: 'A movie directed by Christopher Nolan',
        category: 'Cinema',
        commonAnswers: ['Inception', 'Oppenheimer', 'Interstellar', 'The Dark Knight'],
        tooCleverTraps: ['Memento', 'Tenet'],
        deepAnswers: [
          { answer: 'Following', depth: 7000, description: 'Nolan’s 1998 neo-noir directorial debut film.' },
          { answer: 'Insomnia', depth: 6850, description: '2002 psychological thriller starring Al Pacino.' },
          { answer: 'Doodlebug', depth: 6900, description: '1997 psychological short film.' }
        ]
      },
      {
        id: 5,
        prompt: 'A landlocked country in Africa',
        category: 'Geography',
        commonAnswers: ['Switzerland (not in Africa)', 'Chad', 'Zimbabwe', 'Ethiopia'],
        tooCleverTraps: ['Botswana', 'Uganda'],
        deepAnswers: [
          { answer: 'Burundi', depth: 7000, description: 'Great Rift Valley landlocked country in East Africa.' },
          { answer: 'Central African Republic', depth: 6900, description: 'Centrally located landlocked territory.' },
          { answer: 'Burkina Faso', depth: 6850, description: 'West African landlocked nation.' },
          { answer: 'Malawi', depth: 6800, description: 'Southeastern Africa landlocked along Lake Malawi.' }
        ]
      },
      {
        id: 6,
        prompt: 'An official Olympic sport contested at Paris 2024',
        category: 'Sports',
        commonAnswers: ['Swimming', 'Athletics (Track & Field)', 'Gymnastics', 'Basketball'],
        tooCleverTraps: ['Breakdancing (Breaking)', 'Skateboarding'],
        deepAnswers: [
          { answer: 'Modern Pentathlon', depth: 7000, description: 'Fencing, swimming, equestrian/obstacle, laser-run.' },
          { answer: 'Canoe Slalom', depth: 6900, description: 'Navigating whitewater gates.' },
          { answer: 'Dressage', depth: 6850, description: 'Equestrian artistic discipline.' },
          { answer: 'Water Polo', depth: 6750, description: 'Team water sport.' }
        ]
      },
      {
        id: 7,
        prompt: 'An English word containing the letter Q without U',
        category: 'Vocabulary',
        commonAnswers: ['Qatar', 'Qat', 'Qi'],
        tooCleverTraps: ['FAQ (Acronym)', 'Iraq'],
        deepAnswers: [
          { answer: 'Qindarka', depth: 7000, description: 'Fractional monetary unit of Albania.' },
          { answer: 'Qabalah', depth: 6950, description: 'Alternative spelling of esoteric tradition.' },
          { answer: 'Cinq', depth: 6900, description: 'The number five in dice/cards.' },
          { answer: 'Suq (Souk)', depth: 6850, description: 'An Arab marketplace or bazaar.' }
        ]
      }
    ]
  },
  {
    number: 141,
    date: '2026-10-01',
    theme: 'Oceanic Trenches',
    prompts: [
      {
        id: 1,
        prompt: 'A capital city starting with the letter B',
        category: 'Geography',
        commonAnswers: ['Berlin', 'Beijing', 'Bangkok', 'Brussels'],
        tooCleverTraps: ['Brasilia', 'Budapest', 'Bratislava'],
        deepAnswers: [
          { answer: 'Belmopan', depth: 7000, description: 'Capital city of Belize, one of the least populated capitals.' },
          { answer: 'Bandar Seri Begawan', depth: 6950, description: 'Capital of Brunei.' },
          { answer: 'Bujumbura', depth: 6900, description: 'Former capital and economic hub of Burundi.' },
          { answer: 'Banjul', depth: 6850, description: 'Capital of The Gambia.' }
        ]
      },
      {
        id: 2,
        prompt: 'A mammalian species that lays eggs (Monotreme)',
        category: 'Zoology',
        commonAnswers: ['Platypus'],
        tooCleverTraps: ['Echidna'],
        deepAnswers: [
          { answer: 'Sir David’s Long-beaked Echidna', depth: 7000, description: 'Critically endangered Zaglossus attenboroughi in New Guinea.' },
          { answer: 'Western Long-beaked Echidna', depth: 6950, description: 'Zaglossus bruijnii.' },
          { answer: 'Eastern Long-beaked Echidna', depth: 6900, description: 'Zaglossus bartoni.' }
        ]
      },
      {
        id: 3,
        prompt: 'A Shakespearean tragedy play',
        category: 'Literature',
        commonAnswers: ['Romeo and Juliet', 'Hamlet', 'Macbeth', 'Othello'],
        tooCleverTraps: ['King Lear', 'Julius Caesar'],
        deepAnswers: [
          { answer: 'Timon of Athens', depth: 7000, description: 'Bitter tragedy about wealth and misanthropy.' },
          { answer: 'Titus Andronicus', depth: 6900, description: 'Shakespeare’s earliest and bloodiest revenge tragedy.' },
          { answer: 'Coriolanus', depth: 6850, description: 'Tragedy of Roman general Caius Marcius Coriolanus.' },
          { answer: 'Troilus and Cressida', depth: 6800, description: 'Tragedy set during the Trojan War.' }
        ]
      },
      {
        id: 4,
        prompt: 'A planet or moon in our Solar System with confirmed liquid surface lakes/seas',
        category: 'Astronomy',
        commonAnswers: ['Earth'],
        tooCleverTraps: ['Mars', 'Europa (subsurface)', 'Enceladus (subsurface)'],
        deepAnswers: [
          { answer: 'Titan', depth: 7000, description: 'Saturn’s moon with surface methane/ethane hydrocarbon lakes (Kraken Mare).' }
        ]
      },
      {
        id: 5,
        prompt: 'A dog breed originating in Japan',
        category: 'Animals',
        commonAnswers: ['Shiba Inu', 'Akita (Akita Inu)'],
        tooCleverTraps: ['Japanese Spitz'],
        deepAnswers: [
          { answer: 'Kai Ken (Tiger Dog)', depth: 7000, description: 'Rare brindle hunting breed from Yamanashi.' },
          { answer: 'Kishu Ken', depth: 6950, description: 'Ancient hunting dog breed from Wakayama.' },
          { answer: 'Hokkaido Dog (Ainu-ken)', depth: 6900, description: 'Bear-hunting dog of the Ainu people.' },
          { answer: 'Shikoku Dog (Kochi-ken)', depth: 6850, description: 'Medium-sized hunting spitz from Shikoku island.' }
        ]
      },
      {
        id: 6,
        prompt: 'A European currency used before the Euro',
        category: 'History',
        commonAnswers: ['Deutsche Mark', 'French Franc', 'Italian Lira', 'Spanish Peseta'],
        tooCleverTraps: ['Greek Drachma', 'Dutch Guilder'],
        deepAnswers: [
          { answer: 'Maltese Lira', depth: 7000, description: 'Currency of Malta prior to 2008.' },
          { answer: 'Slovenian Tolar', depth: 6950, description: 'Currency of Slovenia (1991–2006).' },
          { answer: 'Cypriot Pound', depth: 6900, description: 'Official currency of Cyprus before 2008.' },
          { answer: 'San Marino Lira', depth: 6850, description: 'Pre-euro currency of San Marino.' }
        ]
      },
      {
        id: 7,
        prompt: 'A primary color of light (RGB model)',
        category: 'Physics',
        commonAnswers: ['Red', 'Green', 'Blue'],
        tooCleverTraps: ['Yellow (pigment primary)'],
        deepAnswers: [
          { answer: 'Blue', depth: 6500, description: 'Primary light component.' },
          { answer: 'Green', depth: 6500, description: 'Primary light component.' },
          { answer: 'Red', depth: 6500, description: 'Primary light component.' }
        ]
      }
    ]
  }
];

function formatDateDisplay(dateStr: string): { displayDate: string; dayOfWeek: string } {
  const d = new Date(dateStr + 'T00:00:00Z');
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return {
    displayDate: `${months[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`,
    dayOfWeek: days[d.getUTCDay()],
  };
}

export function buildDive(item: { number: number; date: string; theme: string; prompts: PromptHint[] }): DailyKrillionDive {
  const { displayDate, dayOfWeek } = formatDateDisplay(item.date);
  return {
    number: item.number,
    dateStr: item.date,
    displayDate,
    dayOfWeek,
    theme: item.theme,
    slug: `${item.number}-${item.date}`,
    prompts: item.prompts,
    maxPotentialDepth: 7000,
  };
}

export function getAllDives(): DailyKrillionDive[] {
  return SEED_DIVES.map(buildDive);
}

export function getTodayDive(): DailyKrillionDive {
  return buildDive(SEED_DIVES[0]);
}

export function getYesterdayDive(): DailyKrillionDive {
  return buildDive(SEED_DIVES[1]);
}
