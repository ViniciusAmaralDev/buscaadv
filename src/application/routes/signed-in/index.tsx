import "react-native-gesture-handler";
import React from "react";
import { useAuth } from "@/application/hook/useAuth";
import { SignedInParamList } from "./SignedInParamList";
import { createStackNavigator } from "@react-navigation/stack";

// SCREENS
import { Home } from "@/application/flows/signed-in/home";
import { Profile } from "@/application/flows/signed-in/profile/screens";
import { MyAccount } from "@/application/flows/signed-in/profile/screens/my-account";
import { EditProfile } from "@/application/flows/signed-in/profile/screens/edit-profile";
import { ProfileDetails } from "@/application/flows/signed-in/profile/screens/profile-details";
import { Notifications } from "@/application/flows/signed-in/notifications";

const Stack = createStackNavigator<SignedInParamList>();

export default function SignedInNavigator() {
  const { user } = useAuth();

  const initialRouteName = !user?.photo ? "EditProfile" : "Home";

  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="MyAccount" component={MyAccount} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="ProfileDetails" component={ProfileDetails} />
    </Stack.Navigator>
  );
}
