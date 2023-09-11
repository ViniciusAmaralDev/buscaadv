import React from "react";
import { TouchableOpacity } from "./styles";
import { TouchableOpacityProps } from "react-native";

export const Button = ({ ...rest }: TouchableOpacityProps) => (
  <TouchableOpacity {...rest} />
);
