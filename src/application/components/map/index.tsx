import React from "react";
import { StyleSheet, TouchableOpacityProps } from "react-native";
import { Image, ImageContent } from "./styles";
import MapView, {
  LatLng,
  Marker,
  MapViewProps,
  PROVIDER_GOOGLE,
} from "react-native-maps";
import { useAuth } from "../../hook/useAuth";
import { useProfile } from "../../hook/useProfile";

export interface MarkerProps extends LatLng, TouchableOpacityProps {
  uri: string;
}

interface MapProps extends MapViewProps {
  markers?: MarkerProps[];
}

export const Map = ({ markers, ...rest }: MapProps) => {
  const { user } = useAuth();

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={StyleSheet.absoluteFill}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
      region={{ ...user.address, latitudeDelta: 0.015, longitudeDelta: 0.0121 }}
      onPress={async ({ nativeEvent: { coordinate } }) => {
        console.log(JSON.stringify(coordinate, null, 2));
      }}
      {...rest}
    >
      {markers?.length > 0 &&
        markers.map(({ latitude, longitude, uri }, index) => (
          <Marker key={index} coordinate={{ latitude, longitude }}>
            <ImageContent>
              <ImageContent secondary size={40}>
                <Image source={{ uri }} />
              </ImageContent>
            </ImageContent>
          </Marker>
        ))}
    </MapView>
  );
};
