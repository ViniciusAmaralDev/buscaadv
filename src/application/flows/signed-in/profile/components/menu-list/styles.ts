import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { Button } from "../../../../../components/base/button";

interface ButtonProps {
  borderBottomEnabled?: boolean;
}

export const Container = styled.View``;

export const HorizontalContainer = styled(Button)<ButtonProps>`
  padding: 16px 0px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-color: ${({ theme }) => theme.colors.gray.main};
  border-bottom-width: ${({ borderBottomEnabled }) =>
    borderBottomEnabled ? 0.3 : 0}px;
`;

export const ArrowIcon = styled(AntDesign).attrs(({ theme }) => ({
  size: 20,
  name: "arrowright",
  color: theme.colors.gray.main,
}))``;
