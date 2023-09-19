import React, { useMemo, useRef, useState } from "react";
import {
  Container,
  FilterIcon,
  Footer,
  Header,
  TargetButton,
  TargetIcon,
} from "./styles";
import MapView from "react-native-maps";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "styled-components";
import { Map } from "../../../components/map";
import { useStorage } from "../../../hook/useStorage";
import { SignedInRootProps } from "../../../routes/signed-in/SignedInRootProps";
import { SelectInput } from "../../../components/select-input";
import officesJson from "../../../../../offices.json";
import { CardList } from "./components/card-list";
import { useColorScheme } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAuth } from "../../../hook/useAuth";
import { Button } from "../../../components/base/button";
import { MaterialIcons } from "@expo/vector-icons";
import { ImageProfile } from "../../../components/image-profile";
import { UserType } from "../../../enums/UserType";
import { Details, LatLng, Region } from "react-native-maps";

interface IOffice {
  label: string;
  value: string;
}

export const Home = ({ navigation }: SignedInRootProps<"Home">) => {
  const mapRef = useRef<MapView>(null);

  const theme = useTheme();
  const { user } = useAuth();
  const { users } = useStorage();
  const { top } = useSafeAreaInsets();
  const themeDevice = useColorScheme() ?? "light";

  const [office, setOffice] = useState<IOffice>({
    label: "Todos",
    value: "all",
  });

  const userCoords: LatLng = useMemo(() => {
    const { latitude, longitude } = user.address;
    return { latitude, longitude };
  }, [user]);

  const [mapPositionChanged, setMapPositionChanged] = useState(false);

  const markers = useMemo(() => {
    return users
      .filter((user) => user.type === UserType.ATTORNEY)
      .filter((user) => {
        if (!user.address) return;
        if (user.office === office.value) return user;
        else if (!office || office.value === "all") return user;
      });
  }, [users, office]);

  const officeList: IOffice[] = useMemo(() => {
    return [
      { label: "Todos", value: "all" },
      ...Object.keys(officesJson).map((item) => ({
        label: item,
        value: item,
      })),
    ];
  }, [user]);

  const handleResetMapCoords = () => {
    mapRef.current?.animateToRegion(
      { ...userCoords, latitudeDelta: 0.015, longitudeDelta: 0.0121 },
      1000
    );
    setMapPositionChanged(false);
  };

  return (
    <Container>
      <StatusBar style="dark" />
      <Map
        ref={mapRef}
        markers={markers}
        coords={userCoords}
        userInterfaceStyle={themeDevice}
        onRegionChange={() => setMapPositionChanged(true)}
      />

      <Header paddingTop={top}>
        <Button onPress={() => navigation.navigate("Profile")}>
          <ImageProfile
            uri={user?.photo}
            onPress={() => navigation.navigate("Profile")}
          />
        </Button>

        <SelectInput
          renderLeftIcon={() => <FilterIcon />}
          labelStyle={{ color: theme.colors.gray.dark }}
          value={office}
          data={officeList}
          placeholder="Especialização"
          onChange={setOffice}
        />
      </Header>

      <TargetButton
        isActive={mapPositionChanged}
        onPress={handleResetMapCoords}
      >
        <TargetIcon isActive={mapPositionChanged} />
      </TargetButton>
    </Container>
  );
};
