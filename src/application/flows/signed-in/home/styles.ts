import styled from "styled-components/native";
import { Layout } from "@/application/components/layout";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button } from "@/application/components/base/button";

interface TargetButtonProps {
  isActive: boolean;
}

export const Container = styled(Layout).attrs(({ theme }) => ({
  containerStyle: { backgroundColor: theme.colors.primary.dark },
}))`
  background-color: ${({ theme }) => theme.colors.gray.light};
`;

export const TargetButton = styled(Button)<TargetButtonProps>`
  position: absolute;
  top: 16px;
  right: 16px;
  border-radius: 12px;
  width: 45px;
  height: 45px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary.main : theme.colors.gray.light};
`;

export const TargetIcon = styled(MaterialCommunityIcons).attrs(
  ({ theme, isActive }) => ({
    size: 24,
    name: "target",
    color: isActive ? theme.colors.white.main : theme.colors.gray.dark,
  })
)``;
