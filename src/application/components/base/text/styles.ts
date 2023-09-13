import styled from "styled-components/native";

export const Label = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.black.main};
  font-family: ${({ theme }) => theme.fonts.regular};
`;
