import * as z from "zod";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container, DeleteButton, FormContainer, SaveButton } from "./styles";
import { SignedInRootProps } from "../../../../../routes/signed-in/SignedInRootProps";

// COMPONENTS
import { Header } from "../../../../../components/header";
import { InputForm } from "../../../../../components/input-form";
import { EditButton } from "../../../../../components/icon-buttons/EditButton";

// HOOKS
import { useForm } from "react-hook-form";
import { useAuth } from "../../../../../hook/useAuth";
import { useProfile } from "../../../../../hook/useProfile";
import { useAlert } from "../../../../../context/AlertContext";
import { createSchema } from "./constants/Schema";

export const MyAccount = ({ navigation }: SignedInRootProps<"MyAccount">) => {
  const { user } = useAuth();
  const { showAlert } = useAlert();
  const { updateUser, deleteAccount } = useProfile();

  const [isEditing, setIsEditing] = useState(false);

  const schema = createSchema(user);
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
          error={errors.email}
          editable={isEditing}
          defaultValue={email ?? user.email}
        />

        <InputForm
          contrast
          label="Senha"
          name="password"
          control={control}
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
