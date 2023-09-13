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

export const SignUp = () => {
  const { control } = useForm();

  return (
    <Container>
      <StatusBar style="light" />

      <VerticalContainer>
        <Title>Cadastrar</Title>
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

        <SignUpButton>Quero me cadastrar!</SignUpButton>
      </FormContainer>
    </Container>
  );
};
