
export const PUZZLE_TYPES = [
  { id: 'logic', title: 'Logic', description: 'Classic reasoning puzzles', color: '#7c5cff' },
  { id: 'riddles', title: 'Riddles', description: 'Trick & word puzzles', color: '#00e6b8' },
  { id: 'math', title: 'Math', description: 'Number & pattern puzzles', color: '#f2a93b' },
];

export const PUZZLES = [
  {
    id: 'trick-donkeys', typeId: 'riddles', title: 'Famous Trick: Donkeys', difficulty: 'Easy',
    statement: 'A farmer owns 17 donkeys. All but nine die. How many are left?',
    solution: 'Nine donkeys are left.'
  },
  {
    id: 'sequence-even', typeId: 'math', title: 'Even Differences', difficulty: 'Medium',
    statement: '2, 6, 12, 20, 30, ?', solution: '42'
  },
  {
    id: 'two-doors', typeId: 'logic', title: 'Two Doors Puzzle', difficulty: 'Medium',
    statement: 'One guard lies, one tells truth. One question?',
    solution: 'Ask what the other guard would say, then choose the opposite.'
  }
];
