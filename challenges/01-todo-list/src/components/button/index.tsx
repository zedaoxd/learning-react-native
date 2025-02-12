import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { colors } from "@/styles/colors";
import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";

type ButtonProps = TouchableOpacityProps & {};

export function Button({ ...rest }: ButtonProps) {
  return (
    <TouchableOpacity {...rest} style={[styles.button, rest.style]}>
      <Feather name="plus-circle" size={16} color={colors.gray[100]} />
    </TouchableOpacity>
  );
}
