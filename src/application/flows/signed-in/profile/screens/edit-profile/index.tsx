import React, { useState } from "react";
import {
  Container,
  EditButton,
  FormContainer,
  ImageProfile,
  SaveButton,
} from "./styles";
import { Header } from "../../../../../components/header";
import { SignedInRootProps } from "../../../../../routes/signed-in/SignedInRootProps";
import { Masks } from "react-native-mask-input";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { getImageFromLibrary } from "../../../../../utils/Image";
import { InputForm } from "../../../../../components/input-form";
import { useAuth } from "../../../../../hook/useAuth";
import { useProfile } from "../../../../../hook/useProfile";

const ABOUT_LENGTH = 300;
const requiredMessage = { message: "campo obrigatório" };

export const EditProfile = ({
  navigation,
}: SignedInRootProps<"EditProfile">) => {
  const { user } = useAuth();
  const { updateUser } = useProfile();

  const schema = z.object({
    photo: z.string().optional().nullable().default(user?.photo),
    name: z.string().nonempty(requiredMessage).default(user.name),
    phoneNumber: z.string().nonempty(requiredMessage).default(user.phoneNumber),
    about: z.string().optional().default(user.about),
  });

  type FormData = z.infer<typeof schema>;

  const {
    control,
    formState: { errors },
    watch,
    setValue,
    handleSubmit,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { name, photo, phoneNumber: phone, about } = watch();
  const availableLimit =
    ABOUT_LENGTH - (about?.length ?? user?.about?.length ?? 0);

  const username = name || user.name;
  const phoneNumber = phone || user.phoneNumber;
  const saveButtonIsDisabled = !username || !phoneNumber;

  const handleSubmitForm = async (values: FormData) => {
    await updateUser(values);
    navigation.goBack();
  };

  const handleChangeImage = async () => {
    setValue("photo", await getImageFromLibrary());
  };

  return (
    <Container header={<Header label="Editar Perfil" />}>
      <ImageProfile uri={photo || user?.photo}>
        <EditButton onPress={handleChangeImage} />
      </ImageProfile>

      <FormContainer>
        <InputForm
          contrast
          name="name"
          label="Nome"
          control={control}
          placeholder="Nome"
          error={errors.name}
          defaultValue={name ?? user.name}
        />

        <InputForm
          contrast
          label="Contato"
          control={control}
          name="phoneNumber"
          placeholder="Contato"
          mask={Masks.BRL_PHONE}
          keyboardType="number-pad"
          error={errors.phoneNumber}
          defaultValue={user.phoneNumber}
        />

        <InputForm
          contrast
          multiline
          name="about"
          control={control}
          maxLength={ABOUT_LENGTH}
          placeholder="Sobre você"
          defaultValue={user.about}
          label={`Sobre você (limite: ${availableLimit})`}
        />

        <SaveButton
          disabled={saveButtonIsDisabled}
          onPress={handleSubmit(handleSubmitForm)}
        >
          Salvar
        </SaveButton>
      </FormContainer>
    </Container>
  );
};
