import { forwardRef } from "react";
import { TextInput, TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

import * as S from "./styles";

export const Input = forwardRef<TextInput, TextInputProps>(
  ({ ...props }, ref) => {
    const { colors } = useTheme();

    return (
      <S.Input ref={ref} {...props} placeholderTextColor={colors.gray[300]} />
    );
  }
);
