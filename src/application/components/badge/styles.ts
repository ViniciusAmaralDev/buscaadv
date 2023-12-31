import { Button } from "../base/button";
import { Text } from "../base/text";
import { Wrapper } from "../wrapper";
import styled from "styled-components/native";

export const Container = styled(Button)`
  gap: 8px;
  padding: 4px 8px;
  border-width: 1px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-color: ${({ theme }) => theme.colors.primary.main};
`;

export const Label = styled(Text)`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.primary.main};
`;
