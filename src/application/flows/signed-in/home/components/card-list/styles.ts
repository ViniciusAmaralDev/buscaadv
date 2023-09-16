import styled from "styled-components/native";
import { Wrapper } from "../../../../../components/wrapper";
import { Image } from "../../../../../components/base/image";

export const Card = styled(Wrapper).attrs({
  direction: "row",
})`
  gap: 16px;
  padding: 16px;
  align-items: center;
`;

export const ImageProfile = styled(Image).attrs({
  resizeMode: "contain",
  imageStyle: { borderRadius: 20 },
})`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;
