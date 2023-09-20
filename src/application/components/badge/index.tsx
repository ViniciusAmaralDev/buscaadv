import React from "react";
import { Container, Label } from "./styles";
import { StyleProp, TextStyle, ViewProps } from "react-native";

export interface BadgeProps extends ViewProps {
  label?: string;
  icon?: React.ReactNode;
  textStyle?: StyleProp<TextStyle>;
}

export const Badge = ({ label, icon, textStyle, ...rest }: BadgeProps) => {
  return (
    <Container {...rest}>
      {icon && <>{icon}</>}
      {label && <Label style={textStyle}>{label}</Label>}
    </Container>
  );
};
