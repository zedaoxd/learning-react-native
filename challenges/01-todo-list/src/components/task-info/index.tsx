import { Text, View } from "react-native";

import { styles } from "./styles";

type Props = {
  title: string;
  number: number;
  variant?: "primary" | "secondary";
};

export function TaskInfo({ title, number, variant = "primary" }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles[variant]}>{title}</Text>

      <Text style={styles.number}>{number}</Text>
    </View>
  );
}
