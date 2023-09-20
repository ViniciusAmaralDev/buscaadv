import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { Wrapper } from "../../../../../../../components/wrapper";

interface ContainerProps {
  isOpened: boolean;
}

export const Container = styled(Wrapper)`
  padding: 0px 16px;
`;

export const HorizontalContainer = styled(Wrapper).attrs({
  direction: "row",
})<ContainerProps>`
  gap: 8px;
  padding: 16px 0px;
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
