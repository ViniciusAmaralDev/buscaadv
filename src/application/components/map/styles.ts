import { Button } from "../base/button";
import { Text } from "../base/text";
import { Wrapper } from "../wrapper";
import styled from "styled-components/native";

export const VerticalContainer = styled(Button)`
  gap: 4px;
  align-items: center;
  justify-content: center;
`;

export const LabelContent = styled(Wrapper)`
  padding: 8px 16px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.primary.main};
`;

export const Label = styled(Text)`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.white.main};
`;
