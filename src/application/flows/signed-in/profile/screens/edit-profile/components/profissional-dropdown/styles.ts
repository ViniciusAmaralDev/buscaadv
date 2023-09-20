import styled from "styled-components/native";
import { Wrapper } from "../../../../../../../components/wrapper";
import { Text } from "../../../../../../../components/base/text";
import { Button } from "../../../../../../../components/base/button";
import { FontAwesome } from "@expo/vector-icons";

interface LabelProps {
  secondary?: boolean;
}

export const Container = styled(Wrapper)`
  gap: 8px;
`;

export const VerticalContainer = styled(Wrapper)``;

export const Label = styled(Text)<LabelProps>`
  flex: 1;
  font-size: ${({ secondary }) => (secondary ? 12 : 14)}px;
  color: ${({ theme, secondary }) =>
    secondary ? theme.colors.gray.dark : theme.colors.black.main};
`;

export const OfficeButton = styled(Button)`
  gap: 8px;
  padding: 16px 0px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SquareIcon = styled(FontAwesome).attrs(
  ({ theme, isSelected }) => ({
    size: 24,
    name: isSelected ? "check-square" : "square-o",
    color: isSelected ? theme.colors.primary.main : theme.colors.gray.dark,
  })
)``;
