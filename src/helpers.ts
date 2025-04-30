import { GAME_DATA } from "./data";

export function getClueFromCode(code: string) {
  const clue = GAME_DATA.clues.find((clue) => clue.qr === code);
  if (!clue) {
    throw new Error("Clue not found");
  }
  return clue;
}

export function getRoleFromCode(code: string) {
  const role = GAME_DATA.roles.find((role) => role.qr === code);
  if (!role) {
    throw new Error("Role not found");
  }
  return role;
}
