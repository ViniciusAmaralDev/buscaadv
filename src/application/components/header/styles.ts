import { Text } from "../base/text";
import { Wrapper } from "../wrapper";
import styled from "styled-components/native";
import { ArrowButton as Button } from "../icon-buttons/ArrowButton";

interface HorizontalContainerProps {
  flex?: boolean;
  justify?: string;
}

export const Container = styled(Wrapper).attrs({
  direction: "row",
})`
  gap: 16px;
  padding: 8px 16px;
  align-items: center;
  justify-content: space-between;
`;

export const HorizontalContainer = styled(Wrapper).attrs({
  direction: "row",
})<HorizontalContainerProps>`
  flex-grow: 1;
  align-items: center;
  justify-content: ${({ justify }) => justify ?? "flex-start"};
`;

export const Label = styled(Text)`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const ArrowButton = styled(Button).attrs(({ theme }) => ({
  name: "arrowleft",
  color: theme.colors.black.main,
}))``;
