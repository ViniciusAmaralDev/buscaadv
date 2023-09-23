import styled from "styled-components/native";
import MaskInput from "react-native-mask-input";

export const TextInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.gray.main,
}))`
  flex-grow: 1;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.black.main};
  font-family: ${({ theme }) => theme.fonts.regular};
`;
