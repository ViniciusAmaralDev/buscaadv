import React from "react";
import { IUser } from "../../../../../../../models/IUser";
import { Stars } from "../../../../../../../components/stars";
import { Container, ImageProfile, Label, VerticalContainer } from "./styles";

interface HeaderProps {
  user: IUser;
}

export const Header = ({ user }: HeaderProps) => {
  return (
    <Container>
      <VerticalContainer>
        <Label>{user.name}</Label>
        <Label secondary>Advogado {user.office}</Label>
        <Stars amount={4} />
      </VerticalContainer>

      <ImageProfile uri={user.photo} />
    </Container>
  );
};
