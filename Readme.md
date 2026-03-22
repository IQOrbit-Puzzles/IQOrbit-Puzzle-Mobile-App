
------------------------------
File: assets/README.txt
------------------------------
Add your images here:
- icon.png (1024x1024)
- splash.png (recommended 1242x2436 or similar portrait)
- adaptive-icon.png
- favicon.png

------------------------------
EXTENDING THE APP (notes for developers)
------------------------------
1) Add new types in src/data/puzzles.ts -> PUZZLE_TYPES
2) Add new puzzles in src/data/puzzles.ts -> PUZZLES with typeId referencing a type
3) The UI automatically lists them in Home ➜ Type ➜ Puzzle
4) For interactive puzzles, you can create bespoke screens and route by id.
   For example, switch(puzzle.id) to mount a custom component instead of text-only.
5) Consider adding global state (e.g., context) to track user progress, streaks, or XP.
6) For theming, tweak src/theme/Theme.tsx. Use palette/radii/spacing across components.
