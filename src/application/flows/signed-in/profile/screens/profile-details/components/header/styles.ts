import styled from "styled-components/native";
import { Text } from "../../../../../../../components/base/text";
import { Wrapper } from "../../../../../../../components/wrapper";
import { Image } from "../../../../../../../components/base/image";

interface LabelProps {
  secondary?: boolean;
}

export const Container = styled(Wrapper).attrs({
  direction: "row",
})`
  gap: 16px;
  padding: 0px 16px;
  justify-content: space-between;
`;

export const VerticalContainer = styled(Wrapper)`
  flex: 1;
  gap: 2px;
`;

export const Label = styled(Text)<LabelProps>`
  font-size: ${({ secondary }) => (secondary ? 10 : 14)}px;
  font-family: ${({ theme, secondary }) =>
    secondary ? theme.fonts.regular : theme.fonts.medium};
  color: ${({ theme, secondary }) =>
    secondary ? theme.colors.gray.dark : theme.colors.black.main};
`;

export const ImageProfile = styled(Image).attrs({
  imageStyle: { borderRadius: 20 },
})`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;
