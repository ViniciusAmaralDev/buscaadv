import React from "react";
import { Container, Label } from "./styles";
import { IUser } from "../../../../../../../models/IUser";
import { Wrapper } from "../../../../../../../components/wrapper";
import { Divider } from "../../../../../../../components/divider";

interface ServiceTabProps {
  user: IUser;
}

export const ServiceTab = ({ user }: ServiceTabProps) => {
  return (
    <Container>
      <Wrapper>
        <Label secondary>Do advogado</Label>
        <Label>{user.about}</Label>
      </Wrapper>

      <Divider />

      <Wrapper>
        <Label secondary>Horário de atendimento</Label>
        <Label>{user.openingHours}</Label>
      </Wrapper>

      <Divider />

      <Wrapper>
        <Label secondary>Serviços</Label>

        {user.services.map((item, index) => (
          <Label key={index}>{item}</Label>
        ))}
      </Wrapper>
    </Container>
  );
};
