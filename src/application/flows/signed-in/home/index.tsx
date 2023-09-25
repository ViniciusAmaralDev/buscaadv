import React from "react";
import MapView, { LatLng } from "react-native-maps";
import { EUserType } from "@/application/enums/EUserType";
import { Container, TargetButton, TargetIcon } from "./styles";

// COMPONENTS
import { Header } from "./components/header";
import { Map } from "@/application/components/map";

// HOOKS
import { useMemo, useRef, useState } from "react";
import { useAuth } from "@/application/hook/useAuth";
import { useStorage } from "@/application/hook/useStorage";

export interface IOffice {
  label: string;
  value: string;
}

export const Home = () => {
  const mapRef = useRef<MapView>(null);

  const { user } = useAuth();
  const { users } = useStorage();

  const [mapPositionChanged, setMapPositionChanged] = useState(false);

  const userCoords: LatLng = useMemo(() => {
    const { latitude, longitude } = user.address;
    return { latitude, longitude };
  }, [user]);

  const [office, setOffice] = useState<IOffice>({
    label: "Todos",
    value: "all",
  });

  const markers = useMemo(() => {
    return users
      .filter((user) => user.type === EUserType.ATTORNEY)
      .filter((user) => {
        if (!user.address) return;
        if (user.office === office.value) return user;
        else if (!office || office.value === "all") return user;
      });
  }, [users, office]);

  const handleResetMapCoords = () => {
    mapRef.current?.animateToRegion(
      { ...userCoords, latitudeDelta: 0.015, longitudeDelta: 0.0121 },
      1000
    );
    setMapPositionChanged(false);
  };

  return (
    <Container header={<Header office={office} setOffice={setOffice} />}>
      <Map
        ref={mapRef}
        markers={markers}
        coords={userCoords}
        onRegionChange={() => setMapPositionChanged(true)}
      />

      <TargetButton
        isActive={mapPositionChanged}
        onPress={handleResetMapCoords}
      >
        <TargetIcon isActive={mapPositionChanged} />
      </TargetButton>
    </Container>
  );
};
