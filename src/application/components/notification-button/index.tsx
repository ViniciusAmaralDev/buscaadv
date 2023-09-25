import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Circle, Container, Label, NotificationIcon } from "./styles";

interface NotificationButton extends TouchableOpacityProps {
  unread?: number;
}

export const NotificationButton = ({ unread, ...rest }: NotificationButton) => (
  <Container {...rest}>
    <NotificationIcon isActive />

    {unread && (
      <Circle>
        <Label>{unread}</Label>
      </Circle>
    )}
  </Container>
);
