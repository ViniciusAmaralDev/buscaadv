import React, { useState } from "react";
import { Dropdown } from "../dropdown";
import { Container, Label, OfficeButton, SquareIcon } from "./styles";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { InputForm } from "../../../../../../../components/input-form";
import { Wrapper } from "../../../../../../../components/wrapper";
import officesJson from "../../../../../../../../../offices.json";

interface Props {
  office: string;
}

export const ProfissionalDropdown = ({ office }: Props) => {
  const { control } = useForm();

  const [officeList, setOfficeList] = useState(
    office
      ? officesJson[office]?.map((label: string) => ({
          label,
          isSelected: false,
        }))
      : []
  );

  console.log(officeList);

  const handleSelectOffice = (label: string) => {
    setOfficeList((values) =>
      values.map((value) => ({
        ...value,
        isSelected:
          value.label === label ? !value.isSelected : value.isSelected,
      }))
    );
  };

  return (
    <Dropdown label="Profissional">
      <Container>
        <Wrapper style={{ gap: 4 }}>
          <Label secondary>
            Escreva uma breve descrição sobre seus serviços para seus clientes.
          </Label>

          <InputForm
            contrast
            multiline
            name="about"
            control={control}
            placeholder="Escreva aqui..."
          />
        </Wrapper>

        <Label secondary>Informe os serviços prestados</Label>
        {officeList?.map(({ label, isSelected }, index) => (
          <OfficeButton key={index} onPress={() => handleSelectOffice(label)}>
            <Label>{label}</Label>
            <SquareIcon isSelected={isSelected} />
          </OfficeButton>
        ))}
      </Container>
    </Dropdown>
  );
};
