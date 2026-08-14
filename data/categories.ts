export type CategoryId =
  | "foundation"
  | "kitchen-game"
  | "third-shot"
  | "movement"
  | "mental-game";

export type Category = {
  id: CategoryId;
  label: string;
  description: string;
};

// The 5 areas from the 100 Puzzle Pieces framework. Add a 6th here later
// (e.g. "serve-and-return") if the library outgrows this split — the rest
// of the app just maps over this list, so it's the only place to touch.
export const categories: Category[] = [
  {
    id: "foundation",
    label: "Foundation",
    description: "Ready position, posture, footwork, balance",
  },
  {
    id: "kitchen-game",
    label: "The Kitchen Game",
    description: "Dinking, resets, NVZ positioning",
  },
  {
    id: "third-shot",
    label: "The Third Shot",
    description: "Drop, drive, decision-making",
  },
  {
    id: "movement",
    label: "Movement & Court Position",
    description: "Awareness, angles, coverage",
  },
  {
    id: "mental-game",
    label: "Pressure, Patterns & Mental Game",
    description: "Reads, sequences, resets",
  },
];

export function getCategory(id: CategoryId): Category {
  const found = categories.find((c) => c.id === id);
  if (!found) throw new Error(`Unknown category: ${id}`);
  return found;
}
