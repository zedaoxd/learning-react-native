import { useCallback, useState } from "react";
import { FlatList } from "react-native";

import { Button } from "@/components/button";
import { GroupCard } from "@/components/group-card";
import { Header } from "@/components/header";
import { Highlight } from "@/components/highlight";
import { ListEmpty } from "@/components/list-empty";
import { Loading } from "@/components/loading";
import { getAllGroups } from "@/storage/group";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import * as S from "./styles";

export function Groups() {
  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState<string[]>([]);

  const { navigate } = useNavigation();

  const handleNewGroup = () => {
    navigate("new");
  };

  const fetchGroups = async () => {
    setIsLoading(true);

    const data = await getAllGroups();

    setGroups(data);

    setIsLoading(false);
  };

  const handleOpenGroup = (group: string) => {
    navigate("players", { group });
  };

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <S.Container>
      <Header />

      <Highlight title="Turmas" subtitle="jogue com a sua turma" />

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
          )}
          ListEmptyComponent={() => (
            <ListEmpty message="Que tal cadastrar a primeira turma?" />
          )}
          contentContainerStyle={groups.length == 0 && { flex: 1 }}
          showsVerticalScrollIndicator={false}
        />
      )}

      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </S.Container>
  );
}
