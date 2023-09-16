import React from "react";
import { Container, Dropdown, Label } from "./styles";
import { DropdownProps } from "react-native-element-dropdown/lib/typescript/components/Dropdown/model";
import { StyleProp, TextStyle } from "react-native";

interface SelectInputProps extends Partial<DropdownProps<any>> {
  label?: string;
  contrast?: boolean;
  labelStyle?: StyleProp<TextStyle>;
}

export const SelectInput = ({
  label,
  value,
  contrast,
  labelStyle,
  ...rest
}: SelectInputProps) => {
  return (
    <Container>
      {label && <Label style={labelStyle}>{label}</Label>}
      <Dropdown
        value={value}
        labelField="label"
        valueField="value"
        contrast={contrast}
        placeholder="Selecione"
        {...rest}
      />
    </Container>
  );
};
