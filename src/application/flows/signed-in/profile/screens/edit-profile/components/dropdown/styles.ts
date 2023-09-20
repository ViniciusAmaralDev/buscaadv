import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { Wrapper } from "../../../../../../../components/wrapper";

export const Container = styled(Wrapper)`
  gap: 16px;
  padding: 16px;
`;

export const HorizontalContainer = styled(Wrapper).attrs({
  direction: "row",
})`
  gap: 8px;
  align-items: center;
  justify-content: space-between;
`;

export const ArrowIcon = styled(MaterialIcons).attrs(({ theme, isOpened }) => ({
  size: 20,
  color: theme.colors.gray.dark,
  name: isOpened ? "keyboard-arrow-up" : "keyboard-arrow-down",
}))``;
