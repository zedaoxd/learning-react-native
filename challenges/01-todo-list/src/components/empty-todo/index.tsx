import { Image, Text, View } from "react-native";

import { styles } from "./styles";

export function EmptyTodo() {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/images/Clipboard.png")} />

      <View style={styles.textContainer}>
        <Text style={styles.title}>Voce ainda nao tem tarefas cadastradas</Text>
        <Text style={styles.subtitle}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  );
}
