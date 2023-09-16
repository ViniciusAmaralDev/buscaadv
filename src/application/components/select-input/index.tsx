import React from "react";
import { Container, Dropdown, Label } from "./styles";
import { DropdownProps } from "react-native-element-dropdown/lib/typescript/components/Dropdown/model";

interface SelectInputProps extends Partial<DropdownProps<any>> {
  label?: string;
  contrast?: boolean;
}

export const SelectInput = ({
  label,
  value,
  contrast,
  ...rest
}: SelectInputProps) => {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <Dropdown
        value={value}
        labelField="label"
        valueField="value"
        contrast={contrast}
        placeholder="Selecione"
        isSelected={value?.length > 0}
        {...rest}
      />
    </Container>
  );
};
