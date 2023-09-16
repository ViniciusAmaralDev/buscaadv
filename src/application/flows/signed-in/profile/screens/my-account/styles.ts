import styled from "styled-components/native";
import { Layout } from "../../../../../components/layout";
import { TextButton } from "../../../../../components/text-button";
import { Wrapper } from "../../../../../components/wrapper";

export const Container = styled(Layout)`
  gap: 16px;
  padding: 16px;
  align-items: center;
  justify-content: space-between;
`;

export const FormContainer = styled(Wrapper)`
  gap: 16px;
  width: 100%;
`;

export const SaveButton = styled(TextButton).attrs(({ theme }) => ({
  textStyle: { fontFamily: theme.fonts.bold, color: theme.colors.white.main },
}))`
  width: 100%;
  height: 48px;
  padding: 0px 16px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.gray.main : theme.colors.primary.dark};
`;

export const DeleteButton = styled(TextButton).attrs(({ theme }) => ({
  textStyle: { fontFamily: theme.fonts.bold, color: theme.colors.red.main },
}))`
  width: 100%;
  height: 48px;
  padding: 0px 16px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.red.main};
`;
