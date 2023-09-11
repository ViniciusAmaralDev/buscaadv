import React, { useEffect, useState } from "react";
import { Container, TargetButton, TargetIcon } from "./styles";
import { StatusBar } from "expo-status-bar";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { getLocation } from "../../../utils/Location";
import { Image, StyleSheet, View } from "react-native";
import { useTheme } from "styled-components";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Coords = {
  latitude: number;
  longitude: number;
};

export const Home = () => {
  const theme = useTheme();
  const { top } = useSafeAreaInsets();

  const [coords, setCoords] = useState<any>();

  const CustomMarker = ({ latitude, longitude }: Coords) => (
    <Marker coordinate={{ latitude, longitude }}>
      <View
        style={{
          width: 45,
          height: 45,
          borderRadius: 23,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: theme.colors.primary,
        }}
      >
        <Image
          resizeMode="contain"
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            borderWidth: 2,
            borderColor: theme.colors.white,
          }}
          source={{
            uri: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
          }}
        />
      </View>
    </Marker>
  );

  useEffect(() => {
    (async () => {
      const { coords } = await getLocation();
      const { latitude, longitude } = coords;
      setCoords({ latitude, longitude });
    })();
  }, []);

  return (
    <Container>
      <StatusBar backgroundColor="transparent" />

      <MapView
        provider={PROVIDER_GOOGLE}
        style={{ width: "100%", height: "100%" }}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
        <CustomMarker latitude={37.78825} longitude={-122.4324} />
      </MapView>

      <TargetButton paddingTop={top}>
        <TargetIcon />
      </TargetButton>
    </Container>
  );
};
