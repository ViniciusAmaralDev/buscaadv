import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TextButton } from "../../../../../components/text-button";
import { Wrapper } from "../../../../../components/wrapper";

interface ButtonProps {
  borderBottomEnabled?: boolean;
}

export const Container = styled.View``;

export const HorizontalContainer = styled(Wrapper).attrs({
  direction: "row",
})`
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled(TextButton)<ButtonProps>`
  padding: 16px 0px;
  border-bottom-color: ${({ theme }) => theme.colors.gray.main};
  border-bottom-width: ${({ borderBottomEnabled }) =>
    borderBottomEnabled ? 0.2 : 0}px;
`;

export const ArrowIcon = styled(AntDesign).attrs(({ theme }) => ({
  size: 20,
  name: "arrowright",
  color: theme.colors.gray.main,
}))``;
