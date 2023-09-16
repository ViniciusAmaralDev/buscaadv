import React, { useState } from "react";
import { Container, SaveButton } from "./styles";
import { Text } from "../../../../../components/base/text";
import { Header } from "../../../../../components/header";
import { EditButton } from "../../../../../components/icon-buttons/EditButton";
import { SignedInRootProps } from "../../../../../routes/signed-in/SignedInRootProps";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../../../../hook/useAuth";
import { InputForm } from "../../../../../components/input-form";

const requiredMessage = { message: "campo obrigatório" };

export const MyAccount = ({ navigation }: SignedInRootProps<"MyAccount">) => {
  const { user } = useAuth();

  const [isEditing, setIsEditing] = useState(false);

  const schema = z.object({
    email: z
      .string()
      .email("e-mail inválido")
      .nonempty(requiredMessage)
      .default(user.email),
    password: z.string().min(6, "mínimo de 6 dígitos").optional(),
  });

  type FormData = z.infer<typeof schema>;

  const {
    control,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { email } = watch();

  const handleSubmitForm = async (values: FormData) => {
    console.log(JSON.stringify(values, null, 2));
    setIsEditing(false);
  };

  return (
    <Container
      header={
        <Header
          label={isEditing ? "Editar conta" : "Informações da conta"}
          right={
            !isEditing && <EditButton onPress={() => setIsEditing(true)} />
          }
        />
      }
    >
      <InputForm
        contrast
        name="email"
        label="E-mail"
        control={control}
        placeholder="E-mail"
        error={errors.email}
        editable={isEditing}
        defaultValue={email ?? user.email}
      />

      <InputForm
        contrast
        label="Senha"
        name="password"
        control={control}
        placeholder="Senha"
        editable={isEditing}
      />

      {isEditing && (
        <SaveButton onPress={handleSubmit(handleSubmitForm)}>Salvar</SaveButton>
      )}
    </Container>
  );
};
