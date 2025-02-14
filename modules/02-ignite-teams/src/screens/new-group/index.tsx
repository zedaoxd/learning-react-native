import { useState } from "react";
import { Alert } from "react-native";

import { Button } from "@/components/button";
import { Header } from "@/components/header";
import { Highlight } from "@/components/highlight";
import { Input } from "@/components/input";
import { createGroup } from "@/storage/group";
import { AppError } from "@/utils/app-error";
import { useNavigation } from "@react-navigation/native";

import * as S from "./styles";

export const NewGroup = () => {
  const [group, setGroup] = useState("");
  const { navigate } = useNavigation();

  const handleNew = async () => {
    if (!group || !group.trim()) return;

    try {
      await createGroup(group);

      navigate("players", { group: group });
    } catch (e) {
      if (e instanceof AppError) {
        Alert.alert("Novo grupo", e.message);
      }
    }
  };

  return (
    <S.Container>
      <Header showBackButton />

      <S.Content>
        <S.Icon />

        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />

        <S.Form>
          <Input placeholder="Nome da turma" onChangeText={setGroup} />

          <Button title="Criar" onPress={handleNew} />
        </S.Form>
      </S.Content>
    </S.Container>
  );
};
