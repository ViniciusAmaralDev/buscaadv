import styled from "styled-components/native";
import { Wrapper } from "../../../../../../../../../components/wrapper";
import { Image } from "../../../../../../../../../components/base/image";
import { Text } from "../../../../../../../../../components/base/text";

interface LabelProps {
  secondary?: boolean;
}

export const Container = styled(Wrapper)``;

export const Card = styled(Wrapper)`
  gap: 8px;
  elevation: 3;
  padding: 16px;
  max-width: 340px;
  border-radius: 8px;
  align-self: flex-start;
  background-color: ${({ theme }) => theme.colors.white.main};
`;

export const HorizontalContainer = styled(Wrapper).attrs({
  direction: "row",
})`
  gap: 8px;
`;

export const WrapperHorizontal = styled(Wrapper).attrs({
  direction: "row",
})`
  gap: 8px;
  padding: 0px 16px;
  align-items: center;
  justify-content: space-between;
`;

export const VerticalContainer = styled(Wrapper)`
  gap: 4px;
`;

export const ImageProfile = styled(Image).attrs({
  imageStyle: { borderRadius: 20 },
})`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const Label = styled(Text)<LabelProps>`
  font-size: 12px;
  font-family: ${({ theme, secondary }) =>
    secondary ? theme.fonts.bold : theme.fonts.regular};
  color: ${({ theme, secondary }) =>
    secondary ? theme.colors.black.main : theme.colors.gray.dark};
`;
