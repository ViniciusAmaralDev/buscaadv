import React from "react";
import { Container } from "./styles";
import { ViewProps } from "react-native";

export const Divider = ({ ...rest }: ViewProps) => <Container {...rest} />;
