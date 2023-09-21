import styled from "styled-components/native";
import { Layout } from "../../../../../components/layout";
import { EditButton as Button } from "../../../../../components/icon-buttons/EditButton";
import { Image } from "../../../../../components/base/image";
import { Wrapper } from "../../../../../components/wrapper";
import { TextButton } from "../../../../../components/text-button";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { Button as CustomButton } from "../../../../../components/base/button";
import { Text } from "../../../../../components/base/text";

interface WeekButtonProps {
  isSelected: boolean;
}

interface LabelProps {
  secondary?: boolean;
}

export const Container = styled(Layout).attrs({
  scrollEnabled: true,
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    gap: 0,
    paddingVertical: 16,
  },
})``;

export const HorizontalContainer = styled(Wrapper).attrs({
  direction: "row",
})`
  gap: 8px;
  /* flex-grow: 1; */
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
  padding: 0px 16px;
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
  font-size: ${({ secondary }) => (secondary ? 14 : 12)}px;
  color: ${({ theme, secondary }) =>
    secondary ? theme.colors.black.main : theme.colors.gray.dark};
  font-family: ${({ theme, secondary }) =>
    secondary ? theme.fonts.regular : theme.fonts.bold};
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
  /* border-color: ${({ theme }) => theme.colors.gray.main}; */
  /* border-width: ${({ isSelected }) => (isSelected ? 0 : 0.5)}px; */
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
