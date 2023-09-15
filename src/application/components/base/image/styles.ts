import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";

interface Props {
  size: number;
}

export const ImageBackground = styled.ImageBackground<Props>`
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background-color: ${({ theme }) => theme.colors.white.main};
`;

export const UserIcon = styled(Feather).attrs(({ theme }) => ({
  name: "user",
  color: theme.colors.gray.main,
}))``;
