import React from "react";
import {
  Container,
  HorizontalContainer,
  Label,
  VerticalContainer,
} from "./styles";
import { Image } from "../../../components/base/image";
import { useAuth } from "../../../hook/useAuth";
import { Text } from "../../../components/base/text";

export const Profile = () => {
  const { user } = useAuth();

  return (
    <Container>
      <HorizontalContainer>
        <Image
          uri={undefined}
          size={100}
          style={{ elevation: 1, borderRadius: 25 }}
        />

        <VerticalContainer>
          <Label>{user.name}</Label>
          <Label secondary>{user.email}</Label>
        </VerticalContainer>
      </HorizontalContainer>
    </Container>
  );
};
