import { GAME_DATA } from "./data";

export default function getClueFromCode(code: string) {
  const clue = GAME_DATA.clues.find((clue) => clue.qr === code);
  if (!clue) {
    throw new Error("Clue not found");
  }
  return clue;
}
