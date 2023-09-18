import styled from "styled-components/native";
import { Wrapper } from "../../../components/wrapper";
import { Layout } from "../../../components/layout";
import { Image } from "../../../components/base/image";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Button } from "../../../components/base/button";

interface TargetButtonProps {
  isActive: boolean;
}

interface HeaderProps {
  paddingTop: number;
}

export const Container = styled(Layout).attrs({
  paddingTopDisabled: true,
})`
  align-items: center;
  justify-content: center;
`;

export const ImageProfile = styled(Image).attrs({
  imageStyle: { borderRadius: 25 },
})`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const Header = styled(Wrapper).attrs({
  direction: "row",
})<HeaderProps>`
  width: 100%;
  gap: 16px;
  position: absolute;
  top: 0px;
  align-items: center;
  padding: 0px 16px;
  padding-top: ${({ paddingTop }) => paddingTop + 16}px;
`;

export const Footer = styled(Wrapper)`
  width: 100%;
  bottom: 0px;
  padding: 16px;
  position: absolute;
  border-top-width: 1px;
  border-left-width: 0.2px;
  border-right-width: 0.2px;
  border-top-color: ${({ theme }) => theme.colors.gray.main};
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background-color: ${({ theme }) => theme.colors.gray.light};
`;

export const TargetButton = styled(Button)<TargetButtonProps>`
  position: absolute;
  bottom: 16px;
  right: 16px;
  border-radius: 12px;
  padding: 8px;
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

export const FilterIcon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 20,
  name: "filter-list",
  color: theme.colors.gray.main,
}))`
  margin-right: 8px;
`;
