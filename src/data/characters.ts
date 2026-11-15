export type Character = {
  id: string;
  name: string;
  status: "alive" | "dead" | "unknown";
};

export const characters: Character[] = [
  { id: "1", name: "Rick Sanchez", status: "alive" },
  { id: "2", name: "Morty Smith", status: "alive" },
  { id: "3", name: "Summer Smith", status: "dead" },
  { id: "4", name: "Beth Smith", status: "unknown" },
  { id: "5", name: "Jerry Smith", status: "alive" },
];
