import React from "react";
import { Container } from "./styles";
import { Text } from "../../../../../components/base/text";
import { Header } from "../../../../../components/header";
import { EditButton } from "../../../../../components/icon-buttons/EditButton";
import { SignedInRootProps } from "../../../../../routes/signed-in/SignedInRootProps";

export const MyAccount = ({ navigation }: SignedInRootProps<"MyAccount">) => {
  return (
    <Container
      header={
        <Header
          label="Minha conta"
          right={
            <EditButton onPress={() => navigation.navigate("EditAccount")} />
          }
        />
      }
    >
      <></>
    </Container>
  );
};
