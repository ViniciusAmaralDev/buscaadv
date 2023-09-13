import React from "react";
import { TextInput } from "./styles";
import { TextInputProps } from "react-native";

export const Input = ({ ...rest }: TextInputProps) => (
  <TextInput autoCorrect={false} autoCapitalize="none" {...rest} />
);
