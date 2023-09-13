import React from "react";
import {
  Container,
  EmailIcon,
  FormContainer,
  SignInButton,
  SignUpButton,
  Title,
  VerticalContainer,
} from "./styles";
import { StatusBar } from "expo-status-bar";

import { useForm } from "react-hook-form";
import { InputForm } from "../../../components/input-form";
import { useNavigation } from "@react-navigation/native";

export const SignIn = () => {
  const { control } = useForm();
  const { navigate } = useNavigation();

  return (
    <Container>
      <StatusBar style="light" />

      <VerticalContainer>
        <Title>Entrar</Title>
      </VerticalContainer>

      <FormContainer>
        <InputForm
          variant="contained"
          control={control}
          name="email"
          placeholder="E-mail"
          label="E-mail"
          endIcon={<EmailIcon />}
        />

        <InputForm
          variant="contained"
          control={control}
          name="password"
          placeholder="Senha"
          label="Senha"
          forgotPassword={() => {}}
        />

        <SignInButton>Entrar</SignInButton>

        <SignUpButton onPress={() => navigate("SignUp")}>
          Quero me cadastrar!
        </SignUpButton>
      </FormContainer>
    </Container>
  );
};
