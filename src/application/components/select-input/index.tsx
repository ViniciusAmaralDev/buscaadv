import React from "react";
import { Container, Dropdown, Label } from "./styles";
import { DropdownProps } from "react-native-element-dropdown/lib/typescript/components/Dropdown/model";

interface SelectInputProps extends Partial<DropdownProps<any>> {
  label?: string;
}

export const SelectInput = ({ label, value, ...rest }: SelectInputProps) => {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <Dropdown
        {...rest}
        value={value}
        labelField="label"
        valueField="value"
        placeholder="Selecione"
        isSelected={value?.length > 0}
      />
    </Container>
  );
};
