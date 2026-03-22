
export type PuzzleType = {
  id: string;
  title: string;
  description: string;
  color: string; // accent
  icon?: string; // placeholder for future icon mapping
};

export type Puzzle = {
  id: string;
  typeId: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  statement: string;
  hints?: string[];
  solution: string;
};

export const PUZZLE_TYPES: PuzzleType[] = [
  {
    id: 'logic',
    title: 'Logic',
    description: 'Deduction, sequences, and classic brain teasers.',
    color: '#7c5cff',
  },
  {
    id: 'riddles',
    title: 'Riddles',
    description: 'Wording, lateral thinking, and trick questions.',
    color: '#00e6b8',
  },
  {
    id: 'math',
    title: 'Math',
    description: 'Numbers, patterns, and arithmetic puzzles.',
    color: '#f2a93b',
  },
];

export const PUZZLES: Puzzle[] = [
  // Sample featured puzzle: Famous Trick Donkeys
  {
    id: 'trick-donkeys',
    typeId: 'riddles',
    title: 'Famous Trick: Donkeys',
    difficulty: 'Easy',
    statement:
      "A farmer owns 17 donkeys. All but nine die. How many donkeys are left?",
    hints: [
      'No arithmetic is needed—read the sentence carefully.',
      "The phrase 'all but nine' means something important.",
      "It's a classic trick riddle: the answer is in the wording.",
    ],
    solution:
      "Nine. The phrase 'all but nine die' means all die except nine—so nine remain.",
  },
  // New: Math (sequence)
  {
    id: 'sequence-even-diffs',
    typeId: 'math',
    title: 'Missing Number: Even Differences',
    difficulty: 'Medium',
    statement: 'Find the next number in the sequence: 2, 6, 12, 20, 30, ?',
    hints: [
      'Look at the gaps between terms.',
      'Are the differences themselves increasing?',
      'Try adding consecutive even numbers.',
    ],
    solution: '42. Differences are +4, +6, +8, +10, so next is +12: 30 + 12 = 42.',
  },
  // New: Logic (two doors)
  {
    id: 'two-doors-guards',
    typeId: 'logic',
    title: 'Two Doors & Two Guards',
    difficulty: 'Medium',
    statement:
      'You face two doors: one leads to freedom, the other to doom. Two guards know which is which: one always tells the truth, the other always lies. You may ask ONE question to ONE guard to find the safe door. What do you ask?',
    hints: [
      'Ask about what the other guard would say.',
      'Then do the opposite of that answer.',
    ],
    solution:
      "Ask either guard: 'Which door would the other guard say leads to freedom?' Then take the opposite door. The liar/truth-teller logic ensures the pointed door is the wrong one.",
  },
  // New: Logic (8 balls)
  {
    id: 'eight-balls-balance',
    typeId: 'logic',
    title: '8 Balls, 2 Weighings',
    difficulty: 'Hard',
    statement:
      'You have 8 identical-looking balls; one is heavier. Using a balance scale, find the heavier ball in only two weighings. How?',
    hints: [
      'First weighing: compare 3 vs 3.',
      'Second weighing depends on result: either within the heavier trio or among the remaining two.',
    ],
    solution:
      'Weigh 3 vs 3. If equal, the heavy ball is among the remaining 2; weigh them to find it. If not equal, take the heavier group of 3, weigh 1 vs 1: if equal, the third is heavy; otherwise, the heavier side is the heavy ball.',
  },
];

export const getTypeById = (id: string) => PUZZLE_TYPES.find(t => t.id === id);
export const getPuzzlesByType = (typeId: string) => PUZZLES.filter(p => p.typeId === typeId);
export const getPuzzleById = (id: string) => PUZZLES.find(p => p.id === id);
