import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type FilterProps = {
  isActive?: boolean;
};

export const Container = styled(TouchableOpacity)<FilterProps>`
  ${({ theme, isActive }) =>
    isActive &&
    css`
      border: 1px solid ${theme.colors.green[700]};
    `}
  border-radius: 4px;
  margin-right: 12px;
  height: 38px;
  width: 70px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  text-transform: uppercase;

  ${({ theme }) => css`
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.sm}px;
    color: ${theme.colors.white};
  `}
`;
