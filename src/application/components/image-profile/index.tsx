import React from "react";
import { Container, Image } from "./styles";
import { ImageBackgroundProps, StyleProp, ViewStyle } from "react-native";

interface ImageProfileProps extends Omit<ImageBackgroundProps, "source"> {
  uri?: string;
  size?: number;
  containerStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

export const ImageProfile = ({
  size = 50,
  containerStyle,
  onPress,
  ...rest
}: ImageProfileProps) => (
  <Container size={size} style={containerStyle} onPress={onPress}>
    <Image size={size} {...rest} />
  </Container>
);
