import styled from "styled-components/native";
import LottieView from "lottie-react-native";
import animation from "../../../../../../../assets/animations/empty-animation.json";
import { Wrapper } from "../../../../../../../components/wrapper";
import { Text } from "../../../../../../../components/base/text";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const EmptyContainer = styled(Wrapper)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Label = styled(Text)`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray.dark};
`;

export const EmptyAnimation = styled(LottieView).attrs({
  loop: true,
  autoPlay: true,
  source: animation,
})`
  width: 200px;
  height: 200px;
  margin-top: -100px;
`;
