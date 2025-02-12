import { Pressable, PressableProps, View } from "react-native";

import { colors } from "@/styles/colors";
import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";

type Props = PressableProps & {
  checked?: boolean;
};

export function RadioButton({ checked, ...rest }: Props) {
  return (
    <Pressable {...rest}>
      {checked ? (
        <View style={styles.checked}>
          <Feather name="check" size={16} color={colors.gray[100]} />
        </View>
      ) : (
        <View style={styles.unchecked} />
      )}
    </Pressable>
  );
}
