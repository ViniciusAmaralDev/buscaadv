import { Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";

export const getImageFromLibrary = async () => {
  const { granted } = await ImagePicker.getMediaLibraryPermissionsAsync();

  if (!granted) {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) return;
  }

  const result = await ImagePicker.launchImageLibraryAsync({
    quality: 1,
    selectionLimit: 1,
    allowsEditing: true,
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
  });

  if (result.canceled) return;
  const path = result.assets[0].uri;
  return Platform.OS === "ios" ? path.replace("file://", "") : path;
};
