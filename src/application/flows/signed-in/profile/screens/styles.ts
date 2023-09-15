import styled from "styled-components/native";
import { Layout } from "../../../../components/layout";
import { Wrapper } from "../../../../components/wrapper";
import { Text } from "../../../../components/base/text";

interface LabelProps {
  secondary?: boolean;
}

export const Container = styled(Layout)`
  flex: 1;
  gap: 40px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.gray.light};
`;

export const HorizontalContainer = styled(Wrapper).attrs({
  direction: "row",
})`
  gap: 8px;
  align-items: center;
`;

export const VerticalContainer = styled(Wrapper)``;

export const Label = styled(Text)<LabelProps>`
  font-size: ${({ secondary }) => (secondary ? 12 : 14)}px;
  color: ${({ theme, secondary }) =>
    secondary ? theme.colors.gray.main : theme.colors.black.main};
`;
