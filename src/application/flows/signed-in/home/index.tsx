import React, { useState } from "react";
import { Container, FilterIcon, Footer, Header } from "./styles";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "styled-components";
import { Map } from "../../../components/map";
import { useStorage } from "../../../hook/useStorage";
import { SignedInRootProps } from "../../../routes/signed-in/SignedInRootProps";
import { SelectInput } from "../../../components/select-input";
import officesJson from "../../../../../offices.json";
import { CardList } from "./components/card-list";
import { useColorScheme } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAuth } from "../../../hook/useAuth";
import { Button } from "../../../components/base/button";
import { MaterialIcons } from "@expo/vector-icons";
import { ImageProfile } from "../../../components/image-profile";
import { UserType } from "../../../enums/UserType";

interface IOffice {
  label: string;
  value: string;
}

export const Home = ({ navigation }: SignedInRootProps<"Home">) => {
  const theme = useTheme();
  const { user } = useAuth();
  const { users } = useStorage();
  const { top } = useSafeAreaInsets();
  const themeDevice = useColorScheme() ?? "light";

  const [office, setOffice] = useState<IOffice>();

  const markers = users
    .filter((user) => user.type === UserType.ATTORNEY)
    .filter((user) => {
      if (office && user.office === office.value) return user;
      else if (!office) return user;
    })
    .map((user) => ({ ...user.address, uri: user.photo }));

  const officeList: IOffice[] = Object.keys(officesJson).map((item) => ({
    label: item,
    value: item,
  }));

  console.log(JSON.stringify(user, null, 2));

  return (
    <Container>
      <StatusBar style="auto" />
      <Map
        markers={markers}
        userInterfaceStyle={themeDevice}
        onRegionChange={(coords) =>
          console.log(JSON.stringify(coords, null, 2))
        }
      />

      <Header paddingTop={top}>
        <Button onPress={() => navigation.navigate("Profile")}>
          <ImageProfile
            uri={user?.photo}
            onPress={() => navigation.navigate("Profile")}
          />
        </Button>

        <SelectInput
          renderLeftIcon={() => <FilterIcon />}
          labelStyle={{ color: theme.colors.gray.dark }}
          value={office}
          data={officeList}
          placeholder="Especialização"
          onChange={setOffice}
        />
      </Header>

      {/* <Footer>
        
      </Footer> */}
    </Container>
  );
};
