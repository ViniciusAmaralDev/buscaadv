import React from "react";
import { Container, Label } from "./styles";
import { IUser } from "../../../../../../../models/IUser";
import { Wrapper } from "../../../../../../../components/wrapper";
import { Divider } from "../../../../../../../components/divider";

interface ServiceTabProps {
  user: IUser;
}

export const GeneralTab = ({ user }: ServiceTabProps) => {
  const address = `${user.address.street}, ${user.address.neighborhood}, ${user.address.city} - ${user.address.state}, ${user.address.country}`;

  return (
    <Container>
      <Wrapper>
        <Label secondary>Sobre</Label>
        <Label>{user.about}</Label>
      </Wrapper>

      <Divider />

      <Wrapper>
        <Label secondary>Horário de atendimento</Label>
        <Label>{user.openingHours}</Label>
      </Wrapper>

      <Divider />

      <Wrapper>
        <Label secondary>Endereço</Label>
        <Label>{address}</Label>
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
