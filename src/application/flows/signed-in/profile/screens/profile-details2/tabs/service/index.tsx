import React from "react";
import { Container, Label } from "./styles";
import { IUser } from "../../../../../../../models/IUser";
import { Wrapper } from "../../../../../../../components/wrapper";

interface ServiceTabProps {
  user: IUser;
}

export const ServiceTab = ({ user }: ServiceTabProps) => {
  return (
    <Container>
      <Wrapper>
        <Label secondary>Horário de atendimento</Label>

        <Label>
          {user.openingHours.start} às {user.openingHours.end}
        </Label>

        <Wrapper direction="row">
          {user.openingHours.days.map((item, index) => (
            <Label>
              {item}
              {index < user.openingHours.days.length - 1 && ", "}
            </Label>
          ))}
        </Wrapper>
      </Wrapper>

      <Wrapper>
        <Label secondary>Serviços prestados</Label>

        {user.services.map((item) => (
          <Label>{item}</Label>
        ))}
      </Wrapper>
    </Container>
  );
};
