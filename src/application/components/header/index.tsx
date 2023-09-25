import React, { ReactNode } from "react";
import { useNavigation } from "@react-navigation/native";
import { Container, HorizontalContainer, ArrowButton, Label } from "./styles";

interface HeaderProps {
  label?: string;
  right?: ReactNode;
  goBack?: () => void;
  showBackButton?: boolean;
}

export const Header = ({
  label,
  right,
  showBackButton = true,
  goBack,
}: HeaderProps) => {
  const navigation = useNavigation();
  const onPress = () => (goBack ? goBack() : navigation.goBack());

  return (
    <Container>
      <HorizontalContainer>
        {showBackButton && <ArrowButton onPress={onPress} />}
        {label && <Label>{label}</Label>}
      </HorizontalContainer>

      {right}
    </Container>
  );
};
