import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

type Props = {
  name: string;
  handleRemove: () => void;
};

export function Participant({ name, handleRemove }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity style={styles.button} onPress={handleRemove}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
