import React from "react";
import { Label } from "./styles";
import { TextProps } from "react-native";

export const Text = ({ ...rest }: TextProps) => <Label {...rest} />;
