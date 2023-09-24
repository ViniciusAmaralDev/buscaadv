import React, { useEffect, useState } from "react";
import {
  Container,
  EditButton,
  FormContainer,
  HorizontalContainer,
  ImageProfile,
  Label,
  SaveButton,
} from "./styles";
import { Header } from "../../../../../components/header";
import { SignedInRootProps } from "../../../../../routes/signed-in/SignedInRootProps";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { getImageFromLibrary } from "../../../../../utils/Image";
import { InputForm } from "../../../../../components/input-form";
import { useAuth } from "../../../../../hook/useAuth";
import { useProfile } from "../../../../../hook/useProfile";
import { EUserType } from "../../../../../enums/EUserType";
import officesJson from "../../../../../../../offices.json";
import { useToast } from "../../../../../context/ToastContext";
import { getCurrentPosition } from "../../../../../utils/Location";
import { IUser } from "../../../../../models/IUser";
import { useGeocode } from "../../../../../hook/useGeocode";
import { useRequestStatus } from "../../../../../context/RequestStatusContext";
import { Dropdown } from "./components/dropdown";
import { Wrapper } from "../../../../../components/wrapper";

const requiredMessage = { message: "campo obrigatório" };

export const EditProfile = ({
  navigation,
}: SignedInRootProps<"EditProfile">) => {
  const { user } = useAuth();
  const { showToast } = useToast();
  const { updateUser } = useProfile();
  const { isLoading } = useRequestStatus();
  const { convertCoordinatesToAddress, convertAddressToCoordinates } =
    useGeocode();

  const [editingZipCode, setEditingZipCode] = useState(false);

  const officeList = Object.keys(officesJson).map((item) => ({
    label: item,
    value: item,
  }));

  const schema = z.object({
    photo: z
      .string()
      .optional()
      .default(user?.photo ?? undefined),
    name: z.string().nonempty(requiredMessage).default(user.name),
    phone: z.string().nonempty(requiredMessage).default(user?.phone),
    about: z.string().optional().default(user?.about),
    services: z
      .string()
      .default(user?.services?.join(", "))
      .transform((value) => value.split(",").map((item) => item.trim())),
    office: z.z
      .string()
      .optional()
      .default(user?.office ?? undefined),
    address: z
      .object({
        latitude: z.number().default(user?.address?.latitude),
        longitude: z.number().default(user?.address?.longitude),
        street: z.string().default(user?.address?.street),
        neighborhood: z.string().default(user?.address?.neighborhood),
        city: z.string().default(user?.address?.city),
        state: z.string().default(user?.address?.state),
        country: z.string().default(user?.address?.country),
        zipCode: z.string().default(user?.address?.zipCode),
      })
      .default(user?.address),
    openingHours: z.string().default(user?.openingHours),
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

  const form = watch();

  const name = form.name ?? user.name;
  const photo = form.photo ?? user.photo;
  const phone = form.phone ?? user.phone;
  const office = form.office ?? user.office;
  const address =
    Object.keys(form?.address ?? {}).length > 0 ? form.address : user.address;
  const openingHours =
    Object.keys(form?.openingHours ?? {}).length > 0
      ? form?.openingHours
      : user?.openingHours;

  const saveButtonIsDisabled =
    !name ||
    !phone ||
    !address ||
    (user.type === EUserType.ATTORNEY && (!office || !openingHours));

  const inputIsEditable = !isLoading && form.address?.zipCode?.length > 0;

  const handleSubmitForm = async (values: FormData) => {
    try {
      // console.log(JSON.stringify(values, null, 2));
      await updateUser(user.id, values as any as IUser);
      goBack();
    } catch (error) {}
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
      !user.phone ||
      (user.type === EUserType.ATTORNEY && !user.office)
    ) {
      showToast("Complete as informações do seu perfil");
      return;
    }

    goBack();
  };

  const getCoordinatesAndConvertOnAddress = async () => {
    try {
      const coords = await getCurrentPosition();
      const address = await convertCoordinatesToAddress(coords);
      setValue("address", address);
    } catch (error) {}
  };

  const getAddressAndConvertOnCoordinates = async () => {
    try {
      if (editingZipCode && address?.zipCode?.length === 9) {
        const response = await convertAddressToCoordinates(address?.zipCode);
        setEditingZipCode(false);
        setValue("address", response);
      }
    } catch (error) {}
  };

  useEffect(() => {
    if (!user?.address) getCoordinatesAndConvertOnAddress();
  }, []);

  useEffect(() => {
    getAddressAndConvertOnCoordinates();
  }, [form.address?.zipCode]);

  console.log("errors =>", JSON.stringify(errors, null, 2));

  return (
    <Container header={<Header label="Editar Perfil" goBack={handleGoBack} />}>
      <Wrapper>
        <ImageProfile uri={photo || user?.photo}>
          <EditButton onPress={handleChangeImage} />
        </ImageProfile>

        <FormContainer>
          <Dropdown label="Informações pessoais">
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
              mask="PHONE"
              label="Contato*"
              control={control}
              name="phone"
              keyboardType="number-pad"
              error={errors.phone}
              placeholder="(00) 98765-4321"
              defaultValue={user.phone}
            />

            {user.type === EUserType.ATTORNEY && (
              <InputForm
                contrast
                name="office"
                values={officeList}
                label="Especialização*"
                selectedValue={office ?? user?.office}
                onSelect={({ value }) => setValue("office", value)}
              />
            )}
          </Dropdown>

          <Dropdown label="Endereço">
            <HorizontalContainer>
              <InputForm
                contrast
                label="CEP"
                maxLength={9}
                mask="ZIP_CODE"
                placeholder="CEP"
                control={control}
                editable={!isLoading}
                name="address.zipCode"
                keyboardType="number-pad"
                defaultValue={address?.zipCode}
                onChange={() => setEditingZipCode(true)}
              />

              <InputForm
                contrast
                label="Bairro"
                control={control}
                placeholder="Bairro"
                editable={inputIsEditable}
                name="address.neighborhood"
                defaultValue={address?.neighborhood}
              />
            </HorizontalContainer>

            <InputForm
              contrast
              control={control}
              label="Logradouro"
              name="address.street"
              placeholder="Logradouro"
              editable={inputIsEditable}
              defaultValue={address?.street ?? user?.address?.street}
            />

            <HorizontalContainer>
              <InputForm
                contrast
                label="Cidade"
                control={control}
                name="address.city"
                placeholder="Cidade"
                editable={inputIsEditable}
                defaultValue={address?.city ?? user?.address?.city}
              />

              <InputForm
                contrast
                label="Estado"
                control={control}
                name="address.state"
                placeholder="Estado"
                editable={inputIsEditable}
                defaultValue={address?.state ?? user?.address?.state}
              />

              <InputForm
                contrast
                label="País"
                control={control}
                placeholder="País"
                name="address.country"
                editable={inputIsEditable}
                defaultValue={address?.country ?? user?.address?.country}
              />
            </HorizontalContainer>
          </Dropdown>

          <Dropdown label="Horário de atendimento">
            <InputForm
              contrast
              control={control}
              name="openingHours"
              defaultValue={openingHours}
              containerStyle={{ flexGrow: 0 }}
              placeholder="ex: Segunda à Sexta - 08:00 às 18:00"
            />
          </Dropdown>

          {user.type === EUserType.ATTORNEY && (
            <Dropdown label="Profissional">
              <Wrapper style={{ gap: 4 }}>
                <Label>
                  Escreva uma breve apresentação sobre você e/ou seus serviços.
                </Label>

                <InputForm
                  contrast
                  multiline
                  name="about"
                  control={control}
                  textAlignVertical="top"
                  defaultValue={user.about}
                  placeholder="ex: Advogado experiente em [área] com ..."
                />
              </Wrapper>

              <Wrapper style={{ gap: 4 }}>
                <Label>
                  Informe os serviços prestados, separando-os por vírgula.
                </Label>

                <InputForm
                  contrast
                  multiline
                  name="services"
                  control={control}
                  defaultValue={user.services?.join(", ")}
                  placeholder="Direito civil, previdenciário, criminal, ..."
                />
              </Wrapper>
            </Dropdown>
          )}
        </FormContainer>
      </Wrapper>

      <SaveButton
        isLoading={isLoading}
        disabled={saveButtonIsDisabled}
        onPress={handleSubmit(handleSubmitForm)}
      >
        Salvar
      </SaveButton>
    </Container>
  );
};
