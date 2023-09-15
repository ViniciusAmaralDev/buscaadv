import React from "react";
import { useAuth } from "../hook/useAuth";
import { NavigationContainer } from "@react-navigation/native";

// NAVIGATORS
import SignedInNavigator from "./signed-in";
import SignedOffNavigator from "./signed-off";

export default function MainRoute() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user ? <SignedInNavigator /> : <SignedOffNavigator />}
    </NavigationContainer>
  );
}
