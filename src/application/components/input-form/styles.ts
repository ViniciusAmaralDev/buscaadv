import { InputVariant } from ".";
import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";
import { Text } from "../base/text";
import { TextButton } from "../text-button";
import { Button } from "../base/button";

interface LabelProps {
  isFocused?: boolean;
}

interface ContentProps {
  contrast: boolean;
  editable: boolean;
  isFocused: boolean;
  variant: InputVariant;
  paddingVerticalEnabled: boolean;
}

export const Container = styled(Button)`
  gap: 4px;
  flex-grow: 1;
`;

export const Label = styled(Text)<LabelProps>`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme, isFocused }) =>
    isFocused ? theme.colors.primary.main : theme.colors.gray.dark};
`;

export const Content = styled.View<ContentProps>`
  gap: 8px;
  min-height: 40px;
  padding: ${({ paddingVerticalEnabled }) => (paddingVerticalEnabled ? 10 : 0)}px
    16px;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  border-width: ${({ variant }) => (variant === "contained" ? 1 : 0)}px;
  border-bottom-width: ${({ variant }) =>
    variant === "underline" || variant === "contained" ? 1 : 0}px;
  border-color: ${({ theme, isFocused }) =>
    isFocused ? theme.colors.primary.main : theme.colors.gray.main};
  background-color: ${({ theme, contrast, variant, editable }) =>
    !editable
      ? theme.colors.gray.light
      : contrast
      ? theme.colors.white.main
      : variant === "contained"
      ? theme.colors.gray.light
      : "transparent"};
`;

export const ErrorText = styled(Text)`
  font-size: 12px;
  text-align: right;
  color: ${({ theme }) => theme.colors.red.main};
`;

export const ForgotPasswordButton = styled(TextButton).attrs(({ theme }) => ({
  textStyle: { fontSize: 12, color: theme.colors.gray.dark },
}))`
  align-self: flex-end;
`;

export const EyeIcon = styled(Feather).attrs(({ theme, isVisible }) => ({
  size: 20,
  color: theme.colors.gray.main,
  name: isVisible ? "eye-off" : "eye",
}))``;
