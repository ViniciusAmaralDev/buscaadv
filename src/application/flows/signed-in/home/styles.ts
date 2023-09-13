import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
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
  color: ${({ theme }) => theme.colors.white.main};
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
  bottom: 16px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const FilterButton = styled(Button)<ButtonProps>`
  right: 16px;
  width: 40px;
  height: 40px;
  position: absolute;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  bottom: 70px;
  border-width: .5px;
  background-color: ${({ theme }) => theme.colors.gray.main};
  border-color: ${({ theme }) => theme.colors.gray.dark};
`;

export const TargetIcon = styled(MaterialCommunityIcons).attrs(({ theme }) => ({
  size: 24,
  name: "target",
  color: theme.colors.white.main,
}))``;

export const FilterIcon = styled(Ionicons).attrs(({ theme }) => ({
  size: 20,
  name: "ios-filter",
  color: theme.colors.gray.dark,
}))``;
