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
  dateStr: string; // "2026-10-06"
  displayDate: string; // "Oct 6, 2026"
  dayOfWeek: string;
  theme: string;
  slug: string;
  prompts: PromptHint[];
  maxPotentialDepth: number; // 7000m
}

export const SEED_DIVES: { number: number; date: string; theme: string; prompts: PromptHint[] }[] = [
  {
    number: 146,
    date: '2026-10-06',
    theme: 'Oceanic & Astronomical Extremes',
    prompts: [
      {
        id: 1,
        prompt: 'A sovereign island nation in Oceania',
        category: 'Geography',
        commonAnswers: ['Australia', 'New Zealand', 'Fiji', 'Papua New Guinea'],
        tooCleverTraps: ['Samoa', 'Tonga', 'Vanuatu'],
        deepAnswers: [
          { answer: 'Nauru', depth: 7000, description: 'Tiny phosphate island nation, under 11,000 population.' },
          { answer: 'Tuvalu', depth: 6950, description: 'Low-lying atoll nation in the South Pacific.' },
          { answer: 'Palau', depth: 6900, description: 'Micronesian archipelago nation.' },
          { answer: 'Kiribati', depth: 6850, description: 'Spans all four hemispheres.' }
        ]
      },
      {
        id: 2,
        prompt: 'A transition metal on the periodic table',
        category: 'Science',
        commonAnswers: ['Iron (Fe)', 'Gold (Au)', 'Silver (Ag)', 'Copper (Cu)', 'Platinum (Pt)'],
        tooCleverTraps: ['Titanium (Ti)', 'Tungsten (W)', 'Mercury (Hg)'],
        deepAnswers: [
          { answer: 'Rhenium (Re)', depth: 7000, description: 'Dense, rare transition metal (atomic number 75).' },
          { answer: 'Hafnium (Hf)', depth: 6950, description: 'Lustrous silvery transition metal.' },
          { answer: 'Tantalum (Ta)', depth: 6900, description: 'Highly corrosion-resistant metal.' },
          { answer: 'Ruthenium (Ru)', depth: 6850, description: 'Platinum group noble metal.' }
        ]
      },
      {
        id: 3,
        prompt: 'A play by William Shakespeare featuring a royal monarch',
        category: 'Literature',
        commonAnswers: ['Hamlet', 'Macbeth', 'King Lear', 'Romeo and Juliet'],
        tooCleverTraps: ['Richard III', 'Henry V', 'Julius Caesar'],
        deepAnswers: [
          { answer: 'Cymbeline', depth: 7000, description: 'Ancient British Celtic monarch play.' },
          { answer: 'Pericles Prince of Tyre', depth: 6950, description: 'Jacobean romance play.' },
          { answer: 'King John', depth: 6900, description: 'Early English historical drama.' },
          { answer: 'Henry VIII', depth: 6850, description: 'Collaborative history play.' }
        ]
      },
      {
        id: 4,
        prompt: 'A short-reigning Roman Emperor (under 1 year of rule)',
        category: 'History',
        commonAnswers: ['Julius Caesar (Dictator)', 'Augustus', 'Nero', 'Caligula'],
        tooCleverTraps: ['Galba', 'Otho', 'Vitellius'],
        deepAnswers: [
          { answer: 'Didius Julianus', depth: 7000, description: 'Bought the empire at auction, ruled 66 days (193 AD).' },
          { answer: 'Pertinax', depth: 6950, description: 'Ruled 87 days following Commodus assassination.' },
          { answer: 'Florianus', depth: 6900, description: 'Ruled for only 88 days in 276 AD.' },
          { answer: 'Gordian I', depth: 6850, description: 'Ruled for just 21 days with Gordian II.' }
        ]
      },
      {
        id: 5,
        prompt: 'An Academy Award Best Picture Winner before 1960',
        category: 'Cinema',
        commonAnswers: ['Casablanca', 'Gone with the Wind', 'Ben-Hur', 'All About Eve'],
        tooCleverTraps: ['On the Waterfront', 'The Bridge on the River Kwai'],
        deepAnswers: [
          { answer: 'Cavalcade (1933)', depth: 7000, description: 'Early epic drama directed by Frank Lloyd.' },
          { answer: 'The Broadway Melody (1929)', depth: 6950, description: 'First sound film to win Best Picture.' },
          { answer: 'The Life of Emile Zola (1937)', depth: 6900, description: 'Biographical drama starring Paul Muni.' },
          { answer: 'Gentleman\'s Agreement (1947)', depth: 6850, description: 'Directed by Elia Kazan.' }
        ]
      },
      {
        id: 6,
        prompt: 'A landlocked sovereign state in Africa',
        category: 'Geography',
        commonAnswers: ['Egypt', 'South Africa', 'Kenya', 'Nigeria'],
        tooCleverTraps: ['Madagascar (Island)', 'Ethiopia', 'Uganda', 'Zimbabwe'],
        deepAnswers: [
          { answer: 'Burundi', depth: 7000, description: 'Small Great Lakes nation in East Africa.' },
          { answer: 'Central African Republic', depth: 6950, description: 'Completely landlocked equatorial nation.' },
          { answer: 'Burkina Faso', depth: 6900, description: 'Sahelian nation surrounded by six countries.' },
          { answer: 'Eswatini', depth: 6850, description: 'Small monarchy bordering South Africa and Mozambique.' }
        ]
      },
      {
        id: 7,
        prompt: 'A moon in our solar system named after a mythological figure',
        category: 'Astronomy',
        commonAnswers: ['The Moon (Luna)', 'Titan', 'Europa', 'Ganymede', 'Io'],
        tooCleverTraps: ['Callisto', 'Phobos', 'Deimos', 'Enceladus'],
        deepAnswers: [
          { answer: 'Tethys', depth: 7000, description: 'Saturnian icy moon named after the Titaness.' },
          { answer: 'Mimas', depth: 6950, description: 'Saturn moon with the giant Herschel impact crater.' },
          { answer: 'Triton', depth: 6900, description: 'Retrograde moon of Neptune with nitrogen geysers.' },
          { answer: 'Dione', depth: 6850, description: 'Heavily cratered moon of Saturn.' }
        ]
      }
    ]
  },
  {
    number: 145,
    date: '2026-10-05',
    theme: 'Deep Trench Stratification',
    prompts: [
      {
        id: 1,
        prompt: 'A doubly landlocked country in the world',
        category: 'Geography',
        commonAnswers: ['Switzerland', 'Austria', 'Mongolia', 'Bolivia'],
        tooCleverTraps: ['Paraguay', 'Laos'],
        deepAnswers: [
          { answer: 'Liechtenstein', depth: 7000, description: 'Surrounded entirely by Switzerland and Austria.' },
          { answer: 'Uzbekistan', depth: 6950, description: 'Surrounded only by other landlocked Central Asian states.' }
        ]
      },
      {
        id: 2,
        prompt: 'A noble gas on the periodic table',
        category: 'Science',
        commonAnswers: ['Helium (He)', 'Neon (Ne)', 'Argon (Ar)'],
        tooCleverTraps: ['Krypton (Kr)', 'Xenon (Xe)'],
        deepAnswers: [
          { answer: 'Radon (Rn)', depth: 7000, description: 'Radioactive noble gas.' },
          { answer: 'Oganesson (Og)', depth: 6950, description: 'Synthetic element 118.' }
        ]
      },
      {
        id: 3,
        prompt: 'A treaty signed before the 20th century',
        category: 'History',
        commonAnswers: ['Treaty of Versailles', 'Treaty of Paris'],
        tooCleverTraps: ['Peace of Westphalia', 'Treaty of Utrecht'],
        deepAnswers: [
          { answer: 'Treaty of Kadesh (c. 1259 BC)', depth: 7000, description: 'Earliest surviving peace accord between Egyptians and Hittites.' },
          { answer: 'Treaty of Wedmore (878 AD)', depth: 6950, description: 'Accord between King Alfred and Guthrum the Dane.' }
        ]
      },
      {
        id: 4,
        prompt: 'An Olympic sport contested on water',
        category: 'Sports',
        commonAnswers: ['Swimming', 'Diving', 'Water Polo', 'Rowing'],
        tooCleverTraps: ['Sailing', 'Canoeing'],
        deepAnswers: [
          { answer: 'Artistic Swimming (Team)', depth: 7000, description: 'Formerly Synchronized Swimming.' },
          { answer: 'Canoe Slalom', depth: 6900, description: 'Whitewater rapid navigation.' }
        ]
      },
      {
        id: 5,
        prompt: 'A mammal that lays eggs (Monotreme)',
        category: 'Biology',
        commonAnswers: ['Platypus'],
        tooCleverTraps: ['Echidna'],
        deepAnswers: [
          { answer: 'Sir David\'s Long-beaked Echidna', depth: 7000, description: 'Critically endangered Zaglossus attenboroughi.' },
          { answer: 'Western Long-beaked Echidna', depth: 6950, description: 'Zaglossus bruijnii of New Guinea.' }
        ]
      },
      {
        id: 6,
        prompt: 'A currency replaced by the Euro in 2002',
        category: 'Economics',
        commonAnswers: ['Deutsche Mark', 'French Franc', 'Italian Lira', 'Spanish Peseta'],
        tooCleverTraps: ['Dutch Guilder', 'Greek Drachma'],
        deepAnswers: [
          { answer: 'Maltese Lira', depth: 7000, description: 'Replaced upon Euro adoption.' },
          { answer: 'Slovenian Tolar', depth: 6950, description: 'Replaced in 2007.' }
        ]
      },
      {
        id: 7,
        prompt: 'A classic English poet from the Romantic Era',
        category: 'Literature',
        commonAnswers: ['William Wordsworth', 'Lord Byron', 'Percy Bysshe Shelley', 'John Keats'],
        tooCleverTraps: ['Samuel Taylor Coleridge', 'William Blake'],
        deepAnswers: [
          { answer: 'Robert Southey', depth: 7000, description: 'Lake Poet and Poet Laureate for 30 years.' },
          { answer: 'Thomas Chatterton', depth: 6900, description: 'Influential precursor Romantic poet.' }
        ]
      }
    ]
  },
  {
    number: 144,
    date: '2026-10-04',
    theme: 'Submarine Cryptography',
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
        commonAnswers: ['Anglerfish', 'Giant Squid', 'Vampire Squid'],
        tooCleverTraps: ['Blobfish', 'Goblin Shark', 'Barreleye Fish'],
        deepAnswers: [
          { answer: 'Hadal Snailfish (Pseudoliparis swirei)', depth: 7000, description: 'Lives at 8,000m in the Mariana Trench.' },
          { answer: 'Giant Isopod (Bathynomus giganteus)', depth: 6950, description: 'Deep-sea scavenger crustacean.' },
          { answer: 'Dumbo Octopus (Grimpoteuthis)', depth: 6900, description: 'Deepest-living octopus genus.' },
          { answer: 'Gulper Eel (Eurypharynx pelecanoides)', depth: 6850, description: 'Massive jawed pelican eel.' }
        ]
      },
      {
        id: 4,
        prompt: 'A Shakespearean tragedy play',
        category: 'Literature',
        commonAnswers: ['Romeo and Juliet', 'Hamlet', 'Macbeth', 'Othello'],
        tooCleverTraps: ['King Lear', 'Julius Caesar'],
        deepAnswers: [
          { answer: 'Timon of Athens', depth: 7000, description: 'Bitter tragedy about wealth and misanthropy.' },
          { answer: 'Titus Andronicus', depth: 6900, description: 'Shakespeare\'s earliest and bloodiest revenge tragedy.' },
          { answer: 'Coriolanus', depth: 6850, description: 'Tragedy of Roman general Caius Marcius Coriolanus.' },
          { answer: 'Troilus and Cressida', depth: 6800, description: 'Tragedy set during the Trojan War.' }
        ]
      },
      {
        id: 5,
        prompt: 'A planet or moon in our Solar System with confirmed liquid surface lakes/seas',
        category: 'Astronomy',
        commonAnswers: ['Earth'],
        tooCleverTraps: ['Mars', 'Europa (subsurface)', 'Enceladus (subsurface)'],
        deepAnswers: [
          { answer: 'Titan', depth: 7000, description: 'Saturn\'s moon with surface methane/ethane hydrocarbon lakes (Kraken Mare).' }
        ]
      },
      {
        id: 6,
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
        id: 7,
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
      }
    ]
  },
  {
    number: 143,
    date: '2026-10-03',
    theme: 'Classical Civilization Vault',
    prompts: [
      {
        id: 1,
        prompt: 'A sovereign nation located on an archipelago',
        category: 'Geography',
        commonAnswers: ['Japan', 'Indonesia', 'Philippines', 'United Kingdom'],
        tooCleverTraps: ['Maldives', 'Bahamas', 'Seychelles'],
        deepAnswers: [
          { answer: 'Palau', depth: 7000, description: 'Over 340 coral and volcanic islands in Micronesia.' },
          { answer: 'São Tomé and Príncipe', depth: 6950, description: 'Gulf of Guinea archipelago nation.' },
          { answer: 'Cabo Verde', depth: 6900, description: 'Atlantic volcanic archipelago.' },
          { answer: 'Comoros', depth: 6850, description: 'Mozambique Channel archipelago.' }
        ]
      },
      {
        id: 2,
        prompt: 'A rare transition metal in the 6th period of the periodic table',
        category: 'Chemistry',
        commonAnswers: ['Gold (Au)', 'Platinum (Pt)', 'Mercury (Hg)'],
        tooCleverTraps: ['Tungsten (W)', 'Lead (Pb - not transition)'],
        deepAnswers: [
          { answer: 'Rhenium (Re)', depth: 7000, description: 'Atomic number 75, extremely rare.' },
          { answer: 'Osmium (Os)', depth: 6950, description: 'Densest naturally occurring element.' },
          { answer: 'Iridium (Ir)', depth: 6900, description: 'Extremely corrosion resistant asteroid marker metal.' }
        ]
      },
      {
        id: 3,
        prompt: 'A Roman emperor who ruled for fewer than two years',
        category: 'History',
        commonAnswers: ['Julius Caesar', 'Augustus', 'Nero'],
        tooCleverTraps: ['Caligula', 'Commodus'],
        deepAnswers: [
          { answer: 'Didius Julianus', depth: 7000, description: 'Ruled for 66 days in 193 AD.' },
          { answer: 'Pertinax', depth: 6950, description: 'Ruled for 87 days in 193 AD.' },
          { answer: 'Majorian', depth: 6900, description: 'Last capable Western Roman Emperor (457–461 AD).' }
        ]
      },
      {
        id: 4,
        prompt: 'A play by William Shakespeare with five words or fewer in its title',
        category: 'Literature',
        commonAnswers: ['Hamlet', 'Macbeth', 'Othello', 'The Tempest'],
        tooCleverTraps: ['King Lear', 'Twelfth Night'],
        deepAnswers: [
          { answer: 'Cymbeline', depth: 7000, description: 'Celtic romance play.' },
          { answer: 'Pericles', depth: 6950, description: 'Prince of Tyre tale.' },
          { answer: 'Coriolanus', depth: 6900, description: 'Roman general tragedy.' }
        ]
      },
      {
        id: 5,
        prompt: 'A nation bordering exactly one other sovereign country',
        category: 'Geography',
        commonAnswers: ['Canada (borders USA)', 'United Kingdom (borders Ireland)', 'Portugal (borders Spain)'],
        tooCleverTraps: ['Monaco (borders France)', 'Vatican City (borders Italy)', 'San Marino (borders Italy)'],
        deepAnswers: [
          { answer: 'Lesotho (surrounded by South Africa)', depth: 7000, description: 'Complete sovereign enclave.' },
          { answer: 'Brunei (surrounded by Malaysia)', depth: 6950, description: 'Borneo coastal enclave.' },
          { answer: 'Gambia (surrounded by Senegal)', depth: 6900, description: 'West African riverine nation.' }
        ]
      },
      {
        id: 6,
        prompt: 'A chemical element discovered in the 20th century',
        category: 'Physics',
        commonAnswers: ['Uranium (1789)', 'Plutonium (1940)'],
        tooCleverTraps: ['Radium (1898)', 'Polonium (1898)'],
        deepAnswers: [
          { answer: 'Francium (Fr - 1939)', depth: 7000, description: 'Discovered by Marguerite Perey.' },
          { answer: 'Technetium (Tc - 1937)', depth: 6950, description: 'First artificially synthesized element.' },
          { answer: 'Rhenium (Re - 1925)', depth: 6900, description: 'Last stable non-radioactive element discovered.' }
        ]
      },
      {
        id: 7,
        prompt: 'An ocean or sea connected to the Arctic Ocean',
        category: 'Earth Science',
        commonAnswers: ['Pacific Ocean', 'Atlantic Ocean'],
        tooCleverTraps: ['Bering Sea', 'Barents Sea', 'Norwegian Sea'],
        deepAnswers: [
          { answer: 'Laptev Sea', depth: 7000, description: 'Marginal sea off northern Siberia.' },
          { answer: 'Kara Sea', depth: 6950, description: 'Part of the Arctic Ocean north of Siberia.' },
          { answer: 'Beaufort Sea', depth: 6900, description: 'Marginal sea off Alaska and Canada.' }
        ]
      }
    ]
  },
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
        commonAnswers: ['Anglerfish', 'Giant Squid', 'Vampire Squid'],
        tooCleverTraps: ['Blobfish', 'Goblin Shark', 'Barreleye Fish'],
        deepAnswers: [
          { answer: 'Hadal Snailfish (Pseudoliparis swirei)', depth: 7000, description: 'Lives at 8,000m in the Mariana Trench.' },
          { answer: 'Giant Isopod (Bathynomus giganteus)', depth: 6950, description: 'Deep-sea scavenger crustacean.' },
          { answer: 'Dumbo Octopus (Grimpoteuthis)', depth: 6900, description: 'Deepest-living octopus genus.' },
          { answer: 'Gulper Eel (Eurypharynx pelecanoides)', depth: 6850, description: 'Massive jawed pelican eel.' }
        ]
      },
      {
        id: 4,
        prompt: 'A Shakespearean tragedy play',
        category: 'Literature',
        commonAnswers: ['Romeo and Juliet', 'Hamlet', 'Macbeth', 'Othello'],
        tooCleverTraps: ['King Lear', 'Julius Caesar'],
        deepAnswers: [
          { answer: 'Timon of Athens', depth: 7000, description: 'Bitter tragedy about wealth and misanthropy.' },
          { answer: 'Titus Andronicus', depth: 6900, description: 'Shakespeare\'s earliest and bloodiest revenge tragedy.' },
          { answer: 'Coriolanus', depth: 6850, description: 'Tragedy of Roman general Caius Marcius Coriolanus.' },
          { answer: 'Troilus and Cressida', depth: 6800, description: 'Tragedy set during the Trojan War.' }
        ]
      },
      {
        id: 5,
        prompt: 'A planet or moon in our Solar System with confirmed liquid surface lakes/seas',
        category: 'Astronomy',
        commonAnswers: ['Earth'],
        tooCleverTraps: ['Mars', 'Europa (subsurface)', 'Enceladus (subsurface)'],
        deepAnswers: [
          { answer: 'Titan', depth: 7000, description: 'Saturn\'s moon with surface methane/ethane hydrocarbon lakes (Kraken Mare).' }
        ]
      },
      {
        id: 6,
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
        id: 7,
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

/**
 * Dynamically returns all historical dives up to the current date.
 */
export function getAllDives(): DailyKrillionDive[] {
  const now = new Date();
  const yyyy = now.getUTCFullYear();
  const mm = String(now.getUTCMonth() + 1).padStart(2, '0');
  const dd = String(now.getUTCDate()).padStart(2, '0');
  const todayStr = `${yyyy}-${mm}-${dd}`;

  const diveMap = new Map<string, { number: number; date: string; theme: string; prompts: PromptHint[] }>();
  for (const d of SEED_DIVES) {
    diveMap.set(d.date, d);
  }

  const sortedDates = Array.from(diveMap.keys()).sort();
  const latestSeedDateStr = sortedDates[sortedDates.length - 1] || '2026-10-06';
  const latestSeed = diveMap.get(latestSeedDateStr)!;

  let currDate = new Date(`${latestSeedDateStr}T00:00:00Z`);
  const targetDate = new Date(`${todayStr}T00:00:00Z`);
  let currentNum = latestSeed.number;

  while (currDate < targetDate) {
    currDate.setUTCDate(currDate.getUTCDate() + 1);
    currentNum += 1;

    const y = currDate.getUTCFullYear();
    const m = String(currDate.getUTCMonth() + 1).padStart(2, '0');
    const d = String(currDate.getUTCDate()).padStart(2, '0');
    const dateStr = `${y}-${m}-${d}`;

    if (!diveMap.has(dateStr)) {
      const template = SEED_DIVES[currentNum % SEED_DIVES.length];
      diveMap.set(dateStr, {
        number: currentNum,
        date: dateStr,
        theme: template.theme,
        prompts: template.prompts,
      });
    }
  }

  const allItems = Array.from(diveMap.values()).sort((a, b) => b.date.localeCompare(a.date));
  return allItems.map(buildDive);
}

export function getTodayDive(): DailyKrillionDive {
  const all = getAllDives();
  return all[0];
}

export function getYesterdayDive(): DailyKrillionDive {
  const all = getAllDives();
  return all[1] || all[0];
}

export function getRecentDives(count: number = 6): DailyKrillionDive[] {
  const all = getAllDives();
  return all.slice(0, count);
}
