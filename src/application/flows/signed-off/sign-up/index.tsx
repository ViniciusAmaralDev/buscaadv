import * as z from "zod";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { IUser } from "../../../models/IUser";
import { EUserType } from "../../../enums/EUserType";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputForm } from "../../../components/input-form";
import { SelectInput } from "../../../components/select-input";
import { SignedOffRootProps } from "../../../routes/signed-off/SignedOffRootProps";
import {
  Title,
  UserIcon,
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
import { useAuth } from "../../../hook/useAuth";

const requiredField = { message: "campo obrigatório" };

export const SignUp = ({ navigation }: SignedOffRootProps<"SignUp">) => {
  const theme = useTheme();
  const { signUp } = useAuth();

  const [userType, setUserType] = useState<string>();

  const types = [
    { label: "Sou um advogado", value: EUserType.ATTORNEY },
    { label: "Estou em busca de um advogado", value: EUserType.DEFAULT },
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
        <InputForm
          name="type"
          values={types}
          control={control}
          label="Quem é você"
          defaultValue={userType}
          onSelect={({ value }) => setUserType(value)}
        />

        <InputForm
          name="name"
          label="Nome"
          control={control}
          variant="contained"
          error={errors.name}
          endIcon={<UserIcon />}
        />

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
