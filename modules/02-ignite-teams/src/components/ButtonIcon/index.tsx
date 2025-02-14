import { TouchableOpacityProps } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import * as S from "./styles";

type Props = TouchableOpacityProps & {
  variant?: S.ButtonIconVariants;
  icon: keyof typeof MaterialIcons.glyphMap;
};

export const ButtonIcon = ({ variant = "primary", icon, ...rest }: Props) => {
  return (
    <S.Container {...rest}>
      <S.Icon name={icon} variant={variant} />
    </S.Container>
  );
};
