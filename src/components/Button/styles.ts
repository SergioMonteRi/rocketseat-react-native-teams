import { TouchableOpacity } from "react-native";

import styled, { css } from "styled-components/native";

import { StyledButtonProps } from "./types";

export const Container = styled(TouchableOpacity)<StyledButtonProps>`
  flex: 1;
  width: 100%;

  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};

  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
