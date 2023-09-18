import React, { forwardRef } from "react";
import { Image, ImageContent } from "./styles";
import { IAddress } from "../../models/IAddress";
import { StyleSheet, TouchableOpacityProps } from "react-native";
import MapView, {
  LatLng,
  Marker,
  MapViewProps,
  PROVIDER_GOOGLE,
} from "react-native-maps";

export interface MarkerProps extends LatLng, TouchableOpacityProps {
  uri: string;
}

interface MapProps extends MapViewProps {
  coords: LatLng;
  markers?: MarkerProps[];
}

export const Map = forwardRef<any, MapProps>(
  ({ coords, markers, ...rest }, ref) => {
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
        {markers?.map(({ latitude, longitude, uri }, index) => (
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
  }
);
