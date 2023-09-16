import { InputVariant } from ".";
import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";
import { Text } from "../base/text";
import { TextButton } from "../text-button";

interface ContentProps {
  contrast: boolean;
  editable: boolean;
  isFocused: boolean;
  variant: InputVariant;
}

export const Container = styled.View`
  gap: 4px;
  width: 100%;
`;

export const Label = styled(Text)`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray.dark};
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const Content = styled.View<ContentProps>`
  gap: 16px;
  min-height: 40px;
  padding: 0px 16px;
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
