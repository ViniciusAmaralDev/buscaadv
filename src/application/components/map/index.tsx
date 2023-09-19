import React, { forwardRef } from "react";
import { ImageProfile } from "../image-profile";
import { StyleSheet, TouchableOpacityProps } from "react-native";
import MapView, {
  LatLng,
  Marker,
  MapViewProps,
  PROVIDER_GOOGLE,
} from "react-native-maps";
import { Label, LabelContent, VerticalContainer } from "./styles";
import { IUser } from "../../models/IUser";
import { useNavigation } from "@react-navigation/native";

export interface MarkerProps extends LatLng, TouchableOpacityProps {
  uri: string;
}

interface MapProps extends MapViewProps {
  coords: LatLng;
  markers?: IUser[];
}

export const Map = forwardRef<any, MapProps>(
  ({ coords, markers, ...rest }, ref) => {
    const { navigate } = useNavigation();

    return (
      <MapView
        ref={ref}
        provider={PROVIDER_GOOGLE}
        style={StyleSheet.absoluteFill}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        region={{ ...coords, latitudeDelta: 0.015, longitudeDelta: 0.0121 }}
        {...rest}
      >
        {markers?.map(
          ({ id, name, address: { latitude, longitude }, photo }, index) => (
            <Marker
              key={index}
              coordinate={{ latitude, longitude }}
              onPress={() => navigate("ProfileDetails", { id })}
            >
              <VerticalContainer>
                <ImageProfile size={45} uri={photo} />
                <LabelContent>
                  <Label>{name}</Label>
                </LabelContent>
              </VerticalContainer>
            </Marker>
          )
        )}
      </MapView>
    );
  }
);
