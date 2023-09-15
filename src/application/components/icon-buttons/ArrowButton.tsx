import React from "react";
import { useTheme } from "styled-components";
import { AntDesign } from "@expo/vector-icons";
import { Button } from "../base/button";
import { TouchableOpacityProps } from "react-native";

interface ArrowButtonProps extends TouchableOpacityProps {
  size?: number;
  color?: string;
  name: "arrowleft" | "arrowright";
}

export const ArrowButton = ({
  name,
  size,
  color,
  ...rest
}: ArrowButtonProps) => {
  const theme = useTheme();

  return (
    <Button {...rest}>
      <AntDesign
        name={name}
        size={size ?? 20}
        color={color ?? theme.colors.gray.main}
      />
    </Button>
  );
};
