import styled from "styled-components/native";
import { Wrapper } from "../wrapper";
import { FontAwesome } from "@expo/vector-icons";

export const Container = styled(Wrapper).attrs({
  direction: "row",
})`
  gap: 4px;
`;

export const StarIcon = styled(FontAwesome).attrs(({ theme, contained, size }) => ({
  size: size ?? 15,
  name: contained ? "star" : "star-o",
  color: contained ? theme.colors.yellow.main : theme.colors.gray.main,
}))``;
