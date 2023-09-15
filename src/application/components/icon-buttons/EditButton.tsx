import React from "react";
import { Button } from "../base/button";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { TouchableOpacityProps } from "react-native";

interface EditButtonProps extends TouchableOpacityProps {
  size?: number;
  color?: string;
}

export const EditButton = ({ size, color, ...rest }: EditButtonProps) => {
  const theme = useTheme();

  return (
    <Button {...rest}>
      <Feather
        name="edit-3"
        size={size ?? 20}
        color={color ?? theme.colors.primary.dark}
      />
    </Button>
  );
};
