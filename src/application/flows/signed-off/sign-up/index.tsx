import React, { useState } from "react";
import {
  Container,
  EmailIcon,
  FormContainer,
  SignInButton,
  SignUpButton,
  Title,
  UserIcon,
  VerticalContainer,
} from "./styles";
import { StatusBar } from "expo-status-bar";

import { useForm } from "react-hook-form";
import { InputForm } from "../../../components/input-form";
import { SignedOffRootProps } from "../../../routes/signed-off/SignedOffRootProps";
import { SelectInput } from "../../../components/select-input";

export const SignUp = ({ navigation }: SignedOffRootProps<"SignUp">) => {
  const { control } = useForm();

  const [userType, setUserType] = useState<string>();

  const types = [
    { label: "Sou um advogado", value: "advocacy" },
    { label: "Estou em busca de um advogado", value: "default" },
  ];

  return (
    <Container>
      <StatusBar style="light" />

      <VerticalContainer>
        <Title>Cadastrar</Title>
      </VerticalContainer>

      <FormContainer>
        <SelectInput
          data={types}
          value={userType}
          label="Sobre você"
          onChange={({ value }) => setUserType(value)}
        />

        <InputForm
          name="name"
          label="Nome"
          control={control}
          placeholder="Nome"
          variant="contained"
          endIcon={<UserIcon />}
        />

        <InputForm
          name="email"
          label="E-mail"
          control={control}
          variant="contained"
          placeholder="E-mail"
          endIcon={<EmailIcon />}
        />

        <InputForm
          label="Senha"
          name="password"
          control={control}
          variant="contained"
          placeholder="Senha"
        />

        <SignInButton>Cadastrar</SignInButton>

        <SignUpButton onPress={() => navigation.navigate("SignIn")}>
          Já tenho cadastro!
        </SignUpButton>
      </FormContainer>
    </Container>
  );
};
