import styled from "styled-components/native";
import { Wrapper } from "../../../../../../../components/wrapper";
import { Text } from "../../../../../../../components/base/text";

export const Container = styled.View``;

export const Label = styled(Text)`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray.dark};
`;

export const HorizontalContainer = styled(Wrapper).attrs({
  direction: "row",
})`
  gap: 8px;
  padding: 8px 0px;
  align-items: center;
  justify-content: space-between;
  border-bottom-color: ${({ theme }) => theme.colors.gray.main};
  border-bottom-width: ${({ showBorder }) => (showBorder ? 0.5 : 0)}px;
`;

export const WrapperHorizontal = styled(Wrapper).attrs({
  direction: "row",
})`
  gap: 8px;
`;
