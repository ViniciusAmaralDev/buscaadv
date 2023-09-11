import React from "react";
import { Text } from "../base/text";
import { Button } from "../base/button";
import { StyleProp, TextStyle, TouchableOpacityProps } from "react-native";

interface TextButtonProps extends TouchableOpacityProps {
  textStyle?: StyleProp<TextStyle>;
}

export const TextButton = ({
  children,
  textStyle,
  ...rest
}: TextButtonProps) => (
  <Button {...rest}>
    <Text style={textStyle}>{children}</Text>
  </Button>
);
