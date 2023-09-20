import React, { useState } from "react";
import { ArrowIcon, Container, HorizontalContainer } from "./styles";
import { Text } from "../../../../../../../components/base/text";
import { Button } from "../../../../../../../components/base/button";
import {
  InputForm,
  InputFormProps,
} from "../../../../../../../components/input-form";

interface DropdownProps {
  label: string;
  open?: boolean;
  inputs: InputFormProps[];
}

export const Dropdown = ({ label, open, inputs }: DropdownProps) => {
  const [isOpened, setIsOpened] = useState(open ?? false);

  return (
    <Container>
      <HorizontalContainer>
        <Text>{label}</Text>

        <Button onPress={() => setIsOpened((value) => !value)}>
          <ArrowIcon isOpened={isOpened} />
        </Button>
      </HorizontalContainer>

      {isOpened && (
        <>
          {inputs.map((rest, index) => (
            <InputForm key={index} {...rest} />
          ))}
        </>
      )}
    </Container>
  );
};
