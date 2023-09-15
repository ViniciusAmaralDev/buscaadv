import React from "react";
import { Container } from "./styles";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "styled-components";

export const Home = () => {
  const theme = useTheme();

  return (
    <Container>
      <StatusBar style="light" backgroundColor={theme.colors.primary.dark} />
    </Container>
  );
};
