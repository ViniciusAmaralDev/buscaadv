import styled from "styled-components/native";
import { Text } from "../../../../../../../components/base/text";
import { Wrapper } from "../../../../../../../components/wrapper";

interface LabelProps {
  secondary?: boolean;
}

export const Container = styled.View`
  flex: 1;
  gap: 16px;
  padding: 16px 0px;
`;

export const Content = styled(Wrapper)`
  gap: 16px;
  padding: 0px 16px;
`;

export const Label = styled(Text)<LabelProps>`
  color: ${({ theme }) => theme.colors.gray.dark};
`;
