import styled from "styled-components/native";

interface ContainerProps {
  paddingTop: number;
}

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: true,
})<ContainerProps>`
  flex: 1;
  padding-top: ${({ paddingTop }) => paddingTop}px;
  background-color: ${({ theme }) => theme.colors.gray.light};
`;

export const View = styled.View`
  flex: 1;
`;

export const ScrollView = styled.ScrollView``;
