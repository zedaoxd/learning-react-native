import { Text, TouchableOpacity, View } from "react-native";

import { colors } from "@/styles/colors";
import { Feather } from "@expo/vector-icons";

import { RadioButton } from "../radio-button";
import { styles } from "./styles";

type Props = {
  id: string;
  title: string;
  completed: boolean;
  handleDelete: (id: string) => void;
  handleComplete: (id: string) => void;
};

export function Task({
  completed,
  id,
  title,
  handleDelete,
  handleComplete,
}: Props) {
  return (
    <View style={styles.container}>
      <RadioButton checked={completed} onPress={() => handleComplete(id)} />

      <Text style={[styles.title, completed && styles.completed]}>{title}</Text>

      <TouchableOpacity onPress={() => handleDelete(id)}>
        <Feather name="trash" size={16} color={colors.gray[300]} />
      </TouchableOpacity>
    </View>
  );
}
