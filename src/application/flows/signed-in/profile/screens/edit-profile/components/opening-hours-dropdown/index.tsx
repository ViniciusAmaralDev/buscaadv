import React from "react";
import { Dropdown } from "../dropdown";
import { Wrapper } from "../../../../../../../components/wrapper";
import {
  HorizontalContainer,
  Label,
  SquareIcon,
  WeekButton,
  WrapperHorizontal,
} from "./styles";
import {
  InputForm,
  InputFormProps,
} from "../../../../../../../components/input-form";

interface WeekDay {
  label: string;
  isSelected: boolean;
}

interface Props {
  inputs: InputFormProps[];
  weekDays: WeekDay[];
  changeWeekDays: (label: string) => void;
}

export const OpeningHoursDropdown = ({
  inputs,
  weekDays,
  changeWeekDays,
}: Props) => {
  return (
    <Dropdown label="Horário de atendimento">
      <WrapperHorizontal>
        <Label>Informe o horário</Label>

        <HorizontalContainer>
          {inputs.map((rest, index) => (
            <InputForm contrast key={index} containerStyle={{ flexGrow: 0 }} {...rest} />
          ))}
        </HorizontalContainer>
      </WrapperHorizontal>

      <Wrapper style={{ gap: 8 }}>
        <Label>Selecione os dias da semana</Label>
        <Wrapper direction="row" style={{ gap: 4, flexWrap: "wrap" }}>
          {weekDays.map((item, index) => (
            <WeekButton
              key={index}
              isSelected={item.isSelected}
              showBorder={index < weekDays.length - 1}
              onPress={() => changeWeekDays(item.label)}
            >
              {item.label}
            </WeekButton>
          ))}
        </Wrapper>
      </Wrapper>
    </Dropdown>
  );
};
