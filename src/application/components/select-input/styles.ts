import styled from "styled-components/native";
import { Dropdown as CustomDropdown } from "react-native-element-dropdown";
import { Text } from "../base/text";

interface DropdownProps {
  contrast: boolean;
}

export const Container = styled.View`
  gap: 4px;
`;

export const Label = styled(Text)`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray.dark};
`;

export const Dropdown = styled(CustomDropdown).attrs(
  ({ theme, isSelected }) => ({
    maxHeight: 300,
    placeholderStyle: {
      fontSize: 14,
      color: theme.colors.gray.main,
      fontFamily: theme.fonts.regular,
    },
    selectedTextStyle: {
      fontSize: 14,
      fontFamily: theme.fonts.regular,
      color: isSelected ? theme.colors.black.main : theme.colors.gray.main,
    },
  })
)<DropdownProps>`
  height: 40px;
  padding: 0px 16px;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray.main};
  background-color: ${({ theme, contrast }) =>
    contrast ? theme.colors.white.main : theme.colors.gray.light};
`;
