import { IOffice } from "../..";
import React, { useMemo } from "react";
import { offices } from "@/application/mocks/Offices";
import { Button } from "@/application/components/base/button";
import { SelectInput } from "@/application/components/select-input";
import {
  Label,
  Container,
  MessageIcon,
  ImageProfile,
  IconContainer,
  NotificationIcon,
  VerticalContainer,
  HorizontalContainer,
} from "./styles";

// HOOKS
import { useAuth } from "../../../../../hook/useAuth";
import { useNavigation } from "@react-navigation/native";

interface HeaderProps {
  office: IOffice;
  setOffice: React.Dispatch<React.SetStateAction<IOffice>>;
}

export const Header = ({ office, setOffice }: HeaderProps) => {
  const { user } = useAuth();
  const { navigate } = useNavigation();

  const officeList: IOffice[] = useMemo(() => {
    return [
      { label: "Todos", value: "all" },
      ...Object.keys(offices).map((item) => ({
        label: item,
        value: item,
      })),
    ];
  }, [user]);

  return (
    <Container>
      <HorizontalContainer justify="space-between">
        <HorizontalContainer>
          <Button onPress={() => navigate("Profile")}>
            <ImageProfile uri={user.photo} />
          </Button>

          <VerticalContainer>
            <Label>{user.name}</Label>
            <Label secondary>{user.office ?? user.email}</Label>
          </VerticalContainer>
        </HorizontalContainer>

        <IconContainer>
          <NotificationIcon />
          <MessageIcon />
        </IconContainer>
      </HorizontalContainer>

      <SelectInput
        value={office}
        data={officeList}
        placeholder="Especialização"
        onChange={setOffice}
      />
    </Container>
  );
};
