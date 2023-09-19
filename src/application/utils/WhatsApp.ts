import { Linking } from "react-native";

const whatsappApp = "whatsapp://send";
const whatsappWeb = "https://web.whatsapp.com/send";

export const sendMessageOnWhatsApp = async (phone: string, message: string) => {
  const supported = await Linking.canOpenURL(whatsappApp);
  const phoneNumber = phone.replace(/[^0-9]/g, "");

  if (!supported) {
    Linking.openURL(
      `${whatsappWeb}?phone=${phone}&text=${encodeURIComponent(message)}`
    );
  } else {
    Linking.openURL(
      `${whatsappApp}?phone=${phoneNumber}&text=${encodeURIComponent(message)}`
    );
  }
};
