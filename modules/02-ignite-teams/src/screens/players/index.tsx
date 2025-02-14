import { useEffect, useRef, useState } from "react";
import { Alert, FlatList, TextInput } from "react-native";

import { Button } from "@/components/button";
import { ButtonIcon } from "@/components/ButtonIcon";
import { Filter } from "@/components/filter";
import { Header } from "@/components/header";
import { Highlight } from "@/components/highlight";
import { Input } from "@/components/input";
import { ListEmpty } from "@/components/list-empty";
import { Loading } from "@/components/loading";
import { PlayerCard } from "@/components/player-card";
import { removeGroup } from "@/storage/group";
import {
  createPlayer,
  getAllByGroupAndTeam,
  removePlayer
} from "@/storage/player";
import { PlayerStorageDTO } from "@/storage/player/PlayerStorageDTO";
import { AppError } from "@/utils/app-error";
import { useNavigation, useRoute } from "@react-navigation/native";

import * as S from "./styles";

type RouteParams = {
  group: string;
};

export const Players = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);
  const [playerName, setPlayerName] = useState("");

  const inputRef = useRef<TextInput>(null);

  const route = useRoute();
  const { group } = route.params as RouteParams;

  const { navigate } = useNavigation();

  const feathPlayersByTeam = async () => {
    setIsLoading(true);
    const playersByTeam = await getAllByGroupAndTeam(group, team);
    setPlayers(playersByTeam);
    setIsLoading(false);
  };

  const handleAddNewPlayer = async () => {
    if (!playerName || !playerName.trim()) return;

    const newPlayer: PlayerStorageDTO = {
      name: playerName,
      team,
    };

    try {
      await createPlayer(newPlayer, group);
      inputRef.current?.blur();
      setPlayerName("");
      await feathPlayersByTeam();
    } catch (e) {
      if (e instanceof AppError) Alert.alert("Novo jogador", e.message);
    }
  };

  const handlePlayerRemove = async (name: string) => {
    await removePlayer(name, group);
    await feathPlayersByTeam();
  };

  const handleGroupRemove = () => {
    Alert.alert("Remover", "Deseja realmente remover essa turma?", [
      { text: "Nao", style: "cancel" },
      {
        text: "Sim",
        style: "destructive",
        onPress: () => {
          removeGroup(group);
          navigate("groups");
        },
      },
    ]);
  };

  useEffect(() => {
    feathPlayersByTeam();
  }, [team]);

  return (
    <S.Container>
      <Header showBackButton />

      <Highlight title={group} subtitle="adicione a galera e separe os times" />

      <S.Form>
        <Input
          ref={inputRef}
          placeholder="Nome da pessoa"
          autoCorrect={false}
          onChangeText={setPlayerName}
          value={playerName}
          onSubmitEditing={handleAddNewPlayer}
          returnKeyType="done"
        />

        <ButtonIcon icon="add" onPress={handleAddNewPlayer} />
      </S.Form>

      <S.HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />

        <S.NumberOfPlayers>{players.length}</S.NumberOfPlayers>
      </S.HeaderList>

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={players}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <PlayerCard
              name={item.name}
              onRemove={() => handlePlayerRemove(item.name)}
            />
          )}
          ListEmptyComponent={() => (
            <ListEmpty message="Nao ha pessoas nesse time" />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            { paddingBottom: 100 },
            players.length === 0 && { flex: 1 },
          ]}
        />
      )}

      <Button
        title="Remover turma"
        variant="secundary"
        onPress={handleGroupRemove}
      />
    </S.Container>
  );
};
