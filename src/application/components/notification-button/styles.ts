import { Text } from "../base/text";
import { Button } from "../base/button";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";

export const Container = styled(Button)`
  gap: 2px;
  flex-direction: row;
`;

export const Circle = styled.View`
  /* position: absolute;
  right: -14px;
  bottom: 0px; */
  padding: 0px 6px;
  /* width: 20px;
  height: 20px; */
  align-items: center;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.red.main};
`;

export const Label = styled(Text)`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white.main};
`;

export const NotificationIcon = styled(Ionicons).attrs(({ theme }) => ({
  size: 20,
  name: "notifications",
  color: theme.colors.white.main,
}))``;
