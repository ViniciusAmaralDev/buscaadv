import React from "react";
import { NavigationContainer } from "@react-navigation/native";

// NAVIGATORS
import SignedInNavigator from "./signed-in";
import SignedOffNavigator from "./signed-off";

export default function MainRoute() {
  return (
    <NavigationContainer>
      <SignedOffNavigator />
    </NavigationContainer>
  );
}
