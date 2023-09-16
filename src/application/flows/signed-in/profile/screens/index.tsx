import React from "react";
import {
  Container,
  HorizontalContainer,
  ImageProfile,
  Label,
  SignOutIcon,
  VerticalContainer,
} from "./styles";
import { useAuth } from "../../../../hook/useAuth";
import { MenuList } from "../components/menu-list";
import { SignedInRootProps } from "../../../../routes/signed-in/SignedInRootProps";
import { Header } from "../../../../components/header";

export const Profile = ({ navigation }: SignedInRootProps<"Profile">) => {
  const { user, signOut } = useAuth();

  const handleGoBack = () => {
    if (navigation.canGoBack()) navigation.goBack();
    else
      navigation.reset({
        index: 0,
        routes: [{ name: "Home" }],
      });
  };

  return (
    <Container header={<Header label="Perfil" goBack={handleGoBack} />}>
      <HorizontalContainer>
        <ImageProfile
          size={100}
          uri={user?.photo}
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
          { label: "Sair", icon: <SignOutIcon />, onPress: signOut },
        ]}
      />
    </Container>
  );
};
