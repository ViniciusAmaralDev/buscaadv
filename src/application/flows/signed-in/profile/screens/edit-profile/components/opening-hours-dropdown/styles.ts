import styled from "styled-components/native";
import { Button } from "../../../../../../../components/base/button";
import { FontAwesome } from "@expo/vector-icons";
import { Text } from "../../../../../../../components/base/text";
import { Wrapper } from "../../../../../../../components/wrapper";
import { TextButton } from "../../../../../../../components/text-button";

interface WeekButtonProps {
  isSelected: boolean;
}

interface LabelProps {
  secondary?: boolean;
}

export const HorizontalContainer = styled(Wrapper).attrs({
  direction: "row",
})`
  gap: 8px;
  flex-wrap: wrap;
`;

export const WrapperHorizontal = styled(Wrapper).attrs({
  direction: "row",
})`
  align-items: center;
  justify-content: space-between;
`;

export const Label = styled(Text)<LabelProps>`
  font-size: ${({ secondary }) => (secondary ? 14 : 12)}px;
  color: ${({ theme, secondary }) =>
    secondary ? theme.colors.black.main : theme.colors.gray.dark};
  font-family: ${({ theme, secondary }) =>
    secondary ? theme.fonts.regular : theme.fonts.bold};
`;

export const WeekButton = styled(TextButton).attrs(({ theme, isSelected }) => ({
  textStyle: {
    color: isSelected ? theme.colors.white.main : theme.colors.gray.dark,
  },
}))<WeekButtonProps>`
  padding: 8px 16px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-width: ${({ isSelected }) => (isSelected ? 0 : 1)}px;
  border-color: ${({ theme }) => theme.colors.gray.main};
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.primary.main : theme.colors.white.main};
`;

export const SquareIcon = styled(FontAwesome).attrs(
  ({ theme, isSelected }) => ({
    size: 24,
    name: isSelected ? "check-square" : "square-o",
    color: isSelected ? theme.colors.primary.main : theme.colors.gray.dark,
  })
)``;
