import styled from "styled-components/native";

interface ImageContentProps {
  size?: number;
  secondary?: boolean;
}

export const ImageContent = styled.View<ImageContentProps>`
  border-radius: 23px;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size ?? 45}px;
  height: ${({ size }) => size ?? 45}px;
  background-color: ${({ theme, secondary }) =>
    secondary ? theme.colors.white.main : theme.colors.primary.main};
`;

export const Image = styled.Image.attrs(({ theme }) => ({
  resizeMode: "contain",
}))`
  width: 38px;
  height: 38px;
  border-radius: 19px;
`;
