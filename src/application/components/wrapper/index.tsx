import React from "react";
import { Container } from "./styles";
import { ViewProps } from "react-native";

interface WrapperProps extends ViewProps {
  direction?: "row" | "column";
}

export const Wrapper = ({ direction = "column", ...rest }: WrapperProps) => (
  <Container direction={direction} {...rest} />
);
