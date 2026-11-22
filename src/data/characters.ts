export type CharacterStatus = "alive" | "dead" | "unknown";

export type CharacterGender = "male" | "female" | "genderless" | "unknown";

export type Character = {
  id: string;
  name: string;
  status: CharacterStatus;
  species: string;
  location: string;
  gender: CharacterGender;
  age: number;
};

export type CharacterInput = Omit<Character, "id">;

export type CharacterPatch = Partial<CharacterInput>;

export const characters: Character[] = [
  {
    id: "a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d",
    name: "Rick Sanchez",
    status: "alive",
    species: "Human",
    location: "Citadel of Ricks",
    gender: "male",
    age: 70,
  },
  {
    id: "b2c3d4e5-f6a7-4b8c-9d0e-1f2a3b4c5d6e",
    name: "Morty Smith",
    status: "alive",
    species: "Human",
    location: "Earth (Dimension C-137)",
    gender: "male",
    age: 14,
  },
  {
    id: "c3d4e5f6-a7b8-4c9d-0e1f-2a3b4c5d6e7f",
    name: "Summer Smith",
    status: "dead",
    species: "Human",
    location: "Earth (Replacement Dimension)",
    gender: "female",
    age: 17,
  },
  {
    id: "d4e5f6a7-b8c9-4d0e-1f2a-3b4c5d6e7f8a",
    name: "Beth Smith",
    status: "unknown",
    species: "Human",
    location: "Earth (Replacement Dimension)",
    gender: "female",
    age: 34,
  },
  {
    id: "e5f6a7b8-c9d0-4e1f-2a3b-4c5d6e7f8a9b",
    name: "Jerry Smith",
    status: "alive",
    species: "Human",
    location: "Earth (Replacement Dimension)",
    gender: "male",
    age: 35,
  },
];
