import styled from "styled-components/native";
import { Image as CustomImage } from "../base/image";
import { Button } from "../base/button";

interface Props {
  size?: number;
}

export const Container = styled(Button)<Props>`
  padding: 8px;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: ${({ size }) => size / 2}px;
  background-color: ${({ theme }) => theme.colors.primary.main};
`;

export const Image = styled(CustomImage).attrs(({ theme, size }) => ({
  imageStyle: {
    borderWidth: 2,
    borderColor: theme.colors.white.main,
    borderRadius: size / 2,
  },
}))<Props>`
  width: ${({ size }) => size - 5}px;
  height: ${({ size }) => size - 5}px;
  border-radius: ${({ size }) => size / 2}px;
`;
