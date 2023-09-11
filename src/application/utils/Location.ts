import * as Location from "expo-location";

export const getLocation = async () => {
  try {
    const { granted } = await Location.getForegroundPermissionsAsync();

    if (!granted) {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) return;
    }

    return await Location.getCurrentPositionAsync({});
  } catch (error) {
    console.log(error);
  }
};
