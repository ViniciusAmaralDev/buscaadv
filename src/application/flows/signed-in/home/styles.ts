import { MaterialCommunityIcons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { Button } from "../../../components/base/button";

interface ButtonProps {
  paddingTop: number;
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Text = styled.Text`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const TargetButton = styled(Button)<ButtonProps>`
  right: 16px;
  width: 40px;
  height: 40px;
  position: absolute;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  top: ${({ paddingTop }) => paddingTop + 16}px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const TargetIcon = styled(MaterialCommunityIcons).attrs(({ theme }) => ({
  size: 24,
  name: "target",
  color: theme.colors.white,
}))``;
