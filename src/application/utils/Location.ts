import * as Location from "expo-location";

export const getCurrentPosition = async () => {
  const { granted } = await Location.getForegroundPermissionsAsync();

  if (!granted) {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) return;
  }

  const { coords } = await Location.getCurrentPositionAsync({});
  const { latitude, longitude } = coords;

  return { latitude, longitude };
};
