import styled from "styled-components/native";
import { Dropdown as CustomDropdown } from "react-native-element-dropdown";
import { Text } from "../base/text";
import { Image } from "../base/image";

interface DropdownProps {
  contrast: boolean;
  showBorder: boolean;
}

export const Container = styled.View`
  gap: 4px;
  flex-grow: 1;
`;

export const Label = styled(Text)`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray.dark};
`;

export const Dropdown = styled(CustomDropdown).attrs(({ theme }) => ({
  maxHeight: 300,
  placeholderStyle: {
    fontSize: 14,
    color: theme.colors.gray.main,
    fontFamily: theme.fonts.regular,
  },
  selectedTextStyle: {
    fontSize: 14,
    fontFamily: theme.fonts.regular,
    color: theme.colors.black.main,
  },
}))<DropdownProps>`
  min-height: 40px;
  padding: 4px 16px;
  border-radius: 8px;
  border-width: ${({ showBorder }) => (showBorder ? 1 : 0)}px;
  border-color: ${({ theme }) => theme.colors.gray.main};
  background-color: ${({ theme, contrast }) =>
    contrast ? theme.colors.white.main : theme.colors.gray.light};
`;
