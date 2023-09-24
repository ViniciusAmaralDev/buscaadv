import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { Wrapper } from "../../../../../../../components/wrapper";
import { Button } from "../../../../../../../components/base/button";

interface ContainerProps {
  isOpened: boolean;
}

export const HorizontalContainer = styled(Button)<ContainerProps>`
  gap: 8px;
  padding: 16px 0px;
  flex-direction: row;
  align-items: center;
  border-bottom-width: ${({ isOpened }) => (isOpened ? 0 : 0.5)}px;
  justify-content: space-between;
  border-bottom-color: ${({ theme }) => theme.colors.gray.main};
`;

export const ArrowIcon = styled(MaterialIcons).attrs(({ theme, isOpened }) => ({
  size: 20,
  color: theme.colors.gray.dark,
  name: isOpened ? "keyboard-arrow-up" : "keyboard-arrow-down",
}))``;
