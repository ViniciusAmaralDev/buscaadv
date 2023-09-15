import React from "react";
import { Container, Button, ArrowIcon, HorizontalContainer } from "./styles";

interface Menu {
  label: string;
  onPress: () => void;
}

interface MenuListProps {
  values: Menu[];
}

export const MenuList = ({ values }: MenuListProps) => {
  return (
    <Container>
      {values.map((item, index) => (
        <HorizontalContainer>
          <Button
            key={index}
            onPress={item.onPress}
            borderBottomEnabled={index < values.length - 1}
          >
            {item.label}
          </Button>

          <ArrowIcon />
        </HorizontalContainer>
      ))}
    </Container>
  );
};
