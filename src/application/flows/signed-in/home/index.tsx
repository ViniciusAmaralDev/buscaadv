import React, { useEffect, useState } from "react";
import { Container, FilterButton, FilterIcon, TargetButton, TargetIcon } from "./styles";
import { StatusBar } from "expo-status-bar";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { getLocation } from "../../../utils/Location";
import { Image, StyleSheet, View } from "react-native";
import { useTheme } from "styled-components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Map } from "../../../components/map";
import { Dropdown } from "react-native-element-dropdown";
import { AntDesign } from "@expo/vector-icons";

type Coords = {
  latitude: number;
  longitude: number;
};

export const Home = () => {
  const theme = useTheme();
  const { top } = useSafeAreaInsets();

  const [coords, setCoords] = useState<any>();
  const markers = [
    {
      uri: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
      latitude: 37.78825,
      longitude: -122.4324,
    },
    {
      uri: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
      longitude: -122.42760457098484,
      latitude: 37.79423542002972,
    },
    {
      uri: "https://images.unsplash.com/photo-1584043720379-b56cd9199c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
      longitude: -122.43662383407354,
      latitude: 37.795306567861125,
    },
    {
      uri: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2942&q=80",
      longitude: -122.42768302559853,
      latitude: 37.78557638285271,
    },
    {
      uri: "https://images.unsplash.com/photo-1560087637-bf797bc7796a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
      longitude: -122.43090972304343,
      latitude: 37.78369903356099,
    },
    {
      uri: "https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2844&q=80",
      longitude: -122.43757601827384,
      latitude: 37.784062318281286,
    },
  ];

  useEffect(() => {
    (async () => {
      const { coords } = await getLocation();
      const { latitude, longitude } = coords;
      setCoords({ latitude, longitude });
    })();
  }, []);

  return (
    <Container>
      <Map markers={markers} />

      <TargetButton paddingTop={top}>
        <TargetIcon />
      </TargetButton>
    </Container>
  );
};
