import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";
import { Layout } from "@/application/components/layout";
import { Text } from "@/application/components/base/text";
import { Wrapper } from "@/application/components/wrapper";
import { Image } from "@/application/components/base/image";
import { TextButton } from "@/application/components/text-button";
import { EditButton as Button } from "@/application/components/icon-buttons/EditButton";

interface WeekButtonProps {
  isSelected: boolean;
}

interface LabelProps {
  secondary?: boolean;
}

export const Container = styled(Layout).attrs({
  scrollEnabled: true,
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { gap: 16, padding: 16 },
})``;

export const FormContainer = styled(Wrapper)`
  padding-top: 40px;
`;

export const HorizontalContainer = styled(Wrapper).attrs({
  direction: "row",
})`
  gap: 8px;
  flex-wrap: wrap;
`;

export const ImageProfile = styled(Image).attrs({
  size: 150,
  imageStyle: { borderRadius: 25 },
})`
  elevation: 1;
  align-self: center;
  border-radius: 25px;
`;

export const EditButton = styled(Button).attrs(({ theme }) => ({
  size: 15,
  color: theme.colors.white.main,
}))`
  position: absolute;
  right: 0px;
  bottom: 0px;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 8px;
  border-top-width: 2px;
  border-left-width: 2px;
  border-top-color: ${({ theme }) => theme.colors.gray.light};
  border-left-color: ${({ theme }) => theme.colors.gray.light};
  background-color: ${({ theme }) => theme.colors.primary.main};
`;

export const SaveButton = styled(TextButton).attrs(({ theme, disabled }) => ({
  textStyle: { fontFamily: theme.fonts.bold, color: theme.colors.white.main },
}))`
  height: 48px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.gray.main : theme.colors.primary.dark};
`;

export const WrapperHorizontal = styled(Wrapper).attrs({
  direction: "row",
})`
  gap: 8px;
  align-items: center;
  justify-content: space-between;
`;

export const Label = styled(Text)<LabelProps>`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray.dark};
`;

export const WeekButton = styled(TextButton).attrs(({ theme, isSelected }) => ({
  textStyle: {
    fontFamily: isSelected ? theme.fonts.bold : theme.fonts.regular,
    color: isSelected ? theme.colors.white.main : theme.colors.gray.dark,
  },
}))<WeekButtonProps>`
  padding: 4px 16px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  elevation: 2;
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
