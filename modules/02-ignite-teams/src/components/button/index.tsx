import { TouchableOpacityProps } from "react-native";

import * as S from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  variant?: S.ButtonVariants;
};

export const Button = ({ title, variant = "primary", ...rest }: Props) => {
  return (
    <S.Container variant={variant} {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};
