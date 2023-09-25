import styled from "styled-components/native";
import { Text } from "../../../../../../../components/base/text";
import { Layout } from "../../../../../../../components/layout";

interface LabelProps {
  secondary?: boolean;
}

export const Container = styled(Layout).attrs({
  scrollEnabled: true,
  paddingTopDisabled: true,
  showsVerticalScrollIndicator: true,
  contentContainerStyle: { gap: 16, padding: 16 },
})``;

export const Label = styled(Text)<LabelProps>`
  font-size: ${({ secondary }) => (secondary ? 12 : 14)}px;
  font-family: ${({ theme, secondary }) =>
    secondary ? theme.fonts.medium : theme.fonts.regular};
  color: ${({ theme, secondary }) =>
    secondary ? theme.colors.gray.dark : theme.colors.black.main};
`;
