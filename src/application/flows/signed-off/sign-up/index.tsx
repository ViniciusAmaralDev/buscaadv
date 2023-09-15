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

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputForm } from "../../../components/input-form";
import { SignedOffRootProps } from "../../../routes/signed-off/SignedOffRootProps";
import { SelectInput } from "../../../components/select-input";
import { useTheme } from "styled-components";
import { useAuth } from "../../../hook/useAuth";
import { IUser } from "../../../models/IUser";

const requiredField = { message: "campo obrigatório" };

export const SignUp = ({ navigation }: SignedOffRootProps<"SignUp">) => {
  const theme = useTheme();
  const { signUp } = useAuth();

  const [userType, setUserType] = useState<string>();

  const types = [
    { label: "Sou um advogado", value: "advocacy" },
    { label: "Estou em busca de um advogado", value: "default" },
  ];

  const schema = z.object({
    type: z
      .string()
      .nonempty({ message: "Selecione uma das opções sobre você" })
      .default(userType),
    name: z.string().nonempty(requiredField),
    email: z.string().email("E-mail inválido").nonempty(requiredField),
    password: z
      .string()
      .min(6, { message: "Mínimo de 6 dígitos" })
      .nonempty(requiredField),
  });

  type FormData = z.infer<typeof schema>;

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const handleSubmitForm = async (values: FormData) => {
    try {
      console.log(JSON.stringify(values, null, 2));
      await signUp(values as IUser);
    } catch (error) {}
  };

  return (
    <Container>
      <StatusBar style="light" backgroundColor={theme.colors.primary.dark} />

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
          error={errors.name}
          endIcon={<UserIcon />}
        />

        <InputForm
          name="email"
          label="E-mail"
          control={control}
          variant="contained"
          placeholder="E-mail"
          error={errors.email}
          endIcon={<EmailIcon />}
          keyboardType="email-address"
        />

        <InputForm
          label="Senha"
          name="password"
          control={control}
          variant="contained"
          placeholder="Senha"
          error={errors.password}
        />

        <SignUpButton onPress={handleSubmit(handleSubmitForm)}>
          Cadastrar
        </SignUpButton>

        <SignInButton onPress={() => navigation.navigate("SignIn")}>
          Já tenho cadastro!
        </SignInButton>
      </FormContainer>
    </Container>
  );
};
