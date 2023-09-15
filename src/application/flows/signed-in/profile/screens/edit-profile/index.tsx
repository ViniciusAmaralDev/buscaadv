import React from "react";
import { Container } from "./styles";
import { Text } from "../../../../../components/base/text";
import { SignedInRootProps } from "../../../../../routes/signed-in/SignedInRootProps";
import { Header } from "../../../../../components/header";

export const EditProfile = ({
  navigation,
}: SignedInRootProps<"EditProfile">) => {
  return (
    <Container header={<Header label="Editar Perfil" />}>
      <></>
    </Container>
  );
};
