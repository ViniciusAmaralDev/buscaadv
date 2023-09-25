import * as z from "zod";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputForm } from "@/application/components/input-form";
import { ISignInProps } from "@/application/models/ISignInProps";
import { SignedOffRootProps } from "@/application/routes/signed-off/SignedOffRootProps";
import {
  Title,
  Container,
  EmailIcon,
  SignInButton,
  SignUpButton,
  FormContainer,
  VerticalContainer,
} from "./styles";

// HOOKS
import { useForm } from "react-hook-form";
import { useTheme } from "styled-components";
import { useAuth } from "@/application/hook/useAuth";

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

  const handleSubmitForm = async (values: FormData) => {
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
          error={errors.email}
          endIcon={<EmailIcon />}
          keyboardType="email-address"
        />

        <InputForm
          label="Senha"
          name="password"
          control={control}
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
