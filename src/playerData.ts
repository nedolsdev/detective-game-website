import { Clue } from "./types";

export type PlayerData = {
  role: number | null; // role id
  cluesFound: Clue[];
  readyToGuess: boolean; // if player has found all the clues they can
  guess: null | number; // the guess the player submitted, pertaining to their role
};

export const PLAYER_DATA: PlayerData = {
  role: null,
  cluesFound: [],
  readyToGuess: false,
  guess: null,
};
