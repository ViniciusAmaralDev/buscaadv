import React from "react";
import { Dropdown } from "../dropdown";
import {
  InputForm,
  InputFormProps,
} from "../../../../../../../components/input-form";

export interface Input extends InputFormProps {
  hidden?: boolean;
}

interface PersonalInformationDropdownProps {
  inputs: Input[];
}

export const PersonalInformationDropdown = ({
  inputs,
}: PersonalInformationDropdownProps) => {
  return (
    <Dropdown label="Informações pessoais">
      {inputs
        .filter((input) => !input.hidden)
        .map((rest, index) => (
          <InputForm key={index} {...rest} />
        ))}
      {/* <InputForm
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
        mask={Masks.BRL_PHONE}
        keyboardType="number-pad"
        error={errors.phoneNumber}
        placeholder="(00) 98765-4321"
        defaultValue={user.phoneNumber}
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
      )} */}
    </Dropdown>
  );
};
