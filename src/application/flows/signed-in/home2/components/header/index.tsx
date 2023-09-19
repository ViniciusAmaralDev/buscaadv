import React, { useMemo, useState } from "react";
import {
  Container,
  HorizontalContainer,
  IconContainer,
  ImageProfile,
  Label,
  MessageIcon,
  NotificationIcon,
  VerticalContainer,
} from "./styles";
import { useAuth } from "../../../../../hook/useAuth";
import { SelectInput } from "../../../../../components/select-input";
import officesJson from "../../../../../../../offices.json";
import { useTheme } from "styled-components";
import { Wrapper } from "../../../../../components/wrapper";
import { IOffice } from "../..";
import { Button } from "../../../../../components/base/button";
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
      ...Object.keys(officesJson).map((item) => ({
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
