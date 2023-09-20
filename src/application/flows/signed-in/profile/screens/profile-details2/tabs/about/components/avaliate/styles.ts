import styled from "styled-components/native";
import { Wrapper } from "../../../../../../../../../components/wrapper";
import { Image } from "../../../../../../../../../components/base/image";
import { TextButton } from "../../../../../../../../../components/text-button";
import { Text } from "../../../../../../../../../components/base/text";

interface HorizontalContainerProps {
  justify?: string;
}

interface SendButtonProps {
  isActive?: boolean;
}

export const Container = styled(Wrapper)`
  gap: 8px;
  padding: 0px 16px;
`;

export const Content = styled(Wrapper)`
  gap: 16px;
`;

export const Title = styled(Text)`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.black.main};
`;

export const Subtitle = styled(Text)`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray.dark};
`;

export const HorizontalContainer = styled(Wrapper).attrs({
  direction: "row",
})<HorizontalContainerProps>`
  gap: 16px;
  align-items: center;
  justify-content: ${({ justify }) => justify ?? "flex-start"};
`;

export const ImageProfile = styled(Image).attrs({
  imageStyle: { borderRadius: 20 },
})`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const SendButton = styled(TextButton).attrs(({ theme, isActive }) => ({
  textStyle: {
    fontSize: 12,
    fontFamily: theme.fonts.bold,
    color: isActive ? theme.colors.white.main : theme.colors.white.main,
  },
}))<SendButtonProps>`
  padding: 4px 16px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary.main : theme.colors.gray.main};
`;
