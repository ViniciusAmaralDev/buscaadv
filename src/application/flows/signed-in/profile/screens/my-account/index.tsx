import React, { useState } from "react";
import { Container, DeleteButton, FormContainer, SaveButton } from "./styles";
import { Text } from "../../../../../components/base/text";
import { Header } from "../../../../../components/header";
import { EditButton } from "../../../../../components/icon-buttons/EditButton";
import { SignedInRootProps } from "../../../../../routes/signed-in/SignedInRootProps";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../../../../hook/useAuth";
import { InputForm } from "../../../../../components/input-form";
import { useAlert } from "../../../../../context/AlertContext";
import { useProfile } from "../../../../../hook/useProfile";

const requiredMessage = { message: "campo obrigatório" };

export const MyAccount = ({ navigation }: SignedInRootProps<"MyAccount">) => {
  const { user } = useAuth();
  const { showAlert } = useAlert();
  const { updateUser, deleteAccount } = useProfile();

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
    await updateUser(user.id, values);
    setIsEditing(false);
    navigation.goBack();
  };

  const handleDeleteAccount = async () => {
    showAlert({
      title: "Atenção",
      message:
        "Ao excluir a sua conta você perderá todas as informações salvas até aqui, tem certeza que quer continuar com esta ação?",
      leftButton: { label: "cancelar" },
      rightButton: { label: "continuar", onPress: deleteAccount },
    });
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
      <FormContainer>
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
      </FormContainer>

      {isEditing ? (
        <SaveButton onPress={handleSubmit(handleSubmitForm)}>Salvar</SaveButton>
      ) : (
        <DeleteButton onPress={handleDeleteAccount}>
          Excluir minha conta
        </DeleteButton>
      )}
    </Container>
  );
};
