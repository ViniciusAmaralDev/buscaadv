import * as z from "zod";
import { createSchema } from "./constants/Schema";
import React, { useEffect, useMemo, useState } from "react";
import { IUser } from "@/application/models/IUser";
import { offices } from "@/application/mocks/Offices";
import { zodResolver } from "@hookform/resolvers/zod";
import { EUserType } from "@/application/enums/EUserType";
import { SignedInRootProps } from "@/application/routes/signed-in/SignedInRootProps";
import {
  Label,
  Container,
  SaveButton,
  EditButton,
  ImageProfile,
  FormContainer,
  HorizontalContainer,
} from "./styles";

// UTILS
import { getImageFromLibrary } from "@/application/utils/Image";
import { getCurrentPosition } from "@/application/utils/Location";

// COMPONENTS
import { Dropdown } from "./components/dropdown";
import { Header } from "@/application/components/header";
import { Wrapper } from "@/application/components/wrapper";
import { InputForm } from "@/application/components/input-form";

// HOOKS
import { useForm } from "react-hook-form";
import { useAuth } from "@/application/hook/useAuth";
import { useProfile } from "@/application/hook/useProfile";
import { useGeocode } from "@/application/hook/useGeocode";
import { useToast } from "@/application/context/ToastContext";
import { useRequestStatus } from "@/application/context/RequestStatusContext";

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

  const officeList = Object.keys(offices).map((item) => ({
    label: item,
    value: item,
  }));

  const optionalFields: (keyof IUser)[] = useMemo(() => {
    return user.type !== EUserType.ATTORNEY
      ? ["about", "office", "services", "openingHours"]
      : [];
  }, [user]);

  const schema = createSchema(user, optionalFields);

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

  console.log(JSON.stringify(errors, null, 2));

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
    !photo ||
    !phone ||
    Object.values(address ?? {}).length === 0 ||
    (user.type === EUserType.ATTORNEY && !office);

  const addressIsEditable = !isLoading && address?.zipCode?.length > 0;

  if (errors) console.log(JSON.stringify(errors, null, 2));

  const handleSubmitForm = async (values: FormData) => {
    try {
      console.log(JSON.stringify(values, null, 2));
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

  return (
    <Container header={<Header label="Editar Perfil" goBack={handleGoBack} />}>
      <Wrapper>
        <ImageProfile uri={photo || user?.photo}>
          <EditButton onPress={handleChangeImage} />
        </ImageProfile>

        <FormContainer>
          <Dropdown open required label="Informações pessoais">
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
              mask="PHONE"
              label="Contato"
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

          <Dropdown required label="Endereço">
            <HorizontalContainer>
              <InputForm
                contrast
                label="Cep"
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
                editable={addressIsEditable}
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
              editable={addressIsEditable}
              defaultValue={address?.street ?? user?.address?.street}
            />

            <HorizontalContainer>
              <InputForm
                contrast
                label="Cidade"
                control={control}
                name="address.city"
                placeholder="Cidade"
                editable={addressIsEditable}
                defaultValue={address?.city ?? user?.address?.city}
              />

              <InputForm
                contrast
                label="Estado"
                control={control}
                name="address.state"
                placeholder="Estado"
                editable={addressIsEditable}
                defaultValue={address?.state ?? user?.address?.state}
              />

              <InputForm
                contrast
                label="País"
                control={control}
                placeholder="País"
                name="address.country"
                editable={addressIsEditable}
                defaultValue={address?.country ?? user?.address?.country}
              />
            </HorizontalContainer>
          </Dropdown>

          {user.type === EUserType.ATTORNEY && (
            <>
              <Dropdown required label="Horário de atendimento">
                <InputForm
                  contrast
                  control={control}
                  name="openingHours"
                  defaultValue={openingHours}
                  containerStyle={{ flexGrow: 0 }}
                  placeholder="ex: Segunda à Sexta - 08:00 às 18:00"
                />
              </Dropdown>

              <Dropdown required label="Profissional">
                <Wrapper style={{ gap: 4 }}>
                  <Label>
                    Escreva uma breve apresentação sobre você e/ou seus
                    serviços.
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
            </>
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
