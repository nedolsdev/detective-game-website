// use local storage

import { PlayerData } from "./playerData";

export function savePlayerData(playerData: PlayerData) {
  localStorage.setItem("playerData", JSON.stringify(playerData));
}

export function loadPlayerData(): PlayerData {
  const data = localStorage.getItem("playerData");
  if (data) {
    return JSON.parse(data);
  }
  return {
    role: null,
    cluesFound: [],
    readyToGuess: false,
    guess: null,
  };
}
