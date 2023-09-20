import React from "react";
import { Control } from "react-hook-form";
import { Text } from "../../../../../../../components/base/text";
import { Input } from "../../../../../../../components/base/input";
import { Container, HorizontalContainer, Label, WrapperHorizontal } from "./styles";
import { InputForm } from "../../../../../../../components/input-form";
import { Masks } from "react-native-mask-input";

interface WeekListProps {
  control: Control<any>;
}

export const WeekList = ({ control }: WeekListProps) => {
  const data = [
    { label: "Almoço", name: "lunch" },
    { label: "Domingo", name: "sunday" },
    { label: "Segunda", name: "monday" },
    { label: "Terça", name: "tuesday" },
    { label: "Quarta", name: "wednesday" },
    { label: "Quinta", name: "thursday" },
    { label: "Sexta", name: "friday" },
    { label: "Sábado", name: "saturday" },
  ];

  return (
    <Container>
      {data.map(({ label, name }, index) => (
        <HorizontalContainer key={index} showBorder={index < data.length - 1}>
          <Label>{label}</Label>

          <WrapperHorizontal>
            <InputForm
              label="De"
              editable={false}
              control={control}
              placeholder="00:00"
              keyboardType="number-pad"
              containerStyle={{ flexGrow: 0 }}
              onPress={() => console.log("OK")}
              name={`openingHours.${name}.start`}
            />

            <InputForm
              label="Ás"
              editable={false}
              control={control}
              placeholder="00:00"
              keyboardType="number-pad"
              containerStyle={{ flexGrow: 0 }}
              onPress={() => console.log("OK")}
              name={`openingHours.${name}.end`}
            />
          </WrapperHorizontal>
        </HorizontalContainer>
      ))}
    </Container>
  );
};
