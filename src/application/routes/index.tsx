import React from "react";
import { NavigationContainer } from "@react-navigation/native";

// NAVIGATORS
import SignedInNavigator from "./signed-in";

export default function MainRoute() {
  return (
    <NavigationContainer>
      <SignedInNavigator />
    </NavigationContainer>
  );
}
