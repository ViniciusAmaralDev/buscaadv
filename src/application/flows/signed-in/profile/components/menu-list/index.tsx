import React, { ReactNode } from "react";
import { Container, ArrowIcon, HorizontalContainer } from "./styles";
import { Text } from "../../../../../components/base/text";

interface Menu {
  label: string;
  icon?: ReactNode;
  onPress: () => void;
}

interface MenuListProps {
  values: Menu[];
}

export const MenuList = ({ values }: MenuListProps) => {
  return (
    <Container>
      {values.map((item, index) => (
        <HorizontalContainer
          key={index}
          onPress={item.onPress}
          borderBottomEnabled={index < values.length - 1}
        >
          <Text>{item.label}</Text>
          {item.icon ? <>{item.icon}</> : <ArrowIcon />}
        </HorizontalContainer>
      ))}
    </Container>
  );
};
