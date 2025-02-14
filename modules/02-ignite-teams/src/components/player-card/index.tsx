import { ButtonIcon } from "../ButtonIcon";
import * as S from "./styles";

type Props = {
  name: string;
  onRemove: () => void;
};

export const PlayerCard = ({ name, onRemove }: Props) => {
  return (
    <S.Container>
      <S.Icon name="person" />

      <S.Name>{name}</S.Name>

      <ButtonIcon icon="close" variant="secundary" onPress={onRemove} />
    </S.Container>
  );
};
