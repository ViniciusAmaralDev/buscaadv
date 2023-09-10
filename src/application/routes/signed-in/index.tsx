import "react-native-gesture-handler";
import React from "react";
import { SignedInParamList } from "./SignedInParamList";
import { createStackNavigator } from "@react-navigation/stack";

// SCREENS
import { Home } from "../../flows/signed-in/home";

const Stack = createStackNavigator<SignedInParamList>();

export default function SignedInNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
