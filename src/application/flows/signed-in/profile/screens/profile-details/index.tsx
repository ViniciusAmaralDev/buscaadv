import React from "react";
import { StatusBar } from "expo-status-bar";
import openMaps from "react-native-open-maps";
import { BadgeList, ChatIcon, Container, PinIcon, StartIcon2 } from "./styles";
import { SignedInRootProps } from "../../../../../routes/signed-in/SignedInRootProps";

// COMPONENTS
import { Header } from "../../../../../components/header";
import { Header as CustomHeader } from "./components/header";

// HOOKS
import { useMemo } from "react";
import { useTheme } from "styled-components";
import { useStorage } from "../../../../../hook/useStorage";

// TABS
import { Tabs } from "./components/tabs";
import { GalleryTab } from "./tabs/gallery";
import { GeneralTab } from "./tabs/general";
import { AvaliationsTab } from "./tabs/avaliations";

export const ProfileDetails = ({
  route,
}: SignedInRootProps<"ProfileDetails">) => {
  const { id } = route.params;

  const theme = useTheme();
  const { users } = useStorage();

  const user = useMemo(() => {
    return users.find((user) => user.id === id);
  }, [users]);

  const address = `${user.address.street}, ${user.address.neighborhood}, ${user.address.zipCode}, ${user.address.city}, ${user.address.state}, ${user.address.country}`;

  const badges = [
    {
      icon: <PinIcon />,
      label: "Ver no mapa",
      onPress: () => openMaps({ query: address }),
    },
    { icon: <ChatIcon />, label: "Conversar", onPress: () => {} },
    { icon: <StartIcon2 />, label: "Favoritar", onPress: () => {} },
  ];

  return (
    <Container header={<Header />}>
      <StatusBar style="dark" backgroundColor={theme.colors.gray.light} />

      <CustomHeader user={user} />

      <BadgeList badges={badges} />

      <Tabs
        tabs={[
          {
            name: "general",
            label: "Geral",
            children: <GeneralTab user={user} />,
          },
          {
            name: "gallery",
            label: "Galeria",
            children: <GalleryTab gallery={user.gallery ?? []} />,
          },
          {
            name: "avaliations",
            label: "Avaliações",
            children: <AvaliationsTab user={user} />,
          },
        ]}
      />
    </Container>
  );
};
