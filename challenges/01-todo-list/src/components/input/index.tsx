import { TextInput, TextInputProps } from "react-native";

import { colors } from "@/styles/colors";

import { styles } from "./styles";

type Props = {};

export function Input(props: TextInputProps & Props) {
  return (
    <TextInput
      {...props}
      placeholderTextColor={colors.gray[300]}
      style={[styles.input, props.style]}
    />
  );
}
