import "react-native-gesture-handler";
import React from "react";
import { useAuth } from "../../hook/useAuth";
import { SignedInParamList } from "./SignedInParamList";
import { createStackNavigator } from "@react-navigation/stack";

// SCREENS
import { Home } from "../../flows/signed-in/home2";
import { Profile } from "../../flows/signed-in/profile/screens";
import { MyAccount } from "../../flows/signed-in/profile/screens/my-account";
import { EditProfile } from "../../flows/signed-in/profile/screens/edit-profile";
import { EditAccount } from "../../flows/signed-in/profile/screens/edit-account";
import { EUserType } from "../../enums/EUserType";
import { ProfileDetails } from "../../flows/signed-in/profile/screens/profile-details2";

const Stack = createStackNavigator<SignedInParamList>();

export default function SignedInNavigator() {
  const { user } = useAuth();

  const initialRouteName =
    !user?.photo ||
    !user.phoneNumber ||
    (user.type === EUserType.ATTORNEY && !user.office)
      ? "EditProfile"
      : "Home";

  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="MyAccount" component={MyAccount} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="EditAccount" component={EditAccount} />
      <Stack.Screen name="ProfileDetails" component={ProfileDetails} />
    </Stack.Navigator>
  );
}
