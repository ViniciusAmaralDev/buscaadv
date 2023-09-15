import "react-native-gesture-handler";
import React from "react";
import { useAuth } from "../../hook/useAuth";
import { SignedInParamList } from "./SignedInParamList";
import { createStackNavigator } from "@react-navigation/stack";

// SCREENS
import { Home } from "../../flows/signed-in/home";
import { Profile } from "../../flows/signed-in/profile";

const Stack = createStackNavigator<SignedInParamList>();

export default function SignedInNavigator() {
  const { user } = useAuth();
  const initialRouteName = !user?.photo ? "Profile" : "Home";

  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}
