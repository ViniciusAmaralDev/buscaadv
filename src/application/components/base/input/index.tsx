import React from "react";
import { TextInput } from "./styles";
import { MaskInputProps } from "react-native-mask-input";

export const Input = ({ ...rest }: MaskInputProps) => (
  <TextInput autoCorrect={false} autoCapitalize="none" {...rest} />
);
