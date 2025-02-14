import { TouchableOpacityProps } from "react-native";

import * as S from "./styles";

type Props = S.FilterProps &
  TouchableOpacityProps & {
    title: string;
  };

export const Filter = ({ title, isActive = false, ...rest }: Props) => {
  return (
    <S.Container {...rest} isActive={isActive}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};
