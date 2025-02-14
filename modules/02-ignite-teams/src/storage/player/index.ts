import { AppError } from "@/utils/app-error";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { PlayerStorageDTO } from "./PlayerStorageDTO";

export const PLAYER_STORAGE = "PLAYER_STORAGE";

export const createPlayer = async (
  newPlayer: PlayerStorageDTO,
  group: string
) => {
  const allPlayers = await getAllPlayers(group);

  const playerAlreadyInGroup = allPlayers.some(
    (player) => player.name === newPlayer.name
  );

  if (playerAlreadyInGroup) {
    throw new AppError("Este jogador já está nesse grupo");
  }

  const updatedPlayers = [...allPlayers, newPlayer];

  await AsyncStorage.setItem(
    `${PLAYER_STORAGE}-${group}`,
    JSON.stringify(updatedPlayers)
  );
};

export const getAllPlayers = async (
  group: string
): Promise<PlayerStorageDTO[]> => {
  const storage = await AsyncStorage.getItem(`${PLAYER_STORAGE}-${group}`);
  return storage ? JSON.parse(storage) : [];
};

export const getAllByGroupAndTeam = async (group: string, team: string) => {
  const players = await getAllPlayers(group);

  const response = players.filter(
    (player) => player.team && player.team === team
  );

  return response;
};

export const removePlayer = async (name: string, group: string) => {
  const players = await getAllPlayers(group);

  const palyersFiltred = players.filter((player) => player.name !== name);

  AsyncStorage.setItem(
    `${PLAYER_STORAGE}-${group}`,
    JSON.stringify(palyersFiltred)
  );
};
