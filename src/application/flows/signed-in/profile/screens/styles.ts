import styled from "styled-components/native";
import { Layout } from "../../../../components/layout";
import { Wrapper } from "../../../../components/wrapper";
import { Text } from "../../../../components/base/text";
import { Octicons } from "@expo/vector-icons";
import { Image } from "../../../../components/base/image";

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

export const ImageProfile = styled(Image).attrs({
  size: 100,
  imageStyle: { borderRadius: 25 },
})`
  elevation: 1;
  align-self: center;
  border-radius: 25px;
`;

export const VerticalContainer = styled(Wrapper)``;

export const Label = styled(Text)<LabelProps>`
  font-size: ${({ secondary }) => (secondary ? 12 : 14)}px;
  color: ${({ theme, secondary }) =>
    secondary ? theme.colors.gray.main : theme.colors.black.main};
`;

export const SignOutIcon = styled(Octicons).attrs(({ theme }) => ({
  size: 20,
  name: "sign-out",
  color: theme.colors.gray.main,
}))``;
