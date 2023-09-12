import React from "react";
import { StyleSheet, TouchableOpacityProps } from "react-native";
import { Image, ImageContent } from "./styles";
import MapView, {
  LatLng,
  Marker,
  MapViewProps,
  PROVIDER_GOOGLE,
} from "react-native-maps";

interface MarkerProps extends LatLng, TouchableOpacityProps {
  uri: string;
}

interface MapProps extends MapViewProps {
  markers?: MarkerProps[];
}

export const Map = ({ markers, ...rest }: MapProps) => {
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
      onPress={({ nativeEvent: { coordinate } }) =>
        console.log(JSON.stringify(coordinate, null, 2))
      }
      {...rest}
    >
      {markers &&
        markers?.length > 0 &&
        markers.map((item, index) => (
          <Marker key={index} coordinate={item}>
            <ImageContent>
              <ImageContent secondary size={40}>
                <Image source={{ uri: item.uri }} />
              </ImageContent>
            </ImageContent>
          </Marker>
        ))}
    </MapView>
  );
};
