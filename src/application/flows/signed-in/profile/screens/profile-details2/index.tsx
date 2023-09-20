import React, { useMemo } from "react";
import {
  BadgeList,
  ChatIcon,
  Container,
  Content,
  Description,
  Divider,
  PhoneIcon,
  PinIcon,
  RouteIcon,
  StartIcon2,
  Title,
} from "./styles";
import { SignedInRootProps } from "../../../../../routes/signed-in/SignedInRootProps";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "styled-components";
import { Header } from "../../../../../components/header";
import { useAuth } from "../../../../../hook/useAuth";
import { Header as CustomHeader } from "./components/header";
import { Tabs } from "./components/tabs";
import { GeneralTab } from "./tabs/general";
import { ServiceTab } from "./tabs/service";
import { PhotoTab } from "./tabs/photo";
import { AboutTab } from "./tabs/about";
import { useStorage } from "../../../../../hook/useStorage";

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
          { name: "service", label: "Serviços", children: <ServiceTab /> },
          {
            name: "photo",
            label: "Fotos",
            children: <PhotoTab gallery={user.gallery ?? []} />,
          },
          { name: "about", label: "Sobre", children: <AboutTab user={user} /> },
        ]}
      />
    </Container>
  );
};
