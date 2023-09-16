import styled from "styled-components/native";
import { Layout } from "../../../../../components/layout";
import { TextButton } from "../../../../../components/text-button";

export const Container = styled(Layout).attrs({
  scrollEnabled: true,
  contentContainerStyle: {
    gap: 16,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
})``;

export const SaveButton = styled(TextButton).attrs(({ theme, disabled }) => ({
  textStyle: { fontFamily: theme.fonts.bold, color: theme.colors.white.main },
}))`
  width: 100%;
  height: 48px;
  padding: 0px 16px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.gray.main : theme.colors.primary.dark};
`;
