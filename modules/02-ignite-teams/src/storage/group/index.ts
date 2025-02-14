import { AppError } from "@/utils/app-error";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { PLAYER_STORAGE } from "../player";

const GROUP_STORAGE = "GROUP_STORAGE";

export const createGroup = async (newGroup: string) => {
  const groups: string[] = await getAllGroups();

  const groupAlreadyExists = groups.includes(newGroup);

  if (groupAlreadyExists) throw new AppError("Este grupo ja existe");

  await AsyncStorage.setItem(
    GROUP_STORAGE,
    JSON.stringify([newGroup, ...groups])
  );
};

export const getAllGroups = async (): Promise<string[]> => {
  const storage = await AsyncStorage.getItem(GROUP_STORAGE);

  return storage ? JSON.parse(storage) : [];
};

export const removeGroup = async (group: string) => {
  const groups = await getAllGroups();

  const groupFiltered = groups.filter((g) => g !== group);

  await AsyncStorage.setItem(GROUP_STORAGE, JSON.stringify(groupFiltered));

  await AsyncStorage.removeItem(`${PLAYER_STORAGE}-${group}`);
};
