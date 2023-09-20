import React, { useEffect, useMemo, useState } from "react";
import { Container, EditButton, ImageProfile } from "./styles";
import { Header } from "../../../../../components/header";
import { SignedInRootProps } from "../../../../../routes/signed-in/SignedInRootProps";
import { Masks } from "react-native-mask-input";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { getImageFromLibrary } from "../../../../../utils/Image";
import { InputFormProps } from "../../../../../components/input-form";
import { useAuth } from "../../../../../hook/useAuth";
import { useProfile } from "../../../../../hook/useProfile";
import { UserType } from "../../../../../enums/UserType";
import officesJson from "../../../../../../../offices.json";
import { useToast } from "../../../../../context/ToastContext";
import { getCurrentPosition } from "../../../../../utils/Location";
import { IUser } from "../../../../../models/IUser";
import { useGeocode } from "../../../../../hook/useGeocode";
import { useRequestStatus } from "../../../../../context/RequestStatusContext";
import {
  Input,
  PersonalInformationDropdown,
} from "./components/personal-info-dropdown";
import { AddressDropdown } from "./components/address-dropdown";
import { OpeningHoursDropdown } from "./components/opening-hours-dropdown";
import { Dropdown } from "./components/dropdown";
import { ProfissionalDropdown } from "./components/profissional-dropdown";

const ABOUT_LENGTH = 300;
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
    address: z.object({
      latitude: z.number().default(user?.address?.latitude),
      longitude: z.number().default(user?.address?.longitude),
      street: z.string().default(user?.address?.street),
      neighborhood: z.string().default(user?.address?.neighborhood),
      city: z.string().default(user?.address?.city),
      state: z.string().default(user?.address?.state),
      country: z.string().default(user?.address?.country),
      zipCode: z.string().default(user?.address?.zipCode),
    }),
    openingHours: z.object({
      sunday: z.array(z.string()).default(user.openingHours?.sunday),
    }),
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
    openingHours,
    photo: photoForm,
    phoneNumber: phone,
    office: officeForm,
  } = watch();

  const availableLimit =
    ABOUT_LENGTH - (about?.length ?? user?.about?.length ?? 0);

  const username = name ?? user.name;
  const photo = photoForm ?? user.photo;
  const office = officeForm ?? user.office;
  const phoneNumber = phone ?? user.phoneNumber;

  const saveButtonIsDisabled =
    !username || !phoneNumber || (user.type === UserType.ATTORNEY && !office);

  const inputIsEditable = !isLoading && address?.zipCode?.length > 0;

  const personalInformationsInput = useMemo(() => {
    return [
      {
        hidden: false,
        contrast: true,
        name: "name",
        label: "Nome*",
        control: control,
        placeholder: "Nome",
        error: errors.name,
        defaultValue: name ?? user.name,
      },
      {
        hidden: false,
        contrast: true,
        label: "Contato*",
        control: control,
        name: "phoneNumber",
        mask: Masks.BRL_PHONE,
        keyboardType: "number-pad",
        error: errors.phoneNumber,
        placeholder: "(00) 98765-4321",
        defaultValue: user.phoneNumber,
      },
      {
        contrast: true,
        name: "office",
        values: officeList,
        label: "Especialização*",
        selectedValue: office ?? user?.office,
        hidden: user.type !== UserType.ATTORNEY,
        onSelect: ({ value }) => setValue("office", value),
      },
    ];
  }, [user]);

  const addressInputs = useMemo(() => {
    return [
      {
        contrast: true,
        label: "CEP",
        control: control,
        placeholder: "CEP",
        mask: Masks.ZIP_CODE,
        editable: !isLoading,
        name: "address.zipCode",
        keyboardType: "number-pad",
        onChange: () => setEditingZipCode(true),
        defaultValue: address?.zipCode ?? user?.address?.zipCode,
      },
      {
        contrast: true,
        label: "Bairro",
        control: control,
        placeholder: "Bairro",
        editable: inputIsEditable,
        name: "address.neighborhood",
        defaultValue: address?.neighborhood ?? user?.address?.neighborhood,
      },
      {
        contrast: true,
        control: control,
        label: "Logradouro",
        name: "address.street",
        placeholder: "Logradouro",
        editable: inputIsEditable,
        defaultValue: address?.street ?? user?.address?.street,
      },
      {
        contrast: true,
        label: "Cidade",
        control: control,
        name: "address.city",
        placeholder: "Cidade",
        editable: inputIsEditable,
        defaultValue: address?.city ?? user?.address?.city,
      },
      {
        contrast: true,
        label: "Estado",
        control: control,
        name: "address.state",
        placeholder: "Estado",
        editable: inputIsEditable,
        defaultValue: address?.state ?? user?.address?.state,
      },
      {
        contrast: true,
        label: "País",
        control: control,
        placeholder: "País",
        name: "address.country",
        editable: inputIsEditable,
        defaultValue: address?.country ?? user?.address?.country,
      },
    ];
  }, [user]);

  const openingHourInputs = useMemo(() => {
    return [
      {
        control,
        label: "De",
        value: "08:00",
        name: "openingHours.start",
      },
      {
        control,
        label: "Às",
        value: "18:00",
        name: "openingHours.end",
      },
    ];
  }, [user]);

  const [weekDays, setWeekDays] = useState([
    { label: "Domingo", isSelected: false },
    { label: "Segunda", isSelected: false },
    { label: "Terça", isSelected: false },
    { label: "Quarta", isSelected: false },
    { label: "Quinta", isSelected: false },
    { label: "Sexta", isSelected: false },
    { label: "Sábado", isSelected: false },
  ]);

  const changeWeekDays = (label: string) => {
    setWeekDays((values) =>
      values.map((value) => ({
        ...value,
        isSelected:
          value.label === label ? !value.isSelected : value.isSelected,
      }))
    );
  };

  const handleSubmitForm = async (values: FormData) => {
    try {
      await updateUser(user.id, values as IUser);
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
      !user.phoneNumber ||
      (user.type === UserType.ATTORNEY && !user.office)
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
  }, [address?.zipCode]);

  return (
    <Container header={<Header label="Editar Perfil" goBack={handleGoBack} />}>
      <ImageProfile uri={photo || user?.photo}>
        <EditButton onPress={handleChangeImage} />
      </ImageProfile>

      <PersonalInformationDropdown
        inputs={personalInformationsInput as Input[]}
      />

      <AddressDropdown inputs={addressInputs as InputFormProps[]} />

      <OpeningHoursDropdown
        weekDays={weekDays}
        inputs={openingHourInputs}
        changeWeekDays={changeWeekDays}
      />

      <ProfissionalDropdown office={office} />

      {/* <FormContainer>
        {user.type === UserType.ATTORNEY && (
          <InputForm
            contrast
            multiline
            name="about"
            control={control}
            isConventionalMode
            numberOfLines={14}
            textAlignVertical="top"
            maxLength={ABOUT_LENGTH}
            placeholder="Esta informação ficará disponível para os clientes quando pesquisarem sobre você."
            defaultValue={user.about}
            label={`Sobre o seu serviço (limite: ${availableLimit})`}
          />
        )}

        <SaveButton
          isLoading={isLoading}
          disabled={saveButtonIsDisabled}
          onPress={handleSubmit(handleSubmitForm)}
        >
          Salvar
        </SaveButton>
      </FormContainer> */}
    </Container>
  );
};
