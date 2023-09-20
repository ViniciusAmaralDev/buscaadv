import React from "react";
import { Dropdown } from "../dropdown";
import { HorizontalContainer } from "./styles";
import {
  InputForm,
  InputFormProps,
} from "../../../../../../../components/input-form";

interface Props {
  inputs: InputFormProps[];
}

export const AddressDropdown = ({ inputs }: Props) => {
  return (
    <Dropdown label="Endereço">
      <HorizontalContainer>
        {inputs.map((rest, index) => (
          <InputForm key={index} {...rest} />
        ))}
        {/* <InputForm
          contrast
          label="CEP"
          control={control}
          placeholder="CEP"
          mask={Masks.ZIP_CODE}
          editable={!isLoading}
          name="address.zipCode"
          keyboardType="number-pad"
          onChange={() => setEditingZipCode(true)}
          defaultValue={address?.zipCode ?? user?.address?.zipCode}
        />

        <InputForm
          contrast
          label="Bairro"
          control={control}
          placeholder="Bairro"
          editable={inputIsEditable}
          name="address.neighborhood"
          defaultValue={address?.neighborhood ?? user?.address?.neighborhood}
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
        /> */}
      </HorizontalContainer>
    </Dropdown>
  );
};
