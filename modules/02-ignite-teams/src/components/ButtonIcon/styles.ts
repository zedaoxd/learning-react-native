import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { MaterialIcons } from "@expo/vector-icons";

export type ButtonIconVariants = "primary" | "secundary";

type Props = {
  variant: ButtonIconVariants;
};

export const Container = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(
  ({ theme, variant }) => ({
    size: 24,
    color: variant === "primary" ? theme.colors.green[700] : theme.colors.red,
  })
)``;
