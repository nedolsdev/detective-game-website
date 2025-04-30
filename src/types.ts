export type Card = {
  name: string;
  qr: string;
};

export type Role = {
  displayName: string;
  id: number;
} & Card;

export type ClueInfo = {
  text: string;
  foundBy: number[]; // role id
};

export type Clue = {
  clueType: "clue" | "item" | "suspect";
  id: number;
  info: ClueInfo[];
} & Card;

export type Cause = {
  id: number;
  cause: string;
};

export type Motive = {
  id: number;
  motive: string;
};

export type Crime = {
  killer: number; // suspect id
  motive: number; // motive id
  method: number; // cause id
};

export type GameData = {
  roles: Role[];
  clues: Clue[];
  causes: Cause[];
  motives: Motive[];
  crime: Crime;
};
