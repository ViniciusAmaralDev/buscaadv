import React from "react";
import {
  Container,
  HorizontalContainer,
  Label,
  VerticalContainer,
} from "./styles";
import { Image } from "../../../../components/base/image";
import { useAuth } from "../../../../hook/useAuth";
import { MenuList } from "../components/menu-list";
import { SignedInRootProps } from "../../../../routes/signed-in/SignedInRootProps";

export const Profile = ({ navigation }: SignedInRootProps<"Profile">) => {
  const { user, signOut } = useAuth();

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

      <MenuList
        values={[
          {
            label: "Editar perfil",
            onPress: () => navigation.navigate("EditProfile"),
          },
          {
            label: "Informações da conta",
            onPress: () => navigation.navigate("MyAccount"),
          },
          { label: "Sair", onPress: signOut },
        ]}
      />
    </Container>
  );
};
