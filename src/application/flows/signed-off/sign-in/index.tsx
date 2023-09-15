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
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { InputForm } from "../../../components/input-form";
import { SignedOffRootProps } from "../../../routes/signed-off/SignedOffRootProps";
import { useTheme } from "styled-components";
import { useAuth } from "../../../hook/useAuth";
import { ISignInProps } from "../../../models/ISignInProps";
import { Keyboard } from "react-native";

const requiredField = { message: "campo obrigatório" };

export const SignIn = ({ navigation }: SignedOffRootProps<"SignIn">) => {
  const theme = useTheme();
  const { signIn } = useAuth();

  const schema = z.object({
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

  // console.log("ERRORS =>", JSON.stringify(errors, null, 2));

  const handleSubmitForm = async (values: FormData) => {
    console.log(JSON.stringify(values, null, 2));
    await signIn(values as ISignInProps);
  };

  return (
    <Container>
      <StatusBar style="light" backgroundColor={theme.colors.primary.dark} />

      <VerticalContainer>
        <Title>Entrar</Title>
      </VerticalContainer>

      <FormContainer>
        <InputForm
          name="email"
          label="E-mail"
          control={control}
          variant="contained"
          placeholder="E-mail"
          error={errors.email}
          endIcon={<EmailIcon />}
        />

        <InputForm
          label="Senha"
          name="password"
          control={control}
          placeholder="Senha"
          variant="contained"
          error={errors.password}
          forgotPassword={() => {}}
        />

        <SignInButton onPress={handleSubmit(handleSubmitForm)}>
          Entrar
        </SignInButton>

        <SignUpButton onPress={() => navigation.navigate("SignUp")}>
          Quero me cadastrar!
        </SignUpButton>
      </FormContainer>
    </Container>
  );
};
