import * as Location from "expo-location";

export const getCurrentPosition = async () => {
  try {
    const { granted } = await Location.getForegroundPermissionsAsync();

    if (!granted) {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) return;
    }

    const response = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = response.coords;

    return { latitude, longitude };
  } catch (error) {
    throw error;
  }
};
