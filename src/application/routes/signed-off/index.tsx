import "react-native-gesture-handler";
import React from "react";
import { SignedOffParamList } from "./SignedOffParamList";
import { createStackNavigator } from "@react-navigation/stack";

// SCREENS
import { SignUp } from "@/application/flows/signed-off/sign-up";
import { SignIn } from "@/application/flows/signed-off/sign-in";

const Stack = createStackNavigator<SignedOffParamList>();

export default function SignedOffNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}
