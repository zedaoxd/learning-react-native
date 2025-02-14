import { TouchableOpacity } from "react-native";
import {
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps
} from "styled-components";
import styled, { css } from "styled-components/native";

export type ButtonVariants = "primary" | "secundary";

type Props = {
  variant: ButtonVariants;
};

const variants: Record<
  ButtonVariants,
  FlattenInterpolation<ThemeProps<DefaultTheme>>
> = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.green[700]};
  `,
  secundary: css`
    background-color: ${({ theme }) => theme.colors.redDark};
  `,
};

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;

  ${({ variant }) => variants[variant]}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.md}px;
    color: ${theme.colors.white};
    font-family: ${theme.fontFamily.bold};
  `}
`;
