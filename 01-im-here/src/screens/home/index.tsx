import { useState } from "react";
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

import { Participant } from "../../components/participant";
import { styles } from "./styles";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState("");

  function handleParticipantAdd(name: string) {
    if (participants.includes(name)) {
      return Alert.alert("Error", "Participant already added");
    }

    setParticipants((prev) => [...prev, name]);
    setParticipantName("");
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Romove", "Are you sure you want to remove this participant?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Remove",
        style: "destructive",
        onPress: () => {
          setParticipants((prev) =>
            prev.filter((participant) => participant !== name)
          );
        },
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Home</Text>

      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2025</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Search"
          keyboardType="default"
          autoCapitalize="none"
          autoCorrect={false}
          value={participantName}
          onChangeText={setParticipantName}
          onSubmitEditing={() => handleParticipantAdd(participantName)}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleParticipantAdd(participantName)}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(participant) => participant}
        renderItem={({ item }) => (
          <Participant
            name={item}
            handleRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.emptyList}>No participants</Text>
        )}
      />
    </View>
  );
}
