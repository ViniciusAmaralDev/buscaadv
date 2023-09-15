import { Text } from "../base/text";
import React, { ReactNode } from "react";
import { useNavigation } from "@react-navigation/native";
import { Container, HorizontalContainer, ArrowButton, Label } from "./styles";

interface HeaderProps {
  label: string;
  right?: ReactNode;
  goBack?: () => void;
}

export const Header = ({ label, right, goBack }: HeaderProps) => {
  const navigation = useNavigation();
  const onPress = () => (goBack ? goBack() : navigation.goBack());

  return (
    <Container>
      <HorizontalContainer>
        <ArrowButton onPress={onPress} />
      </HorizontalContainer>

      <HorizontalContainer justify="center">
        <Label>{label}</Label>
      </HorizontalContainer>

      <HorizontalContainer justify="flex-end">{right}</HorizontalContainer>
    </Container>
  );
};
