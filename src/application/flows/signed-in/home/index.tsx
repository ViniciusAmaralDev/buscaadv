import React from "react";
import { Container } from "./styles";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "styled-components";
import { TextButton } from "../../../components/text-button";
import { SignedInRootProps } from "../../../routes/signed-in/SignedInRootProps";

export const Home = ({ navigation }: SignedInRootProps<"Home">) => {
  const theme = useTheme();

  return (
    <Container>
      <StatusBar style="light" backgroundColor={theme.colors.primary.dark} />
      <TextButton onPress={() => navigation.navigate("Profile")}>
        Perfil
      </TextButton>
    </Container>
  );
};
