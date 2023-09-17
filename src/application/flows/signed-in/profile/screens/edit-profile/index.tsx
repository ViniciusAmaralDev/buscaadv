import React, { useEffect, useState } from "react";
import {
  AddressContainer,
  ChangeButton,
  Container,
  EditButton,
  FormContainer,
  HorizontalContainer,
  HorizontalWrapper,
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
import { UserType } from "../../../../../enums/UserType";
import { SelectInput } from "../../../../../components/select-input";
import officesJson from "../../../../../../../offices.json";
import { useToast } from "../../../../../context/ToastContext";
import { getCurrentPosition } from "../../../../../utils/Location";
import { IUser } from "../../../../../models/IUser";
import { useGeocode } from "../../../../../hook/useGeocode";
import { Text } from "../../../../../components/base/text";

interface Office {
  label: string;
  value: string;
}

const ABOUT_LENGTH = 300;
const requiredMessage = { message: "campo obrigatório" };

export const EditProfile = ({
  navigation,
}: SignedInRootProps<"EditProfile">) => {
  const { user } = useAuth();
  const { showToast } = useToast();
  const { updateUser } = useProfile();
  const { convertCoordinatesToAddress, convertZipCodeToAddress } = useGeocode();

  const officeList = Object.keys(officesJson).map((item) => ({
    label: item,
    value: item,
  }));

  const schema = z.object({
    photo: z.string().optional().nullable().default(user?.photo),
    name: z.string().nonempty(requiredMessage).default(user.name),
    phoneNumber: z
      .string()
      .nonempty(requiredMessage)
      .default(user?.phoneNumber),
    about: z.string().optional().default(user?.about),
    office: z.z
      .string()
      .optional()
      .default(user?.office ?? undefined),
    address: z
      .object({
        latitude: z.number(),
        longitude: z.number(),
        street: z.string(),
        neighborhood: z.string(),
        city: z.string(),
        state: z.string(),
        country: z.string(),
        zipCode: z.string(),
      })
      .optional(),
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

  const {
    name,
    about,
    address,
    photo: photoForm,
    phoneNumber: phone,
    office: officeForm,
  } = watch();
  const availableLimit =
    ABOUT_LENGTH - (about?.length ?? user?.about?.length ?? 0);

  const username = name || user.name;
  const photo = photoForm ?? user.photo;
  const office = officeForm || user.office;
  const phoneNumber = phone || user.phoneNumber;

  const saveButtonIsDisabled =
    !username || !phoneNumber || (user.type === UserType.ATTORNEY && !office);

  const handleSubmitForm = async (values: FormData) => {
    try {
      await updateUser(user.id, values as IUser);
      goBack();
    } catch (error) {
      console.log("ERROR =>", error);
    }
  };

  const handleChangeImage = async () => {
    setValue("photo", await getImageFromLibrary());
  };

  const goBack = () => {
    if (navigation.canGoBack()) navigation.goBack();
    else
      navigation.reset({
        index: 0,
        routes: [{ name: "Home" }],
      });
  };

  const handleGoBack = () => {
    if (
      !user.photo ||
      !user.phoneNumber ||
      (user.type === UserType.ATTORNEY && !user.office)
    ) {
      showToast("Complete as informações do seu perfil");
      return;
    }

    goBack();
  };

  useEffect(() => {
    (async () => {
      try {
        if (!user.address) {
          const coords = await getCurrentPosition();
          const address = await convertCoordinatesToAddress(coords);
          setValue("address", address);
        }
      } catch (error) {
        console.log("ERROR =>", error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (address?.zipCode?.length === 9) {
        const response = await convertZipCodeToAddress(address?.zipCode);
        setValue("address", response);
      }
    })();
  }, [address?.zipCode]);

  return (
    <Container header={<Header label="Editar Perfil" goBack={handleGoBack} />}>
      <ImageProfile uri={photo || user?.photo}>
        <EditButton onPress={handleChangeImage} />
      </ImageProfile>

      <FormContainer>
        <InputForm
          contrast
          name="name"
          label="Nome*"
          control={control}
          placeholder="Nome"
          error={errors.name}
          defaultValue={name ?? user.name}
        />

        <InputForm
          contrast
          label="Contato*"
          control={control}
          name="phoneNumber"
          placeholder="Contato"
          mask={Masks.BRL_PHONE}
          keyboardType="number-pad"
          error={errors.phoneNumber}
          defaultValue={user.phoneNumber}
        />

        {user.type === UserType.ATTORNEY && (
          <SelectInput
            contrast
            data={officeList}
            label="Especialização*"
            value={office ?? user?.office}
            onChange={({ value }) => setValue("office", value)}
          />
        )}

        <AddressContainer>
          <Text>Endereço</Text>

          <HorizontalContainer>
            <InputForm
              contrast
              label="CEP"
              control={control}
              placeholder="CEP"
              mask={Masks.ZIP_CODE}
              name="address.zipCode"
              keyboardType="number-pad"
              defaultValue={address?.zipCode ?? user?.address?.zipCode}
            />

            <InputForm
              contrast
              label="Bairro"
              control={control}
              placeholder="Bairro"
              name="address.neighborhood"
              defaultValue={
                address?.neighborhood ?? user?.address?.neighborhood
              }
            />
          </HorizontalContainer>

          <InputForm
            contrast
            control={control}
            label="Logradouro"
            name="address.street"
            placeholder="Logradouro"
            defaultValue={address?.street ?? user?.address?.street}
          />

          <HorizontalContainer>
            <InputForm
              contrast
              label="Cidade"
              control={control}
              name="address.city"
              placeholder="Cidade"
              defaultValue={address?.city ?? user?.address?.city}
            />

            <InputForm
              contrast
              label="Estado"
              control={control}
              name="address.state"
              placeholder="Estado"
              defaultValue={address?.state ?? user?.address?.state}
            />

            <InputForm
              contrast
              label="País"
              control={control}
              placeholder="País"
              name="address.country"
              defaultValue={address?.country ?? user?.address?.country}
            />
          </HorizontalContainer>
        </AddressContainer>

        {user.type === UserType.ATTORNEY && (
          <InputForm
            contrast
            multiline
            name="about"
            control={control}
            numberOfLines={14}
            textAlignVertical="top"
            maxLength={ABOUT_LENGTH}
            placeholder="Esta informação ficará disponível para os clientes quando pesquisarem sobre você."
            defaultValue={user.about}
            label={`Sobre você (limite: ${availableLimit})`}
          />
        )}

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
