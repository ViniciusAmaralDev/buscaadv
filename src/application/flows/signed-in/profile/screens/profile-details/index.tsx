import React from "react";
import { StatusBar } from "expo-status-bar";
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

  const badges = [
    { icon: <PinIcon />, label: "Endereço" },
    { icon: <ChatIcon />, label: "Conversar" },
    { icon: <StartIcon2 />, label: "Favoritar" },
  ];

  return (
    <Container header={<Header />}>
      <StatusBar style="dark" backgroundColor={theme.colors.gray.light} />

      <CustomHeader user={user} />

      <BadgeList badges={badges} />

      <Tabs
        tabs={[
          {
            name: "service",
            label: "Serviços",
            children: <GeneralTab user={user} />,
          },
          {
            name: "photo",
            label: "Fotos",
            children: <GalleryTab gallery={user.gallery ?? []} />,
          },
          {
            name: "about",
            label: "Sobre",
            children: <AvaliationsTab user={user} />,
          },
        ]}
      />
    </Container>
  );
};
